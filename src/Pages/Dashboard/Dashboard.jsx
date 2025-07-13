import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Navbar />
            <div></div>
            <Footer />
        </div>
    );
};

export default Dashboard;
