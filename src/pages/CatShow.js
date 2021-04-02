import React, { Component } from "react";
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Show extends Component {

    render () {
        const cat = this.props.cat;

        return (
            <>
            <h1>Show </h1>
            <div>Name: { cat.name }</div>
            <div>Age: { cat.age }</div>
            <div>Enjoys: { cat.enjoys }</div>
            <NavLink to={ `/catedit/${this.props.cat.id}` }>
             <Button color="secondary">
               Edit Cat Profile
             </Button>
           </NavLink>
            </>
        )
    }
}

export default Show
