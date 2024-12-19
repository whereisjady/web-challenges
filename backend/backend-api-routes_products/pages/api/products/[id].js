import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  // const id = request.query.id;
  const { id } = request.query;
  const product = getProductById(id);

  if (product === undefined) {
    response.status(404).json({ status: "Product not found" });
    return;
  }

  // response.statusCode = 200;
  response.status(200).json(product);
}
