import React from 'react'

export default function Project(props) {
    return (
        <div className="container mt-3 p-5 bg-light">
            <h1 className="display-3">{props.name}</h1>
            <a className="lead" href={props.html_url} target="_blank">{props.url}</a>
            <hr className="my-4" />
            <h4>Project Description</h4>
            <p>{props.description}</p>
            <hr className="my-4" />
            <h4>Project includes the following topics</h4>
            {props.topics.map((el) => {
                return <span class="badge bg-secondary m-1">{el}</span>
            })}

            {/* <p className="lead">
                <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
            </p> */}
        </div>

    )
}

