import React from "react";
import './style/header.css'

const Header = ({title}) => {
    return (
        <header>
            <div className="header mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;