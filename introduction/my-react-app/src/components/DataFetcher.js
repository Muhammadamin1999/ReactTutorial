import React, { useState, useEffect } from "react";

function DataFetcher() {
     const [data, setData]= useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(()=>{
        const fetchData = async ()=>{
            try{
              const response = await fetch('https://api.example.com/data');
              const result = await response.json();
              setData(result);
            }catch(error){
             setError(error.message);
            }finally{
              setLoading(false);
            }
        }
        fetchData()
     },[])
     return (
        <div>
            {loading && <p>loading page .....</p>}
            {error && <p>Error: {error}</p>}
            {
                data && (
                    <div>
                        <h2>Fetch Data</h2>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                )
            }
        </div>
     );
}

export default DataFetcher;
