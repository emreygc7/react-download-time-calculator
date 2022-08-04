import { useContext } from "react";
import { calculatorContext } from "./context/CalculatorContext";
import Speed from "./components/Speed";
import FileSize from "./components/FileSize";
import Result from "./components/Result";
import { Toaster } from "react-hot-toast";
import style from "./assests/styles/main.module.css";

function App() {
  const { result } = useContext(calculatorContext);

  return (
    <>
      <div className={style.mainContainer}>
        <h1>Download Time Calculator</h1>
        <Speed />
        <FileSize />
        {result != 0 && <Result />}
      </div>
      <Toaster />
    </>
  );
}

export default App;
