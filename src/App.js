import React from 'react';
//this is bodged because we have to export default in navbar for the test to work
import * as Pages from './pages';
import {Repo} from './components/Repo'


function App() {
    return (
        <div id="app">
            <main>
                <Pages.Search/>
                <Repo/>
            </main>
        </div>
    )
}

export default App;
