import React, {Component} from 'react';
import './headernavbarcomponents.scss';

export default class HeaderNavbarComponents extends Component{

    renderMenus(menus){
        if (menus === undefined || menus.length === 0 ) return;
        return menus.map((menu) => {
            return (
                <li 
                    key={menu.id}
                    className="
                        headernavbarcomponents__menu 
                        headernavbarcomponents__menu--size 
                        headernavbarcomponents__menu--theme">
                    <div className="headernavbarcomponents__circle">0{menu.id}</div>
                    <span>{menu.name}</span>
                </li>
            )
        })
    }

    render(){
        let {menus} = this.props;
        return (
            <article 
                className="
                    headernavbarcomponents 
                    headernavbarcomponents--size 
                    headernavbarcomponents--theme">
                    
                    <h2 className="headernavbarcomponents__title">
                        Main Sections
                    </h2>
                    <p className="headernavbarcomponents__description">
                        Copy/paste these components to create new pages
                    </p>
                    <hr className="headernavbarcomponents__line"/>
                    <ul className="headernavbarcomponents__menus">
                        {this.renderMenus(menus)}
                    </ul>
            </article>
        )
    }
}