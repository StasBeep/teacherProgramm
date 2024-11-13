
interface CardProps {
    imageScr: string,
    text: string,
    src: string
}

const Card = (props : CardProps) => {
    return (
        <div
            style={{
                background: 'red'
            }}
        >
            <img src={props.imageScr} alt="картинка" width={200} />
            <h6>{props.text}</h6>
            <button>Подробнее</button>
        </div>
    )
}

export default Card;