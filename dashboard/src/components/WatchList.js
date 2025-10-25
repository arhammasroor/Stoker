import React, { useState, useContext, useEffect } from "react";
import { tooltip, Grow, Tooltip } from '@mui/material'
import GeneralContext from "./GeneralContext";
// import { watchlist } from "../data/data";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from '@mui/icons-material';
import { DoughnutChart } from "./DoughnutChart";
import axios from "axios";
const STOCK_SYMBOLS = ["AAPL", "GOOGL", "META", "NFLX", "TSLA", "NVDA", "PEP", "KO", "JPM", "XOM"];


const FINNHUB_API_KEY = "d3tl7hhr01qigeg3ndq0d3tl7hhr01qigeg3ndqg";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]); // 🔹 State for live data

  // 🔹 Fetch live stock data from Finnhub
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const responses = await Promise.all(
          STOCK_SYMBOLS.map((symbol) =>
            axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}&_=${Date.now()}`)

          )
        );

        const stocks = responses.map((res, i) => ({
          name: STOCK_SYMBOLS[i],
          price: res.data.c,
          percent: `${((res.data.c - res.data.pc) / res.data.pc * 100).toFixed(2)}%`,
          isDown: res.data.c < res.data.pc,
        }));

        setWatchlist(stocks);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
    const interval = setInterval(fetchStockData, 20000); 
    return () => clearInterval(interval);
  }, []);
  const labels = watchlist.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list" style={{ overflowY: "scroll", scrollbarWidth: "none" }}>
        {watchlist.map((stock, index) => {
          return (
            <WatchListItem stock={stock} key={index} />)

        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

// since the watchListItem is tightly bound with this file itself we dont have to make a new file for that

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);
  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  }
  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percentage">{stock.percent}</span>
          {stock.isDown ? (<KeyboardArrowDown className="down" />) : (<KeyboardArrowUp className="up" />)}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListAction uid={stock.name} />}
    </li>
  )
};

const WatchListAction = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return (
    <span className="actions">
      <Tooltip title="Buy(B)" placement="top" arrow TransitionComponent={Grow} onClick={handleBuyClick}>
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip title="Sell(S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip title="Analystics(A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action"><BarChartOutlined className="icon" /></button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="more"><MoreHoriz className="icon" /></button>
      </Tooltip>
    </span>
  )

}
