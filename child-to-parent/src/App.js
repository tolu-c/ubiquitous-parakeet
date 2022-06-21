import DataForm from "./components/DataForm";
import DataPreview from "./components/DataPreview";

export default function App() {
  return (
    <div className="">
      <h1 className="heading">React Props</h1>
      <h4 className="heading--sec">Child to parent communication</h4>
      <div>
        <DataForm />
        <DataPreview />
      </div>
    </div>
  );
}
