import React from "react";

import Light from "../components/Light";

const TraficLight = () => {
    const [counter, setCounter] = React.useState(3);
    const [elLight, setElLight] = React.useState(0);
    const [red, setRed] = React.useState(1);
    const [yellow, setYellow] = React.useState(0);
    const [green, setGreen] = React.useState(0);

    // setInterval(() => {
    //     const t = counter - 1;
    //     setCounter(t);

    //     if (elLight === 0) 
    //     {
    //         if (counter === 0) {
    //             setElLight(1);
    //             setCounter(3);
    //             setYellow(2);
    //         }
    //     } else if (elLight === 1) {
    //         if (counter === 0) {
    //             setElLight(2);
    //             setCounter(3);
    //             setRed(0);
    //             setYellow(0);
    //             setGreen(3);
    //         }
    //     } else if (elLight === 2) {
    //         if (counter === 0) {
    //             setElLight(0);
    //             setCounter(3);
    //             setRed(0);
    //             setYellow(2);
    //             setGreen(3);
    //         }
    //     }
        
    // }, 1000);

    return (
        <div
            style={{
                width: '900px',
                margin: '0 auto'
            }}
        >
            {counter}
            <Light colorCircle={red} p={-1} />
            <Light colorCircle={yellow} p={-1} />
            <Light colorCircle={green} p={-1} />
        </div>
    )
}


export default TraficLight;