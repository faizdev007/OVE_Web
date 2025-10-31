'use client';
import { motion } from "framer-motion";
export default function StaffAugment(){
    return (
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="relative dark:bg-gray-900 pb-12 dark:py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center headingtext mb-12 headingtext">The Caliber You Demand. The Chemistry You Deserve.</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">Expert staffing solutions across technical and specialized roles.</p>
            <div className="mt-10">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} viewport={{ once: true }} className="cardbLG overflow-hidden max-w-4xl shadow-md hover:shadow-xl mb-6 mx-auto rounded-xl border">
                    <a href="/staff-augmentation" className="lg:flex gap-4 divide-x">
                        <div className="aspect-video lg:w-1/3 w-full">
                            <img src={'../assets/staffaugment/pic1.webp'} className="w-full object-center object-cover" width={400} height={200}/>
                        </div>
                        <div className="p-8 flex-1 flex lg:flex-row flex-col text-center gap-6 items-center lg:justify-start justify-center text-white">
                            <img src={'../assets/staffaugment/StaffAugmentation.webp'} className="w-[100px] object-center object-cover" width={50} height={50}/>
                            <h3 className="lg:text-4xl text-2xl font-bold mb-4">Staff Augmentation</h3>
                        </div>
                    </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, ease: "easeOut" }} viewport={{ once: true }} className="cardbLG overflow-hidden max-w-4xl shadow-md hover:shadow-xl mb-6 mx-auto rounded-xl border">
                    <a href="/agile-development-teams" className="lg:flex gap-4 divide-x">
                        <div className="aspect-video lg:w-1/3 w-full">
                            <img src={'../assets/staffaugment/pic2.webp'} className="w-full object-center object-cover" width={400} height={200}/>
                        </div>
                        <div className="p-8 flex-1 flex lg:flex-row flex-col text-center gap-6 items-center lg:justify-start justify-center text-white">
                            <img src={'../assets/staffaugment/Agile-Teams.webp'} className="w-[100px] object-center object-cover" width={50} height={50}/>
                            <h3 className="lg:text-4xl text-2xl font-bold mb-4">Agile Development Teams</h3>
                        </div>
                    </a>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut" }} viewport={{ once: true }}>
                    <div className='w-full flex justify-center mt-10'>  
                        <a href={'/contact-us'} className='lg:w-1/3 w-1/2 capitalize cursor-pointer text-center hover:bg-btnblue/90 drop-shadow shadow hover:shadow-xl bg-btnblue text-white lg:p-3 p-2 xl:text-3xl text-nowarp font-bold rounded'>{'Hire a talent'}</a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}