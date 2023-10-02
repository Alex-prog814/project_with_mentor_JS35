import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, checkUserLogin } from "../../helpers/functions";
import Button from "@mui/material/Button";
import { updateToken } from "../../helpers/functions";

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updateToken();
  }, []);

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>

      {checkUserLogin() ? (
        <Button
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </Button>
      ) : (
        <>
          <Button onClick={() => navigate("/login")}>Login</Button>
          <Button onClick={() => navigate("/register")}>Register</Button>
          <Button onClick={() => navigate("/products")}>products</Button>
        </>
      )}
    </div>
  );
};

export default Navbar;
