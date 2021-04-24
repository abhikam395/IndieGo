import React, { Component } from "react";
import './header.scss';

import logo from './../assets/images/logo.png';
import HeaderNavbar from "./HeaderNavbar";

export default class HeaderComponent extends Component{
    render(){
        return (
            <header className="
                header 
                header--size 
                header--theme">
                <section className="
                    header__container 
                    header__container--size 
                    header__container--theme 
                    center">
                    <div className="header__left">
                        <img src={logo} className="header__logo" alt="Its a logo" />
                        <h1 className="header__title">IndieGo</h1>

                    </div>
                    <nav className="header__menus">
                        <HeaderNavbar />
                    </nav>
                    <div className="header__right">

                    </div>
                </section>
            </header>
        )
    }
}
