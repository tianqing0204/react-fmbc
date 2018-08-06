import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
@withRouter
class List extends Component {
    handleClick () {
        // console.log(this.props, '11111111111111111111111');
        const {history} = this.props;
        history.push('/dell');

    }
    render () {
        
        const {list} = this.props;
        return (
            <div onClick={this.handleClick.bind(this)}>
                <img src={list.image} alt=""/>
                {list.name}
                
            </div>
        )
    }
};
export default List;
