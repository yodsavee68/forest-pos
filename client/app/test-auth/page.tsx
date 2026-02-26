"use client";
import { useState } from "react";
import { loginAdmin, getCurrentAdmin, logoutAdmin, getAdminToken } from "../../lib/auth";

export default function TestAuth() {
    const [result, setResult] = useState<any>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const res = await loginAdmin(formData);
        setResult({ action: "login", res });
    };

    const handleGetCurrent = async () => {
        const res = await getCurrentAdmin();
        setResult({ action: "getCurrentAdmin", res });
    };

    const handleLogout = async () => {
        const res = await logoutAdmin();
        setResult({ action: "logoutAdmin", res });
    };

    const handleGetToken = async () => {
        const res = await getAdminToken();
        setResult({ action: "getAdminToken", res });
    };

    return (
        <div className="p-8 font-sans">
            <h1 className="text-2xl font-bold mb-4">Auth Test</h1>

            <form onSubmit={handleLogin} className="space-y-4 border rounded p-4 mb-4 max-w-sm">
                <h2 className="font-bold text-lg">Login Admin</h2>
                <div>
                    <input name="username" placeholder="Username" className="border rounded p-2 w-full" defaultValue="admin" />
                </div>
                <div>
                    <input name="password" placeholder="Password" type="password" className="border rounded p-2 w-full" defaultValue="admin" />
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 w-full">Login</button>
            </form>

            <div className="space-x-2 mb-4">
                <button onClick={handleGetCurrent} className="bg-green-600 hover:bg-green-700 text-white rounded px-4 py-2">Get Current Admin</button>
                <button onClick={handleGetToken} className="bg-yellow-600 hover:bg-yellow-700 text-white rounded px-4 py-2">Get Token</button>
                <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white rounded px-4 py-2">Logout</button>
            </div>

            <div className="border rounded p-4 bg-gray-50 min-h-32 max-w-2xl overflow-auto">
                <h3 className="font-bold mb-2">Result:</h3>
                <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(result, null, 2)}</pre>
            </div>
        </div>
    );
}
