import axios from 'axios';
export const getlist = (url) => {
    return axios.get(url).then((res) => {
        if (res.data.code !== 0) return 
        return res.data;
    }).catch((e) => {
        throw new Error(e);
    })
}
export const getpro = (url) => {
    return axios.get(url).then((res) => {
        return res.data;
    }).catch((e) => {
        throw new Error(e);
    })
}