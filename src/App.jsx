//import {useState , useEffect} from 'react'
//import './App.css'

//function App(){

 /* const[counter,setCounter]= useState(0)

  useEffect(()=>{

  //  AddValue()

 // },[counter])

  //const AddValue = () =>{
    //setCounter(counter+1)
   /* const interval =setInterval(()=>{
      setCounter(counter + 1);
    }, 1000);
    return () => clearInterval(interval);
    const timeout =setTimeout(()=>{
      setCounter(counter + 1);
    }, 1000);
    return () => clearTimeout(timeout);

  },[counter]);

  return(
  <>
   <div>
    {counter}
   </div>
  </>
  )
}*/
//export default App;

// App.js
// App.js
/*import React from 'react';
import './App.css';
import{BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
  return (
    <>/
      

      <div className="navbar">
        <img src="bird_2.jpg" alt="logo" className="navbar-logo" />
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          </div>
          <div className='login-btn'>
          <button >Login</button>
          <button >Signup</button>
         </div>
       
      </div>
    
    </>
  );
}*/
// App.jsx

/*import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

function App() {
  return (
    // <div className={'Main'}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        
      </BrowserRouter>
    // </div>
  );
}

export default App;

*/

import React from 'react';
import "./App.css";

export default function App (){
  const Box = () => {
    return (
      <div className="box">
        <div className="backgroundhero-wrapper">
          <img className="backgroundhero" alt="Backgroundhero" src="backgroundhero-gradienttop.svg" />
        </div>
        <div className="box">
      <div className="logo-be-wrapper">
        <a href="https://www.behance.net/galarce" rel="noopener noreferrer" target="_blank">
          <img className="logo-be" alt="Logo be" src="logo-be.png" />
        </a>
      </div>
      <div className="dribbble-ball-mark-wrapper">
        <a href="https://dribbble.com/galarce" rel="noopener noreferrer" target="_blank">
          <img className="dribbble-ball-mark" alt="Dribbble ball mark" src="dribbble-icon.svg" />
        </a>
      </div>
      <div className="logo-linkedin-wrapper">
        <a href="https://www.linkedin.com/in/cristophergalarce" rel="noopener noreferrer" target="_blank">
          <img className="logo-linkedin" alt="Logo linkedin" src="linkedin-icon-2.svg" />
        </a>
      </div>
    </div>
    <div className="home-wrapper">
        <div className="home">
          <div className="hola-andrew-listo-p">Vishnu MV</div>
          <div className="desaf-os">Coimbatore</div>
          <div className="overlap-group">
            <div className="photo-wrapper" />
            <div className="component-points-m">
              <div className="element">UX/UI</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame">
          <div className="what-people-are-sayi">🎨&nbsp;&nbsp;UI Kit</div>
        </div>
      </div>
      <div className="frame-wrapper1">
        <img className="frame1" alt="Frame" src="frame-11.svg" />
      </div>
      <div className="frame-wrapper2">
        <img className="frame2" alt="Frame" src="black-framer 1.png" />
      </div>
      <div className="frame-wrapper3">
        <img className="frame3" alt="Frame" src="figma.png" />
      </div>
      
      <div className="thumbnail-wrapper">
        <img className="thumbnail" alt="Thumbnail" src="Thumbnail.png" />
      </div>
      <div className="thumbnail-wrapper1">
        <img className="thumbnail1" alt="Thumbnail" src="Thumbnail (1).png" />
      </div>
      <div className="thumbnail-wrapper2">
        <img className="thumbnail2  " alt="Thumbnail" src="Thumbnail (2).png" />
      </div>
    </div>

    );
  };
  const Label = () => {
    return (
      <div className="label">
        <div className="logo-wrapper">
          <div className="logo">
            <span className="text-wrapper1">Vishnu</span>
            <span className="span">&nbsp;</span>
            <span className="text-wrapper1">M V</span>
          </div>
        </div>
        <div className="state-wrapper">
        <div className="state">Now available</div>
      </div>
      <div className="agile-user-interface-wrapper">
        <img className="agile-user-interface" alt="Agile user interface" src="hand-wave-icon.svg" />
        <p>Hi,I'm Vishnu</p>
      </div>
      <div className="portfolio-of-UI-desi-wrapper">
        <p className="portfolio-of-UI-desi">
          <span className="text-wrapper">I’m a </span>
          <span className="span">Product Designer </span>
          <span className="text-wrapper">with a passion for participate in every stage of digital product, from </span>
          <span className="span">discovery</span>
          <span className="text-wrapper"> to </span>
          <span className="span">delivery.</span>
          <span className="text-wrapper"> Helping to focus the business goals on users.</span>
        </p>
      </div>
      <div className="portfolio-of-UI-desi-wrappe">
        <p className="portfolio-of-UI-des">
          <span className="text-wrapper">
            I’m looking for new opportunities
            <br />
            Previously I worked at{" "}
          </span>
          <span className="span">Multiplica Talent Chile</span>
        </p>
      </div>
      <div className="but-first-watch-my-c-wrapper">
        <div className="but-first-watch-my-c">Coimbatore</div>
        <div className="but-first-watch-my">vishnumv@drngpit.ac.in</div>
      </div>
      <div className="portfolio-of-UI-desi-wrapper2">
        <div className="portfolio-of-UI-desi2">Check some projects</div>
      </div>
      <div className="portfolio-of-UI-desi-wrapper3">
        <div className="portfolio-of-UI-desi3">Hello !,I'm Vishnu</div>
      </div>
      <div className="portfolio-of-UI-desi-wrapp">
        <div className="portfolio-of-UI">👇</div>
      </div>
      <div className="what-people-are-sayi-wrapper">
        <div className="what-people-are-sayi">🎨&nbsp;&nbsp;UI Kit</div>
      </div>
      <div className="what-people-are-sayi-wrapper1">
        <div className="what-people-are-sayi1">🔍&nbsp;&nbsp;User Research</div>
      </div>
      <div className="nombre-del-producto-wrapper">
        <div className="nombre-del-producto">🔔&nbsp;&nbsp;Icons</div>
      </div>
      <div className="what-people-are-sayi-wrapper2">
        <div className="what-people-are-sayi2">🔀&nbsp;&nbsp;Flow charts</div>
      </div>
      <div className="nombre-del-producto-wrapper1">
        <div className="nombre-del-producto1">🔤&nbsp;&nbsp;Fonts</div>
      </div>
    </div>
  );
};
const Image = () => {
  return (
    <div className="image">
      <div className="face-photo-wrapper">
        <img className="face-photo" alt="Face photo" src="griffin.png" />
      </div>
    </div>
  );
};

      
    


  
  return(
    <div>
      <Box/>
      <Label/>
      <Image/>
    </div>
  )


}


