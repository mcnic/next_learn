import Home from "./Home";

const HomePage = async () => {
  const data = await getData();
  // console.log({ data });

  return (
    <>
      <Home />
      films:
      <ul>
        {data.films.map((film: string) => (
          <li key={film}>{film}</li>
        ))}
      </ul>
    </>
  );
};

export const getData = async () => {
  const res = await fetch(`https://swapi.dev/api/people/1`, {
    cache: "force-cache",
  });
  return await res.json();
};

export default HomePage;
