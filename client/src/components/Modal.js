import React from "react";

const Modal = props => {
    return (
        <div class='modal-container'>
            <div class='modal-content'>
                <div class='modal-header'>
                    <h3>MODAL TITLE HERE</h3>
                </div>
                <div class='modal-body'>
                    MODAL CONTENT GOES HERE
                </div>
                <div class='modal-footer'>
                    <button class='modal-button'>Close</button>
                </div>
            </div>
        </div>
    )
}


export  default Modal