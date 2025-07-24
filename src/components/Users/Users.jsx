import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null);     // error state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Failed to fetch users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // always runs last
      }
    };

    fetchUsers();
  }, []);


  // if (loading) return (
  // <div className="d-flex justify-content-center align-items-center" style={{height: '100px'}}>
  //   <div className="spinner-border text-primary" role="status">
  //     <span className="visually-hidden">Loading...</span>
  //   </div>
  // </div>
  // );


  if (loading) return <div className="text-center mt-5">Loading users...</div>;
  if (error) return <div className="text-danger text-center mt-5">Error: {error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">User List</h2>
      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {user.email} <br />
                  <strong>City:</strong> {user.address.city}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
