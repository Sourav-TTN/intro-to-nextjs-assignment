type RecipiesType = {
  recipes: {
    id: number;
    name: string;
    prepTimeMinutes: string;
    servings: string;
  }[];
};

const RecipiesPage = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  //   console.log(res);
  const results: RecipiesType = await res.json();
  //   console.log(results);
  return (
    <div className="text-2xl py-6 px-2 border">
      <table className="border border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border p-3">Id</th>
            <th className="border p-3">Name</th>
            <th className="border p-3">Prep Time Minutes</th>
            <th className="border p-3">Servings</th>
          </tr>
        </thead>
        <tbody>
          {results.recipes.slice(0, 10).map((rec) => (
            <tr key={rec.id}>
              <td className="border p-3">{rec.id}</td>
              <td className="border p-3">{rec.name}</td>
              <td className="border p-3">{rec.prepTimeMinutes}</td>
              <td className="border p-3">{rec.servings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipiesPage;
