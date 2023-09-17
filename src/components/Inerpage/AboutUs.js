import React from 'react';
import img1 from '../asset/logo512.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {motion,animate} from 'framer-motion';

const AboutUs = () => {

  

    return (
  <motion.div initial={{y:'500vh'}} animate={{y:0}} transition={{type:'spring', duration:1,}}  className="AboutUs">
          <div className="AboutUs__container">
             <div  className="AboutUs__header">

             </div>
             <div className="AboutUs__header__img">
               <img src={img1}></img>
             </div>
             <div className="AboutUs__content">


             <div className="AboutUs__content__Item About__bor">
                     <li>
                         <ul className='ulpadd'>
                        
                         <a href="https://in.linkedin.com/in/muthu-karthikeyan-8588ab1b8">
                         <span><LinkedInIcon /></span>
                         Muthu Karthikeyan
                         </a>
                      
                       
                         </ul>
                         <ul className='ulpadd'>
                        
                         <a href="https://github.com/MuthuKarthikeyan00">
                         <span><GitHubIcon /></span> muthukarthikeyan00 
                         </a>
                         </ul>
                         <ul className='ulpadd'>
                         
                            <a  href="https://www.instagram.com/karthikeyan07_/">
                            <span><InstagramIcon /></span> karthikeyan07
                         </a>
                         </ul>
                         <ul className='ulpadd'>
                         <a href={`https://wa.me/918940355564/?text=Hi`}>
                            <span><WhatsAppIcon /></span> 8940355564
                         </a>
                         </ul>
                     </li>
                 </div>


                 <div className="AboutUs__content__Item">
                     <li>
                         <ul className='ulpadd'>
                            <span>Email :</span>muthukarthikeyan00@gmail.com
                         </ul>
                         <ul className='ulpadd'>
                            <span>Phone :</span>8940355564
                         </ul>
                     </li>
                 </div>

                 <div>
                     
                 </div>

             </div>
          </div>
        </motion.div>
    )
}

export default AboutUs;
