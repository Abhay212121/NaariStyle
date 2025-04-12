import { useParams } from "react-router-dom";

export default function Products() {
  const { name } = useParams();
  console.log(name);
}
