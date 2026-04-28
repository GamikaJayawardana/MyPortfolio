export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
}

export const certificates: CertificateItem[] = [
  {
    id: "fastapi",
    title: "Introduction to FastAPI and Backend Development Fundamentals",
    issuer: "Packt",
    date: "Issued Mar 2026",
    image: "https://media.licdn.com/dms/image/v2/D562DAQHyJ5-sj_40rQ/profile-treasury-document-images_1280/B56Z1tQ90cJkAU-/1/1775654659832?e=1778112000&v=beta&t=65wmBiFHLdHh61zHMXynY60ynS8QtAzUuPsJsWgwn8k"
  },
  {
    id: "aws-ai",
    title: "AWS AI Practitioner Challenge",
    issuer: "Udacity",
    date: "Issued Feb 2026",
    image: "https://media.licdn.com/dms/image/v2/D562DAQF419Ibo-4W3A/profile-treasury-document-images_1280/B56Z0.uy5mG8AU-/1/1774873949278?e=1778112000&v=beta&t=0pMEl0pU-OKzB-_O8dA3BEskTk_qeY56D2PbOAVWvvg"
  },
  {
    id: "aiml-stage1",
    title: "AI/ML Engineer - Stage 1",
    issuer: "SLIIT",
    date: "Issued Mar 2026",
    image: "https://media.licdn.com/dms/image/v2/D562DAQHdKlbka7Rqrg/profile-treasury-document-images_1280/B56Z07c7EZHoAU-/1/1774818932515?e=1778112000&v=beta&t=HZwZBSsllTmq5M6XC9sqNSkvXbAb6wXl1e6q2FxW8hI"
  },
  {
    id: "python-mrt",
    title: "Python Programing",
    issuer: "University of Moratuwa",
    date: "Issued Feb 2026",
    image: "https://media.licdn.com/dms/image/v2/D562DAQHY01AXWNvLSQ/profile-treasury-document-images_1280/B56Z0RAJdBJsAY-/1/1774106755903?e=1778112000&v=beta&t=jdJJHL8lBMG11W70nV1nu9GHsKLvaD7sMPL055mtr2s"
  },
  {
    id: "webdesign",
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    date: "Issued May 2025",
    image: "https://media.licdn.com/dms/image/v2/D562DAQE79FlQGrCSQw/profile-treasury-document-cover-images_800/B56ZjdHsKTIAA8-/0/1756056443037?e=1778011200&v=beta&t=u2_CZEXVuwe_Cj4RQhO4asxUQInev1OUAmaBxKN1Xsg"
  },
  {
    id: "linux",
    title: "Introduction to Linux (LFS101)",
    issuer: "The Linux Foundation",
    date: "Issued Aug 2025",
    image: "https://media.licdn.com/dms/image/v2/D562DAQF-oqpnwHp6Sg/profile-treasury-document-images_1280/B56ZjNfXgdG0AU-/1/1755794211572?e=1778112000&v=beta&t=bK0ybG-uePK_9XGFd4mnAdBql2fXxF2NncOsMjXH2AI"
  },
  {
    id: "mysql",
    title: "MySQL Implementation Certified Associate",
    issuer: "Oracle",
    date: "Issued May 2025",
    image: "https://media.licdn.com/dms/image/v2/D562DAQEThgQmVDHHDw/profile-treasury-document-images_1280/B56ZbI03JvGkAY-/1/1747126029827?e=1778112000&v=beta&t=lAXQn7FlUAD9Z_fk9VxoFQcbEzXnhcsy69YB-DcublQ"
  },
  {
    id: "python-beg",
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "Issued May 2025",
    image: "https://media.licdn.com/dms/image/v2/D562DAQEvN_L4Jo4_pA/profile-treasury-document-cover-images_480/B56Zal56JsHUAw-/0/1746540151167?e=1778011200&v=beta&t=1e_1XsGHlL1vguvnVqOz9AyO_7wmZGvaN5evNk-gEu8"
  }
];
