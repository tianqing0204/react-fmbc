import React, {Component} from 'react';
import './header.css';
class Head extends Component {
    constructor () {
        super();
        this.state = {
            city: null
        }
    }
    componentDidMount () {
        this.setState({
            city: sessionStorage.getItem('cityName')
        })
    }
    render () {
        const {city} = this.state;
        return (
            <div className="header">
                <h3>新人专享满59减30</h3>
                <p>{city}</p>
            </div>
        )
    }
};
export default Head;