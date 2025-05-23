import axios from "axios";
// const URI_BACKEND = 'https://uct-demo-search-documents.glitch.me/uct/api/admin'
// const URI_BACKEND = 'http://localhost:3000/uct/api/admin'
const URI_BACKEND = 'https://uct-digitalizacion-ocr-new.glitch.me/uct/api/admin'


const instance = axios.create({
    baseURL: URI_BACKEND,
    withCredentials: true,
})

export default instance