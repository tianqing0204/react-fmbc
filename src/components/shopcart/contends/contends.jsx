import React, {Component} from 'react';
import {getpro} from '../../../common/home';
import './contends.css';
// import {connect} from 'react-redux';
class Neiron extends Component {
    constructor () {
        super();
        this.state = {
            shopnum: 0
        }

    }
    handleClick (ind) {
        const {gaibian, list} = this.props;
        this.setState({
            shopnum: this.state.shopnum+1
        })
        gaibian(list.price);
    }
    jian (inds) {
        const {jianP, list} = this.props;
        jianP(list.price);
        if (inds >0) {
            this.setState({
                shopnum: this.state.shopnum-1
            })
        }   
    }
    render () {
        const {list} = this.props;
        const {shopnum} = this.state;
        return (
            <div className="nr">
                <dl className="gwc">
                    <dt>
                    <img src={list.images.cart} alt=""/>
                    </dt>
                    <dd>
                    <p>{list.name}</p>
                    <p>{list.price/100}</p>
                    <p>
                        <span onClick={this.handleClick.bind(this, shopnum)}>+++</span>
                        <span>{shopnum}</span>
                        <span onClick={this.jian.bind(this, shopnum)}>---</span>
                    </p>

                    </dd>
                </dl>                
            </div>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        list: state.shopcart.list
    }
}
export default Neiron;