import team from '../assets/teams.png'

const teamMembers = [
  {
    name: "Ajay Kumar",
    role: "Founder & CEO",
    desc: "Ajay leads the vision and strategy of our tech platform. With a background in cloud engineering and AI, he’s passionate about innovation and user experience.",
  },
  {
    name: "Sana Reddy",
    role: "Product Designer",
    desc: "Sana transforms ideas into beautiful, user-friendly interfaces. She’s the creative brain behind our product layouts and branding.",
  },
  {
    name: "Rahul Varma",
    role: "Full Stack Developer",
    desc: "Rahul builds and maintains our web infrastructure with a deep focus on performance and scalability.",
  },
  {
    name: "Meena Choudhary",
    role: "Marketing Strategist",
    desc: "Meena crafts digital campaigns and helps our content reach the right audience across platforms.",
  },
  {
    name: "Karthik Iyer",
    role: "Customer Experience Lead",
    desc: "Karthik ensures every user receives exceptional support, solving queries and gathering feedback to improve our services.",
  },
];

const Aboutus = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* About Us Text + Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={team}
              alt="Our Team"
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-base mb-4">
              We're a team of tech-driven creators building an electronics-focused platform that helps customers find the right gadgets.
            </p>
            <p className="text-gray-600 text-base mb-4">
              Our journey started with a shared love for technology and problem-solving. From product reviews to curated recommendations, we simplify your tech decisions with trust and transparency.
            </p>
            <p className="text-indigo-600 font-semibold mt-4">Built with passion. Backed by purpose.</p>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800">Meet Our Team</h3>
          <p className="text-gray-600 mt-2">The people behind the product</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
              <p className="text-sm text-indigo-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
