import React, { useState, useEffect } from "react";
import ArticlePresenter from '../Components/ArticlePresenter'
import WriteComment from "../Components/Write-comment";
import CommentsPresenter from "../Components/Comments-presenter";
import { API_URL } from "../Nav/config";
import PageInput from '../Components/PageInput'

const Home = (props) => {
    const [email, setEmail] = useState('jordantmullen11@gmail.com')
    const [isAdmin, setAdmin] = useState(false)
    const [commentRead, setCommentRead] = useState([]);
    // const [bulletPoints, setBulletPoints] = useState([])
    // console.log(sectionId)

    const setAdminState = () => {
        if (email === 'jordantmullen11@gmail.com' || email === 'jscojos@gmail.com') {
            setAdmin(true)
        } else {
            setAdmin(false)
        }
    }

const getRead = async (props) => {
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

const handleDelete = async (event, id) => {
    event.prevenDefault()
    console.log(id)
    await fetch(`${ API_URL }/comments/${ id }`, {
    method: "DELETE",
    }).then(data => data.map((element) => console.log(element.id)))
    .then(() => alert('Deleted Succesfully'))
    .catch(err => console.log(err))
}

useEffect(() => {
    getRead();
    setAdminState()
});

return (

    <div className="container home-page">
    <h1 className="display6">How Sandy City Steals Land</h1>
        {/* <BulletPoints /> */}
        {/* {bulletPoints.bulletPointRead.sectionId} */}

    <PageInput isAdmin={isAdmin} />

    <ArticlePresenter  isAdmin={isAdmin} />

    <hr />

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

    {/* Delete Comment Modal */}

    </div>
);
};

export default Home;
