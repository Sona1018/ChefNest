import { useEffect, useState } from "react";
import {
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import toast from "react-hot-toast";
import {
  getAllContacts,
  deleteContact,
  updateContact,
} from "../services/contactService";

import ContactModal from "../components/ContactModal";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [selectedContact, setSelectedContact] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await getAllContacts();
      setContacts(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveContact = async (data) => {
    try {
      await updateContact(editingContact._id, data);

      toast.success("Contact updated successfully!");

      fetchContacts();
      setShowForm(false);
      setEditingContact(null);
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    }
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name?.toLowerCase().includes(search.toLowerCase()) ||
      contact.email?.toLowerCase().includes(search.toLowerCase()) ||
      contact.city?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Contact Messages
        </h1>

        <div className="bg-orange-500 text-white px-5 py-3 rounded-lg">
          Total Messages : {contacts.length}
        </div>
      </div>

      <div className="relative w-80 mb-6">
        <FaSearch className="absolute left-3 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg pl-10 py-3"
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="p-4">#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredContacts.map((contact, index) => (
              <tr
                key={contact._id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.city}</td>

                <td>
                  <div className="flex justify-center gap-4">

                    <button
                      onClick={() =>
                        setSelectedContact(contact)
                      }
                      className="text-green-600"
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() => {
                        setEditingContact(contact);
                        setShowForm(true);
                      }}
                      className="text-blue-600"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={async () => {
                        if (
                          !window.confirm(
                            `Delete ${contact.name}?`
                          )
                        )
                          return;

                        try {
  await deleteContact(contact._id);

  fetchContacts();

  toast.success("Contact deleted successfully!");
} catch (err) {
  console.error(err);
  toast.error("Delete failed");
}
                      }}
                      className="text-red-600"
                    >
                      <FaTrash />
                    </button>

                  </div>
                </td>
              </tr>
            ))}

            {filteredContacts.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-8"
                >
                  No Contacts Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedContact && (
        <ContactModal
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
        />
      )}

      {showForm && (
        <ContactForm
          contact={editingContact}
          onClose={() => {
            setShowForm(false);
            setEditingContact(null);
          }}
          onSubmit={handleSaveContact}
        />
      )}
    </>
  );
};

export default Contact;