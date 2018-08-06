import {combineReducers} from 'redux';
import home from './home';
import mine from './mine';
import vips from './vips';
import news from './news';
import shopcart from './shopcart';
const rootReducer = combineReducers({
    home,
    mine,
    shopcart,
    news,
    vips
});
export default rootReducer;
