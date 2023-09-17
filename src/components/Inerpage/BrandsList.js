
import React,{useState,useEffect} from 'react';
import {db} from '../firebase';
import {Link} from "react-router-dom";


const BrandsList = ({brands}) => {
    
    const [Phones, setPhones] = useState([]);
    console.log(Phones);
    

    useEffect(() => {
      
        db.collection("database").doc("Electronics").collection("phone").doc(brands.id).collection("modules").onSnapshot((snap)=>setPhones(snap.docs.map((doc)=>(
            {
                id:doc.id,
            }
        ))))
       
    }, [])


    return (
        <div className="BrandList">
            <h2>{brands.id}</h2>

            <div className="BrandList__items">
            {
                Phones.map((phone,index)=>(
                   
                    <Link to={`/Electronics/${2}/phone/phonesp/${brands.id}/${phone.id}`}   className="BrandList__items__name">

                  <h2 >{phone.id}</h2>
                    </Link>
                   
                  
                ))
            }
              </div>   
        </div>
    )
}

export default BrandsList;
