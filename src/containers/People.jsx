import React, { useState, useEffect } from "react";
import Loader from "components/Loader";

export default function People(){
    const [data, setData] = useState([])

    const handleConnectUser = async (e) =>{
        
        try{
            //POST form values
            const res = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            const people = await res.json();

            setData(people)

            console.log(people)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        handleConnectUser()
        console.log(data)
    }, [])
    return(
        <>
            <div>
                {data.length ? (
                    <>
                        {data.map((elt, i) => (
                            <p key={i}>{elt.name}</p>
                        ))}
                    </>
                 ) : ( 
                    <p><Loader/></p>
                 )}
            </div>
        </>
    )
}