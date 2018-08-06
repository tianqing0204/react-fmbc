import axios from 'axios';
import AxiosAdapter from 'axios-mock-adapter';
import mryxlist from './data/mryxlist.json';
import huoguo from './data/huoguo.json';
import jiuying from './data/jiuying.json';
import liangyou from './data/liangyou.json';
import lingshi from './data/lingshi.json';
import roudan from './data/roudan.json';
import rupin from './data/rupin.json';
import shouye from './data/shouye.json';
import shucai from './data/shucai.json';
import shuichang from './data/shuichang.json';
import shuiguo from './data/shuiguo.json';
import sushi from './data/sushi.json';
import dell from './data/dell/dell.json';
import shopcart from './data/shopcart/shopcart.json';
const jiekou = new AxiosAdapter(axios);
export default {
    bootstarp () {
        jiekou.onGet('/index').reply((config) => {
            return new Promise((resolve, reject)=> {
                resolve([200, mryxlist])
            })
        });
        jiekou.onGet('/hbcrd-huoguo').reply((config) => {
            return new Promise((resolve, reject)=> {
                resolve([200, huoguo])
            })
        });
        jiekou.onGet('/hb-drink').reply((config) => {
            return new Promise((resolve, reject)=> {
                resolve([200, jiuying])
            })
        });
        jiekou.onGet('/hb-liangyou').reply((config) => {
            return new Promise((resolve, reject)=> {
                resolve([200, liangyou])
            })
        });
        jiekou.onGet('/hb-snack').reply((config) => {
            return new Promise((resolve, reject)=> {
                resolve([200, lingshi])
            })
        });
        jiekou.onGet('/hb-food').reply((config) => {
            return new Promise((resolve, reject)=> {
                resolve([200, roudan])
            })
        });
        jiekou.onGet('/hb-milk').reply((config) => {
            return new Promise((resolve, reject)=> {
                resolve([200, rupin])
            })
        });
        jiekou.onGet('/hb-sc').reply((config) => {
            return new Promise((resolve, reject)=> {
                resolve([200, shucai])
            })
        });
        jiekou.onGet('/hb-seafood').reply((config) => {
            return new Promise((resolve, reject)=> {
                resolve([200, shuichang])
            })
        });
        jiekou.onGet('/hd-fruit').reply((config) => {
            return new Promise((resolve, reject)=> {
                resolve([200, shuiguo])
            })
        });
        jiekou.onGet('/dell').reply((config) => {
            return new Promise((resolve, reject)=> {
                resolve([200, dell])
            })
        });
        jiekou.onGet('/shopcart').reply((config) => {
            return new Promise((resolve, reject)=> {
                resolve([200, shopcart])
            })
        });
        jiekou.onPost('/js').reply((config) => {
            
            const sp = JSON.parse(config.data);
            const spsl = sp.products;
            if (spsl.length>0) {
                return new Promise((resolve, reject)=> {
                resolve([200, {message: 'ok'}])
                })
            }else {
                return new Promise((resolve, reject)=> {
                resolve([200, {message: '请添加至少一个商品'}])
                })
            }
            
        });
        jiekou.onPost('/yzm').reply((config) => {
            console.log(config);
            return new Promise((resolve, reject)=> {
                resolve([200, 'hahahahah'])
            })
        });
        jiekou.onPost('/login').reply((config) => {
            console.log(config);
            return new Promise((resolve, reject)=> {
                resolve([200, 'ok'])
            })
        });
    }
}