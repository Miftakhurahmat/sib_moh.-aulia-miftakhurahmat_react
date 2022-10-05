import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
        color: "red",
    };

    return (
        <>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <NavLink end to="/" className="nav-link px-2">
                                <h5>Testing Example</h5>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                end
                                to="/"
                                className="nav-link px-2"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                <h5>Home</h5>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className="nav-link px-2"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                <h5>About</h5>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;
