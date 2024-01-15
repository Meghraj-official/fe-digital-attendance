import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <div className="p-10">
      <TypeAnimation
        sequence={[
          "Welcome to the Future of Attendance: ",
          1000,
          "Welcome to the Future of Attendance: QR Technology at Butwal Multiple Campus",
          1000,
          "Welcome to the Future of Attendance: QR Technology at Butwal ",
          1000,
          "Welcome to the Future of Attendance: QR Technology at Butwal Multiple ",
          1000,
          "Welcome to the Future of Attendance: QR Technology at Butwal Multiple Campus ...",
          1000,
        ]}
        wrapper="div"
        speed={50}
        className=" min-h-full mb-10  text-left  text-4xl xl:text-5xl font-poppins tracking-wider font-bold"
        // className=" h-60 md:h-[240px]  xl:h-[300px] md:w-[70%]   lg:w-[70%]  text-left  text-4xl xl:text-5xl font-mono font-bold"
        // repeat={Infinity}
      />
    </div>
  );
};

export default TypingAnimation;
