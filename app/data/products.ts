export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
};

export const products: Product[] = [
    { id: 1, name: "Briyani krydda", description: "Autentisk kryddblandning", price: 89, image: "/images/spice.jpg"},
    { id: 2, name: "Liten stekpanna - Blomma", description: "Mindre stekpanna (29cm) formad som en blomma.", price: 199, image: "images/liten-stekpanna.jpg"},
    { id: 3, name: "Kanelstänger", description:"50g, Hela kanelstänger", price: 199, image: "/images/kanelstång.jpg"},
    { id: 4, name: "Vit mortel", description: "Liten mortel i marmorstil", price: 189, image: "/images/mortel.jpg"},
    { id: 5, name: "Peppar Kit", description: "Pepparkvarn med fyra sorters peppar", price: 299, image: "images/peppar-kit.jpg"},
    { id: 6, name: "Melodypeppar", description: "Melodypeppar 50g", price: 119, image: "/images/melodypepper.jpg"},
    { id: 7, name: "Flaska för olivolja", description: "Stilren flaska för olivolja", price: 289, image: "images/Oliveolja.jpg"},
    { id: 8, name: "Stjärnanis", description: "50g, förhöj dina smaklökar", price: 169, image: "/images/stjärnanis.jpg"},

];