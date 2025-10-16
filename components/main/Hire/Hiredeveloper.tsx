"use client";
import { useEffect, useState } from "react";

export default function Hiredeveloper({ hireDev }: any) {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  useEffect(() => {
    const headings = document.querySelectorAll("h2[data-topic]");
    const navLinks = document.querySelectorAll("nav a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const index = Number(entry.target.getAttribute("data-topic"));
            setCurrentTopicIndex(index);

            navLinks.forEach((link) => link.classList.remove("active"));
            const activeLink = document.querySelector(`nav a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add("active");
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.1 }
    );

    headings.forEach((h2) => observer.observe(h2));
    return () => {
      headings.forEach((h2) => observer.unobserve(h2));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative py-12 sm:px-6 lg:px-8 mx-auto flex flex-col gap-10 dark:bg-black">
      <h1 className="text-3xl font-bold mb-4 text-center">
        {hireDev?.whdsTitle ?? "User Guide To Hire Backend Developer"}
      </h1>

      <div className="prose prose-lg prose-invert max-w-none flex gap-2 relative">
        {/* Sidebar */}
        <div className="sticky top-20 self-start hidden lg:block w-1/4 pr-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-700 dark:text-white">
            Guide Topics
          </h2>
          <nav className="list-disc list-inside p-2 border-e-4 border-oveblue">
            {hireDev?.whdsList?.map((item: any, index: number) => (
              <p
                key={index}
                className={`p-2 ${
                  currentTopicIndex === index
                    ? "bg-oveblue/20 dark:bg-oveblue rounded font-bold"
                    : ""
                }`}
              >
                <a
                  onClick={() => setCurrentTopicIndex(index)}
                  href={`#${item.topicTitle
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-gray-600 dark:text-white"
                >
                  {item.topicTitle}
                </a>
              </p>
            )) || <li>Loading topics...</li>}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 page-content">
          {hireDev?.whdsList?.map((item: any, index: number) => (
            <div key={index} className="content-box">
              <h2
                className="scroll-mt-18 scroll-smooth contentBox"
                data-topic={index}
                id={item.topicTitle.toLowerCase().replace(/\s+/g, "-")}
              >
                {item.topicTitle}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: item.topicDescription }}
              />
            </div>
          )) || <p>Loading content...</p>}
        </div>
      </div>
    </div>
  );
}
