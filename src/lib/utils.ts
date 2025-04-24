import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import jwt from "jsonwebtoken";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTokenPayloadFromCookie(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET!) as {
    userId: string;
    email: string;
    role?: string;
  };
}