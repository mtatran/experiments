import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import IssueGallery from './IssueGallery';
import {LinearProgress} from '@material-ui/core';
import './StateDisplay.css'
import {Link} from 'react-router-dom'

const StateDisplay = (url) => {
    const [issues, setIssues] = useState({ Data: [] });
    const [isLoading, setIsLoading] = useState(true);
    const [state, setState] = useState('closed')
    const stateUrl =url.url
    
    const fetchIssues = useCallback(async () => {
        axios({
            method:'get',
            url :stateUrl,
            params: {
                state :state
            }
        })
            .then(response => {
                setIssues(response.data);
                setIsLoading(false);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        fetchIssues();
    }, [state]);
 
    try {
        console.log(state)
        const issueData = issues.map(i => {
            return ({
                "number": i.number,
                "title" : i.title,
                "labels": i.labels,
                "comments": i.comments,
                "body": i.body,
                "state" :i.state
            })
        })
        console.log('IssueData', issueData)

        return (isLoading? (<LinearProgress/>) : 
        (
            <>
            <div className="navBar">
                <button onClick={() => { setState('open')}}>
                    open
                </button>
                <button onClick={() => setState('closed')}>
                    closed
                </button>
                <button onClick={() => setState('all')}>
                    all
                </button>
                <IssueGallery issueDataAll={issueData}/>
            </div>
            </>
        ))
    }
    catch (err) {
        return (
            <>
              <LinearProgress/>
            </>
        )
    }
}
export default StateDisplay;
