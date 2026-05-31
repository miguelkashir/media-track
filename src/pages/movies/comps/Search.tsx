interface SearchProps {
  onSearch: (query: string) => void;
}

export const Search = ({ onSearch }: SearchProps) => {
  const handleSearch = (formData: FormData) => {
    const query = formData.get('query') as string;

    onSearch(query);
  };

  return (
    <div>
      <form action={handleSearch}>
        <input type="text" name="query" placeholder="Search movies..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
