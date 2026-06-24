export interface Product {
  id: string; // No Prisma é UUID (string), não number!
  name: string;
  description?: string; // A interrogação indica que é opcional
  price: number;
  stock?: number;
  size?: string[];
  color?: string;
  imageUrl?: string;
  categoryId: string;
  slug?: string;
  active: boolean;
  createdAt: string; //
}
