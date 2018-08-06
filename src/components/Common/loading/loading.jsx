import React, {Component} from 'react';
import './loading.css';
const jiazai = require('../../../assets/img/loading-gif-vip.gif');
class Loading extends Component {
    render () {
        return (
            <div className="jiazai">
                <img className="ku" src={jiazai} alt=""/>
            </div>
        );
    }
};
export default Loading;
