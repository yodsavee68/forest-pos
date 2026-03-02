"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";
const TOKEN_KEY = "admin_access_token";

export async function loginAdmin(formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
        return { error: "Username and password are required" };
    }

    try {
        const response = await fetch(`${API_URL}/admin/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return { error: errorData.detail || "Invalid credentials" };
        }

        const data = await response.json();

        // Set the token inside cookies
        const cookieStore = await cookies();
        cookieStore.set(TOKEN_KEY, data.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return { success: true };
    } catch (error) {
        console.error("Login Error:", error);
        return { error: "An error occurred during login" };
    }
}

export async function logoutAdmin() {
    const cookieStore = await cookies();
    cookieStore.delete(TOKEN_KEY);
    return { success: true };
}

export async function getCurrentAdmin() {
    const cookieStore = await cookies();
    const token = cookieStore.get(TOKEN_KEY)?.value;

    if (!token) {
        return null;
    }

    try {
        const response = await fetch(`${API_URL}/admin/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            // Important to skip cache for user specific data
            cache: "no-store"
        });

        if (!response.ok) {
            // If token is invalid, you might want to remove it
            if (response.status === 401) {
                cookieStore.delete(TOKEN_KEY);
            }
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error("GetCurrentAdmin Error:", error);
        return null;
    }
}

export async function getAdminToken() {
    const cookieStore = await cookies();
    return cookieStore.get(TOKEN_KEY)?.value;
}
