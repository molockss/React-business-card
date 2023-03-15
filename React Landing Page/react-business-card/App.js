import React from "react"
import Info from "./components/Info"
import Profile from "./components/Profile"
import About from "./components/About"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
            
            <Profile />
            <Info />
            <About />
            <Footer />
        </div>
    )
}