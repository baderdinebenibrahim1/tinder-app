import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from 'react'
import "./Header.css"
import { Link , useHistory } from 'react-router-dom';

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                   <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            ) : (
                
                <IconButton>
                   <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
            )}
            <Link to="/">
                <img 
                className="tinder__logo"
                src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
                alt="tinder logo"
                /> 
            </Link>
            <Link to="/chat">
                <IconButton>
                   <QuestionAnswerIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link> 
        </div>
    )
}

export default Header
