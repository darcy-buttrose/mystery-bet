/**
 * Created by Darcy on 17/09/2015.
 */
import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import MysteryBetActions from '../actions/MysteryBetActions';

export default class CustomMystery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bet: props.bet
        };
    }

    changeBetType(productCode) {
        MysteryBetActions.updateProductCode(productCode);
    }

    render() {
        return (
            <ButtonGroup>
                <Button onClick={this.changeBetType.bind(this,'WP')} key={'WP'}>Win &amp; Place</Button>
                <Button onClick={this.changeBetType.bind(this,'T')} key={'T'}>Trifecta</Button>
                <Button onClick={this.changeBetType.bind(this,'Q')} key={'Q'}>Quaddie</Button>
                <Button onClick={this.changeBetType.bind(this,'F')} key={'F'}>First 4</Button>
                <Button onClick={this.changeBetType.bind(this,'QU')} key={'QU'}>Quinella</Button>
            </ButtonGroup>
        );
    }
}