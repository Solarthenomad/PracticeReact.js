import React from "react";
import { Component } from "react";

class R069_onMouseOver extends Component {
    MouseOver() {

    }

    render() {
        return (
            <>
               <div onMouseOver={e => this.MouseOver("div")}>
                <h3>DIV onMouseOver</h3>

               </div>
            </>
        )
    }
}