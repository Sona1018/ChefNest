import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonial1 = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          (process.env.REACT_APP_API_URL || "http://localhost:8000") +
            "/testimonial/get"
        );

        if (response.data && response.data.data) {
          setTestimonialsData(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-orange-500 uppercase tracking-widest font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
            Hear from our happy customers who trust ChefNest for delicious
            home-cooked meals and professional chef services.
          </p>
        </div>

        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial._id} className="p-4">

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center h-full border border-gray-100">

                <FaQuoteLeft className="text-orange-500 text-3xl mx-auto mb-5" />

                <img
                  src={testimonial.profileimage}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-orange-200"
                />

                <div className="flex justify-center mt-5 mb-4 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="text-gray-600 leading-7 italic min-h-[130px]">
                  "{testimonial.content}"
                </p>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Verified Customer
                </p>

              </div>

            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default Testimonial1;