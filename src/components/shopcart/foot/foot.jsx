import React, {Component} from 'react';
import {Posts} from '../../../common/api';
import './foot.css';
class Foot extends Component {
    jiesuan () {
        Posts('/js', {
            products: [
                {
                    id: 118,
                    num: 6
                },
                {
                    id: 130,
                    num: 3
                },
                {
                    id: 18,
                    num: 2
                }

            ]
        }).then((res)=> {
            console.log(res);
        })

    }
    render () {
        // console.log(this.props);
        const {shuliang} = this.props;
        return (
            <div className="jiao">
                <ul>
                    <li></li>
                    <li>合计：
                       {shuliang}
                    </li>
                    <li className="fen" onClick={this.jiesuan.bind(this)}>去结算</li>
                </ul>
            </div>
        )
    }
};
export default Foot;