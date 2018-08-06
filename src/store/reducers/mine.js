import {GAIBINA_A} from '../../store/contents/minetypes';
export default (state = {a: 10}, action) => {
    switch (action.type) {
        case GAIBINA_A: 
            return {a: action.a};
            break;
        default: 
            return state;
    }
}