import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="item">
                <h1>City Name: {props.city}</h1>
            </div>
            <div className="item">
                <h1>Region Name: {props.region}</h1>
            </div>
            <div className="item">
                <h1>Country Name: {props.country}</h1>
            </div>
            <div className="item">
                <h1>Latitude: {props.lat}</h1>
            </div>
            <div className="item">
                <h1>Longitude: {props.lon}</h1>
            </div>

            <div className="item">
                <h1>Local Time: {props.time}</h1>
            </div>

            <div className="item">
                <h1>Temperature{`(celsius)`}: {props.temperature}</h1>
            </div>

            <div className="item">
                <h1>Feels Like {`(celsius)`}: {props.feel}</h1>
            </div>

            <div className="item">
                <h1>Wind Direction: {props.wind}</h1>
            </div>

            <div className="item">
                <h1>It is {props.isday == 1 ? `Day` : 'Night'} Time</h1>
            </div>
        </div>
    )
}

export default Card
