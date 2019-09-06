import React, { useState, useEffect } from "react";
import ArticlePresenter from '../Components/ArticlePresenter'
import { API_URL } from "../Nav/config";
import PageInput from '../Components/PageInput'
import CommentBox from '../Components/CommentBox'

const Home = (props) => {
    const [email, setEmail] = useState('jdogm@msn.com')
    const [isAdmin, setAdmin] = useState(false)

    const setAdminState = () => {
        if (email === 'jordantmullen11@gmail.com' || email === 'jscojos@gmail.com') {
            setAdmin(true)
        } else {
            setAdmin(false)
        }
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

    <CommentBox isAdmin={isAdmin} email={email}/>

    </div>
);
};

export default Home;
