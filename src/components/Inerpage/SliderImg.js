import react,{useState,useEffect} from 'react';
import {db} from '../firebase';


const SliderImg = ({id,col}) => {
   
      
    const [SliderId, setSliderId] = useState([])

  useEffect(() => {


      db.collection('database').doc("slider").collection(col).doc(id).onSnapshot((snap)=>setSliderId(snap.data()))


      // effect
      // return () => {
      //     cleanup
      // }
  }, [])



  return (
     <img src={SliderId.url}></img>
  )
}

export default SliderImg;
