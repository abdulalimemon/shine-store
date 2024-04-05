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
  rating: string;
  description: string;
  flashSale: boolean;
  images: {
    cover: string;
    details: string[];
  };
};


export type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

export type UserData = {
  name: string;
  email: string;
  password: string;
};

export type LoginUserData = {
  email: string;
  password: string;
};