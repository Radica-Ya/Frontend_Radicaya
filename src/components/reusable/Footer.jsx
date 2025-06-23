import React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer class="bg-dark text-center text-white">
            <div class="container p-3">
                <section class="mb-4">
                    <a
                        class="btn btn-success btn-floating m-1"
                        style={{ backgroundColor: "#198754" }} 
                        href="#!"
                    >
                        <FaWhatsapp />
                    </a>

                    <a
                        class="btn btn-dark btn-floating m-1"
                        style={{ backgroundColor: "#dd4b39" }}
                        href="#!"
                    >
                        <FaInstagram />
                    </a>
                </section>
            </div>

            <div
                class="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                © 2025 Copyright: {" "}
                <a class="text-white" href="#!">
                    Radicaya
                </a>
            </div>
        </footer>
    )
}

export default Footer
