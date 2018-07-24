import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { InfomationDetails } from './components/InfomationDetails';
import { ProductDetailV2 } from './components/ProductDetailV2';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata' component={ FetchData } />
    <Route path='/infomationDetail' component={ InfomationDetails } />
    <Route path='/productDetailV2' component={ ProductDetailV2 } />
</Layout>;
