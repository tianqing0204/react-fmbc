import React, {Component} from 'react';
import Shops from '../../components/shopcart';
import {getpro} from '../../common/home';
import {connect} from 'react-redux';
import {ActionList, ActionSl, ActionJJ} from '../../store/actions/shopcart';
class Shop extends Component {
    gb (val) {
        // console.log(val, '11111111111111111111111');
        const {dispatch} = this.props;
        dispatch(ActionSl(val));

    }
    jgb (idx) {
        const {dispatch} = this.props;
        dispatch(ActionJJ(idx));
    }
    componentDidMount () {
        const {dispatch} = this.props;
        getpro('/shopcart').then((res) => {
            dispatch(ActionList(res));

        })

    }
    render () {
        const {shuliang}= this.props;
        const {list} = this.props;
        const qian = (shuliang/100).toFixed(2);
        return (
            <div>
                {
                    list !==null ? <Shops 
                    {...this.props}
                    shuliang={qian}
                    gbb={this.jgb.bind(this)}
                    chuan={this.gb.bind(this)}
                    ></Shops> : ''
                }
                 
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        list: state.shopcart.list,
        shuliang: state.shopcart.shuliang
    }
}

export default connect(mapStateToProps)(Shop);