import React from "react"
import { FaFacebook } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-3">
                <section className="mb-4">
                    <a
                        className="btn btn-success btn-floating m-1"
                        style={{ backgroundColor: "#198754" }}
                        href="https://wa.me/573148099989"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp />
                    </a>

                    <a
                        className="btn btn-dark btn-floating m-1"
                        style={{ backgroundColor: "#dd4b39" }}
                        href="https://www.instagram.com/radicaya7?igsh=aGhhaWZxaTYzdnAz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                </section>
            </div>

            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                © 2025 Copyright:{" "}
                <a className="text-white" href="#!">
                    Radicaya
                </a>
            </div>
        </footer>
    )
}

export default Footer
