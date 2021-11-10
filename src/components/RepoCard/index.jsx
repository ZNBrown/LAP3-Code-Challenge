import React from 'react'

export const Card = ({ repoName, url, forks, openIssues, watchers, language}) => {
    return (
        <>
            <div className = "cardCont">
                <h3><a href ={link}>{repoName}</a></h3>
                <p>Forks: {forks}</p>
                <p>Language: {language}</p>
                <p>Issues: {openIssues}</p>
            </div>
        </>
    )
}
