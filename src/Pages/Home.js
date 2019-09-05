import React, { useState, useEffect } from "react";
import ArticlePresenter from '../Components/ArticlePresenter'
import WriteComment from "../Components/Write-comment";
import CommentsPresenter from "../Components/Comments-presenter";
import { API_URL } from "../Nav/config";
import PageInput from '../Components/PageInput'
import CommentBox from '../Components/CommentBox'

const Home = (props) => {
    const [email, setEmail] = useState('jordantmullen11@gmail.com')
    const [isAdmin, setAdmin] = useState(false)

    const setAdminState = () => {
        if (email === 'jordantmullen11@gmail.com' || email === 'jscojos@gmail.com') {
            setAdmin(true)
        } else {
            setAdmin(false)
        }
    }

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
    setAdminState()
});

return (

    <div className="container home-page">
    <h1 className="display6">How Sandy City Steals Land</h1>

    <PageInput isAdmin={isAdmin} />

    <ArticlePresenter  isAdmin={isAdmin} />

    <hr />

    <CommentBox isAdmin={isAdmin}/>

    </div>
);
};

export default Home;
