import React from "react";
import "./root.css";

export default function Home() {
    return (
        <div className="home-container">
            <h1>HOME</h1>
            <div className="button-container">
                <a href="/" className="home-button">Home</a>
                <a href="/members" className="gym-button">Gym-app</a>
            </div>
        </div>
    );
}