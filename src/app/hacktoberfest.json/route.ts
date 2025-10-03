import { NextResponse } from 'next/server';

const hacktoberfestData = [
  {
    name: 'Benjamin Bourgeois',
    agency: 'Nantes, FR',
    github: {
      handle: 'bengeois',
    },
    gitlab: {
      handle: 'bengeois',
    },
  },
  {
    name: 'Antoine Ceol',
    agency: 'Bordeaux, FR',
    github: {
      handle: 'aceol',
    },
    gitlab: {
      handle: 'aceol',
    },
  },
  {
    name: 'Gudsfile Chuuut',
    agency: 'Nantes, FR',
    github: {
      handle: 'Gudsfile',
    },
    gitlab: {
      handle: 'Gudsfile',
    },
  },
  {
    name: 'Nicolas Delsaux',
    agency: 'Lille, FR',
    github: {
      handle: 'Riduidel',
    },
    gitlab: {
      handle: 'Riduidel',
    },
  },

  {
    name: 'Jean-Phi Baconnais',
    agency: 'Nantes, FR',
    github: {
      handle: 'jeanphi-baconnais',
    },
    gitlab: {
      handle: 'jeanphi-baconnais',
    },
  },
];

export async function GET() {
  return NextResponse.json(hacktoberfestData);
}
