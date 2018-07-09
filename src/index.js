/** main import(s)                                                      */
import React from 'react';
import ReactDOM from 'react-dom';
/** helper import(s)                                                    */

/** component import(s)                                                 */
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/** style import(s)                                                     */

ReactDOM.render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById("app"));
module.hot.accept();
