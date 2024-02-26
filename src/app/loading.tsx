"use client";

// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { FC } from "react";
import { motion } from "framer-motion";
import { LineWave } from "react-loader-spinner";

// ||||||||||||||||||||||||||||| Loading Component ||||||||||||||||||||||||||||||||||||

interface ILoadingProps {}

const Loading: FC<ILoadingProps> = ({}) => {
  // Return
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-[100vh] flex px-6 justify-center items-center bg-tw_secondary"
    >
      <div className="flex gap-x-4 items-center justify-center text-center max_sm:pl-6">
        <p className="text-5xl text-tw_bg max_sm:text-3xl">Chargement</p>
        <div className="w-[100px] h-[40px] flex items-center justify-center pb-4 max_sm:w-[70px]">
          <LineWave height={"100%"} width={"100%"} color="#1C1C1C" />
        </div>
      </div>
    </motion.div>
  );
};
export default Loading;
