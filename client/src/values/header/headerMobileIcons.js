import {
    faCar,
    faCouch,
    faDog,
    faGraduationCap,
    faHouseUser,
    faSearch,
    faSuitcase,
    faTree,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default [
    {
        value: 'נדל"ן',
        icon: <FontAwesomeIcon icon={faHouseUser} />,
    },
    {
        value: "רכב",
        icon: <FontAwesomeIcon icon={faCar} />,
    },
    {
        value: "יד שנייה",
        icon: <FontAwesomeIcon icon={faCouch} />,
    },
    {
        value: "עסקים למכירה",
        icon: <FontAwesomeIcon icon={faSuitcase} />,
    },
    {
        value: "דרושים IL",
        icon: <FontAwesomeIcon icon={faSearch} />,
    },
    {
        value: "חיות מחמד",
        icon: <FontAwesomeIcon icon={faDog} />,
    },
    {
        value: "תיירות ונופש",
        icon: <FontAwesomeIcon icon={faTree} />,
    },
    {
        value: "לימודים",
        icon: <FontAwesomeIcon icon={faGraduationCap} />,
    },
];
