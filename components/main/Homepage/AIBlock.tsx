'use client';
import { motion } from "framer-motion";

const aipoints =[
  {
    heading: '10 Finalists from 100 Applicants',
    text: 'AI evaluates resumes, skills, and qualifications in minutes, reducing your screening time from weeks to hours while identifying top talent instantly.',
  },
  {
    heading: '50+ Concurrent AI Interviews',
    text: 'Screen 50+ candidates simultaneously with structured AI interviews that assess technical skills, communication, and role fit—24/7, without scheduling conflicts.',
  },
  {
    heading: 'Screen 100+ Candidates Simultaneously',
    text: 'Our AI conducts structured first-round interviews 24/7 across all your open roles, eliminating scheduling conflicts and reducing your screening time from weeks to hours.',
  },
  {
    heading: 'Seamless AI-to-Human Handoff',
    text: 'Candidates screened by AI receive instant feedback and move directly to your calendar for human interviews, creating a fast, professional experience that keeps top talent engaged throughout your hiring process.',
  },
  {
    heading: 'Zero Bias, Maximum Quality',
    text: 'Standardized evaluation criteria eliminate unconscious bias while maintaining consistent quality, giving every candidate a fair assessment and you the best matches.',
  },
];
export default function AIBlock({aiBlock}:any){
    console.log(aiBlock);
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="relative dark:bg-gray-900 dark:py-12 px-4 sm:px-6 lg:px-8">
            <div className="relative z-20 mx-auto">
                <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut" }} viewport={{ once: true }} className="xl:text-4xl md:text-3xl text-2xl font-bold text-center text-white mb-12"> {aiBlock != undefined ? aiBlock.titleOne : (<><motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }}>🚀</motion.span> <span className="AiBlockText">10x Faster Hiring with AI</span></>)}</motion.h2>
                <p className="xl:text-4xl md:text-3xl text-2xl font-bold text-center text-white mb-12">{aiBlock != undefined ? aiBlock.titleTwo : 'Welcome to AI-Accelerated Hiring'}</p>
                <div className="text-white flex lg:flex-row flex-col pt-2">
                    <div className="flex lg:w-1/2 w-full items-center justify-center">
                        <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ duration: 1.7, ease: "easeOut" }} viewport={{ once: true }} className="aspect-auto border border-gray-800 shadow-lg w-[300] h-[300] rounded-full overflow-hidden mb-10 flex justify-center items-center mx-auto">
                            <img src={aiBlock != undefined ? aiBlock.mainBlock.aiBlockImage.node.sourceUrl : '../assets/aiicon.webp'} alt={aiBlock != undefined ? aiBlock.mainBlock.aiBlockImage.node.title : 'AI Hiring Image'}/>
                        </motion.div>
                    </div>
                    {
                        aiBlock != undefined ?  (<><div className="pageContent" dangerouslySetInnerHTML={{__html:aiBlock.mainBlock.aiBlockTextarea}}></div></>) : (
                        <>
                            <div>
                                <h3 className="font-semibold text-xl pt-6 mb-2 text-white underline">Why Our AI Screening Changes Everything</h3>
                                <ul className="list-disc pl-6 lg:text-2xl text-lg space-y-3 text-white">
                                    {aipoints.map((item, i) => (
                                        <motion.li initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: i, ease: "easeOut" }} viewport={{ once: true }} key={i}>
                                            <h4 className="font-semibold">{item.heading}</h4>
                                            <p className="text-sm opacity-90">{item.text}</p>
                                        </motion.li>
                                    ))}
                                </ul> 
                            </div>  
                        </>
                        )
                    }
                </div>
                <div className="mt-10">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut" }} viewport={{ once: true }}>
                        <div className='w-full flex justify-center mt-10'>  
                            <a href={'/contact-us'} className='lg:w-1/3 w-min cursor-pointer text-nowrap text-center hover:bg-btnblue/90 drop-shadow shadow hover:shadow-xl bg-btnblue text-white lg:p-3 p-2 xl:text-xl text-nowarp font-bold rounded'>{aiBlock != undefined ? aiBlock.aiBlockBtnText : 'Book A Free Consultation Today!'}</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}