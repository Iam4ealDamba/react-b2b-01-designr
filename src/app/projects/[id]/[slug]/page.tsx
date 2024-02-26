"use client";

// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@/layout";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import Loading from "@/app/loading";

// ||||||||||||||||||||||||||||| ProjectDetail Component ||||||||||||||||||||||||||||||||||||

interface IProjectDetailProps {}

const ProjectDetail: FC<IProjectDetailProps> = ({}) => {
  // Hooks
  const [loading, setLoading] = useState(true);

  // Functions
  const handleLoading = () => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(setLoading(false));
      }, 2000);
    });
  };

  // Effects
  useEffect(() => {
    handleLoading();
  }, []);

  // Return
  if (loading) return <Loading />;
  return (
    <Layout>
      <motion.main
        aria-label="projets-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pb-32 space-y-20"
      >
        <section
          aria-label="first"
          className="relative w-full h-[500px] flex justify-center items-center max_md:px-6 max_md:h-[400px]"
        >
          <div
            aria-label="bg-gif"
            className="absolute top-0 left- w-full h-full"
          >
            <Image
              src={"/blog.jpg"}
              alt="image project"
              width={1920}
              height={1080}
              className="w-full h-full object-cover grayscale"
            />
            <div
              aria-label="filter"
              className="absolute top-0 left-0 w-full h-full bg-black/65"
            ></div>
          </div>
        </section>
        <section className=" max-w-[1500px] mx-auto flex px-16 max_md:px-6">
          <div aria-label="return button">
            <Link
              href="/projects"
              className="flex items-center gap-x-4 underline underline-offset-2"
            >
              <FaChevronLeft />
              <p className="font-bold">Retour en arrière</p>
            </Link>
          </div>
        </section>
        <section
          aria-label="project content"
          className="max-w-[1500px] mx-auto flex flex-col items-center gap-y-4 text-center max_md:px-3"
        >
          <h1 className="text-5xl font-black text-tw_primary max_md:text-4xl">
            Le nom du projet
          </h1>
          <span className="text-lg text-tw_text_inactive font-bold">
            Web Design - 2023
          </span>
          <a
            href="https://iamdamba-dev.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-tw_primary text-tw_text font-bold"
          >
            Visiter le site
          </a>
        </section>
        <section className="max-w-[1500px] mx-auto space-y-10 px-16 max_md:px-6 max_md:text-center">
          <h2 className="text-5xl font-black text-tw_primary max_md:text-2xl">
            Description du projet
          </h2>
          <div className="space-y-4 text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur rem, reiciendis ducimus temporibus at et tempore ab
              corporis ipsam delectus doloribus illum dolorum cupiditate hic
              omnis laborum laudantium vitae facilis? A dolorum magnam in quidem
              ab saepe sed! Expedita voluptatibus repudiandae itaque sit ducimus
              beatae repellendus eos dolore perferendis nihil, magni quibusdam
              quidem totam architecto amet.
            </p>
            <p>
              Voluptatem fugiat quos culpa. Sequi inventore impedit magnam esse
              magni possimus ex eligendi similique vero, repellendus est natus,
              quis sit animi a odio quia ducimus voluptates, exercitationem
              maxime atque deserunt expedita quod praesentium! Iste!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              harum temporibus, soluta sapiente beatae minus eum itaque ea? Quis
              laboriosam labore sunt.
            </p>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};
export default ProjectDetail;
