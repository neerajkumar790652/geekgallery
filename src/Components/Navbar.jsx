import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {
  const [search,setSearch]=useState("");
  const [update,setUpdate]=useState("Bike")
  const [result,setResult]=useState([]);
  const [ClientId,setClientId] = useState("pLLbM4ey0wffycBI59O2Mj6MDN4j7ejLaXx2HkEa9_g")
  useEffect(()=>{
    getQuery(update)
  },[update])
  const getQuery = async()=>{
    const response =await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${update}&client_id=${ClientId}`);
    setResult(response.data.results)
    // console.log(response.data.results);
  }


  const handleChange = (e)=>{
    setSearch(e.target.value);
    // console.log(search)
  }
  const handleSubmit = (e)=>{
     e.preventDefault()
     setUpdate(search);
    //  console.log(update) 
  }

  
  return (
    <>
     <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand">Geeks Gallery</a>
    <form className="d-flex" role="search"onSubmit={handleSubmit}>
      <input className="form-control me-2" type="text" value={search} placeholder="Search"   onChange={handleChange}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

{
  result.map((res,idx)=>{
    return(
      <>
      <img src={res.urls.small} key={idx}/>
      </>
    )
  })
}

    </>
  )
}

export default Navbar
