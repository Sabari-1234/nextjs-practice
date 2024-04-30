import React from "react";

const ParallelLayout = ({
  children,
  users,
  revenue,
  notification,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}) => {
  //const isLoggedIn = false;
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className=" flex ">
        <div>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>

        <div>{notification}</div>
      </div>
    </div>
  ) : (
    login
  );
};

export default ParallelLayout;
