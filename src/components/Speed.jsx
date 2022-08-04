import { useContext } from 'react'
import { calculatorContext } from '../context/CalculatorContext'
import style from '../assests/styles/main.module.css'

const Speed = () => {

    const {speed, setSpeed, setSpeedType} = useContext(calculatorContext)
    
  return (
    <div className={style.speedContainer}>
        <h3>What is your internet speed?</h3>
        <div>
            <input type="button" value="-" className={style.decreaseBtn} onClick={() => setSpeed(speed - 1)} />
            <input type="number" min={1} value={speed} className={style.speedInput} onChange={e => setSpeed(e.target.valueAsNumber)} />
            <input type="button" value="+"  className={style.increaseBtn} onClick={() => setSpeed(speed + 1)} />
            <select className={style.selectBox} onChange={(e) => setSpeedType(e.target.value)}>
                <option value="mbps">Mbps</option>
                <option value="gbps">Gbps</option>
            </select>
        </div>
        <a href="https://www.speedtest.net/" target="_blank">I don't know my internet speed</a>
    </div>
  )
}

export default Speed