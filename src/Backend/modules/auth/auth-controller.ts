import { Request, Response } from "express";
import * as UserService from "./auth-service";
import { serializeUserAsJSON } from "./utils/auth-serializer";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  const { name, phoneNumber, email, password } = req.body;
  try {
    const user = await UserService.createUser(
      name,
      phoneNumber,
      email,
      password
    );
    const serializedUser = serializeUserAsJSON(user);
    res.status(201).send({ message: "User created", user: serializedUser });
  } catch (error) {
    res.status(500).send({ message: "Error creating user" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.findUserByEmail(email);
    if (!user) {
      return res.status(401).send({ message: "User not found" });
    }
    if (password !== user.password) {
      console.log("Incorrect password");
      return res
        .status(401)
        .json({ message: "Incorrect Password, try again." });
    }
    const serializedUser = serializeUserAsJSON(user);

    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      return res.status(500).send({ message: "JWT_SECRET not set" });
    }
    const token = jwt.sign({ userId: user.id }, secretKey, {
      expiresIn: "24h",
    });

    res.status(200).send({
      message: "Logged in successfully",
      user: serializedUser,
      token: token,
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send({ message: "Login failed" });
  }
};
