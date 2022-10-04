import Calecon from '../data.json'
import Loader from './Loader'
import Item from './Item'
import { useState, useEffect } from 'react'

export default function List({search}){
    
    const [items, setItems] = useState([])
    search = search.toLowerCase()
    const filteredData = Calecon.filter((el) => {
        if (search === '') {
            return el;
        }
        else {
            return el.title.toLowerCase().includes(search)
        }
    })
    
    useEffect(() => {
        setTimeout(() => {
        setItems(Calecon)
        }, 500)
    }, [Calecon, filteredData])
    return(
        <>
            {items.length ? (
                <div className='card--list'>
                {(filteredData.length > 0) ? (
                    <>
                    {filteredData.map((elt, i)=>(
                        <Item key={i} search={search} title={elt.title} status={elt.status} description={elt.description}/>
                    ))}
                    </>
                ) : (
                    <p>Aucun Résultat</p>
                )}
                </div>
            ) : (
                <Loader/>
            ) }
        </>
    )
}