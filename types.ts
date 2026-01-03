
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
