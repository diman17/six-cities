import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

type withRequireAuthProps = {
  authStatus: boolean;
  children: JSX.Element;
};

export default function withRequireAuth(props: withRequireAuthProps) {
  const { authStatus, children } = props;

  const location = useLocation();

  if (!authStatus) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
