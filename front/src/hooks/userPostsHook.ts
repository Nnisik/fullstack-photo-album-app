import {useState} from "react";
import {getAllUserPosts} from "../services/apiUserGallery.ts";
import {TEST_USER} from "../utils/constants/testUserData.ts";

export const [posts, getPosts]:any[] = useState(getAllUserPosts(TEST_USER.id))