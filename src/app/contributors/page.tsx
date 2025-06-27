import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Contributor } from "@/types";
import { Medal, Users } from "lucide-react";

const mockContributorsData: Omit<Contributor, "rank">[] = [
  {
    id: "1",
    name: "Alice Wonderland",
    avatarUrl: "https://placehold.co/40x40.png",
    imageHint: "avatar person",
    prCount: 150,
    mrCount: 20,
    totalContributions: 170,
  },
  {
    id: "2",
    name: "Bob The Builder",
    avatarUrl: "https://placehold.co/40x40.png",
    imageHint: "avatar person",
    prCount: 120,
    mrCount: 15,
    totalContributions: 135,
  },
  {
    id: "3",
    name: "Charlie Chaplin",
    avatarUrl: "https://placehold.co/40x40.png",
    imageHint: "avatar person",
    prCount: 100,
    mrCount: 30,
    totalContributions: 130,
  },
  {
    id: "4",
    name: "Diana Prince",
    avatarUrl: "https://placehold.co/40x40.png",
    imageHint: "avatar person",
    prCount: 90,
    mrCount: 25,
    totalContributions: 115,
  },
  {
    id: "5",
    name: "Edward Scissorhands",
    avatarUrl: "https://placehold.co/40x40.png",
    imageHint: "avatar person",
    prCount: 80,
    mrCount: 10,
    totalContributions: 90,
  },
  {
    id: "6",
    name: "Fiona Gallagher",
    avatarUrl: "https://placehold.co/40x40.png",
    imageHint: "avatar person",
    prCount: 75,
    mrCount: 5,
    totalContributions: 80,
  },
  {
    id: "7",
    name: "Geralt of Rivia",
    avatarUrl: "https://placehold.co/40x40.png",
    imageHint: "avatar person",
    prCount: 60,
    mrCount: 18,
    totalContributions: 78,
  },
  {
    id: "8",
    name: "Hermione Granger",
    avatarUrl: "https://placehold.co/40x40.png",
    imageHint: "avatar person",
    prCount: 50,
    mrCount: 25,
    totalContributions: 75,
  },
  {
    id: "9",
    name: "Indiana Jones",
    avatarUrl: "https://placehold.co/40x40.png",
    imageHint: "avatar person",
    prCount: 40,
    mrCount: 10,
    totalContributions: 50,
  },
  {
    id: "10",
    name: "John Doe",
    avatarUrl: "https://placehold.co/40x40.png",
    imageHint: "avatar person",
    prCount: 30,
    mrCount: 5,
    totalContributions: 35,
  },
];

const getRankedContributors = (): Contributor[] => {
  return mockContributorsData
    .sort((a, b) => b.totalContributions - a.totalContributions)
    .map((contributor, index) => ({
      ...contributor,
      rank: index + 1,
    }));
};

export default function ContributorsPage() {
  const contributors = getRankedContributors();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12 pt-16">
          <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-[#BF1D67] bg-clip-text text-transparent">
              Top Contributors
            </span>
          </h1>
        </div>

        <div className="overflow-x-auto bg-card p-4 sm:p-6 rounded-lg shadow-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px] text-center">Rank</TableHead>
                <TableHead>Contributor</TableHead>
                <TableHead className="text-center hidden sm:table-cell">
                  PRs
                </TableHead>
                <TableHead className="text-center hidden sm:table-cell">
                  MRs
                </TableHead>
                <TableHead className="text-right">
                  Total Contributions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contributors.map((contributor) => (
                <TableRow key={contributor.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium text-center align-middle">
                    <div className="flex items-center justify-center">
                      {contributor.rank === 1 && (
                        <Medal className="h-5 w-5 text-yellow-400 mr-1" />
                      )}
                      {contributor.rank === 2 && (
                        <Medal className="h-5 w-5 text-slate-400 mr-1" />
                      )}
                      {contributor.rank === 3 && (
                        <Medal className="h-5 w-5 text-orange-400 mr-1" />
                      )}
                      {contributor.rank}
                    </div>
                  </TableCell>
                  <TableCell className="align-middle">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={contributor.avatarUrl}
                          alt={contributor.name}
                          data-ai-hint={contributor.imageHint}
                        />
                        <AvatarFallback>
                          {contributor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-base">
                          {contributor.name}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center align-middle hidden sm:table-cell">
                    {contributor.prCount}
                  </TableCell>
                  <TableCell className="text-center align-middle hidden sm:table-cell">
                    {contributor.mrCount}
                  </TableCell>
                  <TableCell className="text-right font-bold text-lg text-primary align-middle">
                    {contributor.totalContributions}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
      <Footer />
    </div>
  );
}
