import React from "react";
import { Navbar } from "./Navbar";
// import {button} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function PodcastPage()
{
    return(
        <>
        <Navbar/>

        <div className="tagcard-container">
        <div className="tagcard">
            <div className="card-image tag-1"> </div>
                {/* <a>The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu</a> */}
                <a  className="podcast-one" href="https://dev.to/dev-interrupted/the-art-of-letting-your-devs-step-up-w-equinixs-rajah-kalipatnapu">The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu </a>
                {/* <p>text</p> */}

            </div>
           

            <div className="tagcard">
            <div className="card-image tag-2"> </div>
            <a  className="podcast-two" href="https://dev.to/talkpython/375-python-language-summit-2022">#375: Python Language Summit 2022</a>
                {/* <h2>title</h2> */}
                {/* <p>text</p> */}

            </div>
            <div className="tagcard">
            <div className="card-image tag-3"> </div>
            <a  className="podcast-two" href="https://dev.to/adventures_in_devops/the-intersection-of-data-and-devops-devops-124">The Intersection of Data and DevOps - DevOps 124</a>
                {/* <h2>title</h2>
                <p>text</p> */}

            </div>

            
            <div className="tagcard">
            <div className="card-image tag-4"> </div>
            <a  className="podcast-two" href="https://dev.to/adventures_in_devops/the-intersection-of-data-and-devops-devops-124">The Intersection of Data and DevOps - DevOps 124</a>
                {/* <h2>title</h2> */}
                {/* <p>text</p> */}

            </div> 
            
           

       

    </div>


        

     
        </>
    )
}