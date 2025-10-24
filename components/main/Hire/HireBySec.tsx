'use client';

import { RoleBaseSlug, SkillByTag } from '@/app/(main)/utils/CategorySlug';
import { useEffect, useState } from 'react';

type HireTagType = {
  name: string;
  data: boolean;
  links: {
    title: string;
    slug: string;
    icon: string;
  }[];
};

const hirebyskill = [
  { name: 'React', logo: '/assets/hireby/skills/React.webp', slug: '#' },
  { name: 'Go', logo: '/assets/hireby/skills/golangimg.webp', slug: '#' },
  { name: 'GraphQL', logo: '/assets/hireby/skills/graphQLimg.webp', slug: '#' },
  { name: 'HTML5', logo: '/assets/hireby/skills/HTML5.webp', slug: '#' },
  { name: 'Java', logo: '/assets/hireby/skills/Java.webp', slug: '#' },
  { name: 'JavaScript', logo: '/assets/hireby/skills/JavaScript.webp', slug: '#' },
  { name: 'Jest', logo: '/assets/hireby/skills/Jest.webp', slug: '#' },
  { name: 'Jupyter', logo: '/assets/hireby/skills/Jupyter.webp', slug: '#' },
  { name: 'Laravel', logo: '/assets/hireby/skills/Laravel.webp', slug: '#' },
  { name: 'Node.js', logo: '/assets/hireby/skills/Node.js.webp', slug: '/hire/node-js-developers' },
  { name: 'Python', logo: '/assets/hireby/skills/Python.webp', slug: '#' },
  { name: 'Alpine.js', logo: '/assets/hireby/skills/Alpine.js.webp', slug: '#' },
  { name: 'Apache Maven', logo: '/assets/hireby/skills/Apache-Maven.webp', slug: '#' },
  { name: 'BitBucket', logo: '/assets/hireby/skills/BitBucket.webp', slug: '#' },
  { name: 'Blender', logo: '/assets/hireby/skills/Blender.webp', slug: '#' },
  { name: 'Angular', logo: '/assets/hireby/skills/Angular.webp', slug: '#' },
  { name: 'Fedora', logo: '/assets/hireby/skills/Fedora.webp', slug: '#' },
  { name: 'Docker', logo: '/assets/hireby/skills/Docker.webp', slug: '#' },
  { name: 'Kotlin', logo: '/assets/hireby/skills/Kotlin.webp', slug: '#' },
  { name: 'Django', logo: '/assets/hireby/skills/Django.webp', slug: '#' },
  { name: 'Linux', logo: '/assets/hireby/skills/Linux.webp', slug: '#' },
];

export default function HireBySec() {
    
    const [SkillTags, setSkillTags] = useState<HireTagType[] | null>(null);
    const [RoleCards, setRoleCards] = useState<null | Array<{ name: string; slug: string; logo: string }>>(null);
    
    useEffect(() => {
        (async () => {
            // Fetch data or perform any side effects here if needed
            const rolelist = await RoleBaseSlug(14); // Fetch 14 roles
            setRoleCards(rolelist?.category?.hires?.nodes.map((role) => ({
                name: role.title,
                slug: `/hire/${role.slug}`,
                logo: role.cardicon?.icon?.node?.sourceUrl || '/assets/hireby/roles/computer.webp',
            })) || []);
        })();

        (async () => {
            // Fetch skill/tag data
            const skillData = await SkillByTag();
            setSkillTags(skillData?.hireTags?.nodes.map((tag) => ({
                name: tag.name,
                data: tag.hires?.nodes.length > 0,  // Check if there are any hires under this tag
                links: tag.hires?.nodes.map((hire) => ({
                    title: hire.title,
                    slug: hire.slug,
                    icon: hire.cardicon?.icon?.node?.sourceUrl || '/assets/webpage.webp',
                })) || [],
            })) || []);
        })();
    }, []);
    
    if(!RoleCards && !SkillTags) {
        return(
            <section className=" dark:bg-gray-800 text-white relative px-4 py-12 sm:px-6 lg:px-8 mx-auto flex flex-col gap-10">
                <div className="container mx-auto">
                    {/* Heading Skeleton */}
                    <div className="h-8 w-64 bg-gray-700 rounded mb-4 animate-pulse"></div>

                    {/* Role Cards Skeleton */}
                    <div className="gap-4 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 md:text-sm space-2 text-xs">
                    {[...Array(9)].map((_, i) => (
                        <div
                        key={i}
                        className="cardLG rounded shadow-md flex flex-col p-6 text-center justify-center items-center gap-4 animate-pulse"
                        >
                        <div className="aspect-[1/1] flex items-center justify-center">
                            <div className="h-12 w-12 bg-gray-600 rounded"></div>
                        </div>
                        <div className="h-4 w-20 bg-gray-600 rounded"></div>
                        </div>
                    ))}
                    <div className="cardLG rounded shadow-md flex flex-col p-6 text-center justify-center items-center gap-4 animate-pulse">
                        <div className="h-4 w-40 bg-gray-600 rounded"></div>
                        <div className="h-8 w-28 bg-gray-600 rounded"></div>
                    </div>
                    </div>
                </div>

                <div className="container mx-auto">
                    {/* Heading Skeleton */}
                    <div className="h-8 w-72 bg-gray-700 rounded mb-4 animate-pulse"></div>

                    {/* Skill Cards Skeleton */}
                    <div className="gap-4 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 md:text-sm space-2 text-xs">
                    {[...Array(9)].map((_, i) => (
                        <div
                        key={i}
                        className="cardLG rounded shadow-md flex flex-col p-6 text-center justify-center items-center gap-4 animate-pulse"
                        >
                        <div className="aspect-[1/1] flex items-center justify-center">
                            <div className="h-12 w-12 bg-gray-600 rounded"></div>
                        </div>
                        <div className="h-4 w-20 bg-gray-600 rounded"></div>
                        </div>
                    ))}
                    <div className="cardLG rounded shadow-md flex flex-col p-6 text-center justify-center items-center gap-4 animate-pulse">
                        <div className="h-4 w-40 bg-gray-600 rounded"></div>
                        <div className="h-8 w-28 bg-gray-600 rounded"></div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className=" dark:bg-gray-800 relative px-4 py-12 sm:px-6 lg:px-8 mx-auto flex flex-col gap-10">
            <div className='container mx-auto'> 
                {/* Heading */}
                <h2 className="text-3xl font-bold mb-1">
                    <span>Hire Developers by role</span>
                </h2>
                <hr/>
                {/* Logos */}
                <div className="gap-4 my-8 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 md:text-sm space-2 text-xs">
                    {RoleCards?.map((role, i) => (
                        <a href={role.slug} key={i} className="cardLG hover:bg-oveblue rounded shadow-md">
                            <div className='flex flex-col p-6 text-center justify-center items-center gap-4'>
                                <div className='aspect-[1/1] flex items-center justify-center'>
                                    <img src={role.logo} alt={role.name} width={60} height={60} className="grayscale object-container h-12 w-auto" />
                                </div>
                                <h2 className='capitalize font-bold text-white'>{role.name}</h2>
                            </div>
                        </a>
                    ))}
                    <div key='action1' className="cardLG rounded shadow-md">
                        <div className='flex flex-col p-6 text-center justify-center items-center gap-4'>
                            <h2 className='font-bold uppercase text-white'>Looking for Other role?</h2>
                            <a href='/contact-us' className='border-2 border-white text-white hover:bg-carblue/50 hover:text-white font-bold md:text-lg text-sm rounded px-2 py-1 cursor-pointer'>Place Request</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto'> 
                {/* Heading */}
                <h2 className="text-3xl font-bold mb-1">
                    <span>Hire Developers by skill</span>
                </h2>
                <hr/>
                {/* Logos */}
                {SkillTags && SkillTags.map((skill, i) => (
                    skill?.data &&
                        <div  className='my-8 gap-2' key={i}>
                            <h3 className="text-2xl font-semibold mb-4 underline">{skill.name}</h3>
                            <div className="gap-4 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 md:text-sm space-2 text-xs">
                                {skill?.links.map((skill, i) => (
                                    <a href={`hire/${skill?.slug}`} key={i} className="cardLG border border-gray-100/20 hover:bg-oveblue rounded shadow-md">
                                        <div className='flex lg:flex-row flex-col p-2 text-center justify-center items-center gap-4'>
                                            <div className='aspect-[1/1] flex items-center justify-center hover:grayscale'>
                                                <img src={skill?.icon} alt={skill?.title} width={20} height={20} className="object-container h-8 w-auto" />
                                            </div>
                                            <h2 className='capitalize font-bold text-white'>{skill?.title}</h2>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
