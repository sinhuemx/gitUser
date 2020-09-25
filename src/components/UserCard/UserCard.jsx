import React from 'react'
import '../../assets/css/style.css';

function Usercard({ name, avatar, following, followers, bio, onButton }) {
    return (

        <div className="center">
            <div className="form-container">
                <div className="">
                    <img src={avatar} alt="Profile" className="img--avatar"/>
                    <h4 className="h4--name">{name}</h4>
                </div>
                <div className="div--text--container">
                    <p>Following: {following}</p>
                    <p>Followers: {followers}</p>
                    <p className="p--bio">{bio}</p>
                    <button onClick={onButton} className="button--stats">Repositories</button>
                </div>
            </div>
        </div>
    )
}

export default Usercard
