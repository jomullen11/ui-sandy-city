//this file presents my info to the screen
import React, { Component, setState } from 'react'
import { API_URL } from '../Nav/config'
import UpdateComment from './UpdateComment'

class CommentsPresenter extends Component {

    state = {
        isUpdating: false,
        commentRead: this.props.commentRead
        // isAdmin is defined inside the conditional rendering
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
        <UpdateComment read={this.props.commentRead} closeUpdate={this.toggleUpdate} />
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
        const isAdmin = this.props.isAdmin
        const email = this.props.email
        return(
            <div>
                <fieldset className='mb-3'>
                    <ul>
                        <p className='comment-body mb-1 mt-3'>{commentRead.comment}</p>
                        <h4 className='comment-name display-5'> - {commentRead.name}</h4>
                    </ul>
                    {/* Update and Delete buttons if isAdmin is true */}
                    {
                        isAdmin || email === commentRead.userEmail ?
                        this.state.isUpdating ? <this.updateForm /> : <this.buttons />
                        :
                        null
                    }
                </fieldset>
            </div>
        )
    }
}

export default CommentsPresenter