import React, {Component} from 'react';
import Header from './header/header';
import Contends from './contends/contends';
class Dell extends Component {
    render () {
        // console.log(this.props);
        const {dell} = this.props;
        // console.log(dell);
        return (
            <div>
                {/* <img src={dell.cart_image} alt=""/>
                {dell.name} */}
                <Header></Header>
                <Contends {...this.props}></Contends>
                
            </div>
        )
    }
};
export default Dell;