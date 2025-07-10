// src/pages/BlogPage.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";
import { Helmet } from "react-helmet";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable MERN Stack Applications",
    date: "June 15, 2025",
    readTime: "8 min read",
    description:
      "A deep dive into the architecture, challenges, and performance optimizations behind building production-grade MERN applications.",
    tags: ["MERN", "Architecture", "Performance"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "System Design Fundamentals for Developers",
    date: "May 28, 2025",
    readTime: "12 min read",
    description:
      "Exploring high-level design patterns, scaling strategies, and real-world architecture decisions every full-stack dev should know.",
    tags: ["System Design", "Scalability", "Architecture"],
    image:
      "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "Mastering React Hooks: From Beginner to Pro",
    date: "May 10, 2025",
    readTime: "15 min read",
    description:
      "A complete guide to mastering React hooks — from useState to custom hooks with real project scenarios and performance considerations.",
    tags: ["React", "Hooks", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
  },
  // Add more posts if needed
];

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0B0E17] text-white"
    >
      <Helmet>
        <title>Tech Blog by Aadarsh | MERN & System Design Insights</title>
        <meta
          name="description"
          content="Aadarsh’s technical blog covering MERN stack, system design, scalability tips, and React best practices."
        />
        <meta
          name="keywords"
          content="MERN, React, System Design, Full Stack, Blog"
        />
      </Helmet>


      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#0B0E17] via-[#131622] to-[#0B0E17]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            <span className="bg-gradient-to-r from-[#7A5AF8] to-[#A162E8] bg-clip-text text-transparent">
              Tech Insights
            </span>{" "}
            & Learnings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Sharing my journey through code, architecture, and everything in
            between
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.slice(0, visibleCount).map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="group relative overflow-hidden rounded-2xl bg-[#1c1c28]/60 border border-[#2a2a3b] hover:border-[#7A5AF8]/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <div className="relative h-52 overflow-hidden rounded-t-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-400 mb-3">
                    <div className="flex items-center mr-4">
                      <FiCalendar className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-[#A162E8] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[#7A5AF8]/10 text-[#A162E8] text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={post.link}
                    className="inline-flex items-center text-sm text-[#7A5AF8] hover:text-[#A162E8] transition-colors group"
                  >
                    Read full article
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 group-hover:text-[#A162E8] transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < blogPosts.length && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-[#7A5AF8]/10 border border-[#7A5AF8] text-[#A162E8] rounded-lg hover:bg-[#7A5AF8]/20 transition-colors"
              >
                Load More Articles
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
