import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import csv from 'csvtojson'
import request from 'request'

import '../styles/appointment.css';

import ParallaxPage from '../components/ParallaxPage'

export default class Appointment extends ParallaxPage {

    componentDidMount() {

        this.onMount()

        const container = document.querySelector('.appointment')
        const schedule = document.getElementById('schedule')
        var dup_schedule
        const appointmentForm = document.getElementById('appointmentForm')
        const details = document.querySelector('.details')
        var dup_details
        const date_display = document.querySelector('#date')

        const $this = this

        container.addEventListener('click', function(e) {
            if(e.target.id === 'date') {
                schedule.classList.remove('hide')
                dup_schedule.classList.remove('hide')
                details.classList.remove('show')
                container.removeChild(dup_details)
            }
        })

        csv().fromStream(request.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vT73aA4EL14bIa0CTny6qR-Pvb1tXIYTK7bAFXUO5yTOU6zk-_6ah0TZYxbm8p_S5irks-4sOMNSxcl/pub?output=csv'))
        .on('csv',(csvRow)=>{
            var row = document.createElement("p")
            var date = document.createElement("span")
            date.innerText = csvRow[0]
            row.appendChild(date)
            for(var i=1;i<csvRow.length;i++) {
                var time = null
                switch(i) {
                    case 1:
                        time = '11a'
                    break;
                    case 2:
                        time = '12p'
                    break;
                    case 3:
                        time = '1p'
                    break;
                    case 4:
                        time = '2p'
                    break;
                    case 5:
                        time = '3p'
                    break;
                    case 6:
                        time = '4p'
                    break;
                    case 7:
                        time = '5p'
                    break;
                }
                var slot = document.createElement("label")
                var radio = document.createElement("input")
                var id = csvRow[0].replace(' ','').replace('/','')+'_'+time
                slot.setAttribute('for', id)
                radio.setAttribute('type', 'radio')
                radio.setAttribute('name', 'Date')
                radio.setAttribute('value', csvRow[0]+'; '+time)
                radio.id = id

                if(csvRow[0] === 'Fri 11/24') {
                    slot.innerText = 'blackfriday'
                    slot.classList.add('na')
                    row.classList.add('blackfriday')
                } else if(csvRow[i] === 'y') {
                    slot.innerText = time
                    slot.classList.add('open')
                    row.appendChild(radio)
                } else {
                    slot.innerText = 'n/a'
                    slot.classList.add('na')
                }
                
                row.appendChild(slot)
                
            }

            schedule.appendChild(row)
            schedule.classList.add('show')
            
        })
        .on('done',(error)=>{
            
            dup_schedule = schedule.cloneNode(true)
            dup_schedule.id = 'schedule2'
            const dup_radios = dup_schedule.querySelectorAll('input[type=radio]')
            for(let i=0;i<dup_radios.length;i++) {
                dup_radios[i].setAttribute('name', 'Date2')
            }

            

            container.appendChild(dup_schedule)
            const radios = document.querySelectorAll('.schedule input[type=radio]')
            for(let i=0;i<radios.length;i++) {
                radios[i].addEventListener('click', function(e) {
                    const selected = document.querySelectorAll('#'+e.target.id)
                    
                    date_display.innerText = '← ' + e.target.value
                    dup_schedule.classList.add('hide')
                    schedule.classList.add('hide')
                    for(let i=0;i<selected.length;i++) {
                        selected[i].setAttribute('checked', true)
                    }

                    details.classList.add('show')
                    dup_details = details.cloneNode(true)
                    dup_details.classList.add('clone')
                    container.appendChild(dup_details)
                    $this.container.scrollTop = window.innerHeight
                })
            }
            
        })

        const social_inputs = appointmentForm.querySelectorAll('input, textarea')

        for(let i=0; i<social_inputs.length; i++) {
            social_inputs[i].addEventListener('focus', function() {
                social_inputs[i].parentNode.classList.add('focus')
            })
            social_inputs[i].addEventListener('blur', function() {
                social_inputs[i].parentNode.classList.remove('focus')
            })
        }

        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault()

            const fields = e.target.querySelectorAll('input[type=hidden], input[type=email], input[type=text], input:checked, textarea')

            var formData = {}

            for(let n=0;n < fields.length;n++) {
                formData[fields[n].getAttribute('name')] = fields[n].value
            }


            var req = {
                 url: 'https://formspree.io/ab@abscreenwear.com',
                 method: 'POST',
                 headers: {
                     'Accept': 'application/json'
                 },
                 form: formData
             };

             request(req, function() {
                appointmentForm.classList.add('hide')
                container.removeChild(dup_details)
                const thankyou = document.querySelector('.thankyou')
                thankyou.classList.add('show')
             })

        })



    }

    render() {

        const details = <div className="details_fields">

                            <p>
                                <label id="date">

                                </label>
                            </p>

                            <br/>

                            <label className="textField">
                                First name:
                                <input required name="First name" type="text" />
                            </label>
                            <label className="textField">
                                Last name:
                                <input required name="Last name" type="text" />
                            </label>
                            <label className="textField">
                                Email address:
                                <input required name="Email address" type="email" />
                            </label>
                            <label className="textField mailing-address">
                                Mailing address:
                                <textarea name="Mailing address"></textarea>
                            </label>
                            <div className="help-box">
                                    Optional.
                                    If you provide your
                                    mailing address, we will
                                    send your Appointment
                                    confirmation card and
                                    Ab[Screenwear] starter
                                    kit by mail
                                </div>
                            <div className="social-handles">
                                <p>Social handles:</p>
                                <label className="textField">
                                    instagram:
                                    <input name="Instagram" type="text" />
                                </label>
                                <label className="textField">
                                    twitter:
                                    <input name="Twitter" type="text" />
                                </label>
                                <label className="textField">
                                    facebook:
                                    <input name="Facebook" type="text" />
                                </label>

                                <div className="help-box">
                                    We use this 
                                    information confidentially to prepare a custom 
                                    selection of garments
                                    for your appointment
                                </div>
                            </div>



                            <p>
                                <span>Age:</span>
                                <input id="age_18" type="radio" name="Age" value="18+" />
                                <label className="open" htmlFor="age_18">
                                 18+
                                </label>
                                <input id="age_32" type="radio" name="Age" value="32+" />
                                <label className="open" htmlFor="age_32">
                                 32+
                                </label>
                                <input id="age_45" type="radio" name="Age" value="45+" />
                                <label className="open" htmlFor="age_45">
                                 45+
                                </label>
                            </p>

                            <p>
                                <span>Size:</span>
                                <input id="S" type="radio" name="Size" value="S" />
                                <label className="open" htmlFor="S">
                                 S
                                </label>
                                /
                                <input id="M" type="radio" name="Size" value="M" />
                                <label className="open" htmlFor="M">
                                 M
                                </label>
                                /
                                <input id="L" type="radio" name="Size" value="L" />
                                <label className="open" htmlFor="L">
                                 L
                                </label>
                            </p>

                            <input type="hidden" name="_subject" value="New appointment request" />
                            <input type="text" name="_gotcha" style={{ display: 'none' }} />
                            <p>

                                <button type="submit">Next ></button>

                            </p>
                        </div>



        return (
            <div className="appointment">

                <form id="appointmentForm" action="https://formspree.io/ab@abscreenwear.com" method="POST">

                    <div className="schedule" id="schedule">

                    </div>

                    <div className="details">
                        {details}
                    </div>
                    
                    
                </form>

                <div className="thankyou">
                    <p>
                    Thank you!
                    </p>
                    <p>
                    You will receive your confirmation by email and, if you provided your mailing address, by mail.
                    </p>
                </div>
            </div>
        );
    }
}