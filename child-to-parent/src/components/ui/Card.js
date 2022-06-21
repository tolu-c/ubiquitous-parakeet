const Card = ({ children }) => {
  return (
    <div className="w-5/6 mx-auto border border-gray-100 shadow-md p-4 py-6 mb-16 my-10">
      {children}
    </div>
  );
};

export default Card;
