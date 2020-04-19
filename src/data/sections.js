import {
  AiFillInstagram,
  AiFillSafetyCertificate,
  FaAward,
  FaBoxOpen,
  FaDev,
  FaSignLanguage,
  GoTools,
  IoIosDocument,
  IoIosJournal,
  MdPerson,
  MdSchool,
  MdWork,
} from "../components/Icons";

const sections = [
  { id: "about-me", title: "About Me", icon: MdPerson },
  { id: "education", title: "Education", icon: MdSchool },
  { id: "work", title: "Work", icon: MdWork },
  { id: "skills", title: "Skills", icon: GoTools },
  { id: "languages", title: "Languages", icon: FaSignLanguage },
  { id: "blog", title: "Blog", icon: IoIosJournal },
  { id: "projects", title: "Projects", icon: FaDev },
  { id: "philanthropy", title: "Philanthropy", icon: FaBoxOpen },
  { id: "achievements", title: "Achievements", icon: FaAward },
  {
    id: "certifications",
    title: "Certifications",
    icon: AiFillSafetyCertificate,
  },
  { id: "photography", title: "Photography", icon: AiFillInstagram },
  { id: "resume", title: "Resume", icon: IoIosDocument },
];

export default sections;
