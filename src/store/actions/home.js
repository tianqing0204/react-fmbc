export const actionList = (productList, categoryList, actionproRequire) => {
    return {
        type: 'MRYX_L',
        productList,
        categoryList
    }
};
export const actionpro = (productList) => {
    return {
        type: 'MRYX_P',
        productList
    }
}
export const actionproRequire = () => {
    return {
        type: 'MRYX_REQUIRE'
    }
}
export const actionDell = (dell) => {
    return {
        type: 'DELL_A',
        dell
    }
}