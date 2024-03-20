import axios from 'axios';

export const BACKEND_ENDPOINT= 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbumbs = async()=>{
    try{
        const topAlbum = await axios.get(`${BACKEND_ENDPOINT}/albums/top`)
        return topAlbum.data;
    }
    catch(e){
        console.log(e)
    }
}

export const fetchNewAlbumbs = async()=>{
    try{
        const newAlbum = await axios.get(`${BACKEND_ENDPOINT}/albums/new`)
        return newAlbum.data;
    }
    catch(e){
        console.log(e)
    }
}

export const fetchtSongs = async()=>{
    try{
        const respone = await axios.get(`${BACKEND_ENDPOINT}/albums/top`)
        return responsiveFontSizes.data;
    }
    catch(e){
        console.log(e)
    }
}

