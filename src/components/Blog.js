import React, { useState } from "react";
import smarttv from '../assets/smart-tv.jpeg';
import smartwatch from '../assets/smart-watch.jpeg';
import drone from '../assets/drone.jpeg';
import powerbank from '../assets/power-bank.jpeg';
import homegadets from '../assets/home-gadgets.jpeg';
import monitor from '../assets/monitor.jpeg';
import topgadgets from '../assets/top-gadgets.jpeg';
import speakers from '../assets/speakers.jpeg';
import wireless from '../assets/wireless.png';

const blogData = [
  {
    id: 1,
    title: "Top 5 Smartwatches of 2025",
    image: smartwatch,
    summary: "Explore the most advanced smartwatches you can buy this year.",
    full: "Explore Apple Series 9, Galaxy Watch 6, Fitbit Sense 3, and more. We highlight AI health features, battery life, and value."
  },
  {
    id: 2,
    title: "Are Studio Speakers Worth the Price?",
    image: speakers,
    summary: "We review the latest studio-grade speakers.",
    full: "We tested $999 studio speakers for sound clarity, bass depth, and whether the premium price is worth it compared to budget sets."
  },
  {
    id: 3,
    title: "Ultimate Buying Guide for Home Gadgets",
    image: homegadets,
    summary: "From smart bulbs to home security, find the best gadgets.",
    full: "Discover smart plugs, AI cameras, doorbells, and automation hubs that deliver the best value for your smart home setup."
  },
  {
    id: 4,
    title: "Top Budget Headphones Under $50",
    image: topgadgets,
    summary: "Looking for affordable headphones with quality sound?",
    full: "We reviewed 10 budget headphones with solid performance, mic quality, and comfort. Best picks for daily use and gaming."
  },
  {
    id: 5,
    title: "Best Power Banks for 2025",
    image: powerbank,
    summary: "Never run out of battery again with these picks.",
    full: "We tested power banks with fast charging, high capacity, and compact designs. Best for travelers, students, and remote workers."
  },
  {
    id: 6,
    title: "Should You Buy a 4K Monitor?",
    image: monitor,
    summary: "Is it time to upgrade your screen?",
    full: "We explore 4K monitor benefits for designers, gamers, and editors. Understand the pros and cons before you invest."
  },
  {
    id: 7,
    title: "Best Wireless Keyboards for Work",
    image: wireless,
    summary: "Upgrade your workspace with the right keyboard.",
    full: "From mechanical to ergonomic, here are the top wireless keyboards in 2025 with long battery life and smooth typing experience."
  },
  {
    id: 8,
    title: "Latest Drone Tech Trends",
    image: drone,
    summary: "What’s new in consumer drone technology?",
    full: "From AI-assisted flight to cinematic footage, we cover the latest in drone trends, including DJI, Autel, and budget models."
  },
  {
    id: 9,
    title: "Smart TVs Buying Guide",
    image: smarttv,
    summary: "What to look for in a Smart TV this year.",
    full: "Learn about refresh rates, operating systems, smart features, and how to pick a TV that fits your room and streaming needs."
  }
];

const BlogSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleReadMore = (id) => {
    setExpanded(prev => (prev === id ? null : id));
  };

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest in Electronics</h2>
        <p className="text-gray-600 mb-10">Stay updated with the latest trends, reviews, and buying guides in the world of electronics.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {expanded === post.id ? post.full : post.summary}
                </p>
                <button
                  className="text-indigo-600 mt-4 text-sm font-medium hover:underline self-start"
                  onClick={() => toggleReadMore(post.id)}
                >
                  {expanded === post.id ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
