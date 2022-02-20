const axios = require("axios");

const API = {
    getPhotos: (data) => axios.get('https://api.unsplash.com/photos', {
        params: data
    }),
    searchPhotos:(data) => axios.get('https://api.unsplash.com/search/photos',{
        params: data
    })
}

export default API;