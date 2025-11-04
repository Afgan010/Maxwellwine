import video from "../../../../assets/videos/Hero-video.mp4";

const Hero = () => {
  return (
    <section className="hero">
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="bgVideo"
      ></video>
    </section>
  );
};

export default Hero;
