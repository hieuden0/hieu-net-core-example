import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <nav className="navbar navbar-inverse">
        <div className='navbar-collapse collapse'>
            <ul className='nav navbar-nav'>
                <li>
                    <NavLink to={ '/' } exact activeClassName='active'>
                        <span className='glyphicon glyphicon-home'></span> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ '/counter' } activeClassName='active'>
                        <span className='glyphicon glyphicon-education'></span> Counter
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ '/fetchdata' } activeClassName='active'>
                        <span className='glyphicon glyphicon-th-list'></span> Fetch data
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ '/infomationDetail' } activeClassName='active'>
                        <span className='glyphicon glyphicon-th-list'></span> Infomation Detail
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ '/productDetailV2' } activeClassName='active'>
                        <span className='glyphicon glyphicon-th-list'></span> Product Detail
                    </NavLink>
                </li>
            </ul>
        </div>
      </nav>;
    }
}
