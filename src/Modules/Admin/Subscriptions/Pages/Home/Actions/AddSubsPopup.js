import React from "react";

// import "../../../../../Assets/Styles/PopUp.css"
import "../../../../../../Assets/Styles/PopUp.css"

const AddSubsPopup = props => {
    return (
        <div className="popup-box">
            <div className="box ">
                {props.content}
            </div>
        </div>
    );
};

export default AddSubsPopup