import Card from "../components/Card";

const CardsShop = () => {

    const content = [
        {
            id: 1,
            text: "Text1",
            srcImg: './card/i.webp',
            srcProduct: 'https://www.ozon.ru/product/logitech-g-igrovaya-mysh-besprovodnaya-pro-x-superlight-2-belyy-1502540518/?campaignId=439'
        },
        {
            id: 11,
            text: "Text3",
            srcImg: './card/i.webp',
            srcProduct: 'https://www.ozon.ru/product/logitech-igrovaya-mysh-besprovodnaya-igrovaya-mysh-logitech-g-pro-wireless-910-005272-chernyy-866759514/?advert=AO8ApaYOZ9o9iagFSCVjHWTzT6s9jRyPXrUld3YAuH49MJgXbQUYryfuPPXeFy70dJVhR2o7gUkSVXh5ARb5CpIG5XmULi5OnZFRw56Vj4WIY55sSrKw_qfbyDGJOA9Ow33qdwIQMUL8Ymrd1q8PlzDqU208Q40UFmCt3BVVJFlk7xfbAfpe01CNhr0Vgdd1RVCpoKbrJKYrDFJikkdSZKUf&avtc=1&avte=4&avts=1731492337'
        },
        {
            id: 101,
            text: "Text4",
            srcImg: './card/mouse-850x560.jpg',
            srcProduct: 'https://www.ozon.ru/product/logitech-igrovaya-mysh-besprovodnaya-igrovaya-mysh-logitech-g-pro-wireless-910-005272-chernyy-866759514/?advert=AO8ApaYOZ9o9iagFSCVjHWTzT6s9jRyPXrUld3YAuH49MJgXbQUYryfuPPXeFy70dJVhR2o7gUkSVXh5ARb5CpIG5XmULi5OnZFRw56Vj4WIY55sSrKw_qfbyDGJOA9Ow33qdwIQMUL8Ymrd1q8PlzDqU208Q40UFmCt3BVVJFlk7xfbAfpe01CNhr0Vgdd1RVCpoKbrJKYrDFJikkdSZKUf&avtc=1&avte=4&avts=1731492337'
        },
        {
            id: 103,
            text: "Text2",
            srcImg: 'https://avatars.mds.yandex.net/i?id=ad1fa85873d0dadc91ca7fa7dcee6ffb_l-5235619-images-thumbs&n=13',
            srcProduct: 'https://www.ozon.ru/product/logitech-igrovaya-mysh-besprovodnaya-igrovaya-mysh-logitech-g-pro-wireless-910-005272-chernyy-866759514/?advert=AO8ApaYOZ9o9iagFSCVjHWTzT6s9jRyPXrUld3YAuH49MJgXbQUYryfuPPXeFy70dJVhR2o7gUkSVXh5ARb5CpIG5XmULi5OnZFRw56Vj4WIY55sSrKw_qfbyDGJOA9Ow33qdwIQMUL8Ymrd1q8PlzDqU208Q40UFmCt3BVVJFlk7xfbAfpe01CNhr0Vgdd1RVCpoKbrJKYrDFJikkdSZKUf&avtc=1&avte=4&avts=1731492337'
        }
    ]

    return (
        <div
            style={{
                width: '900px',
                margin: '0 auto'
            }}
        >
            {content.map((x) => (
                <Card
                    imageScr={x.srcImg}
                    text={x.text}
                    src={x.srcProduct}
                />
            ))}
        </div>
    )
}

export default CardsShop;