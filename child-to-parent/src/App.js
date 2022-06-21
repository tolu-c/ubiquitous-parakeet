import DataForm from "./components/DataForm";
import DataPreview from "./components/DataPreview";

export default function App() {
  const myData = [];

  const addData = (data) => {
    const enteredData = {
      ...data,
    };
    myData.push(enteredData);
    console.log(myData);
    console.log(myData[0].enteredEmail);
  };

  return (
    <div className="">
      <h1 className="heading">React Props</h1>
      <h4 className="heading--sec">Child to parent communication</h4>
      {myData.length !== 0 && myData.map((data, index) => (
        <div key={index}>
          <p>{data[index].enteredName}</p>
          <p>{data[index].enteredEmail}</p>
        </div>
      ))}
      <div>
        <DataForm onAddData={addData} />
        <DataPreview />
      </div>
    </div>
  );
}
