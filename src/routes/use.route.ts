import { Router } from "express";
import createUser from "../controller/createrUser";
import getAllUsers from "../controller/getUsers";
import getUser from "../controller/getUser";


const router = Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);

export default router;