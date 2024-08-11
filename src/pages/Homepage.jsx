import Header from "../component/Header";
import Imagecard from "../component/Imagecard";
import { Languages, VideoMaker, VisionMagic } from "../images.path";
import VideoDemo from "../assets/videos/demo.mp4";
import Footer from "../component/Footer";
const Homepage = () => {
  const cards = [
    { imageSrc: VideoMaker, title: "Stunning Video Creation" },
    { imageSrc: VisionMagic, title: "Multilingual Mastery" },
    { imageSrc: Languages, title: "Your Vision, Our Magic" },
    // Add more cards as needed
  ];

  const languages = [
    { code: "EN", name: "English" },
    { code: "ES", name: "Spanish" },
    { code: "FR", name: "French" },
    { code: "DE", name: "German" },
    // Add more languages as needed
  ];

  return (
    <div className="home-page-section">
      <Header />

      {/* benifity section */}
      <h2 className="text-2xl flex justify-center mt-5 font-bold text-blue-500 m-auto ">
        Welcome to VidAize
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {cards.map((card, index) => (
          <Imagecard key={index} imageSrc={card.imageSrc} title={card.title} />
        ))}
      </div>

      {/* video  section */}
      <h2 className="text-2xl flex justify-center mt-5 font-bold text-blue-500 m-auto ">
        Try it yourself!
      </h2>

      {/* Video Component */}
      <div className="relative p-4">
        <video
          controls
          className="w-full h-auto rounded-lg shadow-lg"
          src={VideoDemo}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Language Cards */}
      <div className="mt-3 mb-3 flex flex-wrap justify-center gap-4">
        {languages.map((lang) => (
          <div
            key={lang.code}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          >
            {lang.name}
          </div>
        ))}
      </div>

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default Homepage;
