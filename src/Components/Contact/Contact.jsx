import React from 'react'
import "./contact.css"

import '../../media.css'

export default function Contact() {
  return (
    <footer id="contacts">
        <div className="footer_wrapper">
            <h1 className="footer__links"><a href="https://instagram.com/ph__emptiness?igshid=YmMyMTA2M2Y=">INSTAGRAM</a></h1>
            <h1 className="footer__links" style={{ marginBottom: 50 }}><a href="https://vk.com/adelinochka4">VKONTAKTE</a></h1>
            <h5 className="footer__contact">emptiness243@gmail.com</h5>
            <h5 className="footer__contact">+7 927 496 2696</h5>
        </div>
    </footer> 
  )
}
