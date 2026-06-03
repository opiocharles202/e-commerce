export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string; // lucide icon name
  productCount?: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;           // multi-paragraph marketing copy
  highlights: string[];              // "About this item" bullet points
  specifications: Record<string, string>; // full tech spec table
  whatsInTheBox: string[];           // items included in purchase
  warranty: string;                  // warranty info
  sku: string;                       // product SKU/model number
  price: number;
  compareAtPrice?: number;           // original price for sale display
  brand: string;
  inventory: number;
  isActive: boolean;
  images: string[];
  categoryId: string;
  category?: Category;
  rating?: number;     // 0–5
  reviewCount?: number;
  isFeatured?: boolean;
  isNew?: boolean;     // "New Arrival" badge
  isBestSeller?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  priceSnapshot: number;
}

export interface Cart {
  id: string;
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface PromoBanner {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  badge?: string;
}
