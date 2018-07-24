import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Breadcum } from './Breadcum';
import { RouteComponentProps } from 'react-router';
import { Header } from './Header';
import { Header2 } from './Header2/Header2';
import { Detail } from './Content/Detail';
import { slide as Menu } from 'react-burger-menu';
import * as jquery from 'jquery';


export class ProductDetailV2 extends React.Component<RouteComponentProps<{}>> {
 
    componentDidMount(){
    }

    public render() {
        return <div className="wrapper">       
            <Header/>
            <Header2/>
            <Detail/>
        </div>;
    }
}
