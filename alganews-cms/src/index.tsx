import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserView from './views/User.view';
import HomeView from './views/Home.view';
import ContactView from './views/Contact.view';
import NotFound404View from './views/NotFound404.view';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route path={'/'} exact component={HomeView}/>
          <Route path={'/contato'} exact component={ContactView}/>
          <Route path={'/usuario/:userId'} component={UserView}/>
          <Route component={NotFound404View}/>
        </Switch>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
