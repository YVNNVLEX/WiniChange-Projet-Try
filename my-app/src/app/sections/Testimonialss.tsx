import { testimonials } from "@/constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem.jsx";

const TestimonialsSection = () => {
  const halfLength = Math.floor(testimonials.length / 2);

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40 bg-black text-white">
      <div className="container mx-auto block lg:flex">
        <div className="relative z-2 mr-20 flex-1 mb-10 max-md:mb-5"> 
          <p className="mb-5 text-xl text-white/60">Mur de témoignages</p>
          <h3 className="text-5xl md:text-6xl font-bold mb-10">Ce que disent nos utilisateurs</h3>
        </div>
        
        <div className="relative flex flex-col md:flex-row"> 
          <div className="flex-1 mb-5 md:mb-0"> 
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-1">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
