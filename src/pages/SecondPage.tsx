import NavMenu from "../components/NavMenu"

const contentMenu = [
  {
  product: "button1",
  id: 1,
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
      <NavMenu productNav={contentMenu[0].product} />
      <NavMenu productNav={contentMenu[1].product} />
      <NavMenu productNav={contentMenu[2].product} />
      <NavMenu productNav={contentMenu[3].product} />
    </div>
  )
}

export default SecondPage