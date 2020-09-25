import React from 'react'
import '../../assets/css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Stats({ stats }) {
    return (
        <div>
            <h3 className="h3--repositories">Repositories</h3>
            <div className="div--repo--container">
                {stats.map((stat, i) => {
                return <div className="div--repo" key={i}>
                    <h4 id="repoName">{stat.name}</h4>
                    <p>{stat.description}</p>
                    <a href={stat.html_url} target={'_blank'} rel={'noopener noreferrer'} ><span><FontAwesomeIcon icon="coffee"/> Go to the repository</span></a>
                </div>})}
            </div>

        </div>
    )
}

export default Stats
