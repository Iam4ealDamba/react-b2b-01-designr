"use client";

// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Layout from "@/layout/";
import ProjectCard from "@/components/card/ProjectCard";

// ||||||||||||||||||||||||||||| ProjetsPage Component ||||||||||||||||||||||||||||||||||||

const ProjetsPage = () => {
  // State
  const [projects, setProjects] = useState([
    {
      title: "Projet 1",
      role: "Refonte interface Front End",
      image: "/images/project-1.jpg",
    },
    {
      title: "Projet 2",
      role: "Application web Full Stack",
      image: "/images/project-2.jpg",
    },
    {
      title: "Projet 3",
      role: "Refonte interface Front End",
      image: "/images/project-3.jpg",
    },
    {
      title: "Projet 4",
      role: "Application web Full Stack",
      image: "/images/project-4.jpg",
    },
    {
      title: "Projet 5",
      role: "Application web Full Stack",
      image: "/images/project-5.jpg",
    },
    {
      title: "Projet 6",
      role: "Application web Full Stack",
      image: "/images/project-6.jpg",
    },
  ]);

  // Return
  return (
    <Layout>
      <motion.main
        aria-label="projets-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-32 pb-32 space-y-28"
      >
        <section className="first flex flex-col max-w-[1300px] mx-auto px-10 gap-y-10 max_lg:text-center">
          <h1 className="max-w-[800px] text-7xl font-black max_md:text-4xl max_lg:mx-auto">
            Devouvrez Nos Tout{" "}
            <b className="text-tw_primary">Meilleurs Projets</b>
          </h1>
          <p className="text-lg max-w-[600px] text-tw_text_inactive font-bold max_lg:mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, magnam
            voluptatum? Voluptatibus.
          </p>
        </section>
        <section className="projects-list max-w-[1500px] mx-auto px-10 gap-y-10 max_sm:px-6">
          <div className="list justify-center items-center grid grid-cols-3 mx-auto gap-y-16 max_2xl_3:grid-cols-2 max_lg:grid-cols-1">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                role={project.role}
                image={project.image}
              />
            ))}
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default ProjetsPage;
