import { FC } from "react";

interface AnimatedHeaderProps {}

const AnimatedHeader: FC<AnimatedHeaderProps> = ({}) => {
  return (
    <div
      className="overflow-hidden max-h-screen relative select-none"
      style={{ backgroundColor: "#130013" }}
    >
      <div className="sr-only absolute top-20 text-center w-full">
        <h1 className="text-xl">
          CSCI 1951L: Blockchains and Cryptocurrencies
        </h1>
        <a href="#course-info">Jump to main content</a>
      </div>
      {/* <video onContextMenu={(e) => e.preventDefault()} id="animated-header" playsInline autoPlay muted
               loop
               preload="auto"
               className="object-cover w-full h-screen">
            <source src="/anim.webm"
                    type="video/webm"/>
            <source src="/anim.mp4" type="video/mp4"/>
            <img src="/anim_placeholder.jpeg" className="object-cover w-full h-screen"/>
        </video> */}
      {/* object should shrink if mobile */}
      <img
        src="/headerImage.png"
        className="w-full max-h-[40vh] object-contain mt-20 mx-auto"
        // width={1000}
        // style={{ height: "40vh" }}
      />
    </div>
  );
};

export default AnimatedHeader;
