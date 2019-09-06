import React from 'react'
import { useInput } from './hooks-input'
import { API_URL } from '../Nav/config'

const WriteComment = (props) => {
    const { value:name, bind:bindNameInput, reset:resetNameInput } = useInput('');
    const { value:comment, bind:bindCommentInput, reset: resetCommentInput } = useInput();
    const userEmail = props.email
    const state = {name, comment, userEmail}

    const handleSubmit = async (event) => {
        event.preventDefault()
        await fetch(`${API_URL}/comments`, {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(state)
        }).then(() => console.log(state))
        .then(resetNameInput())
        .then(resetCommentInput())
        .then(() => alert('Thanks for Your Comment'))
        .catch(err => console.log(err))
    }

    return(
        <div>
            <fieldset id="commentFieldset">
            <legend htmlFor="commentFieldset">Write a comment!</legend>
            <form className={props.formClass} onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} {...bindNameInput}/>
                <label htmlFor="comment">Comment</label>
                <textarea id="comment" type="text" value={comment} {...bindCommentInput}/> <br/>
                <input type='submit' value="Submit" />
            </form>
        </fieldset> 
        </div>
    )
}

export default WriteComment