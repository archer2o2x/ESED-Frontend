import React, { useEffect, useState } from "react";

const Home = () => {

    const [data, setData] = useState({content: []});

    useEffect(() => {
        fetch("/api/test")
        .then(res => { console.log(res); return res; })
        .then(res => res.json())
        .then(data => setData(data));
    }, [])

    return (
        <div className="flex flex-col bg-gray-100 flex-grow">
            <ul>
            {data.content.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
    );
};

export default Home;