const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-10">

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 leading-8 mb-6">
          At ChefNest, we value your privacy and are committed to protecting
          your personal information. This Privacy Policy explains how we
          collect, use, and safeguard the information you provide while using
          our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Information We Collect
        </h2>

        <ul className="list-disc ml-6 text-gray-600 leading-8">
          <li>Name and contact details.</li>
          <li>Email address and phone number.</li>
          <li>Booking details and service preferences.</li>
          <li>Any information you voluntarily provide through our contact forms.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          How We Use Your Information
        </h2>

        <ul className="list-disc ml-6 text-gray-600 leading-8">
          <li>To process and manage bookings.</li>
          <li>To respond to customer inquiries.</li>
          <li>To improve our services and user experience.</li>
          <li>To communicate booking updates and important notifications.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Data Security
        </h2>

        <p className="text-gray-600 leading-8">
          We use appropriate security measures to protect your personal
          information. However, no method of data transmission over the
          internet can be guaranteed to be completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Contact Us
        </h2>

        <p className="text-gray-600 leading-8">
          If you have any questions regarding this Privacy Policy, please
          contact us at <strong>sonaa18100@gmail.com</strong>.
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;