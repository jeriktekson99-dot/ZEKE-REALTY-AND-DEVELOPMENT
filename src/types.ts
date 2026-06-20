export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  imageUrl: string;
  details: string;
  specs: { label: string; value: string }[];
}

export interface TestimonialItem {
  id: string;
  stars: number;
  quote: string;
  clientName: string;
  role: string;
  location: string;
}

export interface BlogPostItem {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  imageUrl: string;
  content: string;
}
