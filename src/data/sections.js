import {
  AiFillInstagram,
  AiFillSafetyCertificate,
  FaAward,
  FaBoxOpen,
  FaDev,
  FaInfoCircle,
  FaPaintBrush,
  FaSignLanguage,
  GoTools,
  IoIosDocument,
  IoIosJournal,
  IoIosPaperPlane,
  MdMusicNote,
  MdPerson,
  MdSchool,
  MdWork,
} from "../components/Icons";

const sections = [
  { id: "about-me", title: "About Me", icon: MdPerson },
  { id: "work", title: "Work", icon: MdWork },
  { id: "education", title: "Education", icon: MdSchool },
  { id: "skills", title: "Skills", icon: GoTools },
  { id: "projects", title: "Projects", icon: FaDev },
  { id: "blog", title: "Blog", icon: IoIosJournal },
  { id: "languages", title: "Languages", icon: FaSignLanguage },
  { id: "achievements", title: "Achievements", icon: FaAward },
  {
    id: "certifications",
    title: "Certifications",
    icon: AiFillSafetyCertificate,
  },
  { id: "philanthropy", title: "Philanthropy", icon: FaBoxOpen },
  { id: "photography", title: "Photography", icon: AiFillInstagram },
  { id: "music", title: "Music", icon: MdMusicNote },
  { id: "design", title: "Design", icon: FaPaintBrush },
  { id: "resume", title: "Resume", icon: IoIosDocument },
  { id: "contact", title: "Contact", icon: IoIosPaperPlane },
  { id: "footer", title: "About RotW", icon: FaInfoCircle },
];

export default sections;
