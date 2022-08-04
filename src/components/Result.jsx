import { useContext } from "react";
import { calculatorContext } from "../context/CalculatorContext";

import style from '../assests/styles/main.module.css'

const Result = () => {

  const { result, fileSize, fileSizeType, convertedSpeed } = useContext(calculatorContext);

  let day, hour, minute, second;

  day = Math.floor(result / (3600 * 24));
  hour = Math.floor((result % (3600 * 24)) / 3600);
  minute = Math.floor((result % 3600) / 60);
  second = Math.floor(result % 60);

  return (
    <div className={style.resultContainer} >
      <p>It would take</p>
      <h2>
        {day > 0 && `${day} day ${hour} hour ${minute} minute ${second} second`}
        {(day < 1 && hour > 0) && `${hour} hour ${minute} minute ${second} second`}
        {(hour < 1 && minute > 0) && ` ${minute} minute ${second} second`}
        {minute == 0 && `${second} second`}
      </h2>
      <p>to transfer <strong>{`${fileSize}  ${fileSizeType.toUpperCase()}`}</strong></p>
      <p>at <strong>{convertedSpeed} MB/sec</strong> </p>
    </div>
  );
};

export default Result;
