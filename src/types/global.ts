export type TProduct = {
  id: number;
  image: string;
  name: string;
  brand: string;
  quantity: number;
  price: string;
  rating: string;
};

export interface Brand {
  logo: string;
  title: string;
}

export interface TestimonialCardProps {
  image: string;
  text: string;
  name: string;
  company: string;
}
