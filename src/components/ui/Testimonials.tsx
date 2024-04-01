"use client";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { motion } from "framer-motion";

export default function Testimonials({ testimonials }: any) {
  const testimonialsText =
    'Testimonials are the best way to prove that your products work. They help potential buyers feel more <span className="underline-offset-2 text-green-400">confident</span> in their purchase decision. - Neil Patel';

  return (
    <div id="testimonials" className="my-16">
      <motion.h1
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        animate={{ opacity: 0, x: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
        className="text-7xl "
      >
        &quot;Testimonials are the best way to prove that your products work.
        They help potential buyers feel more{" "}
        <span className="underline-offset-auto decoration-green-400 text-green-400">confident</span> in
        their purchase decision.&quot; - Neil Patel
      </motion.h1>
      <motion.div
        className="my-[6rem]"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </motion.div>
    </div>
  );
}
