import axios from 'axios';

const getPlanets = (page) => {
    return axios.get(`https://swapi.co/api/planets/?page=${page}`)
}
export {getPlanets};