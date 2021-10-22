import * as React from "react"
import Slider from "react-slick";



// markup
const IndexPage = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  
  return (
    <main>

      <h1 className="text-center text-4xl text-gray-800 tracking-wider"> This is the slider</h1>


      <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>

    </main>
  )
}

export default IndexPage
