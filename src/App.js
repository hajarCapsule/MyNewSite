import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Dropdown from './components/Dropdown'
import InfoSection from './components/InfoSection'
import GlobalStyle from './globalStyles'
import { SliderData } from './data/SliderData'
import { InfoData } from './data/InfoData'


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <GlobalStyle/>
            <Navbar toggle ={toggle} />
            <Dropdown isOpen ={isOpen} toggle ={toggle}/>
            <Hero slides={SliderData}/>
            <InfoSection {...InfoData} />
          
          </Route>

         
        </Switch>
      </Router>
  );
 }
export default App