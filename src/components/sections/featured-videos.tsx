import { ResourceCard } from "@/components/cards/resource-card";
import type { Resource } from "@/types";
import { Youtube, PlaySquare } from "lucide-react";

const mockVideos: Resource[] = [
  {
    id: "v1",
    title: "Getting Started with NebulaFlow",
    type: "Video",
    description:
      "A comprehensive walkthrough of our NebulaFlow AI automation tool. Learn how to set up your first workflow.",
    link: "#",
    icon: Youtube,
  },
  {
    id: "v2",
    title: "Deep Dive into QuantumLeap UI Components",
    type: "Video",
    description:
      "Explore the advanced features and customization options of our QuantumLeap UI library.",
    link: "#",
    icon: Youtube,
  },
  {
    id: "v3",
    title: "Zenika Open Source Philosophy",
    type: "Video",
    description:
      "Discover the core values and vision behind Zenika's commitment to open source.",
    link: "#",
    icon: Youtube,
  },
];

export function FeaturedVideos() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PlaySquare className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-[#BF1D67] bg-clip-text text-transparent">
              Featured Videos
            </span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Watch tutorials, talks, and insights from the Zenika team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockVideos.map((video) => (
            <ResourceCard key={video.id} resource={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
