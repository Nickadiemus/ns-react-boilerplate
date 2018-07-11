/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */

/** component import(s)                                                 */
import Navigation from './components/Navigation';
import NavRouter from './router/NavRouter';

/** style import(s)                                                     */


/*/
 *  Component: App
 *  @props {NA}
 *  @EventHandler(s): NA
 *  @Description: App page
/*/
class App extends Component {
  render(){
    return(
      <div>
        <Navigation />
        <NavRouter />
      </div>
    )
  }
}

export default App
