import { Request, Response } from "express";
import { users } from "../db/schema";
import { db } from "../db/setup";
import { eq } from "drizzle-orm";

const getUser = async (req: Request, res: Response) => { 
    const userId = req.params.id;

    try {
        const user = await db.select().from(users).where(eq(users.id, Number(userId)));
        if (!user) {
            return res
                .status(404)
                .json({
                    success: false,
                    data: null,
                    message: "User not found"
                });
        }
        return res
            .status(200)
            .json({
                success: true,
                data: user,
                message: "User fetched successfully"
            });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({
                success: false,
                data: null,
                message: "Unable to fetch"
            });
    }
}

export default getUser;