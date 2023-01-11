import './App.css';
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Images from './components/Images';
import { NavLink } from 'react-router-dom';
import './App.css'
import { useEffect, useState } from 'react';


function App() {
  const [items, setItems] = useState('sea')
  const [x,setX] = useState('')

  function handleKeyDown(e) {
    //console.log(e.keyCode)
    if (e.keyCode === 13) {
      setItems(x)
    }
  }

  function searchResult(e)
  {
    setItems(x)
  }

  function trendingItemSelector(e){
     
    let result = e.target.textContent.toLowerCase()
    setItems(result)
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
                <input onChange={(e)=>setX(e.target.value)} onBlur={searchResult}  onKeyDown={handleKeyDown} className="search" type="text" placeholder="Search for free photos" />
                {/* <button onClick={(e)=>} >Submit</button> */}
              </section>
            </div>
            {/* Hero Section End */}

            <div className='category'>
              <NavLink to='/' onClick={trendingItemSelector} >Ocean</NavLink>
              <NavLink to='/' onClick={trendingItemSelector} >Mountain</NavLink>
              <NavLink to='/' onClick={trendingItemSelector} >Birds</NavLink>
              <NavLink to='/' onClick={trendingItemSelector} >Animals</NavLink>
              <NavLink to='/' onClick={trendingItemSelector} >Cars</NavLink>
              <NavLink to='/' onClick={trendingItemSelector} >Abstract</NavLink>
              <NavLink to='/' onClick={trendingItemSelector} >Colors</NavLink>
              <NavLink to='/' onClick={trendingItemSelector} >Space</NavLink>
              <NavLink to='/' onClick={trendingItemSelector} >Technology</NavLink>
              <NavLink to='/' onClick={trendingItemSelector} >Sports</NavLink>
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