import './App.css';
import logo from './assets/navbarLogo.png'
import menu from './assets/menu.svg'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import { useState } from 'react';


function App() {

//563492ad6f91700001000001e435c881bfc5495dab881653b01dd416

  const style1 = {
      display: '',
      position: "absolute",
      height: "50vh",
      zIndex: 50,
      width: "100vw",
      backgroundColor: "rgba(73, 198, 134, 0.231)",
      marginTop: "-10px"
  }

  // const style2 = {
  //   position: "absolute",
  //   height: "50vh",
  //   zIndex: 50,
  //   width: "100vw",
  //   backgroundColor: "rgba(73, 198, 134, 0.231)",
  //   marginTop: "-10px"
  // }

  const [toggle, setToggle] = useState({style1})

  

  function toggleHandler() {
    console.log(JSON.stringify(toggle.style1))  
  
   
  }

  return (
    <div className="App">

      <Routes>

        <Route path='/' element={
          //<>
          //   <div className='navbar--wrapper'>
          //     <div style={toggle} ></div>
          //     <header>
          //       <img className='navbarLogo' src={logo} />
          //       <p className='navbarItems'>Explore</p>
          //       <p className='navbarItems'>License</p>
          //       <p className='navbarItems'>Upload</p>
          //       <button className='navbarButton'>Sign in</button>
          //       <button onClick={toggleHandler} className='toggle'><img src={menu} /></button>
          //     </header>
          //   </div>


          //   <div className='hero--wrapper'>
          //     <img className='banner' src='//unsplash.it/3840/2160' />
          //     <section className='heroContent'>
          //       <h1>The best free stock photos, royalty free images & videos shared by creators.</h1>
          //       <input className="search" type="text" placeholder="Search for free photos" />
          //     </section>
          //   </div>

          //   <main>
          //     <img src='//unsplash.it/400/201' />
          //     <img src='//unsplash.it/400/202' />

          //     <img src='//unsplash.it/400/203' />
          //     <img src='//unsplash.it/400/204' />

          //     <img src='//unsplash.it/400/205' />
          //     <img src='//unsplash.it/400/206' />

          //     <img src='//unsplash.it/400/207' />
          //     <img src='//unsplash.it/400/208' />
          //     <img src='//unsplash.it/400/209' />
          //   </main>
           // <Footer />
          //</>
        //}

        

        </Route>


      </Routes>

    </div>
  );
}

export default App;











import './App.css';
import logo from './assets/navbarLogo.png'
import menu from './assets/menu.svg'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import { useState } from 'react';
import Images from './components/Images';


function App() {

//563492ad6f91700001000001e435c881bfc5495dab881653b01dd416

  const style1 = {
      display: '',
      position: "absolute",
      height: "50vh",
      zIndex: 50,
      width: "100vw",
      backgroundColor: "rgba(73, 198, 134, 0.231)",
      marginTop: "-10px"
  }

  // const style2 = {
  //   position: "absolute",
  //   height: "50vh",
  //   zIndex: 50,
  //   width: "100vw",
  //   backgroundColor: "rgba(73, 198, 134, 0.231)",
  //   marginTop: "-10px"
  // }

  const [toggle, setToggle] = useState({style1})

  

  function toggleHandler() {
    console.log(JSON.stringify(toggle.style1))  
  
   
  }

  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<Images/>}/>


      </Routes>

    </div>
  );
}

export default App;

