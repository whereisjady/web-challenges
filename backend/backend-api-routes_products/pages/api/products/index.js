import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  const products = getAllProducts();

  response.statusCode = 200;
  response.json({ products });
}
