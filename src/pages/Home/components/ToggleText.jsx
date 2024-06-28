import React from 'react';

const ToggleText = ({ show, handleShow, title, description, }) => {
   
    
    return (
        <div>
            <button onClick={handleShow}>Toggle Me</button>
            {

            show ? <p>This is been Toggled onn!</p> :
            <p>Nothing To See here</p>

            }
        </div>
    );
};

export default ToggleText;
