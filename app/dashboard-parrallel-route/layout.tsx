import React from "react";

const ParallelLayout = ({
  children,
  users,
  revenue,
  notification,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
}) => {
  return (
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
  );
};

export default ParallelLayout;
