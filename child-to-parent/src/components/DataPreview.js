import DataPreviewItem from "./DataPreviewItem";
import Card from "./ui/Card";

const DataPreview = ({ savedData }) => {
  if (savedData.length === 0) {
    return (
      <Card>
        <h2 className="text-lg md:text-2xl lg:text-3xl fonts-sans font-semibold text-gray-700">
          No data yet. Fill in the form to have some data.
        </h2>
      </Card>
    );
  }

  return (
    <div>
      <h3>Preview Data from Data form</h3>
      <Card>
        {savedData.map(({ enteredName, enteredEmail }) => (
          <DataPreviewItem
            key={enteredEmail}
            name={enteredName}
            email={enteredEmail}
          />
        ))}
      </Card>
    </div>
  );
};

export default DataPreview;
