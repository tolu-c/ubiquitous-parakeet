const DataPreviewItem = ({ name, email }) => {
  console.log(`Name: ${name} Email: ${email}`);
  return (
    <div className="w-full flex flex-col gap-y-4 py-4 border-b-4 border-gray-800">
      <p className="text-2xl capitalize font-bold text-gray-800/50">
        Name: <span className="text-gray-800 text-3xl">{name}</span>
      </p>
      <p className="text-2xl capitalize font-bold text-gray-800/50">
        email:{" "}
        <span className="text-blue-800 cursor-pointer underline lowercase text-3xl">
          {email}
        </span>
      </p>
    </div>
  );
};

export default DataPreviewItem;
