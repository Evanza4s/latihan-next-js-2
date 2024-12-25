"use client";
import { Button } from "@/components/Button";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import underlineImage from "@/assets/images/underline.svg?url";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";
import { useMotionPosition } from "./Hero";
import { motion, useSpring, useTransform } from "framer-motion";

export const CallToAction = () => {
  const { xProgress, yProgress } = useMotionPosition();

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const translateLargeX = useTransform(xProgress, [0, 1], ["-25%", "25%"]);
  const translateLargeY = useTransform(yProgress, [0, 1], ["-25%", "25%"]);

  const translateMediumX = useTransform(xProgress, [0, 1], ["-50%", "50%"]);
  const translateMediumY = useTransform(yProgress, [0, 1], ["-50%", "50%"]);

  const translateSmallX = useTransform(springX, [0, 1], ["-200%", "200%"]);
  const translateSmallY = useTransform(springY, [0, 1], ["-200%", "200%"]);
  return (
    <section>
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="relative">
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
            <motion.div
              style={{
                x: translateLargeX,
                y: translateLargeY,
              }}
              className="absolute-center -z-10"
            >
              <Planet
                size="lg"
                color="violet"
                className="translate-y-[200px] -translate-x-[200px] rotate-45"
              />
            </motion.div>
            <motion.div
              style={{
                x: translateLargeX,
                y: translateLargeY,
              }}
              className="absolute-center -z-10"
            >
              <Planet
                size="lg"
                color="violet"
                className="translate-y-[200px] -translate-x-[200px] rotate-45"
              />
            </motion.div>
            <motion.div
              style={{
                x: translateLargeX,
                y: translateLargeY,
              }}
              className="absolute-center -z-10"
            >
              <Planet
                size="lg"
                color="violet"
                className="-translate-y-[200px] translate-x-[200px] -rotate-135"
              />
            </motion.div>
            <motion.div
              style={{
                x: translateMediumX,
                y: translateMediumY,
              }}
              className="absolute-center -z-10"
            >
              <Planet
                size="md"
                color="teal"
                className="-translate-x-[500px] rotate-90"
              />
            </motion.div>
            <motion.div
              style={{
                x: translateMediumX,
                y: translateMediumY,
              }}
              className="absolute-center -z-10"
            >
              <Planet
                size="md"
                color="teal"
                className="-translate-y-[100px] translate-x-[500px] -rotate-135"
              />
            </motion.div>
            <motion.div
              style={{
                x: translateSmallX,
                y: translateSmallY,
              }}
              className="absolute-center -z-10"
            >
              <Planet
                size="sm"
                color="fuchsia"
                className="-translate-y-[250px] -translate-x-[400px] rotate-135"
              />
            </motion.div>
            <motion.div
              style={{
                x: translateSmallX,
                y: translateSmallY,
              }}
              className="absolute-center -z-10"
            >
              <Planet
                size="sm"
                color="fuchsia"
                className="translate-y-[150px] translate-x-[400px] -rotate-45"
              />
            </motion.div>
            <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center leading-tight">
              Join the AI Revolution with{" "}
              <span className="relative isolate">
                <span>Sphereal</span>
                <span
                  className="absolute top-full left-0 w-full -translate-y-1/2 h-4 bg-violet-400 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h2>
            <p className="text-center text-xl mt-8 max-w-2xl mx-auto">
              Experience the transformative power of AI with Sphereal. Boost
              your productivity and streamline your workflow with our innovative
              AI chat platform
            </p>
            <div className="flex justify-center mt-10">
              <Button variant="secondary">Get Started</Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default CallToAction;
