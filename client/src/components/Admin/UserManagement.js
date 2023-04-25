import React, { useState, useEffect } from 'react';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'donor' });

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleEditClick = userId => {
    setEditingUserId(userId);
    const userToEdit = users.find(user => user.id === userId);
    setNewUser(userToEdit);
  };

  const handleSaveClick = () => {
    setLoading(true);
    const method = editingUserId ? 'PUT' : 'POST';
    const url = editingUserId ? `/api/users/${editingUserId}` : '/api/users';
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(savedUser => {
        const updatedUsers = editingUserId
          ? users.map(user => (user.id === editingUserId ? savedUser : user))
          : [...users, savedUser];
        setUsers(updatedUsers);
        setNewUser({ name: '', email: '', role: 'donor' });
        setEditingUserId(null);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  const handleDeleteClick = userId => {
    setLoading(true);
    fetch(`/api/users/${userId}`, { method: 'DELETE' })
      .then(() => {
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <form className="mb-4">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
            className="border border-gray-400 rounded px-2 py-1 w-full mt-1"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
            className="border border-gray-400 rounded px-2 py-1 w-full mt-1"
          />
        </label>
        <label className="block mb-2">
          Role:
          <select
            name="role"
            value={newUser.role}
            onChange={handleInputChange}
            className="border border-gray-400 rounded px-2 py-1 w-full mt-1"
          >
            <option value="donor">Donor</option>
            <option value="organization">Organization</option>
          </select>
        </label>
<div className="flex">
  <button
    type="button"
    onClick={handleSaveClick}
    disabled={!newUser.name || !newUser.email || loading}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
  >
    {editingUserId ? 'Save Changes' : 'Create User'}
  </button>
  <button
    type="button"
    onClick={() => {
      setNewUser({ name: '', email: '', role: 'donor' });
      setEditingUserId(null);
    }}
    disabled={loading}
    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
  >
    Cancel
  </button>
</div>
<table className="table-auto mt-4">
  <thead>
    <tr>
      <th className="px-4 py-2">Name</th>
      <th className="px-4 py-2">Email</th>
      <th className="px-4 py-2">Role</th>
      <th className="px-4 py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => (
      <tr key={user.id}>
        <td className="border px-4 py-2">{user.name}</td>
        <td className="border px-4 py-2">{user.email}</td>
        <td className="border px-4 py-2">{user.role}</td>
        <td className="border px-4 py-2">
          <button
            type="button"
            onClick={() => handleEditClick(user.id)}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => handleDeleteClick(user.id)}
            disabled={loading}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
{loading && <p className="text-gray-500 mt-4">Loading...</p>}
</form>
</div>
);
}
export default UserManagement;