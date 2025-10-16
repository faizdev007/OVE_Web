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
          <nav className="list-disc list-inside p-2 border-e-4 border-oveblue space-y-1">
            {hireDev?.whdsList?.map((item: any, index: number) => {
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
          {hireDev?.whdsList?.map((item: any, index: number) => (
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
