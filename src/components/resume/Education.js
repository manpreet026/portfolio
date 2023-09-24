import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE in Computer Science"
            subTitle="Chandigarh University(2020 - 2024)"
            result="8.26/10"
            des="The degree gave a kickstart to my carrer and opened a bunch of opportunities for me"
          />
          <ResumeCard
            title="CBSE 12th"
            subTitle="Saint Pauls Senior Secondary School (2019-2020)"
            result="93.6%"
            des="I had major in science maths that is PCM stream, it made me fall in love with maths."
          />
          <ResumeCard
            title="CBSE 10th"
            subTitle="Saint Pauls Senior Secondary School (2018-2019)"
            result="92.6%"
            des="It was a stepping stone in my selection of stream."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="VARIANCE TECHNOLOGIES PVT LTD"
            result="DEC 2022 - JULY 2023"
            des="Perform back-testing on 30+ strategies to evaluate the performance of 
            developed bots and make necessary adjustments to improve 
            functionality by 80% with mathematical Matrix."
          />
          <ResumeCard
            title="Java Developer Intern"
            subTitle="UNOTECH SOFTWARE PRIVATE LIMITED"
            result=" JULY 2022-NOV 2022"
            des="Consume REST API and connect to the database of the products to 
            gather user information.
            Collaborated with a team of 5 to innovate new ideas"
          />
          <ResumeCard
            title="Freelance"
            subTitle="Web development Project"
            result="JUNE 2022"
            des="Created a website for client."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education