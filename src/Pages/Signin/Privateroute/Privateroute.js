import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../../context/useAuth";

function PrivateRoute({ children, ...rest }) {
    let {user,isLoading} = useAuth();
    if(isLoading){
     return <Spinner animation="border" varient="danger"/>     
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
                state: { from: location }
              }}
            > </Redirect>
          )
        }
      ></Route>
    );
  }
  export default PrivateRoute
  