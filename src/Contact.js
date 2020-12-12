import React from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import './Contact.css';

function Contact() {
    return (
        <div id="contact" className="contact">
            <div>
                <h2>Don't be Shy, ask the <strong>Read&Find</strong> team</h2>
                <hr></hr>
                <h3>Monday to Sunday 7:00 am - 5:00 pm (PST)</h3>
            </div>

            <div className="contactcard">
                <div className="one">
                    <ChatIcon fontSize="large"></ChatIcon>
                    <p>Let's have a Chat</p>
                    <input type="text" />
                </div>

                <div className="two">
                    <EmailIcon fontSize="large"></EmailIcon>
                    <p>Drop a Mail</p>  
                    <input type="text" />
                </div>

                <div className="three">
                    <PhoneAndroidIcon fontSize="large"></PhoneAndroidIcon>
                    <p>Text Us</p>
                    <input type="text" />
                </div>

                <div className="four">
                    <p>Tweet Us</p>
                    <hr></hr>
                    <input type="text" />
                    <p>faceBook Us</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
