export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  date: string;
  points: string[];
}

export const education: EducationItem[] = [
  {
    id: "bsc",
    degree: "Bachelor of Science (Hons) in Electronics and Computer Science",
    institution: "University of Kelaniya",
    date: "July 2023 - Present",
    points: [
      "Double Major in Electronics and Computer Science",
      "Current GPA: 3.51",
    ],
  },
  {
    id: "english",
    degree: "Diploma in English",
    institution: "Sabaragamuwa University of Sri Lanka",
    date: "Jan 2021 - Dec 2022",
    points: [],
  },
  {
    id: "gce",
    degree: "General Certificate of Education",
    institution: "Sivali Central College - Ratnapura",
    date: "July 2023 - Present",
    points: [
      "G.C.E. Advanced Level: Secured a District Rank of 115 with an ABC result profile.",
      "G.C.E. Ordinary Level: Graduated with a perfect record of 9 Distinctions (A9).",
    ],
  },
];
