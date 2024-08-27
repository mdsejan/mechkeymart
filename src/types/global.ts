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

export interface Product {
  _id?: string;
  name: string;
  price: number;
  brand: string;
  description: string;
  availableQuantity: number;
  rating: number;
  image: string;
}

export interface TestimonialCardProps {
  image: string;
  text: string;
  name: string;
  company: string;
}

export interface ProductModalProps {
  title: string;
  product: Product | null;
  onSave: (product: Product) => void;
  onClose: () => void;
}

export interface SidebarContentProps {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  priceRange: [number, number];
  handlePriceRangeChange: (min: number, max: number) => void;
  sortOrder: "asc" | "desc";
  handleSortOrderChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface CartItem {
  _id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  availableQuantity: number;
}
