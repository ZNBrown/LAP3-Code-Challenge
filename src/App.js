import React from 'react';
//this is bodged because we have to export default in navbar for the test to work
import * as Pages from './pages';
<<<<<<< HEAD
import { Header, Footer } from './layout';



=======
import {Repo} from './components/Repo'
>>>>>>> staging


function App() {
    return (
        <div id="app">
            <Header/>
            <main>
                <Pages.Search/>
                <Repo/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;
