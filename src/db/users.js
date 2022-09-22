import { v4 as uuid } from "uuid";
import dayjs from "dayjs";

const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");

export const users = [
    {
        id: uuid(),
        name: "Prakash Sakari",
        number: "8928xxxxxx",
        email: "ps@gmail.com",
        password: "Prakash@123",
        createdAt: formatDate(),
    },
    {
        id: uuid(),
        name: "Ashish Jangra",
        number: "7015xxxxxx",
        email: "aj@gmail.com",
        password: "Ashish@123",
        createdAt: formatDate(),
    },
]