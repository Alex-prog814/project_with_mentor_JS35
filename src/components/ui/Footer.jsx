import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, checkUserLogin } from "../../helpers/functions";
import Button from "@mui/material/Button";
// import { updateToken } from "../../helpers/functions";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   updateToken();
  // }, []);

  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>О нас</h2>
        <p>
          Магазин жевачек - ваш надежный поставщик свежих и вкусных жевательных
          резинок. Мы гордимся предоставлением лучших продуктов для вашего
          удовольствия.
        </p>
      </div>

      <div className="footer-section">
        <h2>Контакты</h2>
        <p>Email: barbershop@gmail.com</p>
        <p>Телефон: +996 500 344 888</p>
      </div>

      <div className="footer-section">
        <h2>Мы в социальных сетях</h2>
        <p>
          Следите за нами в социальных сетях, чтобы быть в курсе новинок и
          акций:
        </p>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <br />
        <a href="#" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <br />
        <a href="#" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
      <div className="footersNavigate">
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
    </footer>
  );
};

export default Footer;
