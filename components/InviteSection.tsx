import React from "react";
import Link from "next/link";
const InviteSection: React.FC = () => {
  return (
    <section className="secondary py-8">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Join our community!
          </h2>
          <p className="text-white text-lg mb-4">
            We welcome you to be a part of our community and enjoy exclusive benefits.
          </p>
          <Link href={"https://linkhere.com"}>
          <button className="bg-purple-300 text-white px-6 py-3 rounded font-semibold shadow hover:bg-purple-500">
            Get an Invite
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InviteSection;
