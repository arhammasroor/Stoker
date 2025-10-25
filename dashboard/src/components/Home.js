import React, { useEffect ,useState} from 'react';
import axios from "axios";
import TopBar from './TopBar';
import Dashboard from './Dashboard';
function Home() {
        const [user, setUser] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:3002/verify", { withCredentials: true }) // ✅ send cookies
            .then((res) => {
                if (res.data.status) {
                    setUser(res.data.user); // ✅ full user object
                } else {
                    localStorage.removeItem("token");
                    window.location.href = "http://localhost:3000/login";
                }
            })
            .catch(() => {
                localStorage.removeItem("token");
                window.location.href = "http://localhost:3000/login";
            });
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <>
            <TopBar username={user.username}/>
            <Dashboard username={user.username}/>
        </>
    );
}

export default Home;