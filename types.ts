export interface Service {
  id: number;
  title: string;
  image: string;
  price: string;
}

export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  features: string[];
  bgColor: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}