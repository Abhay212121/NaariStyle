import { useParams } from "react-router-dom";

export default function Products() {
  const { id, category } = useParams();

  if (category == "dresses") {
  }
  return (
    <>
      <p>{category}</p>
      <p>{id}</p>
    </>
  );
}
