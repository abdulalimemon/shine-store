export type HeroSliderItem = {
  id: string;
  title: string;
  subtitle: string;
  img: string;
};

export type Product = {
  _id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  flashSale: boolean;
  images: {
    cover: string;
    details: string[];
  };
};
