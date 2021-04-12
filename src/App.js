
// import './App.css';
import React from 'react';
import Test from './ui/graph/test';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './style/style.scss'

const Student = React.lazy(() => import('./ui/student/student'));


function App() {
  return (
    <Router>
      <React.Suspense fallback={<h1>Loading profile...</h1>}>
        <Switch>
            <Route exact path="/students" name="Student Page" render={props => <Student {...props}/>} />
            <Test/>
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
