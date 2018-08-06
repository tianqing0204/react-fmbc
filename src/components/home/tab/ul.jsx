import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import axios from 'axios';
import List from '../list';
import './ul.css';
class Demo extends React.Component {
  constructor () {
    super();
    this.state = {
      arr: null
    }
  }

  renderContent = tab =>{
    const {productList} = this.props;
    // console.log(this.props);
    // console.log(productList, '11111111111111111');
 
    return (<div className="tab-count">
       {productList.map((v, i) => {
          return <List key={i} list={v}></List>
        })
      }
    </div>);
    }
  handle (ha) {
    console.log(ha,'111111111111111111111111111111111111111111111111');
    this.props.changid(ha.internal_id);
  }
  render() {
    // console.log(this.props);
    const {categoryList} = this.props;
      for(let item of categoryList) {
        item.title = item.name;
      }
    const tabs = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ];
    // console.log(tabs);
    return (
      <div className="tab">
        <WhiteSpace />
        <Tabs onChange={this.handle.bind(this)} tabs = {categoryList}>
          {this.renderContent}
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}
export default Demo;