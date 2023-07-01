/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow  py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">Terms of Service</h1>

          <div className="secondary rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Introduction</h2>
            <p>
              [Client's Company Name] ("us", "we", or "our") operates the [Client's Bot Name] Discord bot (the "Service").
              These terms and conditions outline the rules and regulations for the use of the Service.
              By accessing or using the Service, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">User Conduct</h2>
            <p>
              [Client's Company Name] reserves the right to remove or suspend any user from the Service for any reason, including but not limited to violation of these terms.
              You agree to use the Service in a manner that complies with all applicable laws and regulations and is not harmful to others or the Service itself.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of [Client's Company Name] and its licensors.
              The Service is protected by copyright, trademark, and other laws of both the [Client's Country] and foreign countries.
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of [Client's Company Name].
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">Disclaimer</h2>
            <p>
              The Service is provided on an "as is" and "as available" basis without any warranties, expressed or implied.
              [Client's Company Name] does not warrant that the Service will be uninterrupted, timely, secure, or error-free.
              You use the Service at your own risk and discretion.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">Governing Law</h2>
            <p>
              These terms shall be governed and construed in accordance with the laws of [Client's Country], without regard to its conflict of law provisions.
              Any dispute arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in [Client's Jurisdiction].
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">Changes to These Terms</h2>
            <p>
              [Client's Company Name] may revise these terms at any time without notice.
              By continuing to access or use the Service after any revisions become effective, you agree to be bound by the updated terms.
              If you do not agree to the new terms, please stop using the Service.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">Contact Us</h2>
            <p>
              If you have any questions about these terms, please contact us.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
