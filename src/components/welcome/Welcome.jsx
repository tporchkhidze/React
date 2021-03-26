
import { useState } from "react";
import Greeting from "../greeting";
import Button from '../button';
import {type} from '../button'
import './welcome.css';


const Welcome = () => {

    const [counter, setCounter] = useState(0);

    const increaseByOne = () => {setCounter(counter + 1);};
    const increaseByFive = () => {setCounter(counter + 5);};
    const increaseByAHundred = () => {setCounter(counter + 100);};
    const decreaseByOne = () => {setCounter(counter - 1);};
    const decreaseByFive = () => {setCounter(counter - 5);};
    const decreaseByAhundred = () => {setCounter(counter - 100);};


    const [color, setColor] = useState('red');
    const [textColor, setTextColor] = useState('');
    const redDiv = () => {setColor('red'); setTextColor('white')};
    const pinkDiv = () => {setColor('pink'); setTextColor('black')};
    const yellowDiv = () => {setColor('yellow'); setTextColor('black')};
    const greenDiv = () => {setColor('lime'); setTextColor('black')};
    const purpleDiv = () => {setColor('darkorchid'); setTextColor('white')};
    const blueDiv = () => {setColor('deepskyblue'); setTextColor('black')};



    return (
        <div className="container">
            <Greeting text="Numbers Game" content="You Can Change The Numbers, Follow The Instructions Below" />
            <div>
                <Button onClick={increaseByOne} text="+1" />
                <Button onClick={increaseByFive} text="+5" />
                <Button onClick={increaseByAHundred} text="+100" />
                <Button onClick={decreaseByOne} text="-1"/>
                <Button onClick={decreaseByFive} text="-5" />
                <Button onClick={decreaseByAhundred} text="-100"/>

            </div>
            <Greeting text={`Result: ${counter}`}/>
            <div>
                <Button onClick={redDiv} text="Red" type="red" />
                <Button onClick={pinkDiv} text="Pink" type="pink" />
                <Button onClick={yellowDiv} text="Yellow" type="yellow" />
                <Button onClick={greenDiv} text="Green" type="green" />
                <Button onClick={purpleDiv} text="Purple" type="purple" />
                <Button onClick={blueDiv} text="Blue" type="blue" />
            </div>
            <div className="color-div" style={{backgroundColor:color, color:textColor}}>Change Color</div>
        </div>
    );
};

export default Welcome;