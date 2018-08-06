import axios from 'axios';
export const Posts = (url, opts) => {
    return axios.post(url, opts).then((res) => {
        return res;
    }).catch((e) => {
        throw new Error(e);
    })
};