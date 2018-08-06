export const ActionNum = () => {
    return {
        type: 'CHANGE_NUM'
    }

}
export const ActionList = (List) => {
    // console.log(List, '这是list');
    return {
        type: 'CHANGE_LIST',
        List
    }
}
export const ActionSl = (shuliang) => {
    return {
        type: 'CHANGE_SHULIANG',
        shuliang
    }
};
export const ActionJJ = (shuliang) => {
    return {
        type: 'CHANGE_JJ',
        shuliang
    }

}
