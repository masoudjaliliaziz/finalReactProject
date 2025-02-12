import React, { useEffect } from "react";
import { useUser } from "../features/authentication/hook/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1.load the authenticated user
  const { isLoading, user, isAuthenticated } = useUser();

  //2.if there is No authenticated user, redirect to the / login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  //3.while loading , show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4.if there is a user , render the app
  if (isAuthenticated) return <>{children}</>;
}

export default ProtectedRoute;
