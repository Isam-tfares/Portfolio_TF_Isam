// import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export default function App() {

  return (<div >
    <Router>

      <Header />
      <Switch>
        {/* <Route exact path="/">
              <Home  />
            </Route> */}
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/education" >
          <Education />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>



        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </div>)
}