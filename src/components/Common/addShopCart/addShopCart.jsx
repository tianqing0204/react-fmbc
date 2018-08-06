import React, {Component} from 'react';
import { Button, List } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import './addShopCart.css';
@withRouter
class Addshopper extends Component {
    constructor () {
        super();
        this.state = {
            num: 0
        }
    }
    tiao () {
        // console.log(this, '111111111111111111111111');
        const {history} = this.props;
        history.push('/shopcart');
    }
    handleClick () {
        const {changeNum} = this.props;
        changeNum();
        
    }
    render () {
        const {num} = this.props;
        return (
            <div className="di">
                <p className="op" onClick={this.tiao.bind(this)}>{num}</p>
                <List  className="btn" onClick={this.handleClick.bind(this)}>
                <List.Item
                  extra={<Button type="primary" size="small" inline>small</Button>}
                  multipleLine
                >
                  加入购物车
                </List.Item>
              </List>
            </div>
        )
    }
};
export default Addshopper;