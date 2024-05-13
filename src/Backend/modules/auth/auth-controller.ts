import { Request, Response } from "express";
import * as UserService from "./auth-service";
import { serializeUserAsJSON } from "./utils/auth-serializer";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  const { name, phoneNumber, email, role, password } = req.body;
  try {
    const user = await UserService.createUser(
      name,
      phoneNumber,
      email,
      role,
      password
    );
    const serializedUser = serializeUserAsJSON(user);
    console.log("🚀 ~ signup ~ serializedUser:", serializedUser);
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
    console.log("🚀 ~ login ~ serializedUser:", serializedUser);

    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      return res.status(500).send({ message: "JWT_SECRET not set" });
    }
    const token = jwt.sign({ userId: user.id }, secretKey, {
      expiresIn: "24h",
    });
    console.log(token, "token");
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

export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  console.log("🚀 ~ getUser ~ userId:", userId);
  try {
    const user = await UserService.getUserInfo(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const serializedUser = serializeUserAsJSON(user);
    res.status(200).send({ user: serializedUser });
  } catch (error) {
    res.status(500).send({ message: "Failed to retrieve user information" });
  }
};

export const ignoreDonation = async (req: Request, res: Response) => {
  const { donationId } = req.params;
  const userId = req.user.userId;
  try {
    const user = await UserService.getUserInfo(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const updatedIgnoredDonations = new Set([
      ...(user.ignoredDonations || []),
      donationId,
    ]);
    const updatedUser = await UserService.updateIgnoredDonations(
      userId,
      Array.from(updatedIgnoredDonations)
    );
    const serializedUser = serializeUserAsJSON(updatedUser);
    res.status(200).send({ user: serializedUser });
  } catch (error) {
    res.status(500).send({ message: "Failed to ignore donation" });
  }
};

export const updateIgnoredDonations = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const { donations } = req.body;
  try {
    const updatedUser = await UserService.updateIgnoredDonations(
      userId,
      donations
    );
    if (!updatedUser) {
      return res.status(404).send({ message: "User not found" });
    }
    const serializedUser = serializeUserAsJSON(updatedUser);
    res.status(200).send({ user: serializedUser });
  } catch (error) {
    res.status(500).send({ message: "Failed to update ignored donations" });
  }
};
