import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import SiteNavbar from './component/SiteNavbar'
import SiteAbout from './component/SiteAbout';
import SiteClass from './component/SiteClass';
import Contact from './component/Contact';
import SiteFooter from './component/SiteFooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <SiteNavbar />
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path={"/About"} component={SiteAbout} />
      <Route exact path={"/Classes"} component={SiteClass} />
      <Route exact path={"/Contact"} component={Contact} />
    </Switch>
    <SiteFooter />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
