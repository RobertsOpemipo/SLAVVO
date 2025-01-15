"use client";

import React from 'react';
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    /* const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setMessage(''); 

        try {
            const response = await fetch("../api/newsletter", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const errorData = await response.json(); 
                console.error("Error response:", errorData);
                setMessage("Something went wrong: " + errorData.message);
                return;
            }

            const data = await response.json();
            setMessage(data.message);
            setEmail(''); 

        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred while subscribing.");
        }
    };*/

    return (
        <footer className="flex flex-col items-center bg-black text-white  -mt-1 lg:-mt-5 p-8">
            <div className="flex flex-col items-center mb-8">
                <h1 className="lg:text-8xl text-5xl font-bold tracking-wide font-zen-dots text-center">SLAVVO</h1>
            </div>

            <div className="flex flex-col sm:flex-row justify-around items-center w-full mb-8">
                <a href="https://www.instagram.com/midethemagic/" className="flex items-center justify-center text-lg space-x-2 p-2 rounded-md hover:bg-white hover:text-black transition-colors">
                    <FaInstagram />
                    <span>Instagram</span>
                </a>
                <a href="https://x.com/midethemagic" className="flex items-center justify-center  text-lg space-x-2 p-2 rounded-md hover:bg-white hover:text-black transition-colors">
                    <FaTwitter />
                    <span>Twitter</span>
                </a>
                <a href="https://www.tiktok.com/@midethemagic" className="flex items-center justify-center text-lg space-x-2 p-2 rounded-md hover:bg-white hover:text-black transition-colors">
                    <FaTiktok />
                    <span>TikTok</span>
                </a>
            </div>

            
            {/*<div className="flex flex-col items-center text-center mb-8">
                <h2 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h2>
                <p className="text-sm mb-4">Get the latest updates on our projects and offers.</p>
                <form onSubmit={handleSubscribe} className="flex">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="border border-gray-300 rounded-l-md p-2 text-black"
                        required
                    />
                    <button type="submit" className="bg-black text-white rounded-r-md p-2 hover:bg-gray-800 transition-colors">
                        Subscribe
                    </button>
                </form>
                {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
            </div>

            <div className="flex flex-col items-center text-center">
                <p className="text-sm">New Projects / Business</p>
                <p className="text-sm">production@spotstudios.es</p>
                <p className="text-sm">(+34) 930 046 720</p>
            </div>
            */}
        </footer>
    );
};

export default Footer;