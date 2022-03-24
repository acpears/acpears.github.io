import React from 'react'

export default function About() {
    return (
        <div className="container mt-5">
            <h1>
                A little bit about myself...
            </h1>
            <hr className="mb-3" />
            <h3 className="my-3">Programming Skills</h3>
            <div className="w-75">
                <div className="progress my-2 w-100 h-100">
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '10%' }} >JavaScript</div>
                    <div className="progress-bar" role="progressbar" style={{ width: '56%' }} >56%</div>
                </div>
                <div className="progress my-2 w-100 h-100">
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '10%' }} >ReactJS</div>
                    <div className="progress-bar" role="progressbar" style={{ width: '56%' }} >56%</div>
                </div>
                <div className="progress my-2 w-100 h-100">
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '10%' }} >JavaScript</div>
                    <div className="progress-bar" role="progressbar" style={{ width: '56%' }} >56%</div>
                </div>
                <div className="progress my-2 w-100 h-100">
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '10%' }} >ReactJS</div>
                    <div className="progress-bar" role="progressbar" style={{ width: '56%' }} >56%</div>
                </div>
            </div>

            <hr />
            <h3>Personal:</h3>
            <p> I was born in Vancouver BC and moved to Quebec when I was 11 years old (1999) </p>
            <p> Fluent in french and english </p>
            <p> Avid mountain climber and snowboarder </p>
            <p> I love to learn, discuss, listen to anything related to physics </p>
            <p> Programming and computer science is a passion</p>



        </div>
    )
}
