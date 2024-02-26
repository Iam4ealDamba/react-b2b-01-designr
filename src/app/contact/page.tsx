"use client";

// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/layout";

import AccordionButton from "@/components/button/AccordionButton";
import StandardButton from "@/components/button/StandardButton";

// ||||||||||||||||||||||||||||| ContactPage Component ||||||||||||||||||||||||||||||||||||

const ContactPage = () => {
  // Return
  return (
    <Layout>
      <motion.main
        aria-label="contact-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-32 pb-32 space-y-28"
      >
        <section className="w-full flex justify-between max-w-[1500px] mx-auto max_lg:flex-col max_lg:items-center max_lg:gap-y-20">
          <div className="first flex flex-col max-w-[1300px] mx-auto px-10 gap-y-10 max_lg:text-center">
            <h1 className="max-w-[800px] text-7xl font-black max_md:text-4xl max_lg:mx-auto">
              <b className="text-tw_primary">Contactez-Nous</b> Dès Maintenant
            </h1>
            <p className="text-lg max-w-[600px] text-tw_text_inactive font-bold max_lg:mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              magnam voluptatum? Voluptatibus.
            </p>
          </div>
          <div className="w-full max-w-[500px] pr-10 max_lg:max-w-[800px] max_lg:px-8">
            <form className="bg-tw_secondary w-full px-8 py-8 text-tw_bg flex flex-col gap-y-8 rounded-lg">
              <div className="title">
                <h2 className="text-xl font-black">Formulaire de contact</h2>
              </div>
              <div className="inputs flex flex-col gap-y-4">
                <div className="input flex flex-col gap-y-4">
                  <label htmlFor="name" className="font-bold">
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="px-4 py-2 border-[1px] border-tw_bg bg-transparent placeholder-tw_bg outline-none"
                    placeholder="Entrez votre nom..."
                  />
                </div>
                <div className="input flex flex-col gap-y-4">
                  <label htmlFor="email" className="font-bold">
                    Votre Email
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="px-4 py-2 border-[1px] border-tw_bg bg-transparent placeholder-tw_bg outline-none"
                    placeholder="Entrez votre email..."
                  />
                </div>
                <div className="input flex flex-col gap-y-4">
                  <label htmlFor="message" className="font-bold">
                    Votre Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={5}
                    className="px-4 py-2 border-[1px] border-tw_bg bg-transparent placeholder-tw_bg outline-none"
                    placeholder="Entrez un message..."
                  ></textarea>
                </div>
              </div>
              <div className="button">
                <StandardButton color={"bg-tw_bg text-tw_text w-full"}>
                  Envoyer
                </StandardButton>
              </div>
            </form>
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
export default ContactPage;
