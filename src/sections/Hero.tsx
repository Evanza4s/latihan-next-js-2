"use client";
import robotImage from "@/assets/images/robot.jpg";
import { Button } from "@/components/Button";
import underlineImage from "@/assets/images/underline.svg?url";
import Loader from "@/assets/images/loader-animated.svg";
import Image from "next/image";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

export const useMotionPosition = () => {
  const [innerWidth, setInnerWidth] = useState(1);
  const [innerHeight, setInnerHeight] = useState(1);
  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);
  const xProgress = useTransform(clientX, [0, innerHeight], [0, 1]);
  const yProgress = useTransform(clientY, [0, innerWidth], [0, 1]);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);

    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    });
  });

  return { xProgress, yProgress };
};

export const Hero = () => {
  const { xProgress, yProgress } = useMotionPosition();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const transformY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const translateLargeX = useTransform(xProgress, [0, 1], ["-25%", "25%"]);
  const translateLargeY = useTransform(yProgress, [0, 1], ["-25%", "25%"]);

  const translateMediumX = useTransform(xProgress, [0, 1], ["-50%", "50%"]);
  const translateMediumY = useTransform(yProgress, [0, 1], ["-50%", "50%"]);

  const translateSmallX = useTransform(springX, [0, 1], ["-200%", "200%"]);
  const translateSmallY = useTransform(springY, [0, 1], ["-200%", "200%"]);

  return (
    <section ref={sectionRef}>
      <div className="container">
        <SectionBorder>
          <SectionContent className="relative isolate [mask-image:radial-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]" />
            <div className="absolute inset-0 -z-10">
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[600px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[850px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1100px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1350px]" />
              </div>
            </div>
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-gray-100 text-center">
              Unlock the Future AI Conversations with {""}
              <span className="relative">
                <span>Sphereal</span>
                <span
                  className="absolute w-full left-0 top-full -translate-y-1/2 h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h1>
            <p className="text-center text-lg md:text-xl mt-8 max-w-3xl mx-auto">
              Harness the power of AI with Spereal. Elevate your productivity
              and streamline your workflow with our cutting-edge AI chat
              platform
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" className="mt-10">
                Start Chatting
              </Button>
            </div>
            <div className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <motion.div
                  style={{
                    x: translateLargeX,
                    y: translateLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className="-translate-x-[315px] -translate-y-[76px] rotate-135"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateLargeX,
                    y: translateLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className="translate-x-[335px] -translate-y-[180px] -rotate-135"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateSmallX,
                    y: translateSmallY,
                  }}
                >
                  <Planet
                    size="sm"
                    color="fuchsia"
                    className="-translate-x-[510px] -translate-y-[370px] rotate-135"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateMediumX,
                    y: translateMediumY,
                  }}
                >
                  <Planet
                    size="md"
                    color="teal"
                    className="translate-x-[490px] -translate-y-[340px] -rotate-135"
                  />
                </motion.div>
              </div>
              <div className="absolute left-0 z-10 top-[30%] -translate-x-10 hidden lg:block">
                <motion.div
                  className="bg-gray-700/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                  style={{
                    y: transformY,
                  }}
                >
                  <div>
                    Can you generate an incridible frontend dev video tutorial?
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1m ago
                  </div>
                </motion.div>
              </div>
              <div className="absolute right-0 z-10 top-[50%] translate-x-10 hidden lg:block">
                <motion.div
                  className="bg-gray-700/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                  style={{
                    y: transformY,
                  }}
                >
                  <div>
                    <strong>Brainwave: </strong>I created one based on videos
                    from YouTube
                  </div>
                  <div className="text-left text-gray-400 text-sm font-semibold">
                    Just now
                  </div>
                </motion.div>
              </div>
              <div className="mt-20 rounded-2xl border-2 md:bottom-4 lg:bottom-10 overflow-hidden border-gradient relative flex">
                <Image src={robotImage} alt="Robot" />
                <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 w-full max-w-xs px-[15px] ">
                  <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                    <Loader className="text-violet-400" />
                    <div className="font-semibold text-xl text-gray-100">
                      AI is generating{" "}
                      <span className="animate-cursor-blink">|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Hero;
