import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class New extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: '',
        age: '',
        enjoys: ''
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let {form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createNewCat(this.state.form)
    this.setState({ submitted: true })
  }

    render () {
        return (
            <>
              <h1>Add Kitty</h1>
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={ this.state.form.name}
                    onChange={ this.handleChange}
                    placeholder="Enter Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Age">Age</Label>
                    <Input
                      type="number"
                      name="age"
                      value={ this.state.form.age}
                      onChange={ this.handleChange}
                      placeholder="How old are you?" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="enjoys">Enjoys</Label>
                      <Input
                        type="text"
                        name="enjoys"
                        value={ this.state.form.enjoys}
                        onChange={ this.handleChange}
                        placeholder="What do you enjoy?" />
                      </FormGroup>
                    <Button onClick= { this.handleSubmit }>New Cat Liter</Button>
                </Form>
                {this.state.submitted && <Redirect to="/catindex"/>}
            </>
        )
    }
}

export default New
