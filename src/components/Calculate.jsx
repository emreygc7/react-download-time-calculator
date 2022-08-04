import { useContext } from 'react'
import { calculatorContext } from '../context/CalculatorContext'
import style from '../assests/styles/main.module.css'
import toast from 'react-hot-toast'

const Calculate = () => {
    
    const {speed, speedType, setConvertedSpeed, fileSize, fileSizeType, setResult } = useContext(calculatorContext)

    const calculateTime = () => {
      
      let convertSpeed, convertFileSize; 

      if(speed == 0 || fileSize == 0){
        toast.error("Values ​​cannot be zero.")
      }else {
        switch (speedType) {
          case "mbps": convertSpeed = (speed / 8.3886).toFixed(2); break;
          case "gbps": convertSpeed = speed * 119.21; break;
        }
    
        switch (fileSizeType) {
          case "mb": convertFileSize = fileSize; break;
          case "gb": convertFileSize = fileSize * 1024; break;
          case "tb": convertFileSize = fileSize * 1048576; break;
        }
    
        setConvertedSpeed(convertSpeed);
        setResult(convertFileSize / convertSpeed);
        console.log(convertSpeed, convertFileSize);
      }
    }

  return (
    <button className={style.calculateBtn} onClick={calculateTime}>Calculate</button>
  )
}

export default Calculate