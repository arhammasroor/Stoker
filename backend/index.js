require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
const { createSecretToken } = require('./models/utils/SecretToken');
const { HoldingsModel } = require('./models/HoldingsModel');
const { PositionsModel } = require('./models/PositionsModel');
const { OrdersModel } = require('./models/OrdersModel');
const { UsersModel } = require('./models/UsersModel');
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());


const transporter = nodemailer.createTransport({
    service: "gmail", // or any other email provider
    auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email app password
    },
});
// app.get("/addHoldings", (req, res) => {
//     let tempHoldings = [
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//         },
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//         },
//         {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//         },
//         {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//         },
//         {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//         },
//         {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//         },
//         {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//         },
//         {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//         },
//         {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//         },
//         {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//         },
//         {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//         },
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },
//     ];

//     tempHoldings.forEach((item) => {
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         })
//         newHolding.save();
//     })
//     res.send("done ✓")

// });

// app.get("/addPositions", async (req, res) => {
//     let temptPositions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];

//     temptPositions.forEach((item) => {
//         let newPosition = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         })

//         newPosition.save();

//     })
//     res.send("done")

// });

app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);

});

app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);

});

app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();
    res.send("order save");
});

app.post("/signup", async (req, res, next) => {
    try {
        const { email, password, username, createdAt } = req.body;
        if (!email || !password || !username) {
            return res.json({ message: 'All fields are required' })
        }
        const existingUser = await UsersModel.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }

        
        const user = await UsersModel.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            httpOnly: true, // 🔹 safer
            sameSite: "lax", // 🔹 allow cross-site
            secure: false,
            path: "/"
        });

        // ✅ Send signup email via SendGrid
        const msg = {
            to: email,
            from: process.env.FROM_EMAIL, // must be a verified sender in SendGrid
            subject: "Welcome to Stoker! 🎉",
            text: `Hello ${username},

Welcome to Stoker! 🎉

We're excited to have you on board. Start exploring our platform to track your investments, manage your portfolio, and stay ahead in the market.

Need help getting started? Visit our Help Center or reach out to our support team anytime.

Happy Trading!
The Stoker Team`,
            html: `
        <div style="font-family: Arial, sans-serif; background: #f9fafc; padding: 20px; border-radius: 8px;">
          <h2 style="color: #00A86B;">Hello, ${username}!</h2>
          <h2 style="color: #00A86B;">Welcome to Stoker🎉</h2>
          <p>We're excited to have you on board. Start exploring our platform to track your investments, manage your portfolio, and stay ahead in the market.</p>
          <p>Need help getting started? Visit our <a href="https://docs.google.com/forms/d/e/1FAIpQLSeGgmG7yVxUCVW7wyplWVkdmm0v_8pvKY9fY5eESucjbyifcA/viewform?usp=sharing&ouid=101105431627840895670" target="_blank">Help Center</a> or reach out to our support team anytime.</p>
          <p style="color: #00A86B; font-weight: bold;">Happy Trading!<br>The Stoker Team</p>
        </div>
      `
        };

        try {
            await sgMail.send(msg);
            console.log("✅ Signup email sent to:", email);
        } catch (error) {
            console.error("❌ SendGrid email error:", error.response ? error.response.body : error);
        }

        res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user, token, user });

        next();
    } catch (error) {
        console.error(error);
    }
});

app.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'All fields are required' })
        }
        const user = await UsersModel.findOne({ email });
        if (!user) {
            return res.json({ message: 'Incorrect password or email' })
        }
        const auth = await bcrypt.compare(password, user.password)
        if (!auth) {
            return res.json({ message: 'Incorrect password or email' })
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: false,
            path: "/"
        });
        res.status(201).json({ message: "User logged in successfully", success: true, token, user });
        next()
    } catch (error) {
        console.error(error);
    }
})
app.get("/verify", (req, res) => {
    const token = req.cookies.token
    if (!token) {
        return res.json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.json({ status: false })
        } else {
            const user = await UsersModel.findById(data.id)
            if (user) return res.json({ status: true, user })
            else return res.json({ status: false })
        }
    })

});

app.get("/logout", (req, res) => {
    res.clearCookie("token"); // remove token cookie
    return res.json({ success: true, message: "Logged out successfully" });
});

app.listen(3002, () => {
    console.log("app is listening");
    mongoose.connect(url);
    console.log("mongodb connected");
});