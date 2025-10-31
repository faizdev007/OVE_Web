"use client";

import { useEffect, useState } from "react";

export default function Hiredeveloper({ hireDev }: any) {

  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  useEffect(() => {
    const headings = document.querySelectorAll("h2[data-topic]");
    const navLinks = document.querySelectorAll("nav a");

    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const index = Number(entry.target.getAttribute("data-topic"));

            setCurrentTopicIndex(index);

            // Update active class in sidebar
            navLinks.forEach((link) => link.classList.remove("active"));
            const activeLink = document.querySelector(`nav a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add("active");
          }
        });
      },
      {
        // Observe element when it hits roughly center of viewport
        root: null,
        rootMargin: "0px 0px -60% 0px", // top detection area
        threshold: 0.3,
      }
    );

    headings.forEach((h2) => observer.observe(h2));

    return () => {
      headings.forEach((h2) => observer.unobserve(h2));
      observer.disconnect();
    };
  }, []);


  const listdata = [
      {
          "topicTitle": "Why Hire Backend Developer?",
          "topicDescription": "<p>There are many reasons to hire a dedicated backend developer. We mention a few for you to look at:</p>\n<ul>\n<li>Businesses need backend developers to manage and oversee the website’s technical operations. They create and manage databases, write code for web applications, or design and oversee server architecture.</li>\n<li>A back-end developer develops and manages the functionality of a website’s back-end. They typically work with databases, web servers, and scripting languages to create and maintain the site’s infrastructure.</li>\n<li>Back-end developers are essential for websites requiring more complex functionality than a front-end developer alone can provide. For example, ecommerce websites need a backend to manage inventory, track orders, and process payments. Any website that requires custom coding or database management would benefit from having a back-end developer on staff.</li>\n<li>Backend developers are responsible for integrating front-end designs with back-end functionality, ensuring everything works properly. They have a good understanding of both user experience and system infrastructure.</li>\n<li>Backend developers strongly understand algorithms, data structures, and software design patterns. This allows them to write code that is both robust and scalable.</li>\n<li>Backend developers can develop APIs that enable applications to interact with back-end systems easily.</li>\n<li>Backend developers can troubleshoot problems and fix bugs quickly and efficiently.</li>\n<li>One should hire a back-end developer when they need help to develop and manage web applications and services.</li>\n<li>Back-end developers are responsible for the server-side code that makes up a web application and its functionality and stability. They work with databases, create APIs, and manage user sessions.</li>\n<li>Back-end developers are also responsible for ensuring that an application is scalable, meaning it can handle increased traffic or load without crashing.</li>\n<li>An organization should hire a back-end developer if it needs someone to build a custom backend solution or maintain and update an existing system.</li>\n</ul>\n<p>If your business needs someone to fulfill these duties, it’s probably time to hire a back-end developer.</p>\n"
      },
      {
          "topicTitle": "How to identify a suitable backend developer?",
          "topicDescription": "<p>Identifying a suitable backend developer involves evaluating their skills, experience, and compatibility with your team and company culture. Here are some key factors to consider:</p>\n<ul>\n<li>Skills in database design and management, API development and integration, server-side scripting languages (PHP, Ruby on Rails, Java), and web application frameworks (Laravel, Ruby on Rails).</li>\n<li>Experience with popular cloud service providers such as AWS and Azure.<br />\nFamiliarity with your company’s specific business needs and the ability to create tailored solutions.</li>\n<li>Creativity in problem-solving and the ability to think outside the box.</li>\n<li>Reliability and the ability to work independently and as part of a team.</li>\n</ul>\n<p>Assessing a developer’s skills can be done by reviewing samples of their work and discussing their experience with specific technologies or programming languages. Finding the right backend developer requires a thorough evaluation of their technical expertise and their fit within your organization.</p>\n"
      },
      {
          "topicTitle": "What are the types of dedicated backend development team?",
          "topicDescription": "<p>When it comes to dedicated backend development teams, there are three main types to consider:</p>\n<ol>\n<li>Full-stack team: A full-stack team possesses front-end and back-end development expertise. They handle the complete development process, from user interface design to server-side coding. This type of team is suitable for companies looking for end-to-end development solutions.</li>\n<li>Back-end-only team: A back-end-only team focuses solely on back-end tasks such as database development, API creation, and server-side logic implementation. They excel in optimizing app or website performance and can handle all your back-end development needs.</li>\n<li>Hybrid team: A hybrid team combines front-end and back-end developers, offering a balanced skill set for comprehensive development. This team can handle various aspects of the development process while maintaining specialization in their respective areas.</li>\n</ol>\n<p>By understanding these different types of dedicated backend development teams, you can choose the one that best aligns with your project requirements and development goals.</p>\n"
      },
      {
          "topicTitle": "What are the Dos and Don’ts of hiring backend developers?",
          "topicDescription": "<p>Dos:</p>\n<ul>\n<li>Define your project requirements: Clearly define your project requirements and the specific skills you need in a backend developer. This will help you target the right candidates for your project.</li>\n<li>Look for relevant experience: Look for candidates with experience working on similar projects and the technologies you require. This will ensure they have the skills to handle your project’s complexities.</li>\n<li>Evaluate technical skills: Test the candidate’s technical skills to ensure they deeply understand backend development principles, coding standards, and security protocols.</li>\n<li>Check the candidate’s references to verify their experience, work ethic, and communication skills.</li>\n<li>Look for good communicators: Look for candidates who can communicate clearly and effectively with the rest of your team. Backend developers who can communicate their ideas, challenges, and solutions effectively can help improve the overall quality of your project.</li>\n</ul>\n<p>Don’ts:</p>\n<ul>\n<li>Don’t rely solely on resumes: Resumes can be misleading, and some candidates may exaggerate their experience and skills. Evaluating candidates through technical tests, interviews, and references is essential.</li>\n<li>Don’t overlook cultural fit: A candidate who has the right technical skills but doesn’t fit into your team’s culture may create conflicts and negatively impact team morale.</li>\n<li>Don’t rush the hiring process: Take your time to evaluate candidates thoroughly, even if you have a tight deadline. Rushing the process can lead to hiring the wrong person, resulting in delays and suboptimal results.</li>\n<li>Don’t ignore soft skills: Soft skills, such as problem-solving, communication, and teamwork, are essential for backend developers. Don’t overlook them during the hiring process.</li>\n</ul>\n<p>Following these dos and don’ts can improve your chances of hiring the right backend developer for your project.</p>\n"
      }
  ];

  const lists = hireDev?.whdsList.length > 0  ? hireDev?.whdsList : listdata;
  
  return (
    <div className="sm:px-6 lg:px-8 mx-auto flex flex-col gap-10 dark:bg-black">
      <h1 className="text-3xl font-bold mb-4 text-center">
        {hireDev?.whdsTitle.length > 0 ? hireDev?.whdsTitle : "User Guide To Hire Backend Developer"}
      </h1>

      <div className="prose prose-lg prose-invert max-w-none flex gap-2 relative">
        {/* Sidebar */}
        <div className="sticky top-20 self-start hidden lg:block w-1/4 pr-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-700 dark:text-white">
            Guide Topics
          </h2>
          <nav className="list-disc list-inside p-2 border-e-4 border-oveblue space-y-1">
            {lists?.map((item: any, index: number) => {
              const active = currentTopicIndex === index;
              return (
                <p
                  key={index}
                  className={`p-2 rounded cursor-pointer transition-all duration-200 ${
                    active
                      ? "bg-oveblue/20 dark:bg-oveblue font-semibold"
                      : "hover:bg-oveblue/10"
                  }`}
                >
                  <a
                    href={`#${item.topicTitle
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block text-gray-700 dark:text-white"
                  >
                    {item.topicTitle}
                  </a>
                </p>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 page-content scroll-smooth">
          {lists?.map((item: any, index: number) => (
            <section
              key={index}
              className="content-box py-8"
            >
              <h2
                className="text-2xl scroll-mt-18 font-bold mb-4"
                data-topic={index}
                id={item.topicTitle.toLowerCase().replace(/\s+/g, "-")}
              >
                {item.topicTitle}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: item.topicDescription }}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
