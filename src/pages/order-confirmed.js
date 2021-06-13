import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { React, useEffect, useState} from 'react';
import { Link } from "react-router-dom";


export default function OrderConfirmed() {
    

     return <div class="ordered-container">
                <div class="background-section">
                    <div>
                    <div class="ordered-icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                        <div class="ordered-text">
                            <h1>Order Confirmed</h1>
                            <p>don't call us, we're not going to call you</p>
                    </div>
                    </div>
                </div>
            </div>
}