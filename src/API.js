import axios from 'axios'

const setupInterceptors = (instance) => {
 instance.interceptors.response.use(
  (response) => {
   return response
  },
  (error) => {
   console.log(error)

   return Promise.reject(error)
  }
 )
}

export default axios.create({})
export { setupInterceptors }