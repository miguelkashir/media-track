import { Search } from './comps/Search';

export const Movies = () => {
  const handleSearch = (query: string) => {
    alert(query);
  };

  return (
    <div>
      <h2>Movies</h2>
      <Search onSearch={handleSearch} />
    </div>
  );
};
