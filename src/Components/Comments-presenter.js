//this file presents my info to the screen
import React, { Component } from 'react'
import { API_URL } from '../Nav/config'
import Update from './Update'

class Presenter extends Component {

    state = {
        isAdmin: this.props.isAdmin,
        isUpdating: false,
        commentRead: this.props.commentRead
    }

    handleDelete = async () => {
        await fetch(`${ API_URL }/comments/${ this.props.commentRead._id }`, {
        method: "DELETE",
        }).then(() => alert('Deleted Succesfully'))
        .catch(err => console.log(err))
    }

    toggleUpdate = () => {
        this.setState({ isUpdating: !this.state.isUpdating})
    }

    updateForm = () => (
        <div>
        <Update read={this.props.commentRead} closeUpdate={this.toggleUpdate} />
        <input type="button" value="Cancel" onClick={this.toggleUpdate} />
        </div>
    )

    buttons = () => (
        <div className="d-flex justify-content-around">
            <input type="button" className="btn btn-outline-info" value="Update" onClick= { this.toggleUpdate } />
            <button type="button" className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
        </div>
    )
    render() {
        const commentRead = this.props.commentRead
        return(
            <div>
                <fieldset className='mb-3'>
                    <ul>
                        <p className='comment-body mb-1 mt-3'>{commentRead.comment}</p>
                        <h4 className='comment-name display-5'> - {commentRead.name}</h4>
                    </ul>
                    {/* Update and Delete buttons if isAdmin is true */}
                    {
                        this.state.isAdmin ?
                        this.state.isUpdating ? <this.updateForm /> : <this.buttons />
                        :
                        null
                    }
                </fieldset>
            </div>
        )
    }
}

export default Presenter