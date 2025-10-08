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
    name: 'Arthur Lutz',
    agency: 'Nantes, FR',
    github: {
      handle: 'arthurzenika',
    },
    gitlab: {
      handle: 'arthurzenika',
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
  {
    "name": "your name you want to display on this website",
    "agency": "Bordeaux, FR",
    "github": {
      "handle": "david-dasilva"
    },
    gitlab: {
      handle: 'm3phistos',
    },
  },
];

export async function GET() {
  return NextResponse.json(hacktoberfestData);
}
