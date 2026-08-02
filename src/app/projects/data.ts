// Add/edit projects here. Each entry renders a card on the home page and its
// own page at /projects/<slug>. `sections` is a free-form list of labeled
// write-up sections (problem, solution, impact, ...) shown on the detail
// page, add or rename entries as a project needs. A section can carry an
// optional `image` (path under public/images/) shown under its body text.
export type ProjectSection = {
  heading: string
  body: string
  image?: string
  caption?: string
}

export type Project = {
  slug: string
  src: string
  title: string
  description: string
  tech: string[]
  sections: ProjectSection[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'digital-media-commons-administration-system',
    src: '/images/DMC_Project.png',
    title: 'Digital Media Commons Administration System',
    description:
      'A cloud-backed admin system that replaced 60 paper forms with a validated digital workflow.',
    tech: ['TypeScript', 'Tailwind CSS', 'Next.js', 'Supabase'],
    sections: [
      {
        heading: 'The problem',
        body: "When was the last time you dealt with a paper-based record system? If it's been a while, that tracks, but they're still alive and well in the depths of Fondren Library, inside Rice's Digital Media Commons. Every equipment checkout ran through one of 60 paper forms: a staff member reading someone's handwriting, retyping it later, and filing the sheet away by hand. Slow at the desk, and impossible to search once it was filed.",
        image: '/images/DMC-TP.png',
        caption: 'A slide from our final presentation. EVERYTHING was on paper! 📄',
      },
      {
        heading: 'The program',
        body: "I worked on this as part of RiceApps Launchpad, a program that teaches new developers the fundamentals of web development by having them build something real for one of Rice's own problems. For the 2025 to 2026 cohort, our team took on the DMC's paper checkout system.",
      },
      {
        heading: 'My role',
        body: 'My focus was the checkout forms themselves. I made sure each one populated with the right fields, validated what a student typed in before it ever reached the database, and stored the finished submission in our backend cleanly enough that staff could pull it back up later instead of digging through a filing cabinet.',
      },
      {
        heading: 'The team',
        body: "None of this happens solo. I got to build it alongside an amazing group of teammates, and it wouldn't have come together without our team lead keeping us on track from our first wireframe to the final presentation.",
        image: '/images/DMC_Presentation.jpeg',
        caption: 'The amazing Launchpad team 🐣💛',
      },
    ],
  },
  {
    slug: 'feeding-south-florida-access-map',
    src: '/images/FSF.png',
    title: 'Feeding South Florida Access Map',
    description:
      'A geospatial platform ranking food-access indicators to guide outreach across four counties.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'MapLibre GL'],
    sections: [
      {
        heading: 'The problem',
        body: "Feeding South Florida partners with more than 150 locations across the four counties it serves: churches, community centers, and more. Spread across 1,497 census tracts, it's genuinely hard to tell just by looking at a list where support is falling short. A map built on real Census and USDA data is the tool that actually shows where the gaps are.",
      },
      {
        heading: 'My involvement',
        body: 'I worked on this through ITWomen, a nonprofit focused on closing the gender gap in tech, which paired a group of us college students directly with Feeding South Florida. Each person on the team took on a different challenge, so together we built a whole range of tools for FSF, not just the one I worked on.',
      },
      {
        heading: 'My role',
        body: 'My piece was the access map itself. I built a Python pipeline and geospatial algorithm that ranks each tract on seven Census and USDA food-access indicators, and shipped it as a full-stack platform FSF staff could explore directly to guide outreach.',
      },
      {
        heading: "What's next",
        body: "This partnership is still going. I'm constantly taking FSF's feedback because I want this tool to actually work for the people using it, not just look good in a demo. Our team will be presenting our solutions soon at the ITWomen AI for Good challenge.",
      },
    ],
  },
  {
    slug: 'equibirth-ai',
    src: '/images/equibirth-coming-soon.svg',
    title: 'Equibirth AI',
    description:
      "Actively building ML models with a team at AI4ALL to predict preterm birth. More info coming soon.",
    tech: ['Python', 'Machine Learning'],
    sections: [
      {
        heading: 'Coming soon',
        body: "I'm currently working with a team through AI4ALL to build machine learning models that predict preterm birth. More info coming soon as the project moves along.",
      },
    ],
  },
]
