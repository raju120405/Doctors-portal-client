import React from 'react';
import quote from '../../assets/icons/quote.svg'
const Testimonial = () => {
    return (
        <section className='py-28'>
            <div className='flex justify-between'>
            <div>
                <h2 className='text-xl text-primary font-bold'>Testimonial
                    </h2>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:48' src={quote} alt="" />
                </div>
            </div>
            
            <div></div>
        </section>
    );
};

export default Testimonial;