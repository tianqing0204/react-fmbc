const initalState = {
    productList: null,
    categoryList: null,
    dell: null
}
export default (state=initalState, action) => {
    // console.log(action);
    // return state;
    switch (action.type) {
        case ('MRYX_REQUIRE'): 
            return Object.assign({}, state, {productList: []});
        case ('MRYX_L'):
            return Object.assign({}, state, {productList: action.productList, categoryList: action.categoryList});
        case ('MRYX_P'): 
            return Object.assign({}, state, {productList: action.productList});
        case ('DELL_A'): 
            return Object.assign({}, state, {dell: action.dell});
        
        default: 
            return state;
    }

}