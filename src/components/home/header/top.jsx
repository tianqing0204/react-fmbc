import React, {Component} from 'react';
import { Icon, Grid } from 'antd-mobile';
import './top.css';
const topimg = require('../../../assets/img/img_20161026155951214.png');
class Top extends Component {
    constructor () {
        super();
        this.state = {
            cityName: null
        }
    }
    componentDidMount () {
        this.setState({
            cityName: sessionStorage.getItem('cityName')
        }, () => {
            console.log(this.state.cityName);
        })
    }
    render () {
        return (
            <div className="topimg">
                <img src={topimg} alt=""/>
                <p>
                <Icon type="search" size="md" color="red" />
                <span>搜索</span>

                </p>
               
              
                <h1>
                    {this.state.cityName}
                </h1>
            </div>

        );
    }
};
export default Top;
