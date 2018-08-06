import React, {Component} from 'react';
import './contends.css';
class Contends extends Component {
    render () {
        // console.log(this.props);
        const {dell} = this.props;
        // console.log(dell);
        
        return (
            <div className="contends">
                <div className="shop" id="xq">
                <img src={dell.cart_image} alt=""/>
                <p>{dell.name}</p>

                </div>
                <div className="xing" id="bz">
                    <h3>安全保障</h3>
                </div>
               
            </div>
        )
    }
};
export default Contends;