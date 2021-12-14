import React from 'react';
import ConnectingButton from "./ConnectingButton";
import {useNavigate} from "react-router-dom";

const ConnectingButtons = () => {

    let navigate = useNavigate();

    const pushToJoinRoomPage = () => {
        navigate("/join-room");
    };

    const pushToJoinRoomPageAsHost = () => {
        navigate("/join-room?host=true");
    };

    return (
        <div className='connecting_buttons_container'>
            <ConnectingButton buttonText="Join a Meeting" onClickHandler={pushToJoinRoomPage}/>
            <ConnectingButton createRoomButton buttonText="Host a Meeting" onClickHandler={pushToJoinRoomPageAsHost}/>
        </div>
    )
}

export default ConnectingButtons
