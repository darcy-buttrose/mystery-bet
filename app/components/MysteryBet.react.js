/**
 * Created by Darcy on 17/09/2015.
 */
import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import QuickPick from './QuickPick.react';
import CustomMystery from './CustomMystery.react';

export default class MysteryBet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bet: props.bet
        };
    }

    render() {
        return (
            <Tabs defultActiveKey={1}>
                <Tab eventKey={1} title="Quick Pick">
                    <QuickPick bet={this.state.bet}/>
                </Tab>
                <Tab eventKey={2} title="Customise Mystery">
                    <CustomMystery bet={this.state.bet}/>
                </Tab>
            </Tabs>
        );
    }
}