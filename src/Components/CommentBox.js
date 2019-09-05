import React, { useState, useEffect } from 'react'
import { API_URL } from "../Nav/config";
import WriteComment from "../Components/Write-comment";
import CommentsPresenter from "../Components/Comments-presenter";

const CommentBox = (props) => {
    const [commentRead, setCommentRead] = useState([])

    const isAdmin = props.isAdmin

    const getComments = async () => {
        await fetch(`${API_URL}/comments`)
        .then(response => response.json())
        .then(data =>
            data.map(element =>
            <CommentsPresenter
                commentRead={element}
                key={element._id} /* refresh={this.getRead} */
                isAdmin = {isAdmin}
            />
            )
        )
        .then(components => setCommentRead(components))
        .catch(err => console.log(err));
    };

    useEffect(() => {
        getComments();
    })

    return(
        <>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
        <a
            className="nav-link active"
            id="read-tab"
            data-toggle="tab"
            href="#read"
            role="tab"
            aria-controls="read"
            // aria-selected="false"
        >
            Comments
        </a>
        </li>
        <li className="nav-item">
        <a
            className="nav-link"
            id="read-and-write-tab"
            data-toggle="tab"
            href="#read-and-write"
            role="tab"
            aria-controls="read-and-write"
            // aria-selected="true"
        >
            Read Comments
        </a>
        </li>
        <li className="nav-item">
        <a
            className="nav-link"
            id="write-tab"
            data-toggle="tab"
            href="#write"
            role="tab"
            aria-controls="write"
            // aria-selected="false"
        >
            Write a Comment
        </a>
        </li>
    </ul>
    <div className="tab-content" id="myTabContent">
        <div
        className="tab-pane fade"
        id="read-and-write"
        role="tabpanel"
        aria-labelledby="read-and-write-tab"
        >
        {commentRead}
        </div>
        <div
        className="tab-pane fade show active"
        id="read"
        role="tabpanel"
        aria-labelledby="read-tab"
        >
        {
            <WriteComment formClass="write-comment container d-flex flex-column" />
        }{" "}
        <br />
        {commentRead}
        </div>
        <div
        className="tab-pane fade"
        id="write"
        role="tabpanel"
        aria-labelledby="write-tab"
        >
        {
            <WriteComment formClass="write-comment container d-flex flex-column" />
        }
        </div>
    </div>
        </>
    )
}

export default CommentBox