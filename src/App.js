
// import '..App.js';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import ScrollToTop from "react-scroll-to-top";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

const App =()=> {
const pageSize= 5;
const [progress, setProgress] = useState(0)
// setProgress = (progess)=>{
//   this.setState({progress:progess})
// }

    return (
      <div>
        <ScrollToTop smooth color="#6f00ff" />
        <Router>
        <NavBar/>
        <LoadingBar
         color='#f11946'
         progress={progress}
      />
        {/* <News setProgress={progress} pageSize={5} country="in" category="sports"/> */}
        <Switch>
        <Route exact path="/home"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/></Route>
        <Route exact path="/News-App"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/></Route>
<Route exact path="/business"><News setProgress={setProgress} key="business"pageSize={pageSize} country="in" category="business"/></Route>
<Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route>
<Route exact path="/sports"><News setProgress={setProgress}  key="sports"  pageSize={pageSize} country="in" category="sports"/></Route>
<Route exact path="/health"><News setProgress={setProgress}  key="health"  pageSize={pageSize} country="in" category="health"/></Route>
<Route exact path="/science"><News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/></Route>
<Route exact path="/technology"><News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/></Route>


        </Switch>
        </Router>
        <footer className='text-center text-muted'><p>Made with &#9829; by Irbaaz</p></footer>
       </div>
    )
  
}
export default App;