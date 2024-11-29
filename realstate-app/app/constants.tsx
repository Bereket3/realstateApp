interface card {
  id: number,
  discription: string,
  price?: string,
  location?: string,
  image?: string,
  bedroom?: number,
  bathroom?: number

}

const cardValue: card[] = [
  {
    id: 1,
    discription: "Luxury Apartment",
    bedroom: 3,
    bathroom: 2,
    price: "$200,000",
    location: "New York, NY",
  },
  {
    id: 2,
    discription: "Cozy Condo",
    bedroom: 2,
    bathroom: 1,
    price: "$150,000",
    location: "Los Angeles, CA",
  },
  {
    id: 3,
    discription: "Spacious Villa",
    bedroom: 5,
    bathroom: 4,
    price: "$500,000",
    location: "Miami, FL",
  },
  {
    id: 4,
    discription: "Spacious Villa",
    bedroom: 5,
    bathroom: 4,
    price: "$500,000",
    location: "Miami, FL",
  },
];


export default cardValue
