import kingsLogo from "../assets/kingsLogo.webp";
import lioneerLogo from "../assets/lioneersLogo.webp";
import leopardsLogo from "../assets/leopardsLogo.webp";
import deaLogo from "../assets/deaLogo.webp";
import aquaLogo from "../assets/aquasLogo.webp";
import dreamersLogo from "../assets/dreamersLogo.webp";
import marsLogo from "../assets/marsLogo.webp";
import ad from "../assets/ad.png";
import aiska from "../assets/aiska.png";
import crager from "../assets/crager.png";
import croma from "../assets/croma.png";
import nully from "../assets/nully.png";
import sunny from "../assets/sunny.png";
import wo from "../assets/wo.png";

export const teamColorMap = {
  [lioneerLogo]: "bg-purple-400",
  [kingsLogo]: "bg-yellow-200",
  [leopardsLogo]: "bg-green-400",
  [deaLogo]: "bg-yellow-400",
  [aquaLogo]: "bg-blue-400",
  [dreamersLogo]: "bg-green-300",
  [marsLogo]: "bg-red-400",
};

export const PlayerScoreData = [
  {
    photo: nully,
    player: {
      name: "努利",
      backnumber: "#1",
    },
    team: lioneerLogo,
    average: "35.8",
  },
  {
    photo: croma,
    player: {
      name: "克羅馬",
      backnumber: "#24",
    },
    team: leopardsLogo,
    average: "25.5",
  },
  {
    photo: wo,
    player: {
      name: "沃許本",
      backnumber: "#42",
    },
    team: kingsLogo,
    average: "19.7",
  },
  {
    photo: aiska,
    player: {
      name: "艾斯卡",
      backnumber: "#42",
    },
    team: deaLogo,
    average: "19.0",
  },
  {
    photo: crager,
    player: {
      name: "克雷格",
      backnumber: "#3",
    },
    team: aquaLogo,
    average: "19.0",
  },
  {
    photo: sunny,
    player: {
      name: "桑尼",
      backnumber: "#31",
    },
    team: kingsLogo,
    average: "18.8",
  },
  {
    photo: ad,
    player: {
      name: "艾德",
      backnumber: "#1",
    },
    team: aquaLogo,
    average: "50",
  },
];
