import React from "react";
import { Component } from "react";

class R072_onSubmit extends Component {

    Submit() {
        var inputValue = document.getElementById("inputId").ariaValueMax;
        console.log("inputValue" +inputValue);
        e.preventDefault();
    }

    render() {
        return (
            <form>
                <input type="text" name="inputName" id="inputId"/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}