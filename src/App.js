import React, { Component } from 'react';
import './App.css';
import './assets/common/css/common.css';
import './assets/common/css/reset.css';
import {ActionNum} from './store/actions/shopcart';
import {connect} from 'react-redux';
import Addshopper from './components/Common/addShopCart';
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    withRouter
  } from 'react-router-dom';
  import { ROUTER_MAP } from './router/routermap';
  const mapStateToProps = (state) => {
  return {
    num: state.shopcart.num
  }
}
  @withRouter
  @connect(mapStateToProps)
class App extends Component {
  gaibian () {
    const {dispatch} = this.props;
    dispatch(ActionNum());
  }
  render() {
    // console.log(this, '1111111111111');
    const {history, num} = this.props;
    const pd = history.location.pathname;
    return (
      <div className="App">
        <div className="contend">
      {
          ROUTER_MAP.ROUTE.map((v, i) => {
            return <Route key={i} path={v.path} exact component={v.component}></Route>
          })
        }
        </div>
        <div className="footer">
          
        {

          /\/dell/.test(pd)?
          <Addshopper num = {num} changeNum={this.gaibian.bind(this)}></Addshopper> 
          : 
          ROUTER_MAP.NAV.map((v, i) => {
            return <NavLink key={i}  to={v.to}>{v.text}</NavLink>
          })
        }
        </div>
        {/* <Route path="/" exact render={()=>(<Redirect to="/vips"></Redirect>)}></Route> */} 
      </div>
    );
  }
}

// export default connect(mapStateToProps)(App);
export default App;
