import { ResourceCard } from "@/components/cards/resource-card";
import type { Resource } from "@/types";
import { Youtube, PlaySquare, LucideIcon } from "lucide-react";

const mockWhitePaper: Resource[] = [
  {
    id: "1",
    link: "https://github.com/zenika-open-source/open-source-white-paper/blob/master/en/01-getting-started.md",
    title: "Chapter 1: Getting started",
    type: "WhitePaper",
    description:
      "The world of open source is vast, it is very easy to get lost. When starting, this world can feel unaccessible and intimidating. Where to start? What are the rules and codes to follow? Can I contribute even if I do not code? No worries, in this article we will give you all the tips you need to start well, choose the right project and submit your first contribution.",
    icon: Youtube,
  },
  {
    id: "2",
    link: "https://github.com/zenika-open-source/open-source-white-paper/blob/master/en/02-preparing-your-project-being-open-sourced.md",
    title: "Chapter 2: Preparing your project being open sourced",
    type: "WhitePaper",
    description:
      "You want to launch your own open source project but you don't know what to do before letting everyone view your code? No worries, in this article we will give you all the pre-requisites you need to launch your project.",
    icon: Youtube,
  },
  {
    id: "3",
    link: "string",
    title: "Chapter 3: Promotion",
    type: "WhitePaper",
    description:
      "You want to launch your own open-source project but aren't sure what to do before letting everyone see your code? No worries, in this article, we'll give you all the prerequisites for launching your project.",
    icon: Youtube,
  },
  {
    id: "4",
    link: "https://github.com/zenika-open-source/open-source-white-paper/blob/master/fr/04-licences.md",
    title: "Chapter 4: Licenses",
    type: "WhitePaper",
    description:
      'As a developer or an open source project maintainer, it is essential to have knowledge of the different types of licenses. What are your rights and duties when you use them? There are several types of licenses available and each may have pros and cons that should be measured before choosing. We must remain vigilant, there may be confusion between different categories of "free" software (OSS, freeware, public domain ...). It exists dozens of free licenses, some of which are viral. This article is intended to help you understand the different features of licenses and choose the most suitable for your project.',
    icon: Youtube,
  },
];

export function WhitePaper() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PlaySquare className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-[#BF1D67] bg-clip-text text-transparent">
              White Paper
            </span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            White paper about Open Source by Zenika.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockWhitePaper.map((whitePaper) => (
            <ResourceCard key={whitePaper.id} resource={whitePaper} />
          ))}
        </div>
      </div>
    </section>
  );
}
