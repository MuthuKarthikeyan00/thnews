import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import {db} from '../firebase'
import {motion,animate} from 'framer-motion';

const Story = () => {
    

   const [Story, setStory] = useState([]);

   useEffect(() => {
     
      db.collection("database").doc("story").collection("storyCatg").orderBy("count","asc").onSnapshot((snap)=>(
         setStory(snap.docs.map((doc)=>({
            id:doc.id
         })))
      ))

      // effect
      // return () => {
      //    cleanup
      // }
   }, [])
   
    return (
      <motion.div initial={{x:'200vw'}} animate={{x:0}} transition={{type:'spring', duration:1,}} className="Story">
          <motion.div initial={{x:'-500vw'}} animate={{x:0}} transition={{type:'spring', duration:3,}}  className="Story__head">
            <h3>தமிழ் கதைகள்</h3>
          </motion.div>
           <div className="Story__container">

              {Story.map((story,index)=>(
                       <Link to={`/Story/StoryList/${story.id}`}className="Story__catg">
                     <div className="Story__container__content">
                      <h5 >{index+1}</h5>
                       <h4>{story.id}</h4>
                     </div>
                    </Link>
              ))}
                 
                 
           </div>
            
        </motion.div>
    )
}

export default Story
