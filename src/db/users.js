import { v4 as uuid } from "uuid";
import dayjs from "dayjs";

const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");

export const users = [
    {
        id: uuid(),
        name: "Prakash Sakari",
        number: "1234567890",
        email: "prakashsakari@gmail.com",
        password: "Prakash@123",
        createdAt: formatDate(),
    },
    {
        id: uuid(),
        name: "Ashish Jangra",
        number: "0987654321",
        email: "ashishjangra@gmail.com",
        password: "Ashish@123",
        createdAt: formatDate(),
    },
]