import React from 'react'
import './style.css';


export const Card = ({ repoName, url, forks, openIssues, watchers, language}) => {
    return (
        <>
            <div className = "cardCont">
                <h3><a href ={url}>{repoName}</a></h3>
                <p>Forks: {forks}</p>
                <p>Language: {language}</p>
                <p>Issues: {openIssues}</p>
            </div>
        </>
    )
}
