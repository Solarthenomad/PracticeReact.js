import React, {Component} from 'react';
import {Badge, Button} from 'reactstrap';

class R035_ReactstrapBadges extends Component {
    render() {
        return(
        <div>
            
            <h1>PRODUCT NAME 
                <Badge color ="secondary" >
                    hit
                </Badge>
            </h1>
            <Button>
                Accessor <Badge color = "dark">4</Badge>
            </Button>
        </div>
        )
    }
}