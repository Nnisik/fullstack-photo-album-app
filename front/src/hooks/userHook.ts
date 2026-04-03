import {User} from "../types/User.ts";
import {useState} from "react";
import {TEST_USER} from "../utils/constants/testUserData.ts";

export const [user, setUser]:User = useState(TEST_USER);