const Card = ({ children }) => {
  return (
    <div className="w-5/6 md:w-3/4 lg:w-1/2 bg-white rounded-md mx-auto border border-gray-100 shadow-md p-4 py-6 mb-16 my-10">
      {children}
    </div>
  );
};

export default Card;
