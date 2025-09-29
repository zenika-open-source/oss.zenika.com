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
];

export async function GET() {
  return NextResponse.json(hacktoberfestData);
}
