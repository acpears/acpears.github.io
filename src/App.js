import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TopMenuBar from './components/TopMenuBar'
import Home from './components/Home.js'
import About from './components/About.js'
import Project from './components/Project.js'
import CV from './components/CV'
import { Route, Routes } from 'react-router-dom'

function getGitData() {
    const requestOptions = {
        baseURL: "https://api.github.com/users/acpears/repos",
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return axios.request(requestOptions).then((res) => {
        console.log(res.data);
        return res.data
    }).catch((err) => {
        if (!err.response) {
            return Promise.reject("Server error");
        }
        return Promise.reject(err.response.data.error)
    });
}

export default function App() {

    const [gitData, setGitData] = useState([]);
    const [loadSite, setLoadSite] = useState(false);

    useEffect(() => {
        getGitData().then((res) => {
            setGitData(res);
            setLoadSite(true);
        })

    }, [])

    return (

        loadSite && <div>
            <TopMenuBar gitData={gitData}></TopMenuBar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {gitData.map((el) => {
                    return <Route path={"/" + el.id} element={<Project {...el} />} key={el.id} />
                })}
                <Route path="/cv" element={<CV />} />
            </Routes>


        </div>
    )
}
