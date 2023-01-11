import './App.css';
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Images from './components/Images';
import { NavLink } from 'react-router-dom';
import './App.css'
import { useEffect, useState } from 'react';


function App() {
  const [items, setItems] = useState('random')
  const [x,setX] = useState('')

  useEffect(()=>{
    console.log(items)
  },[items])

  function handleKeyDown(e) {
    console.log(e.keyCode)
    if (e.keyCode === 13) {
      setItems(x)
    }
  }

  return (
    <div className="App">

      <Routes>

        <Route path='/' element={
          <>
            <Navbar />  

            {/* Hero Section Start */}
            <div className='hero--wrapper'>
              <img className='banner' alt='banner' src='//unsplash.it/3840/2160' />
              <section className='heroContent'>
                <h1>The best free stock photos, royalty free images & videos shared by creators.</h1>
                <input onChange={(e)=>setX(e.target.value)} onKeyDown={handleKeyDown} className="search" type="text" placeholder="Search for free photos" />
                {/* <button onClick={(e)=>} >Submit</button> */}
              </section>
            </div>
            {/* Hero Section End */}

            <div className='category'>
              <NavLink to='/'>Ocean</NavLink>
              <NavLink to='/a'>Mountain</NavLink>
              <NavLink to='/b'>Birds</NavLink>
              <NavLink to='/c'>Animals</NavLink>
              <NavLink to='/d'>Cars</NavLink>
              <NavLink to='/e'>Abstract</NavLink>
              <NavLink to='/f'>Colors</NavLink>
              <NavLink to='/g'>Space</NavLink>
              <NavLink to='/i'>Technology</NavLink>
              <NavLink to='/j'>Sports</NavLink>
            </div>

            <div className='menu--Wrapper'>
              <h3>Free Stock Photos</h3>
              <select className='filterOne'>
                <option>Trending</option>
                <option>New</option>
                <option>Following</option>
              </select>
            </div>


            <main>
              <Images topic={items} />
            </main>

            <Footer />
          </>
        }>
        </Route>


      </Routes>

    </div>
  );
}

export default App;