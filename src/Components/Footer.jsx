import { Twitter } from "lucide-react";
import LiquidGlass from "./ui/LiquidGlass";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <div className="md:p-5 p-2">
            <LiquidGlass className="w-full">
                <footer className="w-full">
                    <div className="grid grid-cols-2 md:grid-cols-3 p-10 border-b-2 border-gray-200 text-white">
                        <nav className="flex flex-col">
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav className="flex flex-col">
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Social</h6>
                            <div className="flex gap-5">
                                <a>
                                    <Twitter />
                                </a>
                                <a>
                                    <Facebook />
                                </a>
                                <a>
                                    <Linkedin />
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div className="footer sm:footer-horizontal footer-center p-8 text-white">
                        <aside>
                            <p>
                                Copyright © {new Date().getFullYear()} - All
                                right reserved by ACME Industries Ltd
                            </p>
                        </aside>
                    </div>
                </footer>
            </LiquidGlass>
        </div>
    );
};

export default Footer;
