'use client';

import Image from "next/image";

export default function Footerlinks()
{
    const hirebyrole = [
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
    ];

    const hirebyskills = [
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
    ];

    const manulinks = [
        {name:'Menu Link 1',url:'#'},
        {name:'Menu Link 1',url:'#'},
        {name:'Menu Link 2',url:'#'},
        {name:'Menu Link 3',url:'#'},
        {name:'Menu Link 4',url:'#'},
        {name:'Menu Link 5',url:'#'},
    ];

    const importantlinks = [
        {name:'Privacy Policy',url:'#'},
        {name:'Sitemap',url:'#'},
        {name:'Contact Us',url:'#'},
        {name:'Terms of Use',url:'#'},
        {name:'Careers',url:'#'},
        {name:'Blog',url:'#'},
    ];

    const supportlinks = [
        {name:'Australia', tel:'(+44) 7411118134',flag:'/assets/flags/AUSTRALIA.webp',number:'+447411118134'},
        {name:'UK', tel:'(+61) 489921411',flag:'/assets/flags/UK.webp',number:'+61489921411'},
        {name:'USA', tel:'(+1) 2028499199',flag:'/assets/flags/USA.webp',number:'+12028499199'},
    ];

    return(
        <section className="bg-black dark:bg-gray-800 text-white relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
            <div className="grid md:grid-cols-3 md:divide-x-3 divide-gray-600">
                <div className="grid p-4 gap-10">
                    <div className="mb-6">
                        <h3 className="font-bold text-2xl text-center mb-8">Hire by Role</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {hirebyrole.map((link,key)=>(
                                <a href={link.url} key={key} aria-label={link.name}>{link.name}</a>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-bold text-2xl text-center mb-8">Hire by Skill</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {hirebyskills.map((link,key)=>(
                                <a href={link.url} key={key} aria-label={link.name}>{link.name}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid p-4">
                    <div className="mb-6">
                        <h3 className="font-bold text-2xl text-center mb-8">Menu Links</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {manulinks.map((link,key)=>(
                                <a href={link.url} key={key} aria-label={link.name}>{link.name}</a>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-bold text-2xl text-center mb-8">Dedicated Support</h3>
                        <div className="grid gap-4">
                            {supportlinks.map((link,key)=>(
                                <a className="flex gap-2" href={`tel:${link.number}`} key={key} aria-label={link.name}>
                                    <Image alt={'link.name'} className="h-6 w-9 rounded shadow-sm shadow-gray-500" width={100} height={100} src={link.flag}/>
                                    <span>{link.name}</span>
                                    {link.tel}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid p-4">
                    <div className="mb-6">
                        <h3 className="font-bold text-2xl text-center mb-8">Important Links</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {importantlinks.map((link,key)=>(
                                <a href={link.url} key={key} aria-label={link.name}>{link.name}</a>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-bold text-2xl text-center mb-8">Important Links</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {importantlinks.map((link,key)=>(
                                <a href={link.url} key={key} aria-label={link.name}>{link.name}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}