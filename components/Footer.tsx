"use client";
import React, { useState, useEffect } from 'react';
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Confetti from 'react-confetti';

const Footer = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth: width, innerHeight: height } = window;
      setDimensions({ width, height });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial dimensions

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const requiredSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const handleSubmit = async (values: { email: any; }, { resetForm }: any) => {
    try {
      const response = await fetch(`/api/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus(201);
        setMessage('Thank you for subscribing! 🎉');
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
          resetForm();
        }, 4000);
      } else {
        setStatus(data.status);
        setMessage(data.message || 'Error joining the newsletter.');
      }
    } catch (error) {
      console.error('Fetch error:', error); // Log the error
      setStatus(500);
      setMessage('Error joining the newsletter. Please try again.');
    }
  };

  return (
    <footer className="flex flex-col text-black p-4 sm:p-8 w-full min-h-[100px]">
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          numberOfPieces={400}
        />
      )}

      <div className="flex flex-col sm:flex-row w-full max-w-full justify-center mb-4 space-x-0 sm:space-x-8 space-y-4 sm:space-y-0">
        <a href="https://www.instagram.com/midethemagic/" className="flex items-center text-black space-x-2 rounded-md p-2 text-sm hover:bg-black hover:text-white text-glacial">
          <FaInstagram className="text-lg" />
          <span>INSTAGRAM</span>
        </a>
        <a href="https://x.com/midethemagic" className="flex items-center text-black space-x-2 rounded-md p-2 text-sm hover:bg-black hover:text-white text-glacial">
          <FaTwitter className="text-lg" />
          <span>Twitter</span>
        </a>
        <a href="https://www.tiktok.com/@midethemagic" className="flex items-center text-black space-x-2 rounded-md p-2 text-sm hover:bg-black hover:text-white text-glacial">
          <FaTiktok className="text-lg" />
          <span>TIKTOK</span>
        </a>
      </div>

      {/* Subscription Form */}
      <div className="flex flex-col items-center text-black">
        <h2 className="text-lg font-bold">Subscribe to our Newsletter</h2>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={requiredSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2">
              <Field
                type="email"
                name="email"
                className="px-3 py-2 rounded-md outline-none text-black"
                placeholder="Enter your email"
                autoComplete="off"
              />
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Subscribe
              </button>
            </div>
            <ErrorMessage name="email" component="div" className="text-red-500" />
            {message && (
              <p className={`${status === 201 ? 'text-green-500' : 'text-red-500'}`}>
                {message}
              </p>
            )}
          </Form>
        </Formik>
      </div>

      <div className="flex justify-center items-center mb-4 w-full">
        <h1 className="text-[15vw] lg:text-[19vw] font-bold tracking-wide font-cubao">SLAVVO</h1>
      </div>
    </footer>
  );
}

export default Footer;