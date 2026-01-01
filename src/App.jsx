import { useState } from "react";
import { users } from "./data/users";
import { statsData } from "./data/stats";
import DataTable from "./components/DataTable";
import SearchInput from "./components/SearchInput";
import UserStatusChart from "./components/UserStatusChart";

function App() {
  const [query, setQuery] = useState("");

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main>
      <h1>Dashboard</h1>
      <p>User overview</p>

      <UserStatusChart data={statsData} />

      <SearchInput value={query} onChange={setQuery} />
      <DataTable users={filteredUsers} />
    </main>
  );
}

export default App;
