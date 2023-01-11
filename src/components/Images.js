import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from '../style/images.module.css'
import { NavLink } from 'react-router-dom'
import { saveAs } from 'file-saver'

const Images = ({topic}) => {

    function downloadHandler(e) {
      let image_name = e.target.alt
      let img_url = e.target.src.split('?')[0]
      saveAs(img_url, `${image_name}.jpeg`)
    }  

    const [images, setImages] = useState([{}])

    //https://api.pexels.com/v1/curated?per_page=30

    useEffect(()=>{
    axios({
        method: 'get',
        url: `https://api.pexels.com/v1/search?query=${topic}&page=1&per_page=30`,
        responseType: 'stream',
        headers: {
                    Accept: "application/json",
                    Authorization: '563492ad6f91700001000001e435c881bfc5495dab881653b01dd416',     //use the apikey you have generated
                 }
      })
    .then((responce) => { 
        setImages(JSON.parse(responce.data))
        // console.log(JSON.parse(responce.data))
    })
    .catch(e => console.log(e))
    },[topic])

  return (
    <>
    <main className={style.wrap}>
        { images.photos === undefined ? '' : (
        images.photos.map((e) => (
          <img className={style.test} key={e.id} alt={e.id}  src={e.src.large} onClick={downloadHandler}  ></img>
        )))
        }

    {/* <NavLink to="myfile.pdf" target="_blank" download>Download</NavLink> */}

    </main>
    </>
  )
}

export default Images