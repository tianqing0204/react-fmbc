import React, {Component} from 'react';
import Dell from '../../components/home/dell';
import {getpro} from '../../common/home';
import {connect} from 'react-redux';
import {actionDell} from '../../store/actions/home';
class DellBig extends Component {
    componentDidMount () {
        const {dispatch} = this.props;
        getpro('/dell').then((res) => {
            dispatch(actionDell(res));
        })
    }
    render () {
        const {dell} = this.props;
        return (
            <div>
            {
                dell !== null ? <Dell {...this.props}></Dell> : ''

            }
            </div>
            
        )
    }
};
const mapStateToProps = (state) => {
    // console.log(state, '11111111111111');
    return {
        dell: state.home.dell
    }
}
export default connect(mapStateToProps)(DellBig);