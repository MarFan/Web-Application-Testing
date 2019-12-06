import React from 'react';
import { Grid, Header, Button, Label, Divider, Icon } from 'semantic-ui-react';

const Display = (props) => {
    let inningIcon;
    if(props.scoreboard.inningHalf) {
        inningIcon = 'angle down';
    } else {
        inningIcon = 'angle up';
    }

    const inningOuts = [];

    for(let i=0; i < 3; i++){
        inningOuts.push("<Icon name='circle outline' />")
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Header as="h1">Play Ball!
                        <Header.Subheader>
                            {props.actionMsg}
                        </Header.Subheader>
                    </Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={5}>    
                    <div>
                        <Button as="div" labelPosition="right" style={{width: '100%', fontSize: '1.5rem'}} data-testid="awayTeam">
                            <Button basic color="blue" fluid>Lions</Button>
                            <Label as="a" color="blue" pointing="left">{props.scoreboard.away}</Label>
                        </Button>
                    </div>
                    <div>
                        <Button as="div" labelPosition="right" style={{width: '100%', fontSize: '1.5rem'}} data-testid="homeTeam">
                            <Button basic color="yellow" fluid>Tigers</Button>
                            <Label as="a" color="yellow" pointing="left">{props.scoreboard.home}</Label>
                        </Button>
                    </div>
                </Grid.Column>
                <Grid.Column width={1} style={{fontSize: '2rem', textAlign: 'center'}}>
                    <div>
                        {props.scoreboard.inning}
                    </div>
                    <Divider />
                    <div>
                        <Icon name={inningIcon} />
                    </div>
                </Grid.Column>
                <Grid.Column width={2} style={{textAlign: 'center'}}>
                    <div data-testid="atbatstats" style={{fontSize: '2rem'}}>{props.scoreboard.strike} - {props.scoreboard.ball}</div>
                    <Divider />
                    <div className="outs">
                        <Icon name="circle outline" />
                        <Icon name="circle outline" />
                        <Icon name="circle outline" />
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
} 

export default Display;