import axios from 'axios'

export const getBooks=(searchTerm)=>{
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
}