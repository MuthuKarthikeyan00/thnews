import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import {db} from '../firebase';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {motion,animate} from 'framer-motion';

const StoryList = () => {

    const {StoryListId}=useParams();
  
  
   const [StoryList, setStoryList] = useState([]);

   useEffect(() => {
    
     
      db.collection("database").doc("story").collection("storyCatg").doc(StoryListId).collection("storyList").orderBy("count",'asc').onSnapshot((snap)=>(
         setStoryList(snap.docs.map((doc)=>({
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
                <h3>{StoryListId}</h3>
            </motion.div>
         
            <div className="Story__container">
            {StoryList.map((story,index)=>(
                       <Link to={`/Story/StoryList/${StoryListId}/storycontent/${story.id}`}className="Story__catg">
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

export default StoryList;
