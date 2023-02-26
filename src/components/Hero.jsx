import React from 'react';
import doctor from '../assets/doctor.png';
import icons from '../assets/icons.png';
import nurse from '../assets/nurse.png';

const Hero = () => {
  return (
    <div className='container mx-auto relative mb-10'>
      <span className='bg-[#9BEAE0] absolute -z-10 top-0 right-24 w-[590px] h-[847px] -skew-x-[5deg]'></span>
      <div className='hidden lg:block lg:absolute lg:p-5 lg:right-96 lg:left-[550px] lg:top-60 bg-white z-20 lg:w-[292px] lg:h-[192px] rounded-md drop-shadow-xl'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-around items-center gap-x-4'>
            <img src={nurse} alt='' />
            <h6 className='font-sans-pro text-xs font-semibold'>Jane Doe</h6>
          </div>
          <div>
            <img src={icons} alt='' />
          </div>
        </div>
        <div className='pt-4'>
          <p className='text-xs text-[#101C45]'>
            “The doctor appointment app has been great for me. Scheduling
            appointments and getting medication reminders is much easier, and I
            love the option for virtual consultations. I'd recommend this app to
            others.”
          </p>
        </div>
      </div>
      <section className='flex flex-wrap justify-between items-center '>
        <div className='w-full lg:w-5/12 pt-52 lg:pt-0'>
          <div>
            <h5 className='font-dm-sans text-[#101C45] text-5xl tracking-wide'>
              Get the healthcare you need, when you need it.
            </h5>
          </div>
          <div className='my-4'>
            <p className='font-dm-sans text-[#101C45] tracking-wider'>
              Manage all of your healthcare needs in one convenient place – from
              booking appointments to tracking your health history.
            </p>
          </div>
          <div>
            <button className='bg-[#101C45] px-9 py-4 text-white'>
              {' '}
              Book An Appointment
            </button>
          </div>
        </div>
        <div className='w-full lg:w-7/12'>
          <div className='flex justify-center lg:justify-between'>
            <div></div>
            <div className='mt-20 lg:pl-24 w-[530px] h-[794px]'>
              <img src={doctor} alt='' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
