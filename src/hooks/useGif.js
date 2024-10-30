import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
   
    const[gif,setGif]=useState('');
    
    const[loading,setLoading]=useState('false');
   
     
    async function fetchData(){
        setLoading(true);
    //agar mere hook me tag pass hua hai to tag use karna hai warna randomMeme display karna hai
        const {data}=await axios.get(tag?`${url}&tag=${tag}`:url);
        const imageSource=data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }
useEffect(()=>{
    fetchData();
},[])

// ab maine jitna operation kiya un sabko return kiya 
return{gif,loading,fetchData};
  
}


export default useGif
