import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import Card from './Card';

const Home = () => {
    let context = useContext(UserContext);
    const [data, setData] = useState("");
    const [err, setErr] = useState(false);
    const [load, setLoad] = useState(true);

    useEffect(() => {

        const fetching_data = async () => {

            setLoad(true);
            const api_key = `http://api.weatherapi.com/v1/current.json?key=137bb8f74c224505b55134624233004&q=${context.search === '' ? 'Lahore' : context.search}`;
            console.log("going to search " + api_key);

            const dta = await fetch(api_key);

            const rslt = await dta.json();

            if (rslt.error !== undefined) setErr(true);
            else setErr(false);

            setData(rslt);

            setLoad(false);

        }
        fetching_data();


    }, [context.search]);

    return (
        <div>
            <h1>{load ? "Loading..." : "Data is loaded"}</h1>

            <h1>{err && data.error.message}</h1>
            {!load && !err && <Card city={data.location.name} country={data.location.country} lon={data.location.lon} lat={data.location.lat} time={data.location.localtime} region={data.location.region} feel={data.current.feelslike_c} temperature={data.current.temp_c} wind={data.current.wind_dir} isday={data.current.is_day} />
            }

        </div>
    )
}

export default Home
