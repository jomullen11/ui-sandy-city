import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import RelatedArticles from '../Pages/RelatedArticles'
import underConstruction from '../Pages/UnderConstruction';

const Routing = () => {
    return(
    <>
        <Switch>
            {/* <Route exact path='/' component={ underConstruction } /> */}
            <Route exact path='/' component={ Home } />
            <Route path='/home' component = { Home } />
            <Route path='/related-articles' component = { RelatedArticles } />
        </Switch>
    </>
    )}

    export default Routing