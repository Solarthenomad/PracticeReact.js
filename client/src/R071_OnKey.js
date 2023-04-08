import React from "react";
import { Component } from "react";

class R071_OnKey extends Component {
    OnKey(event, e) {
        var val = e.target.value;
        console.log('event :' +event+",value :" + val);

    }

    render() {
        return(
            <>
                onKeyDown : <input type="text" onKeyDown={e => this.OnKey("onKeyDown", e)}/><br />
                onKeyPress : <input type="text"/>
                onKeyUp : <input />
            </>

        )
    }
}

export default R071_OnKey;