import racao from '../imgs/racao.webp'
import { AllOffers, ProductContent, Title } from "./StyledComponentOffers";

export default function Offers() {

    const listaDeProdutos = [
        {
            name: "Primeiro",
            description: "",
            images: [racao],
            features: "",
            price: 10,
            departament: {
                    name: "",
                    market: ""
                },
            address: "",
            seller: "",
            quantity: 1,
            review: 0,
            off: 0
        },
        {
            name: "Secondo",
            description: "",
            images: [racao],
            features: "",
            price: 20,
            departament: {
                    name: "",
                    market: ""
                },
            address: "",
            seller: "",
            quantity: 1,
            review: 0,
            off: 0
        },       
        {
            name: "Thirth",
            description: "",
            images: [racao],
            features: "",
            price: 30,
            departament: {
                    name: "",
                    market: ""
                },
            address: "",
            seller: "",
            quantity: 1,
            review: 0,
            off: 0
        },       
        {
            name: "le quarteto",
            description: "",
            images: [racao],
            features: "",
            price: 40,
            departament: {
                    name: "",
                    market: ""
                },
            address: "",
            seller: "",
            quantity: 1,
            review: 0,
            off: 0
        },       
        {
            name: "GOH",
            description: "",
            images: [racao],
            features: "",
            price: 50,
            departament: {
                    name: "",
                    market: ""
                },
            address: "",
            seller: "",
            quantity: 1,
            review: 0,
            off: 0
        },
        {
            name: "KASDHIAFSDFASDFASDFASDFASDFASDFSADF",
            description: "",
            images: [racao],
            features: "",
            price: "60.5",
            departament: {
                    name: "",
                    market: ""
                },
            address: "",
            seller: "",
            quantity: 1,
            review: 0,
            off: 0
        },
        {
            name: "Setini Setini Setini Setini Setini Setini Setini Setini Setini Setini Setini",
            description: "",
            images: [racao],
            features: "",
            price: 70.7,
            departament: {
                    name: "",
                    market: ""
                },
            address: "",
            seller: "",
            quantity: 1,
            review: 0,
            off: 0
        }
    ];

    return (
        <>
            <Title>Grandes ofertas</Title>
            <AllOffers>
                    {listaDeProdutos.map((item, index) => <Offer key={index} name={item.name} image={item.images[0]} price={item.price} off={item.off}/>)}
            </AllOffers>
        </>
    );    

}

function Offer({name, image, price, off}) {
    const brl = new Intl.NumberFormat("pt-BR", {style: "currency", "currency":"BRL"}).format(Number(price));

    return (

            <ProductContent>
                <img src={image} alt={name}/>
                <h2>{name}</h2>
                <p>{brl}</p>
                <h4>{`${off}% OFF`}</h4>
            </ProductContent>

    )
}