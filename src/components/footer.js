import React from "react"
import "../styles/footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            Contact
            &nbsp;
            <a href="https://www.instagram.com/st_toyu/">Instagram</a>
            &nbsp;
            <a href="https://qiita.com/Toyuu">Qiita</a> 
            <br />

            © {new Date().getFullYear()} Toyuu
        </footer>
    )
}