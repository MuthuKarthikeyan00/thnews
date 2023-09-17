import React,{useEffect,useState} from 'react';
import {db} from '../firebase';
import DockIcon from '@material-ui/icons/Dock';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import {Link} from 'react-router-dom';
import TypeFeed from '../TypeFeed';
import SliderImg from '../Inerpage/SliderImg'
import {motion,animate} from 'framer-motion';

const Electronics = () => {
     
    const [NewsId, setNewsId] = useState([]);
    const [Slider, setSlider] = useState([]);

   
    useEffect(() => {
    
        db.collection("database").doc("9dNSb95MI7bCaiGqnbPe").collection("news").orderBy('order','desc').onSnapshot((snapshot)=>setNewsId( snapshot.docs.map((doc)=>({
            id:doc.id,
        })))
    );

    db.collection('database').doc("slider").collection("market").onSnapshot((snap)=>setSlider(snap.docs.map((doc)=>(
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
        <motion.div initial={{x:'300vw'}} animate={{x:0}} transition={{type:'spring', duration:1,}} className="Electronics">
              <pre className="Home_h2">
       # Right Information <br></br>
       is the key 
       </pre>
             <div className="Electronics__container">
             <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{type:'spring', duration:5}} className="Electronics__containerIcons">
                       <Link to={`/Electronics/:${2}/phone`}className="Electronics__container__icons__name">
                           <DockIcon/>
                           <span>Mobile</span>
                       </Link>
                       <div className="Electronics__container__icons__name">
                       <DesktopWindowsIcon/>
                           Desktops
                       </div>
                      
                       <div className="Electronics__container__icons__name">
                       <ScatterPlotIcon/>
                         <span>
                         others
                         </span>
                          
                       </div>
                 </motion.div>
            
            </div>
        

            <div className="Home__feedr">
            <div className="Home__feedSlider">
                <div id="slider">
		           <figure>
                   {Slider.map((slider,index)=>(
        <SliderImg key={index} col={"market"} id={slider.id}/>
    ))}
   
                 
			         
		           </figure>
	        </div>


                </div>
                <div className="Home__feed__content">
                <motion.div initial={{x:'300vw'}} animate={{x:0}} transition={{type:'spring', duration:1,}}className="Home__feed__content__flex">
                            {NewsId.map((item, index) => (
                                <TypeFeed type={'market'} Mediatype={'Mimg'} key={index} ID={item.id} />
                            ))}

</motion.div>

                    </div>
            
                </div>
        
        
        </motion.div>
    )
}

export default Electronics
