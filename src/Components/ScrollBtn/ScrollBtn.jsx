import React, {useState} from 'react'
import "./scrollbtn.css"

import '../../media.css'

export default function ScrollBtn() {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  window.addEventListener('scroll', checkScrollTop)

  const skipToStart = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
  }

  return (
    <div onClick={skipToStart} style={{ opacity: showScroll ? '1' : '0' }} className="scroll-top"><img src="phemptiness.github.io/images/up-arrow.png" alt="up-arrow"/></div>
  )
}
