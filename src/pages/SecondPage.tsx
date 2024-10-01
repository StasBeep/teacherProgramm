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
      <NavMenu
        productNav={contentMenu[0].product}
        alertFunction={contentMenu[0].id}
      />
      <NavMenu
        productNav={contentMenu[1].product}
        alertFunction={2}
      />
    </div>
  )
}

export default SecondPage