import React, {Component} from 'react';
import { Icon, Grid } from 'antd-mobile';
import { List, InputItem, Toast } from 'antd-mobile';
import {Posts} from '../../../common/api';
import {withRouter} from 'react-router-dom';
import './tou.css';
@withRouter
class Tou extends Component {
    constructor () {
        super();
        this.state = {
            hasError: false,
            value: '',
            lock: false,
            auth: ''
        } 
    }
    handleClick () {
        const {value, lock} = this.state;
        if (lock) {
            Posts('/yzm', {
                phone: value
            }).then((res) => {
                console.log(res);
            })
        }  
    }
    onErrorClick = () => {
        if (this.state.hasError) {
          Toast.info('请输入十一位数字');
        }
      }
      blurs (res) {
         if (res.length === 13) {
             this.setState({
                lock: true
             })
         }

      }
      onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
          this.setState({
            hasError: true,
          });
        } else {
          this.setState({
            hasError: false,
          });
        }
        this.setState({
          value,
        });
      }
      onChange1 = (auth) => {
         
        this.setState({
          auth,
        });
      }
      login () {
          const {value, auth} = this.state;
        Posts('/login', {
            phone: value,
            yzm: auth
        }).then((res) => {
            console.log(res);
        })
      }
      goBack () {
          const {history} = this.props;
          // console.log(history);
          history.go(-1);

      }
    render () {
        // console.log(this.props);
        return (
            <div className="tou">
                  
                <div className="lefts" onClick={this.goBack.bind(this)}>
                <Icon type="left" />
                </div>
                <h6>验证手机</h6>
                <List renderHeader={() => 'Confirm when typing'}>
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={this.state.value}
                        onBlur={this.blurs.bind(this)}
                    >手机号码
                    </InputItem>
                    <button onClick={this.handleClick.bind(this)}>获取验证码</button> 
                    <InputItem
                        type="phone"
                        placeholder="请输入验证码"
                        onChange={this.onChange1}
                        value={this.state.auth}
                    >验证码
                    </InputItem>
                    
                </List>
                <button onClick={this.login.bind(this)}>登录</button> 
            </div>
        )
    }
};
export default Tou;