import StatusBadge from "./StatusBadge";

function DataTable({ users }) {
  if (users.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <StatusBadge status={user.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
