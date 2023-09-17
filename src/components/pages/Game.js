import React,{useEffect,useState} from 'react';
import NewsFeed from "../NewsFeed";
import {useParams} from 'react-router-dom';
import {db} from '../firebase';
import TypeFeed from '../TypeFeed';
import SliderImg from '../Inerpage/SliderImg'
import {motion,animate} from 'framer-motion';
const Game = () => {

   const {gameId}=useParams();
   const [NewsId, setNewsId] = useState([]);
   const [Slider, setSlider] = useState([]);

   const foca =()=>{
         console.log('called g');
   }
   
   useEffect(() => {
    
    db.collection("database").doc("9dNSb95MI7bCaiGqnbPe").collection("news").orderBy('order','desc').onSnapshot((snapshot)=>setNewsId( snapshot.docs.map((doc)=>({
        id:doc.id,
    })))
);

db.collection('database').doc("slider").collection("game").onSnapshot((snap)=>setSlider(snap.docs.map((doc)=>(
    {
        id:doc.id,
      
    }
))

));



    //    return () => {
    //        cleanup
    //    }
   }, [])



    return (
        <motion.div onKeyUp={foca} initial={{x:'300vw'}} animate={{x:0}} transition={{type:'spring', duration:1,}}   className="Home">
        <pre className="Home_h2">
       # Gameing <br></br>
        loved by millions
       </pre>
        <div className="Home__feedr">
        <div className="Home__feedSlider">
                <div id="slider">
		           <figure>
                   {Slider.map((slider,index)=>(
    <SliderImg key={index} col={"game"} id={slider.id}/>
))}

			         
		           </figure>
	        </div>


                </div>
                <div className="Home__feed__content">
                <motion.div initial={{x:'300vw'}} animate={{x:0}} transition={{type:'spring', duration:1,}} className="Home__feed__content__flex">

                    {NewsId.map((item,index)=>(
                           <TypeFeed Mediatype={'Gimg'} type={'games'} key={index} ID={item.id}  />
                    ))}
                 
                </motion.div>
               
            </div>
        </div>
    </motion.div>
    )
}

export default Game;
