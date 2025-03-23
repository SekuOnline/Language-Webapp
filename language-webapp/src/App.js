import "./App.css";
import { useState, React } from "react";
import Papa from "papaparse";

function App() {
  const [dataSet, setDataSet] = useState(null);

  const onFileChangeHandler = (event) => {
    const csvFile = event.target.files[0];
    // console.log(dataSetFile);

    Papa.parse(csvFile, {
      complete: function (results) {
        console.log(results.data);
        setDataSet(results.data[0]);
      },
    });
  };

  return (
    <div className="App">
      {/* <UploadForm /> */}
      <input
        type="file"
        accept="text/csv"
        onChange={onFileChangeHandler}
      ></input>
      <p>{dataSet}</p>
    </div>
  );
}

export default App;
