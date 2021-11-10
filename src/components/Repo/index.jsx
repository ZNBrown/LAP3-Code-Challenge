import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const Repo = () => {
    const [showRepos, setShowRepos] = useState();
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);

    const updateUsername = (value) => {
        setUsername(value);
    }
    
    useEffect (() => {
        async function fetchRepos() {
            try {
                setError(null)
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
                }
            } catch (err) {
                console.warn(err);
                setError("This user does not exist")
            }
        }

        fetchRepos();
    }, [username])
}