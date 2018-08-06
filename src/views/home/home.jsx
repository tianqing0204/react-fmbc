import React, {Component} from 'react';
import {actionList, actionpro, actionproRequire} from '../../store/actions/home';
import {connect} from 'react-redux';
// import axios from 'axios';
import {getlist, getpro} from '../../common/home';
import Headers from '../../components/home/header/top';
import Tab from '../../components/home/tab/ul';
class Home extends Component {
    componentDidMount () {
        const {dispatch} = this.props;
        getlist('/index').then((res) => {
            // console.log(res.category_list);
            dispatch(actionList(res.product_list.products, res.category_list))
        })
        // axios({
        //     method: 'GET',
        //     url: '/index'
        // }).then((res) => {
        //     dispatch({
        //         type: 'MRYX_L',
        //         mryxlist: res.data.category_list
        //     });
        // })
        
    }
    gaibian (url) {
        // console.log(url);
        const {dispatch} = this.props;
        getpro(url).then((res) => {
            // console.log(res.products);
            dispatch(actionproRequire());
            dispatch(actionpro(res.products))
        })

    }
    render () {
        // console.log(this.props);
        const {productList, categoryList} = this.props;
        // console.log(this.props);
        return (
            <div className="da">
                <Headers></Headers>
                
                { productList !== null ?<Tab 
                {...this.props}
                changid={this.gaibian.bind(this)}
                ></Tab> : ''}
                
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    // console.log(state, '111111111111111111');
    return {
        productList: state.home.productList,
        categoryList: state.home.categoryList
    }
}
export default connect(mapStateToProps)(Home);