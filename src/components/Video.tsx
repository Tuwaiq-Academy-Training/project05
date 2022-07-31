import React from "react";
import { Navbar } from "./Navbar";

export function VideosPage()
{
    return(
        <>
        <Navbar/>
        <h1 className="vid-text">DEV Community on Video</h1>

        <div className="videos-container">
        <div className="videocard">
            <div className="video-image vid-1"> </div>
                {/* <a>The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu</a> */}
                <a  className="vid-one" href="https://dev.to/homelessdinosaur/serverless-graphql-on-any-cloud-12mp">Serverless GraphQL on any cloud</a>
                <p>Ryan Cartwright</p>

            </div>
           

            <div className="videocard">
            <div className="video-image vid-2"> </div>
                {/* <a>The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu</a> */}
                <a  className="vid-two" href="https://dev.to/this-is-learning/show-trello-numbers-on-cards-25bc">Show trello number on Carsds</a>
                <p>Leonardo Montini</p>

            </div>


           <div className="videocard">
            <div className="video-image vid-3"> </div>
                {/* <a>The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu</a> */}
                <a  className="vid-tree" href="https://dev.to/ahmedmansoor012/this-is-2022-technology-ma1">This is 2022 Technology </a>
                <p>Mansoor Ahmed</p>

            </div>

            
            <div className="videocard">
            <div className="video-image vid-4"> </div>
                {/* <a>The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu</a> */}
                {/* <a  className="podcast-one" href="https://dev.to/dev-interrupted/the-art-of-letting-your-devs-step-up-w-equinixs-rajah-kalipatnapu">The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu </a> */}
                {/* <p>text</p> */}

            </div>

            <div className="videocard">
            <div className="video-image vid-5"> </div>
                {/* <a>The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu</a> */}
                {/* <a  className="podcast-one" href="https://dev.to/dev-interrupted/the-art-of-letting-your-devs-step-up-w-equinixs-rajah-kalipatnapu">The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu </a> */}
                {/* <p>text</p> */}

            </div>

            <div className="videocard">
            <div className="video-image vid-6"> </div>
                {/* <a>The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu</a> */}
                {/* <a  className="podcast-one" href="https://dev.to/dev-interrupted/the-art-of-letting-your-devs-step-up-w-equinixs-rajah-kalipatnapu">The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu </a> */}
                {/* <p>text</p> */}

            </div>
            
           

       

    </div>
        </>
    )

}