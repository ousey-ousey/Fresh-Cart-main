import Slider from "react-slick";

export default function ProductImageSlider({ images }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {" "}
      <Slider {...settings}>
        {images.map((img, i) => {
          return (
            <img 
            key={i}
              className="w-full mx-auto rounded-md object-contain"
              src={img}
              alt="..."
            />
          );
        })}
      </Slider>
    </>
  );
}
