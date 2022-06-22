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
    <div className="bg-gradient-to-r w-full h-auto hide-scrollbar overflow-y-scroll scroll-smooth from-sky-500 to-indigo-500">
      <h1 className="text-3xl font-bold font-sans text-sky-50">React Props</h1>
      <h4 className="text-lg font-medium font-sans text-sky-100">
        Child to parent communication
      </h4>

      <div>
        <DataForm onAddData={addData} />
        <DataPreview savedData={myData} />
      </div>
    </div>
  );
}
