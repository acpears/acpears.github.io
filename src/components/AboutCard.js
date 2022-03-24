import React from 'react'

export default function About(props) {
    return (

        <div className="about-card2 shadow p-2  rounded">
            <div className="about-card p-4 container">
                <p className="display-10">Hello there! I'm</p>
                <h1 className="display-2">Adam Pearson</h1>
                <p className="lead">Junior Full Stack Developer</p>
                <hr className="my-2" />
                <h6>About</h6>
                <p>
                    Exercitation eiusmod officia dolor nulla consequat ipsum qui in ex consectetur nisi eu sit amet. Sunt irure sunt pariatur in anim proident. Sint ipsum commodo dolore culpa officia laboris.
                </p>
                <p className="lead">
                    <button className="btn btn-primary" onClick={props.modalOpenClose} role="button">About this webpage</button>
                </p>
            </div>
        </div>

    )
}
