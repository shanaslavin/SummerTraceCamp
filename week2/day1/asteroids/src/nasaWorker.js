// gets data from api
import axios from 'axios'

const api_key = '7ywfyjWGHRMiqDqmjTcxsrJMZkaeo0Z4RgftoNxw';

const getAstroids = (start, end) => {
  return axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${api_key}`)
}

export default getAstroids;