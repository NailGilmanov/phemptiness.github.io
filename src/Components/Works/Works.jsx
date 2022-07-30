import React from 'react'
import "./works.css?1234567"
import { Link } from 'react-router-dom'

import '../../media.css?123456'

export default function Works() {
  return (
    <div className="home">
        <div className="home_wrapperrr">
          <div className="home__box">
            <div className="homepicture pic"><img className='home__box__pic homepic' src='images/picture3.jpg' alt="pic1"></img></div>
            <h1 className='titles'>СТРИТ</h1> 
            <Link to="/works/street"><h5 className='add-info'>Посмотреть больше</h5></Link>
          </div>
          <div className="home__box">
            <div className="homepicture pic"><img className='home__box__pic homepic' src='images/slider_2.jpg' alt="pic1"></img></div>
            <h1 className='titles'>ИНДИВИДУАЛЬНЫЕ ФОТОСЕССИИ</h1>
            <Link to="/works/individual"><h5 className='add-info'>Посмотреть больше</h5></Link>
          </div>
          <div className="home__box">
            <div className="homepicture pic"><img className='home__box__pic homepic' src='images/slider_1.jpg' alt="pic1"></img></div>
            <h1 className='titles'>МЕРОПРИЯТИЯ</h1>
            <Link to="/works/events"><h5 className='add-info'>Посмотреть больше</h5></Link>
          </div>
        </div>
        {/* <h1>СТРИТ</h1>
        <div className="home_wrapperr"> 
            <div className="homepicture pic"><img className='homepic' src='images/picture3.jpg' alt="pic1"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture12.jpg' alt="pic2"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture10.jpg' alt="pic3"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture18.jpg' alt="pic4"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture23.jpg' alt="pic9"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture27.jpg' alt="pic9"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture22.jpg' alt="pic9"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/slider_3.jpg' alt="pic9"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture19.jpg' alt="pic5"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture20.jpg' alt="pic6"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture21.jpg' alt="pic8"></img></div>
        </div><br /><br />
        <h1>ИНДИВИДУАЛЬНЫЕ ФОТОСЕССИИ</h1>
        <div className="home_wrapperr"> 
            <div className="homepicture pic"><img className='homepic' src='images/main_pic.jpg' alt="pic1"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture1.jpg' alt="pic2"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture2.jpg' alt="pic3"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture4.jpg' alt="pic4"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture5.jpg' alt="pic9"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture6.jpg' alt="pic9"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture7.jpg' alt="pic9"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/slider_2.jpg' alt="pic9"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture8.jpg' alt="pic5"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture9.jpg' alt="pic6"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture15.jpg' alt="pic8"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture16.jpg' alt="pic8"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture17.jpg' alt="pic8"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture25.jpg' alt="pic8"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture28.jpg' alt="pic8"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture30.jpg' alt="pic8"></img></div>
        </div><br /><br />
        <h1>МЕРОПРИЯТИЯ</h1>
        <div className="home_wrapperr">
            <div className="homepicture pic"><img className='homepic' src='images/picture11.jpg' alt="pic2"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture13.jpg' alt="pic3"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture26.jpg' alt="pic4"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/picture29.jpg' alt="pic9"></img></div>
            <div className="homepicture pic"><img className='homepic' src='images/slider_1.jpg' alt="pic9"></img></div>
        </div><br /><br /> */}
    </div>
  )
}
