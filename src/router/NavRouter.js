/** main import(s)                                                      */
import React from 'react';

/** helper import(s)                                                    */
import { Switch, Route } from 'react-router-dom';

/** component import(s)                                                 */
import Home from '../pages/Home';

/** style import(s)                                                     */


/*/
 *  Component: nav-routes for navigation bar
 *  @props {}
 *  @EventHandler(s):
 *  @Description:
/*/

const NavRouter = () => (
  <main>
    <Switch>
      <Route eact path = "/" component = {Home} />
    </Switch>
  </main>
)

export default NavRouter;
