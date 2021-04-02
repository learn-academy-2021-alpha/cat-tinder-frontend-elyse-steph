import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

class Index extends Component {

    render () {
        return (
          <>
            <h1>Find your purrfect mate!</h1>
            <ul>
              { this.props.cats.map(cat => {
                  return (
                    <li key = {cat.id}>
                        <NavLink to= {`/catshow/${cat.id}`}>
                        {cat.name}
                        </NavLink>
                    </li>
                  )
                })}
            </ul>

          </>
        )
    }
}

export default Index
