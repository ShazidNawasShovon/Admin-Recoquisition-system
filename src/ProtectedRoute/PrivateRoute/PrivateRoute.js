import React from "react";
import useAuth from "../../Hooks/useAuth";
import { CircularProgress } from "@mui/material";
import { Redirect, Route } from "react-router";


const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="d-flex mx-auto w-75 my-5 justify-content-center align-items-center container">
        <div>
        <CircularProgress
  color="primary"
  determinate={false}
  size="md"
  variant="soft"
/>
        </div>
        <div>
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
