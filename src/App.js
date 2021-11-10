import React from 'react';
//this is bodged because we have to export default in navbar for the test to work
import * as Pages from './pages';
import {Repo} from './components/Repo'
import {Header, Footer} from './layout'


function App() {
    return (
        <div id="app">
            <Header/>
            <main id="content">
            <Pages.Search/>
            <Repo/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;
