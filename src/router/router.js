import MyLoadingComponent from '../components/Common/loading/loading';
import Loadable from 'react-loadable';
const Home = Loadable({
    loader: () => import('../views/home'),
    loading: MyLoadingComponent
  });
  const Mine = Loadable({
    loader: () => import('../views/mine'),
    loading: MyLoadingComponent
  });
  const Shopcart = Loadable({
    loader: () => import('../views/shopcart'),
    loading: MyLoadingComponent
  });
  const News = Loadable({
    loader: () => import('../views/news'),
    loading: MyLoadingComponent
  });
  const Vips = Loadable({
    loader: () => import('../views/vips'),
    loading: MyLoadingComponent
  });
  const Notfound = Loadable({
    loader: () => import('../components/Common/notfound/notfound.jsx'),
    loading: MyLoadingComponent
  });
  const Dell  = Loadable({
    loader: () => import('../views/dell'),
    loading: MyLoadingComponent
  });
  export default {
      Home,
      Mine,
      Shopcart,
      News,
      Vips,
      Notfound,
      Dell
  }