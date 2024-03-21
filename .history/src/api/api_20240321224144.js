import axios from 'axios';

export const BACKEND_ENDPOINT= 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbums = async()=>{
    try{
        const topAlbum = await axios.get(`${BACKEND_ENDPOINT}/albums/top`)
        return topAlbum.data;
    }
    catch(e){
        console.log(e)
    }
}

export const fetchNewAlbums = async()=>{
    try{
        const newAlbum = await axios.get(`${BACKEND_ENDPOINT}/albums/new`)
        return newAlbum.data;
    }
    catch(e){
        console.log(e)
    }
}

export const fetchSongs = async()=>{
    try{
        const respone = await axios.get(`${BACKEND_ENDPOINT}/songs`)
        return respone.data;
    }
    catch(e){
        console.log(e)
    }
}

export const fetchFilters = async()=>{
    try{
        const respone = await axios.get(`${BACKEND_ENDPOINT}/albums/top`)
        return respone.data;
    }
    catch(e){
        console.log(e)
    }
}


