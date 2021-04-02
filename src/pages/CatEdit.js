import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class CatEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
          form: {
            name: this.props.cat.name,
            age: this.props.cat.age,
            enjoys: this.props.cat.enjoys
          },
          submitted: false
        }
      }

      handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
      }

      handleSubmit = () => {
        this.props.updateCat(this.state.form, this.props.cat.id)
        this.setState({ submitted: true })
      }

    render () {
        return (
            <>
            <h1>Update Kitty </h1>
            <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    onChange={ this.handleChange}
                    value={ this.state.form.name}
                    placeholder="Enter Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Age">Age</Label>
                    <Input
                      type="number"
                      name="age"
                      onChange={ this.handleChange}
                      value={ this.state.form.age}
                      placeholder="How old are you?" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="enjoys">Enjoys</Label>
                      <Input
                        type="text"
                        name="enjoys"
                        onChange={ this.handleChange}
                        value={ this.state.form.enjoys}
                        placeholder="What do you enjoy?" />
                      </FormGroup>
                    <Button onClick= { this.handleSubmit }>Update Cat Liter</Button>
                </Form>
                {this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}` }/>}
            </>
        )
    }
}

export default CatEdit
