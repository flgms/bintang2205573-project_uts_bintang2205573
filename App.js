import './App.css'
import NavigationBar from './components/Navigationbar'
import Intro from './components/Intro'
import About from "./components/About"

import "./style/LandingPage.css"

function App() {
  return (
    <div>
      <div className= "myBG">
        <NavigationBar />
        <Intro />
        </div>
        <div className='About'>
          <About />
        </div>
    </div>
  );
}

export default App;
