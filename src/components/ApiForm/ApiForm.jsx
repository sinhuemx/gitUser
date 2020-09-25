import React from 'react'
import '../../assets/css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ApiForm({ onSubmit, onChange }) {
    return (
        <div className="form-container">
          <form action="input" role="search" class="search" onSubmit={onSubmit}>
            <input type="text" class="search-input" placeholder="Find Github User" aria-label="Search" onChange={onChange} />
            <button type="submit" value="Submit" class="search-button"><span><FontAwesomeIcon icon="coffee"/>Search</span></button>
          </form>
        </div>

    )
}

export default ApiForm
