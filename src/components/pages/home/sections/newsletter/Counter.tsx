import { useEffect, useState } from "react";

const DESCREASING_TIME = 20000;
const JOINED_START = 35000; 

export default function Counter(){

    const [count, setCount] = useState(JOINED_START);

    useEffect(() => {

        const decreaseRatio = JOINED_START / DESCREASING_TIME;

        const interval = setInterval(() => {
            if(count === 0) clearInterval(interval);
            setCount(current => Math.max(0, current - decreaseRatio * 64))
        }, 64)

        return () => clearInterval(interval)
    }, [JOINED_START, DESCREASING_TIME])

    return (
        <div className="counter">
            {count.toLocaleString("EN-en")}+ ALREADY JOINED
        </div>
    )
}