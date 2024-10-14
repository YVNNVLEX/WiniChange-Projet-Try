import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/constants/testimonials';
import MobileTestimonialsComponent from '../components/MobileTestimonialsComponent';


const Testimonials = () => {

  return (
    <div className='bg-black w-full'>
        <div className="container mx-auto py-10">
      <div className="text-center md-14 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Nos clients satisfaits 
        </h2>
      </div>
      <div className="mt-20 md:mt-0 hidden md:grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`relative p-5 md:p-6 rounded-3xl shadow-lg border-2 bg-gray-200 mb-14 ${index % 2 ===0 ? 'md:mt-10': 'md:mb-16'}`}

            style={{
              borderColor: testimonial.color,
            }}
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 overflow-hidden rounded-full absolute top-[-2rem]">
                <Image
                  src={testimonial.image}
                  alt={`Client ${testimonial.name}`}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mb-4">
              <h6
                className="text-sm md:text-lg font-medium"
                style={{ color: testimonial.color }}
              >
                {testimonial.testimonial}
              </h6>
            </div>
            <div className="text-[12px] md:text-sm flex">
              <p className="font-bold" style={{ color: testimonial.color }}>
                {testimonial.name}
              </p>
              <span className="mx-1 text-black">•</span>
              <p className="font-bold" style={{ color: testimonial.color }}>
                {testimonial.location}
              </p>
            </div>
          </div>
        ))}
      </div>
      <MobileTestimonialsComponent/>
       </div>
    </div>
  );
};

export default Testimonials;
