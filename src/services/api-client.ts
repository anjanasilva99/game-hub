import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2b80746cbd324a4ba77093e756858741'
    }
});