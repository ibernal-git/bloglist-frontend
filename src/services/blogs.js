import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const getAll = () => {
  const config = {
    headers: { Authorization: token }
  }
  const request = axios.get(baseUrl, config)
  return request.then(response => response.data)
}

const setToken = newToken => {
  token = `bearer ${newToken}`
}
const create = newBlog => {
  const config = {
    headers: { Authorization: token }
  }

  const response = axios.post(baseUrl, newBlog, config)
  return response.then(response => response.data)
}

// eslint-disable-next-line
export default { getAll, setToken, create }
