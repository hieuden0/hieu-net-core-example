import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Breadcum } from './Breadcum';
import { RouteComponentProps } from 'react-router';
import { Iconx } from './Iconx';


export class Header extends React.Component {
    public render() {          
        return (
        <div className="header row">
            <div className="col-sm-3 social-netwok d-inline">
                <Iconx icon="facebook"/>
                <Iconx icon="pinterest"/>
                <Iconx icon="instagram"/>
                <Iconx icon="twitter"/>
                <Iconx icon="linkin"/>
            </div>         
            <div className="news d-inline col-sm-3">
                <span className="text">Newsletters</span>
                <span className="text">The Blog</span>
            </div>
            <div className="login col-sm-4">
                <Iconx icon="user"/>
                <span className="text">Login</span>
                <span className="text">Sign up</span>
            </div>
            <div className="language col-sm-2">
                <div className="dropdown">                    
                    <button className="" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <img src="http://www.atmospherehotelsandresorts.com/images/icon-twitter.png" width="17px" />
                        USA                        
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                        <a href="#">
                            <img src="http://www.thisisanfield.com/images/flat_web_icon_set/color/Facebook.png" width="17px" />Facebook</a>
                        </li>
                        <li>
                        <a href="#">
                            <img src="http://www.atmospherehotelsandresorts.com/images/icon-twitter.png" width="17px" />Twitter</a>
                        </li>
                        <li>
                        <a href="#">
                            <img src="https://cdn1.iconfinder.com/data/icons/thincons/100/menu-128.png" width="17px" />List Image</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
};