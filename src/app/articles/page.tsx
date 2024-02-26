"use client";

// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { motion } from "framer-motion";

import Layout from "@/layout";
import ArticleCard from "@/components/card/ArticleCard";

// ||||||||||||||||||||||||||||| ArticlePage Component ||||||||||||||||||||||||||||||||||||

const ArticlePage = () => {
  // Return
  return (
    <Layout>
      <motion.main
        aria-label="articles-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-32 pb-20 space-y-20"
      >
        <section className="first flex flex-col max-w-[1300px] mx-auto px-10 gap-y-10 max_lg:text-center">
          <h1 className="max-w-[800px] text-7xl font-black max_md:text-4xl max_lg:mx-auto">
            Venez Consulter tout <b className="text-tw_primary">Nos Articles</b>
          </h1>
          <p className="text-lg max-w-[600px] text-tw_text_inactive font-bold max_lg:mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, magnam
            voluptatum? Voluptatibus.
          </p>
        </section>
        <section className="fifth max-w-[1300px] mx-auto px-10 flex flex-col gap-y-16 pb-32">
          <div className="input flex justify-end max_lg_2:mx-auto max_lg_2:w-full max_lg_2:max-w-[500px]" >
            <select className="w-[300px] py-3 px-6 bg-tw_secondary text-tw_bg font-bold max_lg_2:w-full">
              <option value="">Choisir une categorie</option>
              <option value="design">Design</option>
            </select>
          </div>
          <div className="list grid grid-cols-3 gap-y-10 justify-items-center max_xl:grid-cols-2 max_lg_2:grid-cols-1">
            {Array.from({ length: 6 }).map((_, index) => (
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

export default ArticlePage;
