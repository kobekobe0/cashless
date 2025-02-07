import axios from 'axios'

import {API_HOST} from '@/api/index'
import {apiEndpoints} from '@/api/index'

export const getUsers = async () => {
    try{
        const res = await axios.get(`${apiEndpoints.users.getAllUsers}`);
        return res.json();
    } catch(error) {
        throw new Error(error);
    }
}