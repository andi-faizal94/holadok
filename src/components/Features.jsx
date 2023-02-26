import React from 'react';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
const Features = () => {
  return (
    <section className='container mx-auto mt-5 lg:-mt-[184px] '>
      <div className='flex flex-wrap lg:flex-nowrap p-10 items-start h-full lg:h-[191px] bg-[#203271] text-white shadow-lg z-50'>
        <div className='flex gap-x-3 items-start'>
          <div className='pt-1'>
            <img src={icon1} alt='' />
          </div>
          <div>
            <h6 className='font-dm-sans font-bold text-lg'>
              Online appointment scheduling
            </h6>
            <p className='font-dm-sans font-normal text-base'>
              Allows users to schedule appointments with their healthcare
              provider through the app.
            </p>
          </div>
        </div>
        <div className='flex gap-x-3 items-stretch'>
          <div className='pt-1'>
            <img src={icon2} alt='' />
          </div>
          <div>
            <h6 className='font-dm-sans font-bold text-lg'>
              Medication reminders
            </h6>
            <p className='font-dm-sans font-normal text-base'>
              Allows users to schedule appointments with their healthcare
              provider through the app.
            </p>
          </div>
        </div>
        <div className='flex gap-x-3 items-stretch'>
          <div className='pt-1'>
            <img src={icon3} alt='' />
          </div>
          <div>
            <h6 className='font-dm-sans font-bold text-lg'>
              Virtual consultations
            </h6>
            <p className='font-dm-sans font-normal text-base'>
              Allows users to schedule appointments with their healthcare
              provider through the app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
