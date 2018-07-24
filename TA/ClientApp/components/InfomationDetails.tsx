import * as React from 'react';
import { NavMenu } from './NavMenu';
import { RouteComponentProps } from 'react-router';


export class InfomationDetails extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="wrapper">
        <div className="block-product-details" data-gtm="" data-gtm-options="{&quot;event&quot;: &quot;PageLoad&quot;, &quot;trackingLabel&quot;: &quot;@productName&quot;, &quot;idOfElement&quot;: &quot;page-product-detail&quot;}">
        <div className="row">
        <div className="col-md-4 col-md-offset-1 col-sticky" data-sticky>
            <div className="theiaStickySidebar">
                <div className="product-details" data-product-detail>
                    <div className="code @skuPrintStatus"></div>
                    <div className="title">
                        <span className="status">New</span>
                    </div>
                    <p className="status">Status:&nbsp;<span>In stock</span></p>
                    <div className="editor">
                        <ul>      
                            <li>abc12345</li>
                        </ul>
                    </div>
                    <div className="product-separate"></div>             
                        <div className="block-custom">
                            <div className="custom-product">
                                <div className="form-group">
                                    <h3 className="available-finish"></h3>
                                    <div className="select-box">
                                        <div className="dropdown-full" data-dropdown-full data-on-change="true">
                                            <button className="dropdown-toggle" type="button" data-dropdown-toggle><span className="ico-arrow-down" data-arrow></span><span className="sr-only">Arrow Down</span><span className="ico-arrow-up hidden" data-arrow></span></button>
                                            <ul className="list-unstyled select-list" data-dropdown-menu>                           
                                                <li>
                                                    <img src="@item.ImageUrl" alt="@item.Name" width="35" height="35"/><span></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>                                    
                            </div>     
                        </div>                            
                        <div className="product-separate">
                        </div>
                        <div className="block-custom block-qty">
                            <div className="custom-product">
                                <div className="size">
                                    <div className="form-group">
                                        <label htmlFor="size"></label>
                                        <select className="form-control" id="size">
                                            <option value="@item.Url"></option> 
                                        </select>
                                    </div>
                                </div>                                    
                            </div>
                        </div>                        
                        <div className="error" data-notification-inline>
                        </div>                        

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
