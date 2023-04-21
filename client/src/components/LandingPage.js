
            
// import { useInView } from 'react-intersection-observer';
// import CountUp from 'react-countup';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../variants';
// import Logo from '../assets/mazingiralogo.png';
// import image from '../assets/image2..jpg';

// function LandingPage() {
//   const [ref, inView] = useInView({
//     threshold: 0.3,
//     triggerOnce: true
//   });

//   return (
//     <div className="bg-[#32594a] h-screen flex justify-center items-center" ref={ref}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between mb-8">
//           <img src={Logo} alt="Logo" className="h-12 w-12" />
//           <button
//             className="bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] font-semibold py-2 px-4 rounded"
//             style={{ color: 'goldenrod' }}
//           >
//             Login
//           </button>
//         </div>
//         <div className="flex items-center">
//           <motion.div
//             variants={fadeIn('left', 0.5)}
//             initial="hidden"
//             animate={inView ? 'show' : 'hidden'}
//             className="flex-1"
//           >
//             <h2 className="text-accent font-secondary mb-2 text-[36px] font-bold" style={{ color: 'goldenrod' }}>
//               Welcome to our Donation Platform
//             </h2>
//             <h3 className="text-accent mb-4 font-secondary text-[18px] font-semibold" style={{ color: 'white' }}>
//               Make a difference by donating to causes you care about
//             </h3>
//             <p className="mb-6 text-primary font-secondary text-[18px] font-semibold" style={{ color: 'white' }}>
//               Your support can help change lives and make a positive impact on communities in need.
//             </p>
//             <div className="flex gap-x-6 lg:gap-x-10 mb-12" style={{ color: 'white' }}>
//               <div>
//                 <div className="text-[40px] font-tertiary text-gradient mb-2">
//                   {inView ? <CountUp start={0} end={3} duration={3} /> : null}
//                 </div>
//                 <div className="font-primary text-sm tracking-[2px]">
//                   Years of <br />
//                   Experience
//                 </div>
//               </div>
//               <div>
//                 <div className="text-[40px] font-tertiary text-gradient mb-2">
//                   {inView ? <CountUp start={0} end={300} duration={3} /> : null}
//                 </div>
//                 <div className="font-primary text-sm tracking-[2px]">
//                   Projects <br />
//                   Completed
//                 </div>
//               </div>
//               <div>
//                 <div className="text-[40px] font-tertiary text-gradient mb-2">
//                   {inView ? <CountUp start={0} end={40} duration={3} /> : null}
//                 </div>
//                 <div className="font-primary text-sm tracking-[2px]">
//                   Satisfied <br />
//                   Clients
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-x-8 lg:gap-x-10 mb-12" style={{ color: 'white' }}>
// <motion.div
// variants={fadeIn('bottom', 0.8)}
// initial="hidden"
// animate={inView ? 'show' : 'hidden'}
// className="flex items-center"
// >

// <div className="ml-4">
// <h4 className="text-accent font-secondary text-[24px] font-bold mb-2" style={{ color: 'goldenrod' }}>
// Donate Now
// </h4>
// <p className="font-primary text-[18px] mb-4" style={{ color: 'white' }}>
// Choose from various causes and make a difference in the lives of those in need.
// </p>
// <button
// className="bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] font-semibold py-2 px-4 rounded"
// style={{ color: 'goldenrod' }}
// >
// Learn More
// </button>
// </div>
// </motion.div>

// </div>
// </motion.div>
// <motion.div
// variants={fadeIn('right', 0.5)}
// initial="hidden"
// animate={inView ? 'show' : 'hidden'}
// className="flex-1 hidden lg:block"
// >
// <img src={image} alt="Donate" className="h-[500px] w-[500px] object-cover rounded-lg" />
// </motion.div>
// </div>
// </div>
// </div>
// );
// }

// export default LandingPage;



import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Logo from '../assets/Mazingiralogo3.png';
import image from '../assets/image9.jpg';

function LandingPage() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div className="bg-[#042a30] h-screen flex justify-center items-center" ref={ref}>
      <div className="container mx-auto px-4 ">
  <div className="flex items-center justify-between mb-8 ">
    <img src={Logo} alt='logo' className=" h-30 w-60 absolute top-0 left-0  " /> 
    <Link to="/login">
  <button
    className="bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] font-semibold py-2 px-4 rounded absolute top-0 right-0 mt-4 mr-4" /* Positioned login button at top right */
    style={{ color: 'goldenrod' }}
  >
    Login
  </button>
</Link>
  </div>
        <div className="flex items-center">
        <motion.div
  variants={fadeIn('left', 0.5)}
  initial="hidden"
  animate={inView ? 'show' : 'hidden'}
  className="flex-1"
>
  <div className="bg-[#fff5e1] p-6 rounded-lg" style={{ color: 'goldenrod' }}>
    <h2 className="text-accent font-secondary mb-2 text-[36px] font-bold">
      Welcome to our Donation Platform
    </h2>
    <h3 className="text-accent mb-4 font-secondary text-[18px] font-semibold" style={{ color: 'black' }}>
      Make a difference by donating to Environmental causes you care about
    </h3>
    <p className="mb-6 text-primary font-secondary text-[18px] font-semibold" style={{ color: 'black' }}>
      Your support can help change lives and make a positive impact on communities in need.
    </p>
    <div className="flex gap-x-6 lg:gap-x-10 mb-12 font-bold" style={{ color: 'black' }}>
      <div className="flex-1">
        <div className="text-[40px] font-tertiary text-gradient mb-2" style={{ color: 'goldenrod' }}>
          {inView ? <CountUp start={0} end={5} duration={5} /> : null}
        </div>
        <div className="font-primary text-sm tracking-[2px]">
          Years of <br />
          Impact
        </div>
      </div>
      <div className="flex-1">
        <div className="text-[40px] font-tertiary text-gradient mb-2" style={{ color: 'goldenrod' }}>
          {inView ? <CountUp start={0} end={300} duration={4} /> : null}
          k+
        </div>
        <div className="font-primary text-sm tracking-[2px]">
          Amount <br />
          Raised
        </div>
      </div>
      <div className="flex-1">
        <div className="text-[40px] font-tertiary text-gradient mb-2" style={{ color: 'goldenrod' }}>
          {inView ? <CountUp start={0} end={40} duration={4} /> : null}
          k+
        </div>
        <div className="font-primary text-sm tracking-[2px]">
          Beneficiaries <br />
          
        </div>
      </div>
    </div>
    <div className="flex gap-x-6 lg:gap-x-10">
    <Link to="/donorregistration">
      <button
        className="bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] font-semibold py-2 px-4 rounded"
        style={{ color: 'goldenrod' }}
      >
        Donate Now
      </button>
      </Link>
      <Link to="/learnmore">
      <button
        className="bg-transparent hover:bg-yellow-200 text-[#fff5e1] font-semibold py-2 px-4 rounded border border-white"
        style={{ color: 'goldenrod' }}
      >
        Learn More
      </button>
      </Link>
    </div>
  </div>
</motion.div>
<motion.div
  variants={fadeIn('right', 0.5)}
  initial="hidden"
  animate={inView ? 'show' : 'hidden'}
  className="flex-1 hidden md:block"
  style={{ marginLeft: '4rem' }} // Add margin to create space
>
<img src={image} alt="Donate" className="h-[600px] w-[600px] object-cover rounded-lg" />
</motion.div>
</div>
</div>
</div>
);
}

export default LandingPage;


