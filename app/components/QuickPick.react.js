/**
 * Created by Darcy on 17/09/2015.
 */
import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

export default class QuickPick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bet: props.bet
        };
    }

    render() {
        return (
            <ButtonGroup>
                <Button>$3 Combo</Button>
                <Button>$10 Quaddie</Button>
                <Button>$3 Trifecta</Button>
                <Button>$1 First 4</Button>
                <Button>$5 Win &amp; Place</Button>
                <Button>$8 Combo</Button>
            </ButtonGroup>
        );
    }
}