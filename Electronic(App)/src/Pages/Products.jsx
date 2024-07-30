import { AuthContext } from "../AuthContext/AuthContextProvider";
import { Navigate } from "react-router-dom"
import React, { useEffect, useState, useContext} from "react";
import axios from "axios";

// import { useContext } from "react"



function Products() {

  const [data, setData] = useState([]);
  const [electRecords, setElectRecords] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortOrderByPrice, setSortOrderByPrice] = useState("asc");


  function fetchElectronic(){
    axios.get(`https://api.pujakaitem.com/api/products`)
    .then(response => {
      setData(response.data);
      setElectRecords(response.data);
    })
    .catch(error => console.log(error));
  }


  useEffect(() => {
   fetchElectronic();
  }, []);



  const handleSearch = (event) => {
    setSearchInput(event.target.value);
    filterAndSort(event.target.value, sortOrderByPrice);
  };

  const filterAndSort = (searchText, sortOrder) => {
    let filteredData = data.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

    if (sortOrder === "asc") {
      filteredData.sort((ele1, ele2) => ele1.price - ele2.price);
    } else {
      filteredData.sort((ele1, ele2) => ele2.price - ele1.price);
    }

    setElectRecords(filteredData);
  };

  const handleSortByPrice = () => {
    const newSortOrder = sortOrderByPrice === "asc" ? "desc" : "asc";
    setSortOrderByPrice(newSortOrder);
    filterAndSort(searchInput, newSortOrder);
  };



  const {isLoggedin}=useContext(AuthContext)
  if(!isLoggedin){
      return <Navigate to="/Login"/>
  }

  return (
    <>
    <div className="search-container"> <h3> Search Which You Want To buy...</h3>
      <input
        type="text"
        value={searchInput}
        onChange={handleSearch}
        placeholder="Search by title"
        className="search-input"
      />
    </div>

      


      <button onClick={handleSortByPrice} className="sortbutton">
        Sort by Price ({sortOrderByPrice === "asc" ? "Lower To Hight" : "High To Low"})
      </button>

      
     <div className="Electro">
        {electRecords.map((ElectroPro, i) => (
          <div className="Electro2" key={i}>

              <img className="productimage" src={ElectroPro.image} alt={ElectroPro.name} />
              <h3>Name : {ElectroPro.name}</h3>
              <h2>Company: {ElectroPro.company}</h2>
              <p>Description : {ElectroPro.description}</p>
              <h4>Category : {ElectroPro.category}</h4>
              <h4>Price : Rs {ElectroPro.price}.00</h4>
              <button onClick={() => alert(" Ordered Successfully!")}>Buy Now</button>
          </div>
        ))}

      </div>
    </>
  );
}

export default Products;
