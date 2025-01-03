import { ReactNode } from "react";
import { useAppSelector } from "../../redux/features/hook";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = useAppSelector(useCurrentToken);
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return children;
}

export default ProtectedRoute;
