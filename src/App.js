import React, { useState } from 'react';
import '../src/assets/css/style.css';
import ApiForm from './components/ApiForm/ApiForm'
import UserCard from './components/UserCard/UserCard'
import Stats from './components/Stats/Stats'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {

const [ userInput, setUserInput ] = useState('');
const [ name, setName ] = useState('');
const [ avatar, setAvatar ] = useState('');
const [ followers, setFollowers ] = useState('');
const [ following, setFollowing ] = useState('');
const [ bio, setBio ] = useState('');
const [ stats, setStats ] = useState([])

const setData = ({ login, avatar_url, followers, following, bio }) => {
  setName(login);
  setAvatar(avatar_url);
  setFollowers(followers);
  setFollowing(following);
  setBio(bio);
}

const handleSearch = (e) => {
  setUserInput(e.target.value)
}

const handleSubmit = (e) => {
  setStats('')
  e.target.reset();
  e.preventDefault()
  fetch(`https://api.github.com/users/${userInput}`)
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => setData(data))
      } else {
        alert("That user dosen't exist")
      }
    })


}

const handleButton = () => {
  fetch(`https://api.github.com/users/${name}/repos`)
    .then(res => res.json())
    .then(data => setStats(data))
}

  return (
    <div className="App">
      <div className="div--navbar--container">
        <div className="navbar"><p><h1><a href="index.js">Github Repositories</a></h1></p></div>
        <ApiForm onSubmit={handleSubmit} onChange={handleSearch} />
      </div>
      {name.length !== 0 ?
            <div className="div--content--container">
            <UserCard name={name} avatar={avatar} followers={followers} following={following} bio={bio} onButton={handleButton} />
            {stats.length !== 0 ? <Stats stats={stats} /> : <div></div>}
          </div> : <div></div>}

    </div>
  );
}

export default App;
