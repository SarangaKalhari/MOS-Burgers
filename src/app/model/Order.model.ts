import { OrderItems } from "./OrderItems.model";

export interface Order {
  paymentMethod: string;
  discount: number;
  items: OrderItems[];
}