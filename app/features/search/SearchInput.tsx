interface Props {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchInput = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <div>
      <input
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border-2"
      />
    </div>
  );
};

export default SearchInput;
