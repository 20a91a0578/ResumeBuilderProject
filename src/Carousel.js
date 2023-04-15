// import React, { useState } from 'react';

// const Carousel = ({ items }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handlePrevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? items.length - 1 : currentSlide - 1);
//   };

//   const handleNextSlide = () => {
//     setCurrentSlide(currentSlide === items.length - 1 ? 0 : currentSlide + 1);
//   };

//   return (
//     <div className="carousel">
//       {items.map((item, index) => (
//         <div
//           key={item.id}
//           className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           <img src={item.image} alt={item.title} />
//           <h3>{item.title}</h3>
//           <p>{item.description}</p>
//         </div>
//       ))}
//       <button onClick={handlePrevSlide}>Prev</button>
//       <button onClick={handleNextSlide}>Next</button>
//     </div>
//   );
// };

// export default Carousel;
