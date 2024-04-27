import { User, UserData } from "../../../../domain/entities";
import { Admin } from "../models/loginSchema";
import bcrypt from "bcrypt";

export const addUser = async (data: UserData): Promise<User | null> => {
  try {
    console.log("-----+++++------", data);
    if (!data.email || !data.password || !data.username) {
      throw new Error("Username, Email, and Password are required");
    }
    
    if (data.username.trim() === "") {
      throw new Error("Username cannot be empty");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      throw new Error("Invalid email format");
    }
    if (data.password.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    }

    const existingUser: User | null = await Admin.findOne({ email: data.email });
    if (existingUser) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = new Admin({
      email: data.email,
      password: hashedPassword,
      username: data.username,
    });

    const savedUser = await newUser.save();
    
    return savedUser;
    
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
