
import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID d491c8c1933ed874cf1d7986137841f4975121933c6a80bc3868b85bc4ffdaf2'
    }
})