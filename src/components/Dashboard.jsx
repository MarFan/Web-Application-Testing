import React, { useState, useEffect } from 'react';

import { Button} from 'semantic-ui-react';

import useLocalStorage from '../hooks/useLocalSotrage';

const Dashboard = (props) => {

    const action = (type) => {
        props.updateBoard(type)
    }

    return(
        <div style={{marginTop: '1.5rem'}}>
            <Button.Group color="blue" data-testid="dashboard">
                <Button onClick={() => action('strike')}>Strike</Button>
                <Button onClick={() => action('ball')}>Ball</Button>
                <Button onClick={() => action('foul')}>Foul</Button>
                <Button onClick={() => action('hit')}>Hit</Button>
            </Button.Group>
        </div>
    )
}

export default Dashboard;