"use client";

// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import { MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";

import LinkButton from "@/components/button/LinkButton";
import StandardCard from "@/components/card/StandardCard";
import ArticleCard from "@/components/card/ArticleCard";
import Layout from "@/layout/";

// ||||||||||||||||||||||||||||| HomePage Component ||||||||||||||||||||||||||||||||||||

const HomePage = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <Layout>
      <motion.main
        aria-label="home-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-28 pb-32"
      >
        <section
          aria-label="first"
          className="relative w-full h-[100vh] flex justify-center items-center"
        >
          <div
            aria-label="bg-gif"
            className="absolute top-0 left- w-full h-full"
          >
            <Image
              src={"/videos/home-bg.gif"}
              alt="gif"
              width={1920}
              height={1080}
              className="w-full h-full object-cover grayscale"
            />
            <div
              aria-label="filter"
              className="absolute top-0 left-0 w-full h-full bg-black/65"
            ></div>
          </div>
          <div className="relative w-full max-w-[1300px] flex flex-col mx-auto gap-y-10 max_2xl_3:px-20 max_lg:px-8">
            <h1 className="max-w-[800px] text-7xl font-black max_md:text-5xl max_xs:text-4xl">
              Agence Design Digital Assurant{" "}
              <b className="text-tw_primary">La Réalisation De Vos Rêves</b>
            </h1>
            <p className="text-lg max-w-[600px] text-tw_text_inactive font-bold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              magnam voluptatum? Voluptatibus.
            </p>
            <div className="button">
              <LinkButton link={"/projects"} color="bg-tw_primary">
                Nos Projets
              </LinkButton>
            </div>
          </div>
        </section>
        <section
          aria-label="second"
          className="w-full max-w-[1300px] mx-auto flex justify-between max_2xl_3:flex-col max_2xl_3:items-center max_2xl_3:px-20 max_lg:px-8 max_2xl_3:space-y-10"
        >
          <div className="left max_lg:mx-auto">
            <div className="image">
              <Image
                src={
                  "https://images.unsplash.com/photo-1550682290-d071c75759f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                }
                alt="image"
                width={500}
                height={800}
                className="bg-tw_text"
              />
            </div>
          </div>
          <div className="right max_2xl_3:flex max_2xl_3:flex-col max_2xl_3:items-center">
            <div className="text max-w-[600px] flex flex-col gap-y-8 pb-16 max_2xl_3:max-w-[800px] max_2xl_3:text-center">
              <h2 className="font-bold text-5xl text-tw_primary">
                Qui Sommes Nous ?
              </h2>
              <p className="text-tw_text_inactive font-bold">
                <b className="font-bold text-tw_primary">Desin.R Agency</b>{" "}
                dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                enim in eros elementum.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse varius enim in eros elementum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius.
              </p>
            </div>
            <div className="image max-w-[600px]  max_2xl_3:max-w-[800px]">
              <Image
                src={
                  "https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80"
                }
                alt="image"
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        <section
          aria-label="third"
          className="w-full max-w-[1300px] mx-auto max_2xl_3:px-20 max_lg:px-10"
        >
          <p className="font-bold text-3xl max_2xl_3:text-center max_lg:text-2xl max_sm:text-xl">
            <b className="text-tw_primary">Nos différents services</b> sont
            adaptes à tout types de demandes dans le domaines UI/UX et
            développement de sites web.{" "}
            <b className="text-tw_primary">La qualités, le respect du budget</b>{" "}
            ainsi que le temps mis pour cela{" "}
            <b className="text-tw_primary">sont nos mots maîtres</b>
          </p>
        </section>
        <section
          aria-label="fourth"
          className="w-full max-w-[1300px] mx-auto px-6"
        >
          <div className="list grid grid-cols-4 place-items-center gap-x-4 max_xl:grid-cols-2 max_2xl_3:gap-y-10 max_md:grid-cols-1">
            <StandardCard
              icon={<MdDesignServices className="text-4xl" />}
              color={"bg-tw_secondary text-tw_text"}
              title={"Web Design"}
              content={`Lorem ipsum dolor repellat magnam blanditiis deleniti vero. Molestias explicabo perferendis fuga ipsa optio quos non.`}
            />
            <StandardCard
              icon={<MdDesignServices className="text-4xl" />}
              color={"bg-tw_secondary text-tw_text"}
              title={"Web Design"}
              content={`Lorem ipsum dolor repellat magnam blanditiis deleniti vero. Molestias explicabo perferendis fuga ipsa optio quos non.`}
            />
            <StandardCard
              icon={<MdDesignServices className="text-4xl" />}
              color={"bg-tw_secondary text-tw_text"}
              title={"Web Design"}
              content={`Lorem ipsum dolor repellat magnam blanditiis deleniti vero. Molestias explicabo perferendis fuga ipsa optio quos non.`}
            />
            <StandardCard
              icon={<MdDesignServices className="text-4xl" />}
              color={"bg-tw_secondary text-tw_text"}
              title={"Web Design"}
              content={`Lorem ipsum dolor repellat magnam blanditiis deleniti vero. Molestias explicabo perferendis fuga ipsa optio quos non.`}
            />
          </div>
        </section>
        <section
          aria-label="fifth"
          className="w-full max-w-[1300px] mx-auto flex flex-col gap-y-16 max_2xl_3:px-8"
        >
          <h2 className="font-bold text-5xl max_2xl_3:text-center max_lg:text-4xl">
            Quelques uns de <b className="text-tw_primary">nos articles</b>
          </h2>
          <div className="list grid grid-cols-3 place-items-center gap-y-10 max_2xl_3:gap-y-10 max_xl:grid-cols-2 max_lg_2:grid-cols-1">
            {Array.from({ length: 3 }).map((_, index) => (
              <ArticleCard
                key={index}
                title="5 Principles of effect web design"
                image="/blog.jpg"
                tag="Design"
                date="Mars 11, 2023"
              />
            ))}
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default HomePage;
