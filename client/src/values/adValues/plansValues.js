import {
    faCheck,
    faCrown,
    faTimes,
    faShekelSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const checkIcon = <FontAwesomeIcon icon={faCheck} />;
const shekels = <FontAwesomeIcon icon={faShekelSign} />;

const plans = [
    {
        title: "בסיסי",
        image: "https://assets.yad2.co.il/personal/images/payment/rocketShip_Free.png",
        details: [
            { icon: checkIcon, text: "מודעה רגילה בצבע אפור" },
            {
                icon: <FontAwesomeIcon icon={faTimes} />,
                text: "הקפצה אוטומטית לחסכון בזמן",
                weak: true,
            },
        ],
        button: "חינם / 120 ימים",
    },
    {
        title: "VIP",
        recommended: <FontAwesomeIcon icon={faCrown} />,
        image: "https://assets.yad2.co.il/personal/images/payment/rocketShip_VIP.png",
        details: [
            {
                icon: checkIcon,
                text: "מודעה מודגשת בצבע צהוב",
            },
            {
                icon: checkIcon,
                text: "הקפצה אוטומטית לחיסכון בזמן",
            },
            {
                icon: checkIcon,
                text: "מופיעה מעל מודעות אפורות וורודות",
            },
        ],
        button: { number: 199, icon: shekels, days: "28 ימים" },
    },
    {
        title: "מודגשת",
        image: "https://assets.yad2.co.il/personal/images/payment/rocketShip_Bold.png",
        details: [
            {
                icon: checkIcon,
                text: "מודעה בצבע ורוד",
            },
            {
                icon: checkIcon,
                text: "הקפצה אוטומטית לחיסכון בזמן",
            },
        ],
        button: { number: 99, icon: shekels, days: "28 ימים" },
    },
];

export default plans;
