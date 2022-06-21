import DataForm from "./components/DataForm";
import DataPreview from "./components/DataPreview";

export default function App() {
  const addData = (data) => {
    const enteredData = {
      ...data,
    };
    console.log("from app js");
    console.log(enteredData);
  };

  return (
    <div className="">
      <h1 className="heading">React Props</h1>
      <h4 className="heading--sec">Child to parent communication</h4>
      <div>
        <DataForm onAddData={addData} />
        <DataPreview />
      </div>
    </div>
  );
}
