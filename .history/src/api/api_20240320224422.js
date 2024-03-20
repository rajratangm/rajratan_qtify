import axios from 'axios';

export const BACKEND_ENDPOINT= 'https://qtify-backend-labs.crio.do';

export const fetchtopAlbumbs = async()=>{
    try{
        const topAlbum = await axios.get(`${BACKEND_ENDPOINT}/albums/top`)
        return responsiveFontSizes.data;
    }
    catch(e){
        console.log(e)
    }
}
