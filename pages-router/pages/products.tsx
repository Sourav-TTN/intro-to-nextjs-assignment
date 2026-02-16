import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type ProductsType = {
  products: {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
  }[];
};

export const getServerSideProps = (async () => {
  const res = await fetch("https://dummyjson.com/products");
  // console.log(res);
  const results: ProductsType = await res.json();
  // console.log(results);
  return { props: { results } };
}) satisfies GetServerSideProps<{ results: ProductsType }>;

const ProductsPage = ({
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="text-2xl py-6 px-2">
      <table className="border border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border p-3">Id</th>
            <th className="border p-3">Title</th>
            <th className="border p-3">Description</th>
            <th className="border p-3">Category</th>
            <th className="border p-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {results.products.slice(0, 10).map((p) => (
            <tr key={p.id}>
              <td className="border p-3">{p.id}</td>
              <td className="border p-3">{p.title}</td>
              <td className="border p-3">{p.description}</td>
              <td className="border p-3">{p.category}</td>
              <td className="border p-3">{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
