

interface LightProps {
    colorCircle: number,
    p: number
}

const Light = ({ colorCircle, p }: LightProps) => {

    const colorChange = (value: number) => {

        switch (value) {
            case 1:
                return "red"
            case 2:
                return "yellow"
            case 3:
                return "green"
            default:
                return "grey"
        }
    }

    return (
        <div
            style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "1px solid black",
                margin: '20px 0',
                backgroundColor: colorChange(colorCircle)
            }}
        >
            {p}
        </div>
    )
}

export default Light;