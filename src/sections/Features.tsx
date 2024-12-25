"use client";
import slackLogo from "../assets/images/slack-logo.png";
import dockerLogo from "../assets/images/docker-logo.png";
import figmaLogo from "../assets/images/figma-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import vsCodeLogo from "../assets/images/vs-code-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import jiraLogo from "../assets/images/jira-logo.png";
import gcpLogo from "../assets/images/gcp-logo.png";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import { Button } from "@/components/Button";
import { Orbit } from "@/components/Orbit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "@/components/Logo";
import Image from "next/image";
import { motion } from "framer-motion";

export const features = [
  "Effortless integration",
  "Intelligent automation",
  "Robust security",
];

export const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: "gcp logo",
    rotate: 315,
  },
];

export const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="px-20 lg:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="">
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                  Your AI-powered collaboration companion
                </h2>
                <ul className="mt-12 flex flex-col gap-8">
                  {features.map((features) => (
                    <li key={features} className="flex items-center gap-4">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="size-6 text-violet-400"
                      />
                      <span className="text-xl font-medium">{features}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-16">Try It Now</Button>
              </div>
              <div className="flex justify-center">
                <div className="size-[270px] md:size-[450px] relative flex flex-shrink-0">
                  <div className="absolute inset-0">
                    <Orbit className="size-full" />
                  </div>
                  <div className="absolute-center">
                    <Orbit className="size-[180px] md:size-[300px]" />
                  </div>
                  <div className="absolute-center">
                    <Logo className="size-[100px] md:size-[200px]" />
                  </div>
                  {logos.map(({ src, alt, rotate }) => (
                    <motion.div
                      className="absolute inset-0"
                      initial={{ rotate: rotate }}
                      animate={{
                        rotate: [
                          rotate,
                          rotate + 45,
                          rotate + 45,
                          rotate + 90,
                          rotate + 90,
                          rotate + 180,
                          rotate + 180,
                          rotate + 225,
                          rotate + 225,
                          rotate + 270,
                          rotate + 270,
                          rotate + 315,
                          rotate + 315,
                          rotate + 360,
                          rotate + 360,
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 10,
                      }}
                      key={alt}
                    >
                      <motion.div
                        className="inline-flex size-10 md:size-14 items-center justify-center border border-gray-200/30 rounded-lg absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-0 bg-gray-950"
                        initial={{
                          translate: "-50% -50%",
                          rotate: -rotate,
                        }}
                        animate={{
                          rotate: [
                            -rotate,
                            -rotate - 45,
                            -rotate - 45,
                            -rotate - 90,
                            -rotate - 90,
                            -rotate - 180,
                            -rotate - 180,
                            -rotate - 225,
                            -rotate - 225,
                            -rotate - 270,
                            -rotate - 270,
                            -rotate - 315,
                            -rotate - 315,
                            -rotate - 360,
                            -rotate - 360,
                          ],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 10,
                        }}
                        style={{
                          transform: `translate(-50%,-50%) rotate(-${rotate}deg)`,
                        }}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          className="size-6 md:size-9"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Features;
