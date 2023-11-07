import {useState} from "react"
const SearchParams = () =>{
    const [location, setLocation] = useState("");
   
    return (
        <div className="search-params">
           <form>
            <label hrmlFor="location">
                Location 
                <input 
                onChange={e=>setLocation(e.target.value)} 
                id="location" value ={location} placeholder="Location"/>
            </label>
           </form>
        </div>
    )
}

export default SearchParams;