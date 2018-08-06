import React, {Component} from 'react';
import Head from './header';
import Neiron from './contends/contends';
import Foot from './foot';
import './shopcart.css';
// import Neiron from './contends';
class Shop extends Component {
    changeJian (shu) {
        const {gbb} = this.props;
        gbb(shu);

    }
    change (val) {
        // console.log(val);
        const {chuan} = this.props;
        chuan(val);
        // console.log(val, '111111111111111111111111111111');

    }
    render () {
        // console.log(this.props, '111111111111111111');
        const {list} = this.props;
        const xsg = list[0].active_item;
        const {shuliang} = this.props;
        return (
            <div className="shop">
                <Head></Head>
                <div className="zj">
                {
                    xsg.map((v, i) => {
                        return <Neiron 
                        key={i} 
                        list={v}
                        shuliang={shuliang}
                        jianP={this.changeJian.bind(this)}
                        gaibian={this.change.bind(this)}
                        ></Neiron>
                    })
                }

                </div>
               
                <Foot shuliang={shuliang}></Foot>

            </div>
        )
    }
};
export default Shop;