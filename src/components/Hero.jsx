import React from 'react';
import doctor from '../assets/doctor.png';
import icons from '../assets/icons.png';
import nurse from '../assets/nurse.png';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';

const Hero = () => {
  return (
    <div className='container mx-auto relative mb-10'>
      <span className='bg-[#9BEAE0] absolute -z-10 top-0 right-24 w-[590px] h-[847px] -skew-x-[5deg]'></span>
      <section className='flex items-center'>
        <div className='w-5/12'>
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
        <div className='w-7/12 flex justify-end relative'>
          <div className='absolute p-5 left-3 top-60 bg-white z-20 w-[292px] h-[192px] rounded-md drop-shadow-xl'>
            <div className='flex justify-between items-center'>
              <div className='flex justify-around items-center gap-x-4'>
                <img src={nurse} alt='' />
                <h6 className='font-sans-pro text-xs font-semibold'>
                  Jane Doe
                </h6>
              </div>
              <div>
                <img src={icons} alt='' />
              </div>
            </div>
            <div className='pt-4'>
              <p className='text-xs text-[#101C45]'>
                “The doctor appointment app has been great for me. Scheduling
                appointments and getting medication reminders is much easier,
                and I love the option for virtual consultations. I'd recommend
                this app to others.”
              </p>
            </div>
          </div>

          <div className='pl-24 mt-20 w-[530px] h-[794px]'>
            <img src={doctor} alt='' />
          </div>
        </div>
      </section>
      <section className='absolute bottom-0 left-16 right-16 p-10 flex items-start h-[191px] bg-[#203271] text-white shadow-lg'>
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
      </section>
    </div>
  );
};

export default Hero;
