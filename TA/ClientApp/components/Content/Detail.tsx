import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Iconx } from '../Iconx';
import * as $ from 'jquery';
const logo_home = require('../../assets/images/logo_home.png') as string;

export class Detail extends React.Component {
    state = {
        navCollapsed: true
    }

    componentDidMount() {
    }

    _onToggleNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    }


    public render() {
        var navCollapsed = this.state.navCollapsed;
        return (
            <div className="content row col-container">
                <div className="left col-sm-2">
                    <div className="pic-container">
                        <div className="pic-row">
                            <div className="left-image" tabIndex={0}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2y9rzdyVwIFw3pULsJ9Oxdwea5FzVeRgjSEgT9ug5E5VS4GQ" /></div>
                            <div className="left-image" tabIndex={0}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2y9rzdyVwIFw3pULsJ9Oxdwea5FzVeRgjSEgT9ug5E5VS4GQ" /></div>
                            <div className="left-image" tabIndex={0}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2y9rzdyVwIFw3pULsJ9Oxdwea5FzVeRgjSEgT9ug5E5VS4GQ" /></div>
                            <div className="left-image" tabIndex={0}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2y9rzdyVwIFw3pULsJ9Oxdwea5FzVeRgjSEgT9ug5E5VS4GQ" /></div>
                            <div className="left-image" tabIndex={0}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2y9rzdyVwIFw3pULsJ9Oxdwea5FzVeRgjSEgT9ug5E5VS4GQ" /></div>
                        </div>
                    </div>
                </div>
                <div className="middle col-sm-6">
                     <div className="middle-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2y9rzdyVwIFw3pULsJ9Oxdwea5FzVeRgjSEgT9ug5E5VS4GQ" />
                    </div>
                </div>
                <div className="right col-sm-4">
                    <div className="detail-number">101-80</div>
                    <div className="detail-title">Neve</div>
                    <div className="detail-deliver">Lead Time to Deliver: 7 days</div>
                    <div className="detail-description">
                    A King Size (UK) upholstered bed complete witih biscuit tufted headboard, upholstered rails and low footboard.                         
                    </div>
                    <div className="detail-deliver">    
                        <ul className="detail-description-list">
                            <li>Shown in 1127-92 fabric / Expresso finish</li>
                            <li>Available in multiple finishes</li>
                            <li>Expresso finish standard</li>
                            <li>Also Available in Queen & California King Size & Headboard only</li>
                        </ul>                    
                    </div>
                    <div className="detail-title-option">Custom finish (25)</div>
                    <div className="detail-option">
                        <div className="pic-container">
                            <span className="option-image" tabIndex={1}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2y9rzdyVwIFw3pULsJ9Oxdwea5FzVeRgjSEgT9ug5E5VS4GQ" /></span>
                            <span className="option-image" tabIndex={1}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2y9rzdyVwIFw3pULsJ9Oxdwea5FzVeRgjSEgT9ug5E5VS4GQ" /></span>
                            <span className="option-image" tabIndex={1}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2y9rzdyVwIFw3pULsJ9Oxdwea5FzVeRgjSEgT9ug5E5VS4GQ" /></span>
                            <span className="option-image" tabIndex={1}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2y9rzdyVwIFw3pULsJ9Oxdwea5FzVeRgjSEgT9ug5E5VS4GQ" /></span>
                            <span className="option-image" tabIndex={1}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2y9rzdyVwIFw3pULsJ9Oxdwea5FzVeRgjSEgT9ug5E5VS4GQ" /></span>                        
                        </div>
                    </div>
                    <div className="detail-size-quantity">
                        <div className="detail-size  col-sm-8">
                            Size: King
                            <div className="dropdown">                    
                                <button className="size" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    King                        
                                    <span className="caret float-right"></span>
                                </button>
                                <ul className="dropdown-menu col-sm-4">
                                    <li>King</li>
                                    <li>Queen</li>
                                    <li>Prince</li>
                                </ul>
                            </div>
                        </div>
                        <div  className="detail-quantity  col-sm-4">
                        Qty:
                        <div className="dropdown">                    
                            <button className="quantity" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                1                        
                                <span className="caret float-right"></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="detail-price">
                    <p>Status: In stock</p>
                    <p>$1,800.00</p>
                    </div>
                    <div className="detail-add-product">
                    </div>
                    <div className="detail-more-actions flex-container">
                        <div className="default-flex">
                            <Iconx icon="call"/>
                            <span className="text-uppercase">request quote</span>
                        </div>
                        <div className="default-flex">
                            <Iconx icon="chat"/>
                            <span className="text-uppercase">request quote</span>   
                        </div>
                        <div className="default-flex">     
                            <Iconx icon="share"/>                
                            <span className="text-uppercase">share</span>                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};