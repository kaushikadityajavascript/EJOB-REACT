import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchRoles = () => {
  const [roles, setRoles] = useState<any[]>([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get("http://localhost:8085/api/roles");
        setRoles(response.data.data); // Assuming 'data' contains the roles array
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchRoles();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchRoles;
