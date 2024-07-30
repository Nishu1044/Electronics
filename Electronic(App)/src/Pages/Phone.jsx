import { useState,useEffect } from "react"
import axios from "axios"
import { AuthContext } from "../AuthContext/AuthContextProvider"
import LoadingIndicator from "./LoadingIndicator"
import { Navigate } from "react-router-dom"
import { useContext } from "react"

function Phone(){

    const[search,setSearch]=useState("")
    const [eleData,setEleData]=useState([])
    const[Loading,setLoading]=useState(false)



    useEffect(()=>{
        fetchEleData()
    },[search])



    async function fetchEleData(){
        try {
          setLoading(true)
          const url=`http://localhost:3001/eleData?s=${search}`
          console.log(url)
            const response=await axios.get(`http://localhost:3001/eleData?s=${search}`)
            setEleData(response.data)
            setLoading(false)
            console.log(response)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }




    const {isLoggedin}=useContext(AuthContext)
    if(!isLoggedin){
        return <Navigate to="/login"/>
    }


    if(Loading){
      return <LoadingIndicator/>
    }



return(

<div className="search-container"><h3> Search Which You Want To Buy...</h3>
            <input
            placeholder="search product"
            type="text" 
            value={search}
            className="search-input" 
            onChange={(e)=>setSearch(e.target.value)} />
 <div>
     <div className="corporate">
        {eleData.map((d, i) => (
          <div key={i}>
            <div className="subcorporate">
            <img src={d.image} alt={d.name} />
            <h3>Name : {d.name}</h3>
            <h2>Company: {d.company}</h2>
            <h2>Price -Rs {d.price}.00</h2>
            <p>Description : {d.description}</p>
            <h3>Category : {d.category}</h3>
            <button onClick={function(){
                return alert("Order Placed")
            }}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
 </div>
)
}

export default Phone;

