import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Breadcum } from './Breadcum';
import { RouteComponentProps } from 'react-router';


export class ProductDetail extends React.Component<RouteComponentProps<{}>> {
    public render() {
        return <div className="wrapper">
        <Breadcum />
        <div className="container">
            <div className="product">
                <div className=" custom-share-product-modal" id="share-product"  role="dialog" aria-labelledby="wlShareModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="ico-close close" data-dismiss="modal"></span>
                                <h4 className="title title-block" id="wlShareModalLabel">Share Product</h4>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-xs-3"><a className="button black" href="@linkTwitter"><span className="ico-twitter"></span><span className="sr-only">Twitter</span></a></div>
                                    <div className="col-xs-3"><a className="button black" data-share-facebook target="_blank" href="@linkFacbook"><span className="ico-facebook"></span><span className="sr-only">facebook</span></a></div>
                                    <div className="col-xs-3">
                                    <a className="button black" target="_blank" href="@linkLinkedIn"><span className="ico-linkedin"></span><span className="sr-only">Share pinterest</span></a>
                                        <a className="button black" target="_blank" href="@linkPin" >
                                            <span className="ico-pinterest"></span><span className="sr-only">Share pinterest</span>
                                        </a>
                                    </div>
                                    <div className="col-xs-3">
                                        <button className="button black" data-toggle="modal" data-target="#email-product" data-gtm="" data-gtm-options="{&quot;event&quot;: &quot;OnClick&quot;, &quot;idOfElement&quot;: &quot;button-mail-popup-share-product-page-product-detail&quot;, &quot;trackingLabel&quot;: &quot;@productname&quot;}"><span className="ico-mail"></span><span className="sr-only">mail</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" email-product-modal" id="email-product" role="dialog">
                    <div className="modal-dialog" role="document">
                        <form action="#" method="post" data-method="post" name="form-email-product">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <span className="ico-close close" data-dismiss="modal"></span>
                                    <h4 className="title title-block">Email Product</h4>
                                </div>
                                <div className="modal-body">
                                    <div className="notification-inline full-width" data-notification-inline>
                                        <div className="msg" data-error></div><span className="ico-close"></span>
                                    </div>
                                    <div className="form-group default">
                                        <label htmlFor="recipient-name-1">Recipient's Name<span className="required-mark">&nbsp;*</span></label>
                                        <input className="small" type="text" autoComplete="name" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipient-email-1">Recipient's Email<span className="required-mark">&nbsp;*</span></label>
                                        <input className="small" type="text" autoComplete="name" placeholder="" />
                                    </div>
                                    <a className="add-another" href="#" title="add another" data-add-another>add another</a>
                                    <div className="form-group your-field">
                                        <label htmlFor="your-name">Your Name<span className="required-mark">&nbsp;*</span></label>
                                        <input className="small" type="text" autoComplete="name" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="your-email">Your Email<span className="required-mark">&nbsp;*</span></label>
                                        <input className="small" type="text" autoComplete="name" placeholder="" />
                                    </div>
                                    <div className="checkbox send-copy">
                                        <input type="checkbox" name="send-copy" id="send-copy" data-send-copy/>
                                        <label htmlFor="send-copy">Send Yourself a Copy</label>
                                    </div>
                                    <div className="include-comment checkbox hidden">
                                        <input type="checkbox" name="include-comment" id="include-comment"/>
                                        <label htmlFor="include-comment">Include comments about each piece</label>
                                    </div>
                                    <div className="comment">
                                        <label htmlFor="message">Message</label>
                                        <textarea></textarea>
                                    </div>
                                    <input type="hidden" name="ProductID"/>
                                </div>
                                <div className="modal-footer text-right">
                                    <button className="button white" type="button" data-dismiss="modal" aria-label="Close">Cancel</button>
                                    <button className="button black" type="button" data-submit>Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className=" popup-custom-detail" id="custom-detail" data-img-zoom>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content" data-content-detail></div>
                    </div>
                </div>
                <div className=" request-a-quote" id="request-a-quote" role="dialog" data-web-form data-msg="{&quot;required&quot;: &quot;This field is required.&quot;, &quot;email&quot;: &quot;Your email address must be in the format of name@domain.com&quot;, &quot;password&quot;: &quot;Please enter the same value again.&quot;, &quot;characters&quot;: &quot;String contains illegal characters&quot;}" data-options="{&quot;noteMess&quot;: &quot;Please correct the highlighted fields before continuing:&quot;, &quot;note&quot;: &quot;true&quot;}" data-gtm="" data-gtm-options="{&quot;event&quot;: &quot;AJaxSubmitForm&quot;, &quot;idOfElement&quot;: &quot;form-request-a-quote-page-product-detail&quot;, &quot;trackingLabel&quot;: &quot;@productName&quot;}">
                    <div className="modal-dialog">
                        <div className="modal-content"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="notification" data-notification><span className="ico-check"></span><span data-text></span></div>
    </div>;
    }
}
