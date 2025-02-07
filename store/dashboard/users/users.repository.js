import axios from 'axios'

import {API_HOST} from '@/api/index'
import {apiEndpoints} from '@/api/index'

export const getUsers = async () => {
    try{
        const res = await axios.get(`${apiEndpoints.users.getAllUsers}`);
        console.log(res.data)
        return res.data
    } catch(error) {
        console.log(error)
        throw new Error(error);
    }
}