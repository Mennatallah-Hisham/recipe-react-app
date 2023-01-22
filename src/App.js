
import{Route, Switch} from 'react-router-dom';

import Nav from './components/layout/Nav';
import HomePage from './pages/HomePage';
import Saved from './pages/Saved';
import ViewRecipe from './pages/ViewRecipe';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route path="/" exact>
          <HomePage/>

        </Route>
        <Route path="/saved" exact>
          <Saved/>
        </Route>
        <Route path="/recipe/:id" exact>
          <ViewRecipe/>
        </Route>
   
        <Route path="*" exact>
        <NotFound/>
        </Route>
   


      </Switch>


    </div>
  );
}


export default App;
