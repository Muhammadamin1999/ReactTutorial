import React, {useState} from "react";

function Modal({isOpen, onClose, children}){
    const modalStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: isOpen? "block" : "none",
    };
    const contentStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        background: "white",
    };

    return (
        <div style={modalStyle} onClick={onClose}>
            <div style={contentStyle} onClick={(e)=> e.stopPropagation()}>
            {children}
            </div>
        </div>
    )
}
export default Modal; 