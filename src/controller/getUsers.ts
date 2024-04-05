import { Request, Response } from "express";
import { users } from "../db/schema";
import { db } from "../db/setup";

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const user = await db.select().from(users);
        return res
            .status(200)
            .json({
                success: true,
                data: user,
                message: "Users fetched successfully"
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                data: null,
                message: "Unable to fetch"
            });
    }
}

export default getAllUsers;