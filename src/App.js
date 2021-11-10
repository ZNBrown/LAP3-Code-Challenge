import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/NavBar/index';
//this is bodged because we have to export default in navbar for the test to work
import * as Pages from './pages';




function App() {
    return (
        <div id="app">
            <Header/>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Pages.Welcome/>
                    </Route>
                    <Route path="/about" >
                        <Pages.About/>
                    </Route>
                    <Route path="/search" >
                        <Pages.Search/>
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default App;
