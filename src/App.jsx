import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import DataTable from "./components/DataTable";
import SearchInput from "./components/SearchInput";
import UserStatusChart from "./components/UserStatusChart";

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("users")
        .select("*");

      if (error) {
        setError("Failed to load users");
      } else {
        setUsers(data);
      }

      setLoading(false);
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main>
      <h1>Dashboard</h1>
      <p>User overview (Supabase API)</p>

      {loading && <p>Loading data...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <UserStatusChart data={[
            { name: "Active", value: users.filter(u => u.status === "active").length },
            { name: "Inactive", value: users.filter(u => u.status === "inactive").length },
            { name: "Pending", value: users.filter(u => u.status === "pending").length }
          ]} />

          <SearchInput value={query} onChange={setQuery} />
          <DataTable users={filteredUsers} />
        </>
      )}
    </main>
  );
}

export default App;
