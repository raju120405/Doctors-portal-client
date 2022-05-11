import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png'
const ContactWithUs = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }}>
            <div className='text-center'>
                <h1 className='text-xl text-primary pt-8 font-bold'>Contact Us</h1>
                <h1 className='text-4xl text-white p-4'>Stay connected with us</h1>
                    <form action="">
                        <input className='px-12 py-2 m-3 rounded-md' type="email" name="email" id="" placeholder='Email Address' /><br />
                        <input className='px-12 py-2 mt-3 mb-5 rounded-md' type="text" name="subject" id="" placeholder='Subject' /><br />
                    
                        <textarea className='px-12 py-4 mb-3 rounded-md' name="text" id="" placeholder='Your message'></textarea> <br />
                       <div className='pb-6'> <PrimaryButton>Submit</PrimaryButton></div>
                    </form>
                
            </div>
        </section>
    );
};

export default ContactWithUs;