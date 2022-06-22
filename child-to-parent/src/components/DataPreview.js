import Card from "./ui/Card";

const DataPreview = ({ savedData }) => {
  // console.log("from data preview");
  // console.log(savedData);

  return (
    <div>
      <h3>Preview Data from Data form</h3>
      <Card>
        <div className="w-full flex flex-col gap-y-4">
          <p className="text-2xl capitalize font-bold text-gray-800/50">
            Name: <span className="text-gray-800 text-3xl">Tolu</span>
          </p>
          <p className="text-2xl capitalize font-bold text-gray-800/50">
            email:{" "}
            <span className="text-blue-800 cursor-pointer underline lowercase text-3xl">
              email
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default DataPreview;
