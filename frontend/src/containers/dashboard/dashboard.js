import React from "react";
import UserCard from "../../components/userCard";

const MOCK_DATA = [{ name: "George" }];
function Dashboard() {
  return (
    <div className="PageWrapper">
      <h1>Dashboard</h1>
      {MOCK_DATA.map((e, i) => (
        <UserCard User={e} key={i} />
      ))}
    </div>
  );
}

export default Dashboard;
