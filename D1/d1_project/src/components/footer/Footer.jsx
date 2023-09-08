import React, { Component } from "react";
import './Footer.css'
import { footerColOne, footerColTwo, footerColThree } from "../constants/footer";
import { nanoid } from 'nanoid/non-secure'


class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <ul className="footer-ul">
                        {footerColOne.map((link => 
                            <li key={nanoid()}>
                                <a href={link.href}>
                                    {link.lablel}
                               </a>
                           </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="footer-ul">
                    {footerColTwo.map((link => 
                            <li key={nanoid()}>
                                <a href={link.href}>
                                    {link.lablel}
                               </a>
                           </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="footer-ul">
                    {footerColThree.map((link => 
                            <li key={nanoid()}>
                                <a href={link.href}>
                                    {link.lablel}
                               </a>
                           </li>
                        ))}
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;