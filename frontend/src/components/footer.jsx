import React from "react";
import "../style/footer.scss"

export const Footer = () => {
    return (
        <footer>
            <div className="content">
                <p>&copy; {new Date().getFullYear()} Lithidiazz</p>
            </div>
        </footer>
        );
    };
