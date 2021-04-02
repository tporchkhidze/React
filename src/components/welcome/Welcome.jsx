import { useState } from "react";
import Greeting from "../greeting";
import Button from '../button';
import "./welcome.css"


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
    const blackDiv = () => {setColor('black'); setTextColor("white");};
    const whiteDiv = () => {setColor('white'); setTextColor("black")};
    const yellowDiv = () => {setColor('yellow')};
    const redDiv = () => {setColor('red')};
    const goldDiv = () => {setColor('goldenrod')};
    const blueDiv = () => {setColor('deepskyblue')};



    return (
        <div>
            <Greeting text="LORD Games" content="დავალება ცვლის რიცხვის მნიშვნელობებს" />
            <Button onClick={increaseByOne} text="+1" />
            <Button onClick={increaseByFive} text="+5" />
            <Button onClick={increaseByAHundred} text="+100" />
            <Button onClick={decreaseByOne} text="-1"/>
            <Button onClick={decreaseByFive} text="-5" />
            <Button onClick={decreaseByAhundred} text="-100"/>
            <Greeting text={counter}/>
            <Button onClick={blackDiv} text="Red" type="black" />
            <Button onClick={whiteDiv} text="Pink" type="white" />
            <Button onClick={yellowDiv} text="Yellow" type="yellow" />
            <Button onClick={redDiv} text="Green" type="red" />
            <Button onClick={goldDiv} text="Purple" type="gold" />
            <Button onClick={blueDiv} text="Blue" type="blue" />
            <div className="color-div" style={{backgroundColor:color, color:textColor}}>
                <p>Change Color</p>
            </div>
        </div>
    );
};

export default Welcome;