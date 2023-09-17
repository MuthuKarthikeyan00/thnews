import React, { useState, useEffect } from 'react'
import { FacebookButton } from "react-social";
import { Link } from "react-router-dom";
import { db } from './firebase';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const NewsFeed = ({ ID, related }) => {

  var url =  window.location.href;

  const [NewsHead, setNewsHead] = useState({});

  var textNews = false;
  var ImgNews = false;
  var relatedNews = false;


  if (NewsHead.type == "Mimg" || NewsHead.type == "Cimg" || NewsHead.type == "Gimg" || NewsHead.type == "img") {
    textNews = false;
    ImgNews = true;
    relatedNews = false;
  }else if (related == "related") {
    textNews = false;
    ImgNews = false;
    relatedNews = true;

  } 
   else if (NewsHead.type != "Mimg" && NewsHead.type != "Gimg" && NewsHead.type != "img" && NewsHead.type != "Cimg") {
    textNews = true;
    ImgNews = false;
    relatedNews = false;
  }
 

  useEffect(() => {

    db.collection("database").doc("9dNSb95MI7bCaiGqnbPe").collection("news").doc(ID).onSnapshot(snap =>
      setNewsHead(
        snap.data()
      ))


    // return () => {
    //   cleanup
    // }
  }, [])


  return (

    <div className="NewsFeed">

      {relatedNews &&
        <Link to={`/NewsFeedPage2/${ID}`} className="NewsFeed__body">
          <div className="NewsFeed__container">

            <div className="NewsFeed__container__item">
              <div className="NewsFeed__content">
                <h4>{NewsHead.head}</h4>
              </div>
              <img src={NewsHead.url}></img>
            </div>
            
            <div className="NewsFeed__container__foot">
            <span className="NewsFeed__time">
            <span className="NewsFeed__time__right" >
               <span id="ta">
                  த
                </span>
                NEWS
               </span>


              <span className="NewsFeed__time">
                <FacebookButton className="NewsFeed__facebook" url={url} appId={342309860603756}>
                  <i id="fb" >
                    <FacebookIcon  />
                  </i>
                </FacebookButton>
              </span>

              <span className="NewsFeed__time" >
                <a href={`whatsapp://send?text=${url}`} data-action="share/whatsapp/share">
                <i id="wa">
                    <WhatsAppIcon />
                  </i>
                </a>
              </span>
              </span>
              <span className="NewsFeed__time inner">{NewsHead.time}
              </span>
            </div>
          </div>


        </Link>

      }


     

      {ImgNews &&
        <div className="NewsFeed__container__img">

          <div className="NewsFeed__container__item__img">
            <a href={NewsHead.url}className="NewsFeed__container__img__container">
              <img className="NeesFeed___img" src={NewsHead.url}></img>
            </a>

          
            <div className="NewsFeed__container__foot">
            <span className="NewsFeed__time">
               <span className="NewsFeed__time__right" >
               <span id="ta">
                  த
                </span>
                NEWS
               </span>


              <span className="NewsFeed__time">
                <FacebookButton className="NewsFeed__facebook" url={url} appId={342309860603756}>
                  <i id="fb">
                    <FacebookIcon />
                  </i>
                </FacebookButton>
              </span>

              <span className="NewsFeed__time" >
                <a href={`whatsapp://send?text=${url}`} data-action="share/whatsapp/share">
                  <i id="wa">
                    <WhatsAppIcon />
                  </i>
                </a>
              </span>
              </span>
              <span className="NewsFeed__time inner">{NewsHead.time}
              </span>
            </div>

          </div>

        </div>

      }



{textNews &&
        <Link to={`/NewsFeedPage/${ID}`} className="NewsFeed__body">
          <div className="NewsFeed__container">



            <div className="NewsFeed__container__item">
              <div className="NewsFeed__content">
                <h4>{NewsHead.head}</h4>
              </div>
              <img src={NewsHead.url}></img>
            </div>


            
            <div className="NewsFeed__container__foot">
            <span className="NewsFeed__time">
               <span className="NewsFeed__time__right" >
               <span id="ta">
                  த
                </span>
                NEWS
               </span>


              <span className="NewsFeed__time">
                <FacebookButton className="NewsFeed__facebook" url={url} appId={342309860603756}>
                  <i id="fb">
                    <FacebookIcon />
                  </i>
                </FacebookButton>
              </span>

              <span className="NewsFeed__time" >
                <a href={`whatsapp://send?text=${url}`} data-action="share/whatsapp/share">
                <i id="wa">
                    <WhatsAppIcon />
                  </i>
                </a>
              </span>
              </span> 

              <span className="NewsFeed__time inner">{NewsHead.time}
              </span>
            </div>
          </div>


        </Link>

      }
    </div>

  )
}

export default NewsFeed
