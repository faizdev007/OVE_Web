'use client';

import Image from 'next/image';

const roles = [
  { name: 'analistics', logo: '/assets/hireby/roles/analistics.webp'},
  { name: 'app-settings', logo: '/assets/hireby/roles/app-settings.webp'},
  { name: 'automation', logo: '/assets/hireby/roles/automation.webp'},
  { name: 'backend', logo: '/assets/hireby/roles/backend.webp'},
  { name: 'blockchain', logo: '/assets/hireby/roles/blockchain.webp'},
  { name: 'cloud', logo: '/assets/hireby/roles/cloud.webp'},
  { name: 'coding', logo: '/assets/hireby/roles/coding.webp'},
  { name: 'computer', logo: '/assets/hireby/roles/computer.webp'},
  { name: 'computer-scientist', logo: '/assets/hireby/roles/computer-scientist.webp'},
  { name: 'configuration', logo: '/assets/hireby/roles/configuration.webp'},
  { name: 'data-management', logo: '/assets/hireby/roles/data-management.webp'},
  { name: 'devops', logo: '/assets/hireby/roles/devops.webp'},
  { name: 'game-development', logo: '/assets/hireby/roles/game-development.webp'},
  { name: 'ux', logo: '/assets/hireby/roles/ux.webp'},
];


const hirebyskill = [
  { name: 'React', logo: '/assets/hireby/skills/React.webp' },
  { name: 'Go', logo: '/assets/hireby/skills/go.webp' },
  { name: 'GraphQL', logo: '/assets/hireby/skills/graphQL.webp' },
  { name: 'HTML5', logo: '/assets/hireby/skills/HTML5.webp' },
  { name: 'Java', logo: '/assets/hireby/skills/Java.webp' },
  { name: 'JavaScript', logo: '/assets/hireby/skills/JavaScript.webp' },
  { name: 'Jest', logo: '/assets/hireby/skills/Jest.webp' },
  { name: 'Jupyter', logo: '/assets/hireby/skills/Jupyter.webp' },
  { name: 'Laravel', logo: '/assets/hireby/skills/Laravel.webp' },
  { name: 'Node.js', logo: '/assets/hireby/skills/Node.js.webp' },
  { name: 'Python', logo: '/assets/hireby/skills/Python.webp' },
  { name: 'Alpine.js', logo: '/assets/hireby/skills/Alpine.js.webp' },
  { name: 'Apache Maven', logo: '/assets/hireby/skills/Apache-Maven.webp' },
  { name: 'BitBucket', logo: '/assets/hireby/skills/BitBucket.webp' },
  { name: 'Blender', logo: '/assets/hireby/skills/Blender.webp' },
  { name: 'Angular', logo: '/assets/hireby/skills/Angular.webp' },
  { name: 'Fedora', logo: '/assets/hireby/skills/Fedora.webp' },
  { name: 'Docker', logo: '/assets/hireby/skills/Docker.webp' },
  { name: 'Kotlin', logo: '/assets/hireby/skills/Kotlin.webp' },
  { name: 'Django', logo: '/assets/hireby/skills/Django.webp' },
  { name: 'Linux', logo: '/assets/hireby/skills/Linux.webp' }
];

export default function HireBy() {
  return (
    <section className="bg-black dark:bg-gray-800 text-white relative px-4 py-12 sm:px-6 lg:px-8 mx-auto flex flex-col gap-10">
        <div className='container mx-auto'> 
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-4">
                <span>Hire Developers by role</span>
            </h2>
            {/* Logos */}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 space-2 gap-2">
                {roles.map((role, i) => (
                    <div key={i} className="bg-gray-800 dark:bg-gray-700 rounded shadow-md">
                        <div className='flex flex-col p-6 text-center justify-center items-center gap-4'>
                            <div className='aspect-[3/1] flex items-center justify-center'>
                                <Image src={role.logo} alt={role.name} width={60} height={60} className="grayscale object-container h-auto w-auto" />
                            </div>
                            <h4>{role.name}</h4>
                        </div>
                    </div>
                ))}
                <div key='action1' className="bg-gray-800 dark:bg-gray-700 rounded shadow-md">
                    <div className='flex flex-col p-6 text-center justify-center items-center gap-4'>
                        <h4>Looking for Other role?</h4>
                        <button className='border border-green-600 text-green-600 font-bold md:text-lg text-sm rounded p-2 cursor-pointer'>Pleace Request</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='container mx-auto'> 
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-4">
                <span>Hire Developers by skill</span>
            </h2>
            {/* Logos */}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 space-2 gap-2">
                {hirebyskill.map((skill, i) => (
                    <div key={i} className="bg-gray-800 dark:bg-gray-700 rounded shadow-md">
                        <div className='flex flex-col p-6 text-center justify-center items-center gap-4'>
                            <div className='aspect-[3/1] flex items-center justify-center'>
                                <Image src={skill.logo} alt={skill.name} width={60} height={60} className="object-container h-auto w-auto" />
                            </div>
                            <h4>{skill.name}</h4>
                        </div>
                    </div>
                ))}
                <div key='action2' className="bg-gray-800 dark:bg-gray-700 rounded shadow-md">
                    <div className='flex flex-col p-6 text-center justify-center items-center gap-4'>
                        <h4>Looking for Other Skill?</h4>
                        <button className='border border-green-600 text-green-600 font-bold md:text-lg text-sm rounded p-2 cursor-pointer'>Pleace Request</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
