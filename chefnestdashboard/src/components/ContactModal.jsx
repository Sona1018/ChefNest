const ContactModal = ({ contact, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[600px] p-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Contact Details
          </h2>

          <button
            onClick={onClose}
            className="text-2xl font-bold text-red-500"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <div>
            <p className="text-gray-500">Name</p>
            <p className="font-semibold">{contact.name}</p>
          </div>

          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-semibold">{contact.phone}</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-semibold">{contact.email}</p>
          </div>

          <div>
            <p className="text-gray-500">City</p>
            <p className="font-semibold">{contact.city}</p>
          </div>

          <div className="col-span-2">
            <p className="text-gray-500">Message</p>
            <p className="font-semibold whitespace-pre-wrap">
              {contact.message}
            </p>
          </div>

        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContactModal;