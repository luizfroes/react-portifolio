import LinearProgress from "@mui/material/LinearProgress";
import { useEffect } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { GrMysql, GrGraphQl } from "react-icons/gr";
import { SiMongodb, SiBootstrap } from "react-icons/si";

const skills = [
  {
    id: "1",
    icon: <FaHtml5 />,
    skill: "HTML5",
    percentage: "90%",
  },
  {
    id: "2",
    icon: <FaCss3 />,
    skill: "CSS3",
    percentage: "80%",
  },
  {
    id: "3",
    icon: <FaJsSquare />,
    skill: "JAVASCRIPT",
    percentage: "70%",
  },
  {
    id: "4",
    icon: <FaReact />,
    skill: "REACT",
    percentage: "80%",
  },
  {
    id: "5",
    icon: <FaNodeJs />,
    skill: "NODE.JS",
    percentage: "90%",
  },
  {
    id: "5",
    icon: <GrMysql />,
    skill: "MySQL",
    percentage: "90%",
  },
  {
    id: "5",
    icon: <SiMongodb />,
    skill: "MongoDB",
    percentage: "90%",
  },
  {
    id: "5",
    icon: <GrGraphQl />,
    skill: "GraphQL",
    percentage: "90%",
  },
  {
    id: "5",
    icon: <SiBootstrap />,
    skill: "BootStrap",
    percentage: "90%",
  },
  {
    id: "5",
    icon: <FaGithub />,
    skill: "  GitHub",
    percentage: "90%",
  },
];

export const Skills = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <LinearProgress
      sx={{ mt: "5rem" }}
      color="primary"
      value={30}
      valueBuffer={100}
      variant="determinate"
    />
  );
};

export default Skills;
