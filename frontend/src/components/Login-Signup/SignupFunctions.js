import axios from 'axios'

export function registerUser(newUserDetails){
    let apiUrl = 'https://bus-reservation-backend-4cvo.onrender.com/register'
    return axios.post(apiUrl,newUserDetails,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}
