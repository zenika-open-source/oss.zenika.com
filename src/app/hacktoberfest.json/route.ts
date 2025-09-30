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
    name: 'Jean-Phi Baconnais',
    agency: 'Nantes, FR',
    github: {
      handle: 'jeanphi-baconnais',
    },
    gitlab: {
      handle: 'jeanphi-baconnais',
    },
  }
];

export async function GET() {
  return NextResponse.json(hacktoberfestData);
}
