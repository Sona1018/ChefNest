const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-10">

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 leading-8 mb-6">
          Welcome to ChefNest. By using our platform, you agree to comply with
          the following Terms and Conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Booking Policy
        </h2>

        <ul className="list-disc ml-6 text-gray-600 leading-8">
          <li>All bookings are subject to chef availability.</li>
          <li>Please provide accurate booking information.</li>
          <li>ChefNest reserves the right to cancel or reschedule bookings when necessary.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          User Responsibilities
        </h2>

        <ul className="list-disc ml-6 text-gray-600 leading-8">
          <li>Provide correct personal and booking details.</li>
          <li>Respect chefs and maintain a safe environment.</li>
          <li>Do not misuse the platform or submit false information.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Limitation of Liability
        </h2>

        <p className="text-gray-600 leading-8">
          ChefNest is not responsible for delays or service interruptions
          caused by unforeseen circumstances beyond our control.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Changes to Terms
        </h2>

        <p className="text-gray-600 leading-8">
          We reserve the right to update these Terms and Conditions at any
          time. Continued use of the platform indicates acceptance of the
          updated terms.
        </p>

      </div>
    </div>
  );
};

export default Terms;