import React from 'react';
//this is bodged because we have to export default in navbar for the test to work
import * as Pages from './pages';
import {Repo} from './components/Repo'
import {Header, Footer} from './layout'


function App() {
    return (
        <React.Fragment>
        <Header/>
        <div id="app">
            <main>
            <Pages.Search/>
            <Repo/>
            </main>
        </div>
        <Footer/>
        </React.Fragment>
    )
}

export default App;
