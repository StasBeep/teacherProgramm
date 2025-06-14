import React from "react";

const SecondPage = () => {
    const [counter, setConter] = React.useState(3);

    const test = () => {
        let p = counter + 1;
        setConter(p);
    }

    return (
        <div style={{
            width: '900px',
            margin: '0 auto',
            padding: '10px',
            fontSize: '30px'
        }}>
            Счётчик:
            <span style={{
                color: counter % 5 ? 'red' : 'blue'
            }}>
                {counter}
            </span>
            <button
                style={{
                    background: 'orange'
                }}
                onClick={test}
            >
                Жми
            </button>
            {
                counter % 5 ?
                    null
                    :
                    <p>
                        Делится без остатся на 5
                    </p>
            }
        </div>
    )
}

export default SecondPage;