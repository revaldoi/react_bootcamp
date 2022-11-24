import React, { Component } from "react";

class LifeCycle extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log('constructor')
    }

    static getDerivedStateFormProps(props, state) {
        console.log('getDerivedStateFormProps')
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount')
        this.setState({
            count: this.state.count
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevSate) {
        console.log('getSnapshotBeforeUpdate')
    }

    componentDidUpdate(prevProps, prevSate, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    handlePlus = () => {
        this.setState({
            count: this.state.count +1
        })
    }

    render(){
        console.log('render')
        return(
            <button onClick={this.handlePlus}>Component button: {this.state.count}</button>
        )
    }
}

export default LifeCycle;