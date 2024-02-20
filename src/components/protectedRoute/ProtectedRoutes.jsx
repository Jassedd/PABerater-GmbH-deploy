import { useAuth } from "../../authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/esm/Spinner";


export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const navigate = useNavigate()

  if (loading)
    return (
      <Spinner
        animation="border"
        variant="danger"
        style={{
          display: "block",
          position: "fixed",
          top: "200px",
          left: "50%",
        }}
      />
    );

  if (!user) return navigate("/") ;

  return children;
}