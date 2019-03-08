import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID 00ab680ac27285e341bf77748ad05e44efbf982606a7b0c26f5145121a494be5"
    }
});