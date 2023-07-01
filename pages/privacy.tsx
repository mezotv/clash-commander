/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />

    <main className="flex-grow  py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">Privacy Policy</h1>

        <div className="secondary rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Introduction</h2>
          <p>
            Clash Commander ("us", "we", or "our") operates the Clash Commander Discord bot (the "Service").
            This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our Service.
            We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>

          <h2 className="text-xl font-bold mb-4 mt-8">Information Collection and Use</h2>
          <p>
            While using our Service, we may require you to provide us with certain personally identifiable information that can be used to contact or identify you.
            Personally identifiable information may include, but is not limited to, your Discord username and user ID ("Personal Information").
          </p>

          <h2 className="text-xl font-bold mb-4 mt-8">Log Data</h2>
          <p>
            We collect information that your browser sends whenever you use our Service ("Log Data").
            This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
          </p>

          <h2 className="text-xl font-bold mb-4 mt-8">Cookies</h2>
          <p>
            We use cookies to store information about visitors' preferences, to record user-specific information on which pages the user accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.
          </p>

          <h2 className="text-xl font-bold mb-4 mt-8">Security</h2>
          <p>
            The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure.
            While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-xl font-bold mb-4 mt-8">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time.
            We will notify you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-xl font-bold mb-4 mt-8">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </div>
      </div>
    </main>

    <Footer />
  </div>
  );
};

export default Privacy;
