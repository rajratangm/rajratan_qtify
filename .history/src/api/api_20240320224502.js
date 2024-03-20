import axios from 'axios';

export const BACKEND_ENDPOINT= 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbumbs = async()=>{
    try{
        const topAlbum = await axios.get(`${BACKEND_ENDPOINT}/albums/top`)
        return responsiveFontSizes.data;
    }
    catch(e){
        console.log(e)
    }
}

export const fetchNewAlbumbs = async()=>{
    try{
        const newAlbum = await axios.get(`${BACKEND_ENDPOINT}/albums/top`)
        return newAlbum.data;
    }
    catch(e){
        console.log(e)
    }
}
