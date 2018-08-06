import routers from './index';
export const ROUTER_MAP = {
    NAV: [
        {
            to: '/',
            text: '首页'
        },
        {
            to: '/vips',
            text: '会员'
        },
        {
            to: '/mine',
            text: '我的'
        },
        {
            to: '/news',
            text: '新鲜事'
        },
        {
            to: '/shopcart',
            text: '购物车'
        },


    ],
    ROUTE: [
        {
            path: '/',
            component: routers.Home
        },
        {
            path: '/vips',
            component: routers.Vips
        },
        {
            path: '/mine',
            component: routers.Mine
        },
        {
            path: '/shopcart',
            component: routers.Shopcart
        },
        {
            path: '/news',
            component: routers.News
        },
        {
            path: '/dell',
            component: routers.Dell
        }
    ]
};
