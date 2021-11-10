import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Card } from '../RepoCard'
import { SearchForm } from '../SearchForm';

export const Repo = () => {
    const [showRepos, setShowRepos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(useSelector(state => state.isLoading));
    const username = useSelector(state => state.username)

    useEffect (() => {
        async function fetchRepos() {
            try {
                setError(null)
                if (username === "") 
                {
                    setError("");
                }
                else
                {
                    let { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
                    if (!data.length) {
                        setError("Oh no, there are no public repos for this user");
                    } else {
                        const result = data.reverse().map(result => {
                            let repoName = result.name;
                            let url = result.html_url;
                            let forks = result.forks;
                            let openIssues = result.open_issues;
                            let watchers = result.watchers;
                            let language = result.language;
                            return {repoName, url, forks, openIssues, watchers, language};
                        });
                        setShowRepos(result);
                        setLoading(true)
                }
            }
            } catch (err) {
                console.warn(err);
                setError("This user does not exist")
            }
        }

        fetchRepos();
    }, [username])


    return (
        <div id = "list">
            {
                (error && loading) ? <p>{error}</p> : showRepos.map((r, i) => <Card key ={i} repoName={r.repoName} forks={r.forks} url={r.url} openIssues={r.openIssues} language={r.language} watchers={r.watchers}/>)
            }
        </div>
    )
    
    }