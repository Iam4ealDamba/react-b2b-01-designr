"use client";

// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Layout from "@/layout";
import AccordionButton from "@/components/button/AccordionButton";
import FormulaCard from "@/components/card/FormulaCard";

// ||||||||||||||||||||||||||||| TarifsPage Component ||||||||||||||||||||||||||||||||||||

const TarifsPage = () => {
  // Return
  return (
    <Layout>
      <motion.main
        aria-label="tarifs-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-32 pb-32 space-y-20"
      >
        <section className="first flex flex-col max-w-[1300px] mx-auto px-10 gap-y-10 max_lg:text-center">
          <h1 className="max-w-[800px] text-7xl font-black max_md:text-4xl max_lg:mx-auto">
            <b className="text-tw_primary">Des Tarifs</b> Au Meilleurs Prix{" "}
            <b className="text-tw_primary">Pour Vous</b>
          </h1>
          <p className="text-lg max-w-[600px] text-tw_text_inactive font-bold max_lg:mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, magnam
            voluptatum? Voluptatibus.
          </p>
        </section>
        <section className="formula-list flex flex-col gap-y-20 items-center justify-center text-center pb-10">
          <div className="top">
            <h2 className="font-bold text-5xl text-tw_primary max_md:text-3xl">
              Nos meilleurs offres
            </h2>
          </div>
          <div className="bottom grid grid-cols-3 gap-x-8 gap-y-10 px-20 max_2xl_3:grid-cols-2 max_lg_2:grid-cols-1 max_lg_2:px-6">
            <FormulaCard
              title={"Startup"}
              price={"15"}
              per={"mois"}
              content={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, vero ullam quo in architecto eius ex quidem consequuntur minus voluptatibus odio eum inventore nemo fugit non, modi dolores natus voluptas?"
              }
              color={"bg-tw_secondary text-tw_bg "}
              separator={"border-tw_bg border-[1px] mt-2"}
            />
            <FormulaCard
              title={"Unlimited"}
              price={"50"}
              per={"mois"}
              content={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, vero ullam quo in architecto eius ex quidem consequuntur minus voluptatibus odio eum inventore nemo fugit non, modi dolores natus voluptas?"
              }
              color={"bg-tw_primary text-tw_text "}
              separator={"border-tw_text border-[1px] mt-2"}
            />
            <FormulaCard
              title={"Professionnal"}
              price={"30"}
              per={"mois"}
              content={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, vero ullam quo in architecto eius ex quidem consequuntur minus voluptatibus odio eum inventore nemo fugit non, modi dolores natus voluptas?"
              }
              color={"bg-tw_secondary text-tw_bg "}
              separator={"border-tw_bg border-[1px] mt-2"}
            />
          </div>
        </section>
        <section className="w-full max-w-[1300px] flex flex-col px-8 gap-y-20 justify-center items-center mx-auto text-center">
          <h1 className="max-w-[800px] text-5xl font-black ">
            Avez-vous des <b className="text-tw_primary">des questions ?</b>
          </h1>
          <div className="w-full max-w-[1300px] flex flex-col items-center gap-y-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <AccordionButton
                key={index}
                title={"Une question comme ça ? adadazd azd adz aazda ad"}
                content={
                  "Juste un simple texte d'exemple. on va essayer de faire passer ce texte en une petite diserte... ou pas, je déconne mdrr !!!!!!"
                }
              />
            ))}
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default TarifsPage;
