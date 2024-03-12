import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
  const [countries,setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data));
  },[])

  const [visitedCountries,setVisitedCountries] = useState([]);
  const markVisitedHandler =(country)=>{
    console.log('ok');
    console.log(country)
    const newVisitedCountries = [...visitedCountries,country];
    setVisitedCountries(newVisitedCountries);
  }

  const [flags,setFlags]=useState([]);
  const flagHandler =(flag)=>{
    const newFlags = [...flags,flag];
    setFlags(newFlags);
  }
  return (
    <div >
      
      <div>
        <ol>
        <h2 >Countries Number: {countries.length}</h2>   
       <h3>visited countries list:</h3>
       {
        visitedCountries.map(country=><li key={country.cca2} style={{'margin-left':'0px',
      display:'flex',justifyContent:"space-between",width:'200px',alignItems:"center"}}><p>{country.name.common}</p><img src={country.flags.png} style={{width:'50px',height:'30px'}} alt="" /></li>)
       }
        </ol>
       <div style={{marginLeft:'30px'}}>
       {
          flags.map((flag,index)=><img style={{width:'100px',height:'55px',marginRight:'5px'}} key={index} src={flag}></img>)
        }
       </div>
      </div>
      <div className="countries-container">{countries.map(country =><Country key={country.cca2} country={country} markVisitedHandler={markVisitedHandler} flagHandler={flagHandler}></Country>)}</div>
    </div>
  );
};

export default Countries;