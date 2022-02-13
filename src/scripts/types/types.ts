export type Offer = {
  id: number;
  city: {
    name: string;
    location: number[];
  };
  isPremium: boolean;
  image: string;
  price: number;
  isFavorite: boolean;
  rating: number;
  name: string;
  type: string;
  location: number[];
};

export type HoveredOffer = null | Offer;

export type Offers = Offer[];
