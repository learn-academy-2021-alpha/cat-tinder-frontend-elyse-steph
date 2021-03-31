import React, { Component } from "react";

class Show extends Component {

    render () {
        const cat = this.props.cat;

        return (
            <>
            <h1>Show </h1>
            <div>Name: { cat.name }</div>
            <div>Age: { cat.age }</div>
            <div>Enjoys: { cat.enjoys }</div>
            </>
        )
    }
}

export default Show