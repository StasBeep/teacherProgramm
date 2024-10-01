import React, { useEffect } from "react";
import axios from "axios"; // для ассинхронного запроса (подгрузки данных)

// Из чего состоит (типы) база данных, приходящих с сервера
interface blogContent {
    id: number,
    img: string,
    title: string,
    description: string,
    date: string,
    author: string,
    imgAuthor: string
}

const RestApi = () => {
    const [content, setContent] = React.useState([]); // Переменная в которой будет лежать массив

    // хук жизненного цикла
    useEffect(() => {
        // асинхронный зарос, с ссылки с сервера, данный с данных github
        axios.get('https://raw.githubusercontent.com/StasBeep/StasBeep/main/blogContent.json')
            .then(response => { // состояние положительного ответа с сервера
                setContent(response.data); // измени состояние переменной content, на данные с сервера
            })
            .catch(error => { // состояние ошибки с сервера
                console.log(error);
            })
    }, []); // без [], функция отрабатывает постоянно!

    return (
        <div
            style={{
                width: "900px",
                margin: "0 auto"
            }}
        >
            {content.map((item: blogContent, index) => (
                <ul key={`list` + index}>
                    <li>
                        {item.id}
                    </li>
                    <li>
                        {item.author}
                    </li>
                    <li>
                        <img
                            src={item.img}
                            alt="img"
                            width={300}
                            height={200}
                        />
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default RestApi;