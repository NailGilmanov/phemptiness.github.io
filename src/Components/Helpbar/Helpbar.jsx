import React from 'react'
import "./helpbar.css"

import '../../media.css'

export default function Helpbar() {
  return (
    <div className="helpbar">
        <div className="helpvar_wrapper">
            <div className="helpbar__btn"><a href="tel:+79274962696"><img src="images/phone-call.png" alt="tel icon"/></a></div>
            <div className="helpbar__btn"><a href="mailto:emptiness243@gmail.com"><img src="images/email.png" alt=""/></a></div>
            <div className="helpbar__btn"><a href="https://instagram.com/ph__emptiness?igshid=YmMyMTA2M2Y="><img src="images/instagram.png" alt="inst"/></a></div>
        </div>
    </div>
  )
}
