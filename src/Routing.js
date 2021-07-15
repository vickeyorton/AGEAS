import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Claim from './Components/ClaimPage/Claim';
import Question from './Components/QuestionPage/Question';

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/claim" exact component={Claim}/>
                        <Route path="/question" exact component={Question}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Routing
