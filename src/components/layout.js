import React from 'react'
import "../styles/layout.css"
import Footer from "./footer"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;