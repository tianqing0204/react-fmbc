import React, {Component} from 'react';
import { Icon, Grid } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import './header.css';
@withRouter
class Header extends Component {
    handleClick () {
        // console.log(this);
        const {history} = this.props;
        history.go(-1);
        
    }
    render () {
        return (
            <div className="header">
                
                <div className="left" onClick={this.handleClick.bind(this)}>
                <Icon type="left" />
                </div>
                <p><span><a href="#xq">商品详情</a></span><span><a href="#bz">安心保障</a></span></p>
                
            </div>
        )
    }
};
export default Header;