import React, { ReactFragment, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './issueGallery.css';

import {Card, CardContent,Typography} from '@material-ui/core';

const IssueGallery = (issues) => {
    const dataToDisplay = issues.issueDataAll
    
    const issueInfo = dataToDisplay.map(
        item =>(
            <Card className="issueCards">
                <CardContent>
                    <Typography className="title">{item.number}</Typography>
                    <Typography >{item.title}</Typography>
                    <Typography >{item.state}</Typography>
                </CardContent>
            </Card>
        )
    )
    return(
        <div>
            {issueInfo}
        </div>
    )
}
export default IssueGallery;
//a nav bar will send change the state
//isLoading ? (<CircularProgress />) : 