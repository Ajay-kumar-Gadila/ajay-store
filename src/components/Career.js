import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Career() {
  const [showModal, setShowModal] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [resumeFile, setResumeFile] = useState(null);

  const openModal = (title) => {
    setJobTitle(title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', message: '' });
    setResumeFile(null);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!resumeFile) {
      alert("Please upload a resume.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const base64Resume = reader.result.split(',')[1]; // remove prefix like data:application/pdf;base64,

      const templateParams = {
        job_title: jobTitle,
        applicant_name: formData.name,
        applicant_email: formData.email,
        message: formData.message,
        // attachment: base64Resume, ← not used here
      };

      emailjs.send(
        'service_1c9ixfl1',              // ✅ your service ID
        'template_1sfd6kk',              // ✅ your template ID
        templateParams,
        '5oSzI2s5S8TAYMbCT',             // ✅ your public key
        {
          attachments: [
            {
              name: resumeFile.name,
              data: base64Resume,
            },
          ],
        }
      ).then(
        () => {
          alert('Application sent with resume!');
          closeModal();
        },
        (error) => {
          alert('Failed to send application.');
          console.error(error);
        }
      );
    };

    reader.readAsDataURL(resumeFile); // Trigger reading of file as base64
  };

  return (
    <div className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">We're Hiring!</h2>
        <p className="text-gray-600 mb-10">Join our team of passionate professionals.</p>

        <div className="space-y-6">
          {/* Job Card */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Frontend Developer</h3>
              <span className="text-sm text-indigo-600 font-medium">Remote</span>
            </div>
            <p className="text-gray-600 mt-2 text-sm">
              Join our frontend team to build dynamic interfaces.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">Full Time</span>
              <button
                onClick={() => openModal('Frontend Developer')}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Apply for {jobTitle}</h3>
            <form onSubmit={sendEmail} className="space-y-4">
              <input type="hidden" name="job_title" value={jobTitle} />

              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3"
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Why are you a good fit?"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3"
              ></textarea>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="w-full border border-gray-300 rounded-md p-3"
              />

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-500 underline text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Career;
