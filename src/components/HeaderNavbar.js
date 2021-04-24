import React, {Component} from 'react';
import './headernavbar.scss';
import HeaderNavbarComponents from './HeaderNavbarComponents';

export default class HeaderNavbar extends Component{


    constructor(){
        super();
        this.menus = [
            {id: 1, name: 'Intro'},
            {id: 2, name: 'Home', subMenus: [
               {id: 1, name: 'Landing v.1'},
               {id: 2, name: 'Landing v.2'},
               {id: 3, name: 'Landing v.3'},
               {id: 4, name: 'Landing v.4'},
               {id: 5, name: 'Landing v.5'},
               {id: 6, name: 'Coming Soon'}, 
            ]},
            {id: 3, name: 'Pricing', subMenus: [
                {id: 1, name: 'Pricing v.1'},
                {id: 2, name: 'Pricing v.2'},
                {id: 3, name: 'Pricing v.3'},
            ]},
            {id: 4, name: 'Blog', subMenus: [
                {id: 1, name: 'Blog v.1'},
                {id: 2, name: 'Blog v.2'},
                {id: 3, name: 'Blog v.3'},
                {id: 4, name: 'Single Post'},
            ]},
            {id: 5, name: 'Pages', subMenus: [
                {id: 1, name: 'Help Center'},
                {id: 2, name: 'About'},
                {id: 3, name: 'Contact'},
                {id: 4, name: 'FAQ'},
                {id: 5, name: 'Style Guide'},
                {id: 6, name: 'Instructions'},
                {id: 7, name: 'Licensing'},
                {id: 8, name: 'Changelog'},
            ]},
            {id: 6, name: 'Components', subMenus: [
                {id: 1, name: 'Promo Blocks',},
                {id: 2, name: 'Features'},
                {id: 3, name: 'Pricing'},
                {id: 4, name: 'Call to Action'},
                {id: 5, name: 'Testimonials'},
                {id: 6, name: 'Footers'},
            ]},
        ]
    }

    renderSubMenus(menus){
        if (menus === undefined || menus.length === 0 ) return;
        return menus.map((menu) => {
            return (
                <li 
                    key={menu.id}
                    className="
                        headernavbar__submenu 
                        headernavbar__submenu--size 
                        headernavbar__submenu--theme">
                    {menu.name}
                </li>
            )
        })
    }

    renderMenus(menus){
        return menus.map((menu) => {
            return (
                <li 
                    key={menu.id}
                    className="
                    headernavbar__menu 
                    headernavbar__menu--size 
                    headernavbar__menu--theme">
                    <a href={`/#${menu.name}`} className="headernavbar__menu-link">{menu.name}</a>
                    {menu.name !== 'Intro' && menu.name !== 'Components' && (
                        <ul className="
                            headernavbar__submenus 
                            headernavbar__submenus--size 
                            headernavbar__submenus--theme">
                            {this.renderSubMenus(menu.subMenus)}
                        </ul>
                    )}
                    { menu.name === 'Components' && <HeaderNavbarComponents /> }
                </li>
            )
        })
    }

    render(){
        let menus = this.menus;
        return (
            <nav className="
                headernavbar 
                headernavbar--size 
                headernavbar--theme">
                
                <ul className="
                    headernavbar__menus 
                    headernavbar__menus-size 
                    headernavbar__menus--theme">
                    {this.renderMenus(menus)}
                </ul>
            </nav>
        )
    }
}