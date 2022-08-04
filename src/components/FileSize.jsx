import { useContext } from 'react'
import { calculatorContext } from '../context/CalculatorContext'
import Calculate from './Calculate'
import style from '../assests/styles/main.module.css'

const FileSize = () => {

    const { fileSize, setFileSize, fileSizeType, setFileSizeType, setResult } = useContext(calculatorContext)

  return (
    <div className={style.fileSizeContainer}>
        <h3>What is the size of the thing you want to download?</h3>
        <div>
            <input type="button" value="-" className={style.decreaseBtn} onClick={() => setFileSize(fileSize - 1)}/>
            <input type="number" className={style.fileSizeInput}  value={fileSize} onChange={e => setFileSize(e.target.valueAsNumber)} />
            <input type="button" value="+" className={style.increaseBtn} onClick={() => setFileSize(fileSize + 1)} />
            <select className={style.selectBox} onChange={e => setFileSizeType(e.target.value)} value={fileSizeType}>
                <option value="mb">MB</option>
                <option value="gb">GB</option>
                <option value="tb">TB</option>
            </select>
        </div>
        <Calculate />
    </div>
  )
}

export default FileSize