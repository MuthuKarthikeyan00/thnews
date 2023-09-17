import React,{useState,useEffect} from 'react';
import {db} from '../firebase';
import {useParams} from 'react-router-dom';
import {motion,animate} from 'framer-motion';
import {Link} from 'react-router-dom';


const StoryContent = () => {

    const {StoryListId}=useParams();
    const {storycontentId}=useParams();
    const [StoryContent, setStoryContent] = useState([]);


    const [StoryList, setStoryList] = useState([]);

    useEffect(() => {
     
      
       db.collection("database").doc("story").collection("storyCatg").doc(StoryListId).collection("storyList").orderBy('count','asc').onSnapshot((snap)=>(
          setStoryList(snap.docs.map((doc)=>({
             id:doc.id
          })))
       ))
 
       // effect
       // return () => {
       //    cleanup
       // }
    }, [])

     

    useEffect(() => {
     
       db.collection("database").doc("story").collection("storyCatg").doc(StoryListId).collection("storyList").doc(storycontentId).onSnapshot((snap)=>(setStoryContent(snap.data())))
    
       // effect
       // return () => {
       //    cleanup
       // }
    }, [])
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{type:'spring', duration:3,}}  className="StoryContent">
                       <div className="StoryContent__container">

         
                       <h3>
           {StoryContent.head}
                       </h3>
          
                       <div className="StoryContent__content">
                        <p id='StoryContent'>
                        {StoryContent.content}
                        </p>
                        <p>
                        {StoryContent.p1}
                        </p>
                        <p>
                        {StoryContent.p2}
                        </p>
                        <p>
                        {StoryContent.p3}
                        </p>
                        <p>
                        {StoryContent.p4}
                        </p>
                        <p>
                        {StoryContent.p5}
                        </p>
                        <p>
                        {StoryContent.p6}
                        </p>
                        <p>
                        {StoryContent.p7}
                        </p>
                        <p>
                        {StoryContent.p8}
                        </p>
                        <p>
                        {StoryContent.p9}
                        </p>
                        <p>
                        {StoryContent.p10}
                        </p>
                        <p>
                        {StoryContent.p11}
                        </p>
                        <p>
                        {StoryContent.p12}
                        </p>
                        <p>
                        {StoryContent.p13}
                        </p>
                        <p>
                        {StoryContent.p14}
                        </p>
                        <p>
                        {StoryContent.p15}
                        </p>
                        <p>
                        {StoryContent.p16}
                        </p>
                        <p>
                        {StoryContent.p17}
                        </p>
                        <p>
                        {StoryContent.p18}
                        </p>
                        <p>
                        {StoryContent.p19}
                        </p>
                        <p>
                        {StoryContent.p20}
                        </p>
                       </div>
                     </div>

                     <div className="Story__container">
            {StoryList.map((story,index)=>(
                       <Link to={`/Story/StoryList/${StoryListId}/storycontent/${story.id}`}className="Story__catg">
                       <h4>{story.id}</h4> 
                    </Link>
              ))}

            </div>


         
        </motion.div>
    )
}

export default StoryContent
