const initState = {
    num: 0,
    list: null,
    shuliang: 0
}
export default (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_NUM':
            return Object.assign({}, state, {num: state.num+1});
        case 'CHANGE_LIST': 
            return Object.assign({}, state, {list: action.List});
        case 'CHANGE_SHULIANG':
            return Object.assign({}, state, {shuliang: state.shuliang+action.shuliang});
        case 'CHANGE_JJ':
            return Object.assign({}, state, {shuliang: state.shuliang-action.shuliang});
        default: 
            return state
    }
}