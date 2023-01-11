import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from '../style/images.module.css'

const Images = () => {
    
    const [images, setImages] = useState([{}])

    useEffect(()=>{
    axios({
        method: 'get',
        url: 'https://api.pexels.com/v1/curated?per_page=30',
        responseType: 'application/json',
        headers: {
                    Accept: "application/json",
                    Authorization: '563492ad6f91700001000001e435c881bfc5495dab881653b01dd416',     //use the apikey you have generated
                 }
      })
    .then((responce) => { 
        setImages(JSON.parse(responce.data))
        console.log(JSON.parse(responce.data))
    })
    .catch(e => console.log(e))
    },[])

  return (
    <>
    <main className={style.wrap}>
        { images.photos === undefined ? '' : (
        images.photos.map((e) => (
            <img className={style.test} key={e.id} alt={e.id}  src={e.src.large}></img>
        )))
        }
    </main>
    </>
  )
}

export default Images