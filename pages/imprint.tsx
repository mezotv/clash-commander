import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Imprint: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <LazyMotion features={domAnimation}>
        <Navbar />
        <m.main
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-8">
            <m.h1
              className="text-4xl font-bold mb-8 mt-10 text-center" // Updated styles for the heading
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              Imprint
            </m.h1>

            <m.div
              className="secondary rounded-lg shadow-md p-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <m.h2
                className="text-2xl font-bold mb-4"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                Company Name
              </m.h2>
              <m.p
                className="mb-2"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                Address: 123 Street, City, Country
              </m.p>
              <m.p
                className="mb-2"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                Email: contact@company.com
              </m.p>
              <m.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.3 }}
              >
                Phone: +1 234 5678
              </m.p>
            </m.div>
          </div>
        </m.main>
      </LazyMotion>
      <Footer className="mt-auto" />
    </div>
  );
};

export default Imprint;
