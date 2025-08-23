import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth-context';
import ROUTES from '../routes/ROUTES';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={ROUTES.AUTH.LOGIN} replace />;
  }

  return children;
};

export default PrivateRoute;
