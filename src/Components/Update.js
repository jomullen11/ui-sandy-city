import React, { Component } from 'react'
import { API_URL } from '../Nav/config'

export default class extends Component{
    state = {
        comment: this.props.read.comment,
        name: this.props.read.name,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault ()
        await fetch(`${ API_URL }/comments/${this.props.read._id}`, {
            method: "PUT",
            body: JSON.stringify(this.state)
        }).then( () => this.setState({
            comment: "",
            name: ""
        }))
        .then(() => alert('Updated Succesfully'))
        .then(() => this.props.closeUpdate())
        .catch( err => console.log(err))
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <h1>Update Comment</h1>
                <input type="text" 
                    value={this.state.comment} 
                    name="comment" 
                    placeholder="Update Comment" 
                    onChange={ this.handleChange } 
                />
                <br/>
                <textarea type="text"
                    value={this.state.name}
                    name="name"
                    placeholder="Update Name"
                    onChange={ this.handleChange }
                />
                <br/>
                <input type="submit" value="Submit" readOnly/>
            </form>
        )
    }
}