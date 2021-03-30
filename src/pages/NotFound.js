import React, { Component } from "react";

class NotFound extends Component {

    render () {
        return (
            <>
            <div className="error-message">

            <h1>Oops! Cat knocked this page off the table. </h1>
            <img className="error-img" src="https://www.ovrs.com/blog/wp-content/uploads/2020/02/OVRS-Cats-knock-over-shutterstock_1484418140-2000x1977.jpg" alt="Cat knocked the page over, error."/>
            </div>
                
            </>
        )
    }
}

export default NotFound