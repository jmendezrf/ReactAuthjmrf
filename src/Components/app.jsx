import React , { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import '../../src/App.css';
import allUsers from "./allUsers";
const newUser = lazy(() => import ("./signUp"));
const login = lazy(() => import ("./sign-in"));
const profile = lazy(() => import ("./profile"));


let Router = BrowserRouter;

class App extends React.Component{
  render (){
   return(
     <Router>
    
      <div className="App">
            <header className="App-header">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            
        <Route exact path="/" component={newUser} /> 
             <Route path="/users" component={allUsers} />  
             <Route path="/login" component={login} />  
             <Route path="/profile" component={profile} />  
   
        </Switch>
      </Suspense>
  
                </header> 
   
    </div>
    </Router>
   
   );
   }
}





export default App;




