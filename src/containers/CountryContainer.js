import { useState, useEffect } from "react";


const CountryContainer = () => {

    const [countries, setCountries] = useState(null);
    

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        console.log("loading data");
        loadData();
    }, []);

    return(
        <> 
        <h1>Country Bucket List</h1>
        </>
    )

   
}

export default CountryContainer;