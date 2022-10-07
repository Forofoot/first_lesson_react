import { useState } from "react"
import List from "components/List"

export default function Calbard(){
    const [currentFilter, setCurrentFilter] = useState('')
    return(
        <>
        <form>
            <input type='text' value={currentFilter} onChange={(e) => setCurrentFilter(e.target.value)}/>
            <p>{currentFilter}</p>
        </form>
        
        <List search={currentFilter}/>
        </>
    )
}