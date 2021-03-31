import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends Component {

    render () {
        return (
          <>
            <h1>Index </h1>
            <ul>
              { this.props.cats.map(cat => {
                  return (
                    <li key = {cat.id}>
                        <a href = {`/catshow/${cat.id}`}>
                        {cat.name}
                        </a>
                    </li>
                  )
                })}
            </ul>

          </>
        )
    }
}

export default Index
