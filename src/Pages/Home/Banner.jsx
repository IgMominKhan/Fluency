import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";
import { Button } from "flowbite-react";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // slider's data
  const slides = [{
    image:
      "https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-4-1.jpg",
    title: "To have another language is to possess a second soul.",
  }, {
    image:
      "https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-6.jpg",
    title: "Learning a new language opens hundreds opportunities",
  }, {
    image:
      "https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-1-1.jpg",
    title: "Experience the Richness of Different Cultures Through Language",
  }, {
    image:
      "https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-7.jpg",
    title: "Don't be silent While you have something to say",
  }];
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper relative "
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item.image} />

            <div className="absolute z-20 text-white top-1/2 left-20 -translate-y-1/2 max-w-xl">
              <h1 className='title'>{item.title}</h1>
              <Button className="px-8 uppercase mt-5">sign up</Button>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
