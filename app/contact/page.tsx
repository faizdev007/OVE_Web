'use client'

import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        phone: '',
        service: '',
        message: ''
    });

    const trustedbages = [
        {name:'Award', image:'/assets/trustedbages/award.webp'},
    ];

    const contactinfo = [
        {name:'India',flag:'/assets/flags/INDIA.webp',numbers: [
            { number: '+91 888 210 8080', label: 'Sales' },
            { number: '+91 704 202 0782', label: 'HR' },
        ]},
        {name:'UK',flag:'/assets/flags/UK.webp',numbers: [
            { number: '+91 888 210 8080', label: 'Sales' },
            { number: '+91 704 202 0782', label: 'HR' },
        ],},
        {name:'Australia',flag:'/assets/flags/AUSTRALIA.webp',numbers: [
            { number: '+91 888 210 8080', label: 'Sales' },
            { number: '+91 704 202 0782', label: 'HR' },
        ],},
        {name:'USA',flag:'/assets/flags/USA.webp',numbers: [
            { number: '+91 888 210 8080', label: 'Sales' },
            { number: '+91 704 202 0782', label: 'HR' },
        ],},
    ];

    const logos = [
        '/assets/companies/company1.webp',
        '/assets/companies/company2.webp',
        '/assets/companies/company3.webp',
        '/assets/companies/company5.webp',
        '/assets/companies/company6.webp',
        '/assets/companies/company7.webp',
        '/assets/companies/company9.webp',
        '/assets/companies/company10.webp',
        '/assets/companies/company12.webp',
        '/assets/companies/company14.webp',
        ];


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <>
            <main className="bg-black/90 dark:bg-gray-800 text-white grid md:grid-cols-2 gap-8 px-4 py-12">
                <div className="bg-white text-black w-full max-w-6xl p-8 rounded-xl shadow-md">
                    {/* Left Panel */}
                    <div>
                    <div className='md:flex justify-between'>
                        <div className=''>
                            <h1 className="text-3xl lg:text-5xl font-bold mb-2">Get In Touch</h1>
                            <p className="text-gray-600 mb-4">Our team will get back to you within 8 business hours or less.</p>
                        </div>
                        <div className='flex flex-wrap justify-center'>
                            {trustedbages.map((link,key)=>(
                                <div key={key} className='aspect-[1/1] '>
                                    <Image src={link.image} width={120} height={120} className="h-20 object-container w-20" alt={link.name}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-4 mb-6 text-blue-600 font-bold md:text-sm text-xs mt-4">
                        <a href={'tel:+12028499199'} aria-label={"12028499199"} className="hover:underline">📞 Book A Call</a>
                        <a href={'mailto:enquiry@optimalvirtualemployee.com'} aria-label={"enquiry@optimalvirtualemployee.com"} className="hover:underline">✉️ Email us</a>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} className="p-3 border rounded w-full" required />
                        <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} className="p-3 border rounded w-full" required />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" name="country" placeholder="Country *" value={formData.country} onChange={handleChange} className="p-3 border rounded w-full" required />
                        <input type="tel" name="phone" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleChange} className="p-3 border rounded w-full" />
                        </div>
                        <select name="service" value={formData.service} onChange={handleChange} className="p-3 border rounded w-full" required>
                        <option value="">Please select from the dropdown</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        </select>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="How Can We Help?*" className="p-3 border rounded w-full" required />
                        <input type="file" className="w-full hidden border rounded p-2 text-sm" disabled={true} />
                        <button type="submit" className="bg-lime-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-lime-600 transition-all">Send Your Query</button>
                    </form>
                    </div>
                </div>
                {/* Right Panel */}
                <div className="flex flex-col">
                    <div className="space-y-6">
                        <div>
                        <h3 className="text-xl lg:text-3xl font-semibold text-white/60">Trusted by startups and Fortune 500 companies</h3>
                        </div>
                        <ul className="space-y-4 text-white text-sm lg:text-lg">
                        <li>🏆 <strong className='text-white/80'>20+ years of experience</strong><br /><span className='text-white/60'>We can handle projects of all complexities.</span></li>
                        <li>👍 <strong className='text-white/80'>2500+ satisfied customers</strong><br /><span className='text-white/60'>Startups to Fortune 500, we have worked with all.</span></li>
                        <li>👨‍💻 <strong className='text-white/80'>675+ in-house team</strong><br /><span className='text-white/60'>Top 1% industry talent to ensure your digital success.</span></li>
                        </ul>
                    </div>

                    {/* Logo List */}
                    <div className="grid grid-cols-3 xl:grid-cols-4 gap-3 mt-8">
                        {logos.map((logo, i) => (
                            <div key={i} className="lg:aspect-[2/1] lg:h-20 bg-black rounded-md p-6 shadow border border-gray-900 shadow-gray-800 flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt="logo"
                                    width={130}
                                    height={130}
                                    className="object-container px-2 opacity-80 hover:opacity-100 transition"
                                />
                                <span className="text-xs hidden font-medium">{logo}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <section className='py-12'>
                <div className='text-center'>
                    <h2 className='text-3xl lg:text-5xl font-bold mb-4'>Serving Clients in 38+ Countries</h2>
                    <p className='text-gray-600 mb-8'>We are making an impact worldwide with our global presence and exceptional software solutions.</p>
                </div>
                <div className='md:flex gap-6 justify-center'>
                    <div className='border border-gray-300 p-3 rounded-xl'>
                        <table className="">
                            <tbody>
                                {contactinfo.map((country, index) => (
                                <tr key={index} className={`${contactinfo.length > index+1 ? 'border-b' : ''} border-gray-300`}>
                                    <td className="border-e border-gray-300">
                                        <div className='flex gap-3 p-2 items-center'>
                                            <Image
                                                src={country.flag}
                                                alt={country.name}
                                                width={150}
                                                height={150}
                                                className="rounded-full w-8 h-8 object-cover"
                                            />
                                            <span className="font-bold">{country.name}</span>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className='flex flex-col gap-2 p-4'>
                                            {country.numbers.map((item, i) => (
                                                <a
                                                key={i}
                                                href={`tel:${item.number.replace(/\s+/g, '')}`}
                                                className="text-blue-900 font-semibold hover:underline"
                                                aria-label={item.number}
                                                >
                                                {item.number}{' '}
                                                <span className="text-gray-500 font-normal">
                                                    ({item.label})
                                                </span>
                                                </a>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className=''>
                        
                    </div>
                </div>
            </section>
        </>
    );
}
