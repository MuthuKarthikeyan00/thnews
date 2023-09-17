import React,{useEffect,useState} from 'react';
import NewsFeed from './NewsFeed';
import { useParams } from 'react-router-dom';
import {db} from './firebase';
import { FacebookButton} from "react-social";
import fb from './asset/fb.jpg';
import wa from './asset/wa.jpg';
import {motion,animate} from 'framer-motion';
const NewsFeedPage = () => {
    
     
    const { NewsFeedPageId } = useParams();
    const [NewsContent, setNewsContent] = useState({});
   const [NewsId, setNewsId] = useState([]);


    var url =  window.location.href;
   useEffect(() => {
    
    db.collection("database").doc("9dNSb95MI7bCaiGqnbPe").collection("news").onSnapshot((snapshot)=>setNewsId( snapshot.docs.map((doc)=>({
        id:doc.id,
    })))
);

    //    return () => {
    //        cleanup
    //    }
   }, [])


    useEffect(() => {
         
        db.collection("database").doc("9dNSb95MI7bCaiGqnbPe").collection("news").doc(NewsFeedPageId).onSnapshot(snap=>
            setNewsContent(snap.data()))

        // return () => {
        //     cleanup
        // }
    }, [])



     
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{type:'spring', duration:1,}} className="NewsFeedPage">
            <div className="NewsFeedPage__container">

         
                
                <h3>{NewsContent.head}</h3>
                <a id="aLink" href={NewsContent.link1}>MORE ABOUT Click ME</a>

            <div className="NewsFeed__facebook__container">
            <span>
   
   <FacebookButton className="NewsFeed__facebook" url={url} appId={342309860603756}>
     <i> <img className="share__icn"  src={fb}></img>
     </i>
   </FacebookButton>
         </span>

         <span>
       
         <a href={`whatsapp://send?text=${url}&img=${NewsContent.url}`} data-action="share/whatsapp/share">
         <i> <img className="share__icn" src={wa}></img>
     </i>
         </a>
         </span>
            </div>

                <img className="NewsFeedPage__containerImg" src={NewsContent.url}></img>
            
                <p>{NewsContent.news} </p>
                <p>{NewsContent.p1} </p>
                <p>{NewsContent.p2} </p>
                <img className="NewsFeedPage__containerImg" src={NewsContent.url1}></img>
                <p>{NewsContent.p3} </p>
                <p>{NewsContent.p4} </p>
                <img className="NewsFeedPage__containerImg" src={NewsContent.url2}></img>
                <p>{NewsContent.p5} </p>
                <p>{NewsContent.p6} </p>

                <a id="aLink" href={NewsContent.link2}>MORE ABOUT Click ME</a>
               
            </div>


            <div className="NewsFeed__facebook__container">
            <span>
      share:
   <FacebookButton className="NewsFeed__facebook" url={url} appId={342309860603756}>
     <i> <img className="share__icn"  src={fb}></img>
     </i>
   </FacebookButton>
         </span>

         <span>
       
         <a href={`whatsapp://send?text=${url}`} data-action="share/whatsapp/share">
         <i> <img className="share__icn" src={wa}></img>
     </i>
         </a>
         </span>
            </div>



            <div className="Home__feedr___container">
               <h3> Headlines</h3>
            </div>
            <div className="Home">
       
       <div className="Home__feedr">
       <div className="Home__feed__content">
                <div className="Home__feed__content__flex">

                {NewsId.map((item, index) => (
                            <NewsFeed key={index} related={"related"} ID={item.id} />
                        ))}
                
               </div>
              
           </div>
       </div>
   </div>

        </motion.div>
    )
}

export default NewsFeedPage
