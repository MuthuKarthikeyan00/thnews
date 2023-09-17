import React, { useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NewsFeed from "../NewsFeed";
import { IconButton, ListItemIcon } from '@material-ui/core'
import { db, storage, timeStamp } from '../firebase';
import '../style.css';
import 'firebase/storage';
import { Link } from 'react-router-dom';
import SliderImg from '../Inerpage/SliderImg';
import {motion,animate} from 'framer-motion';

const Home = () => {

    const [NewsId, setNewsId] = useState([]);
    const [Slider, setSlider] = useState([]);
    
        var Morning;
        var AfterNoon;
        var Evening;
        var Night;

    var hour, min, sec, RailwayHour;
    const times = new Date().getTime();
    const dateObj = new Date(times);
    RailwayHour = dateObj.getHours().toString();
    hour = dateObj.getHours().toString() - 12;
    min = dateObj.getMinutes().toString();
    sec = dateObj.getSeconds().toString();

    var Rh = parseInt(RailwayHour);
  
    
    if(Rh >= 20){ 
        Night=true
    }else if (Rh >= 16) { 
        Evening=true
    }else if (Rh >= 12) {
     AfterNoon=true
    }else if (Rh >= 6) {
        Morning=true
    }
   


    useEffect(() => {

        db.collection("database").doc("9dNSb95MI7bCaiGqnbPe").collection("news").orderBy('order','desc').onSnapshot((snapshot) => setNewsId(snapshot.docs.map((doc) => ({
            id: doc.id,
        })))
        );

        db.collection('database').doc("slider").collection("home").onSnapshot((snap)=>setSlider(snap.docs.map((doc)=>(
            {
                id:doc.id,
              
            }
        ))

        )); 
        

    }, [])
 

    return (
      <motion.div initial={{x:'-100vw'}} animate={{x:0}} transition={{type:'spring', duration:1,}} className="Home">
         <div className="Home__containers">
             
            <Link   initial={{opacity:0}} animate={{opacity:1}} to={'/corona'} className="Home__trending">
                <div className="Home__trendingInfo">
                    <p><span>Corona vires</span> see the latest counts of <br></br> coronavires </p>
                </div>
                <IconButton className="Home__trendingInfo__arrowBtn">
                    <ArrowForwardIosIcon />
                </IconButton>
            </Link>

            <motion.div initial={{x:'-100vw'}} animate={{x:0}} transition={{type:'spring', duration:.8,}} className="Home__Welcome">
                <span className="Home__WelcomeS1">

                    {Morning && <span>Good Morning</span>}
                    {AfterNoon && <span>Good AfterNoon</span>}
                    {Evening && <span>Good Evening</span>}
                    {Night && <span>Good Night</span>}



                </span><br></br>
                <span className="Home__WelcomeS2">
                    Take your news today..
                </span>
            </motion.div >


            <div className="Home__feedr">
                <div className="Home__feedSlider">
                <div id="slider">
		           <figure>

                      {Slider.map((slider,index)=>(
                          <SliderImg key={index} col={"home"} id={slider.id}/>
                      ))}
		           </figure>
	        </div>


                </div>
                <div className="Home__feed__content">
                <motion.div initial={{x:'300vw'}} animate={{x:0}} transition={{type:'spring', duration:1,}}className="Home__feed__content__flex">

                        {NewsId.map((item, index) => (
                            <NewsFeed related={"related"} key={index} ID={item.id} />
                        ))}

                    </motion.div>

                </div>
            </div>
         </div>

        </motion.div>
    )
}

export default Home;
