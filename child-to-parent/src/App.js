import { useState } from "react";
import DataForm from "./components/DataForm";
import DataPreview from "./components/DataPreview";

export default function App() {
  const [myData, setMyData] = useState([]);

  const addData = (data) => {
    // console.log(data);
    setMyData((prevData) => [data, ...prevData]);

    // console.log(myData);
  };

  return (
    <div className="">
      <h1 className="heading">React Props</h1>
      <h4 className="heading--sec">Child to parent communication</h4>

      <div>
        <DataForm onAddData={addData} />
        <DataPreview savedData={myData} />
      </div>
    </div>
  );
}
