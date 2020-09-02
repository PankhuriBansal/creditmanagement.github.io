import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import AdAdmindashboard from './AdAdmindashboard';
//import Studashboard from './Studashboard';
//import AdAddsubject from './AdAddsubject';
//import AdClass from './AdClass';
//import AdAddStudent from './AdAddStudent';
//import Sbc1 from './Sbc1';
//import Studash from './Studash';
//import Demo from './Demo';
//import Tdash from './Tdash';
//import Signup from './Signup';
//import Auser from './Auser';
//import Main from './Main';
//import Selecta from './Selecta';\
import Muser from './Muser';
//import Duser from './Duser';
//import Xargs from './Xargs';
//import New from './New';
//import Automation from './Automation';
import Htrans from './Htrans';
import Smain from './Smain';
ReactDOM.render(
  <React.StrictMode>
    <Smain/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
