import React, { useState, useEffect } from 'react';


export default function Test(){
    
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch(`https://sheet.best/api/sheets/033748f5-b621-4fd6-a2b7-a9b2871ade3e`).then(response=>response.json());

            setData(response);
        }
        fetchData();
    },[]);

    return (
        <section>
            { data.length > 0 
                ? data.map((value, index)=>{
                    return value.frontend_development;
                })
                : <>Loading..</>}
        </section>
    );
}