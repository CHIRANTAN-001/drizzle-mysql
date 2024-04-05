import { Request, Response } from "express";
import { users } from "../db/schema";
import { db } from "../db/setup";
import { eq } from "drizzle-orm";

const createUser = async (req: Request, res: Response) => {
    const { name, email }: { name: string, email: string } = req.body;

    if (!name) {
        return res
            .status(404)
            .json({ success: false, data: null, message: "Name is required" });
    }

    if (!email) {
        return res
            .status(404)
            .json({ success: false, data: null, message: "Email is required" });
    }

    try {

        const existingUser = await db.select().from(users).where(eq(users.email, email));

        if (existingUser.length) {
            return res
                .status(400)
                .json({
                    success: false,
                    data: null,
                    message: "User already exists"
                });
        }

        await db.insert(users).values({
            name: name,
            email: email
        });
        
        console.log(req.body)

        return res
            .status(201)
            .json({
                success: true,
                data: { name, email },
                message: "User created successfully"
            });
    } catch (error: any) {
        return res
            .status(500)
            .json({
                success: false,
                data: null,
                message: "Unable to add"
            });
    }

}

export default createUser;