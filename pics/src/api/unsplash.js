import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KF3KISwb-1GlRMRPG25qRd9muP89wobJaY8w3WPohmI'
    },
});