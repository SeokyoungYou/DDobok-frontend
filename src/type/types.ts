export interface Gi {
  id: number;
  name: string;
  photo: string;
  link_store: string;
  price: number;
  priority: number;
  color: string;
  brand: number;
}

export type Gis = Array<Gi>;

export interface Brand {
  id: number;
  name: string;
  link_store: string;
  link_sns: string;
}

export type IQueries = Array<string>;
