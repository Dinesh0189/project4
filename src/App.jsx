import useUsers from "./hooks/useUsers";
import { Toaster } from "react-hot-toast";

export default function App() {
  const { users, isLoading } = useUsers();

  return (
    <div style={{ padding: 40 }}>
      <Toaster position="top-right" reverseOrder={false} />
      <h1>Axios Instance Demo</h1>
      <h3>User List :</h3>

      {isLoading ? (
        <ul>
          {[1, 2, 3, 4, 5,6,7].map((item) => (
            <li
              key={item}
              style={{
                background: "#372cceff",
                height: "20px",
                width: "200px",
                margin: "10px 0",
                borderRadius: "4px",
              }}
            ></li>
          ))}
        </ul>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}