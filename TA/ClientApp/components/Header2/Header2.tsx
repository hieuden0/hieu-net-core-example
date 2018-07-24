import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Iconx } from '../Iconx';
import * as $ from 'jquery';
const logo_home = require('../../assets/images/logo_home.png') as string;

export class Header2 extends React.Component {
    state = {
        navCollapsed: true
    }

    componentDidMount(){
        $('.navbar-toggle').click(function(){
            $('.navbar-collapse').toggleClass('right');
            $('.navbar-toggle').toggleClass('indexcity');
        });
    }

    _onToggleNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    }


    public render() {
        var navCollapsed = this.state.navCollapsed;
        return (
            <div className="header2 row">
                <div className="col-sm-2 logo">
                    <img src={logo_home} />
                </div>
                <div className="navigation col-sm-10">
                    <div className="first-line-header">
                        <div className='wishlist'>
                            <Iconx icon="heart"/>
                            <span className='text'>Wishlist</span>
                        </div>
                        <div className='bag'>
                            <Iconx icon="bag"/>
                            <span className='text'>Bag</span>
                        </div>                      
                    </div>                    
                    <div className="navbar navbar-default navbar-inverse" role="navigation">
                        <div className="navbar-header">

                            <button type="button" className="navbar-toggle">
                                <span className="sr-only">Toggle Navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <a className="navbar-brand" href="#">
                                <div className="logo">
                                    <img src="http://www.atmospherehotelsandresorts.com/images/icon-twitter.png" className="logo" alt="logo" />
                                </div>
                            </a>

                        </div>

                        <div className="navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="#">Products </a></li>
                                <li><a href="#">Lifestyle</a></li>
                                <li><a href="#">Featured Brands</a></li>
                                <li><a href="#">Upholestry</a></li>
                                <li><a href="#">New Arrival</a></li>
                                <li><a href="#">Custom Finished</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};