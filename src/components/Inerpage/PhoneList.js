import React,{useState,useEffect} from 'react';
import {db} from '../firebase';
import BrandsList from './BrandsList'

const PhoneList = () => {

     const [Brands, setBrands] = useState([]);
console.log(Brands);
     useEffect(() => {
       
         db.collection("database").doc("Electronics").collection("phone").onSnapshot((snap)=>setBrands(snap.docs.map((doc)=>(
            {
                id:doc.id,
            }
         )))
         );


        //  return () => {
        //      cleanup
        //  }
     }, [])


    return (
        <div className="PhoneList">
             <div className="PhoneList__container">
              {Brands.map((brands,index)=>(
                <BrandsList key={index} brands={brands}/>
              ))}
             
             </div>
        </div>
    )
}

export default PhoneList;
