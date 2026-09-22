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
    tech: ['Python', 'PostgreSQL', 'MapLibre GL'],
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
      'Building ML models with a team at AI4ALL to predict preterm birth and check whether they hold up fairly across racial and socioeconomic groups.',
    tech: ['Python', 'NumPy', 'scikit-learn'],
    sections: [
      {
        heading: 'The problem',
        body: "Preterm birth, born before 37 weeks, is one of the leading causes of newborn death, and it doesn't affect everyone equally. About 10.4% of U.S. births in 2023 were preterm, and Black women experience meaningfully higher rates of both preterm birth and pregnancy-related mortality than white women. Since a lot of that harm is preventable, we wanted to understand what's actually driving the gap: maternal health, healthcare access, socioeconomic conditions, or some mix of all three.",
      },
      {
        heading: 'The approach',
        body: "Our team, EquiBirth AI, is working through AI4ALL to build models that predict preterm birth from 3.5 million CDC natality records covering maternal demographics, prenatal care, and birth outcomes. We built an end-to-end pipeline comparing logistic regression, decision tree, random forest, XGBoost, and LightGBM models against each other. Everything we feed the models has to be information available before delivery, so a big part of the pipeline is making sure nothing that only exists after birth sneaks in and inflates the results.",
      },
      {
        heading: 'Fairness, not just accuracy',
        body: "A model that predicts preterm birth well but performs worse for the groups already experiencing the worst outcomes isn't actually useful. Birth outcome disparities reflect real structural inequities, so we don't want a model to launder those patterns as if they were neutral, we want to know exactly where it's falling short and for whom.",
      },
      {
        heading: 'My role',
        body: "I developed and evaluated the logistic regression model on 103 engineered pre-delivery features, and worked on the pipeline that let us compare it against the decision tree, random forest, XGBoost, and LightGBM models on equal footing. I also built the automated leakage checks that catch features that wouldn't actually be known before birth, which ended up excluding 57 post-delivery variables. Running the models without them dropped AUC-ROC from 0.93 to 0.65, a big enough gap to show that most of that earlier performance was leakage, not real signal. On the fairness side, I conducted an audit across seven racial and ethnic groups using equal opportunity, demographic parity, disparate impact, and bootstrap confidence intervals to see how consistently the model performs group by group.",
      },
      {
        heading: 'The team',
        body: "I'm working on this through AI4ALL alongside Bhavika Kothapalli, Parshv Patel, Shanghim Nadia Woo, Pramish Pandey, Andrew Pierre, and Bhavya Agarwal.",
      },
    ],
  },
]
