import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Hamburguesería</h2>
                <p>Intentamos darte el mejor sabor posible.</p>
                <br />
                <em>Prestamos atención a tus comentarios.</em>
                <strong>Todos los derechos reservados @hamburgueseria</strong>
            </div>
            <aside>
                <h4>Síguenos</h4>
                <a href="https://youtube.com/xyz">
                    <AiFillYoutube />
                </a>
                <a href="https://instagram.com/xyz">
                    <AiFillInstagram />
                </a>
            </aside>
        </footer>
    );
};
export default Footer;