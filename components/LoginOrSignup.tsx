"use client"
import { useState } from "react";
import { supabaseBrowser } from "../lib/supabase/browser";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,

} from "./ui/dialog"
import { UserIcon } from "./ui/icons";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { toast } from "sonner";

export function SingUpDialog() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const supabase = supabaseBrowser();

    const signUpWithEmail = async () => {
        if (email.trim() || password.trim()) {

        }
        else {
            const { error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    emailRedirectTo: location.origin + "/api/auth/callback",
                },
            })
            if (!error)
                toast.message("user created");
            else
                console.error(error.message)
            setEmail("");
            setPassword("");
        }
    };

    const signUpWithGithub = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: location.origin + "/auth/callback",
            }
        })
        if (error)
            console.error(error.message);
    }


    return (
        <Dialog>
            <DialogTrigger>
                <Button className="bg-white text-gray-700 hover:text-white hover:bg-gray-700">
                    <UserIcon className="w-4 h-4 mr-2" />
                    Sign up
                </Button>
            </DialogTrigger>
            <DialogContent>
                <div className="flex items-center gap-4">
                    <div className="mx-auto space-y-6">
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold">Sign up</h1>
                            <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
                        </div>
                        <div className="mx-6 space-y-6">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <Label>Email</Label>
                                    <Input onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Email" type="email" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Password</Label>
                                    <Input onChange={(e) => setPassword(e.currentTarget.value)} placeholder="Password" type="password" />
                                </div>
                                <Button onClick={() => signUpWithEmail()} className="w-full">Sign up</Button>
                            </form>
                            <Separator />
                            <Button className="w-full" variant="outline">
                                Sign up with Google
                            </Button>
                            <Button onClick={() => signUpWithGithub()} className="w-full" variant="outline">
                                Sign up with github
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export function LoginDialog() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const supabase = supabaseBrowser();

    const signinWithGithub = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: location.origin + "/auth/callback",
            }
        })
        if (error)
            console.error(error.message);
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button className="bg-transparent text-white hover:bg-transparent hover:text-gray-400">
                    Login
                </Button>
            </DialogTrigger>
            <DialogContent>
                <div className="flex items-center gap-4">
                    <div className="mx-auto space-y-6">
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>
                            <p className="text-gray-500 dark:text-gray-400">Enter your information to login</p>
                        </div>
                        <div className="mx-6 space-y-6">
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input placeholder="Email" type="email" />
                            </div>
                            <div className="space-y-2">
                                <Label>Password</Label>
                                <Input placeholder="Password" type="password" />
                            </div>
                            <Button className="w-full">Login</Button>
                            <Separator />
                            <Button onClick={() => signinWithGithub()} className="w-full" variant="outline">
                                Login with github
                            </Button>
                            <Button className="w-full" variant="outline">
                                Login with Google
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}