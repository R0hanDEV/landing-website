import PropTypes from "prop-types";

const Imagecard = ({ imageSrc, title }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2">
        {title}
      </div>
    </div>
  );
};

Imagecard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Imagecard;
