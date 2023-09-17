import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { db } from './firebase';
import { FacebookButton } from "react-social";
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const TypeFeed = ({ type, Mediatype, ID }) => {

  const [NewsHead, setNewsHead] = useState({});
  var url = window.location.href;


  var textNews = false;
  var ImgNews = false;
  var parmit = false;

  if (NewsHead.type == Mediatype) {
    textNews = false;
    ImgNews = true;
    parmit = true;

  } else if (NewsHead.type == type) {
    textNews = true;
    ImgNews = false;
    parmit = true;
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



  return (parmit === true && <div className="permit">
    <div className={`TypeFeed ${ImgNews && "TypeFeedImg"}`}>
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
                    <i id="fb" >
                      <FacebookIcon />
                    </i>
                  </FacebookButton>
                </span>

                <span className="NewsFeed__time" >
                  <a href={`whatsapp://send?text=${NewsHead.url}`} data-action="share/whatsapp/share">
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
        <div
          className="NewsFeed__container__img">

          <div className="NewsFeed__container__item__img">
            <a href={NewsHead.url} className="NewsFeed__container__img__container">
              <img className="NeesFeed___img" src={NewsHead.url}></img>
            </a>
            <div className="NewsFeed__container__foot">
            <span className="NewsFeed__time">
            <span className="NewsFeed__time__right" >
               <span>
                  த
                </span>
                NEWS
               </span>
           


                <span className="NewsFeed__time">
                  <FacebookButton className="NewsFeed__facebook" url={url} appId={342309860603756}>
                    <i id="fb" >
                      <FacebookIcon />
                    </i>
                  </FacebookButton>
                </span>

                <span className="NewsFeed__time" >
                  <a href={`whatsapp://send?text=${NewsHead.url}`} data-action="share/whatsapp/share">
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
    </div>

  </div>
  )
}

export default TypeFeed;
