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
    name: 'Guillaume Membré',
    agency: 'Nantes, FR',
    github: {
      handle: 'coliss86',
    },
    gitlab: {
      handle: 'coliss86',
    },
  },
  {
    name: 'David Da Silva',
    agency: 'Bordeaux, FR',
    github: {
      handle: 'david-dasilva',
    },
    gitlab: {
      handle: 'm3phistos',
    },
  },
  {
    name: 'Patrice de Saint Steban',
    agency: 'Nantes, FR',
    github: {
      handle: 'patou',
    },
  },
  {
    name: 'Johan Bonneau',
    agency: 'Nantes, FR',
    github: {
      handle: 'zenigata',
    },
    gitlab: {
      handle: 'zenigata',
    },
  },
];

export async function GET() {
  return NextResponse.json(hacktoberfestData);
}
