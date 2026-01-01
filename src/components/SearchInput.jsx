function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}

export default SearchInput;
