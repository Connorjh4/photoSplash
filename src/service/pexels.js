import axios from 'axios'

const baseUrl = 'https://api.pexels.com/v1/'
const token = process.env.REACT_APP_PEXELS_KEY
const config = {
    headers: { Authorization: 'Bearer ' + token }
}
const curated = `${baseUrl}curated`

const getAll = () => {
    const req = axios.get(curated, config)
    return req.then(res => res.data)
}

const exports = { getAll }

export default exports