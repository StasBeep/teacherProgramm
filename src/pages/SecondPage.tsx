import NavMenu from "../components/NavMenu"

const contentMenu = [
  {
    product: "button1",
    id: 212,
    img: "img"
  },
  {
    product: "button2",
    id: 2,
    img: "img"
  },
  {
    product: "button3",
    id: 3,
    img: "img"
  },
  {
    product: "button4",
    id: 4,
    img: "img"
  }
]

const SecondPage = () => {
  return (
    <div>
      {
        contentMenu.map((item) => (
          <NavMenu
            productNav={item.product}
            alertFunction={item.id}
          />
        ))
      }
    </div>
  )
}

export default SecondPage