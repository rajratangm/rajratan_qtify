import axios from 'axios';

export const BACKEND_ENDPOINT= 'https://qtify-backend-labs.crio.do';

export const fetchtopAlbumbs = async()=>{
    try{
        const topAlbum = wait axios.get(`${BACKEND_ENDPOINT}/alby`)
    }
    catch(e){
        console.log(e)
    }
}
