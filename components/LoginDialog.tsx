"use client";
import { Github } from "lucide-react";
import { supabaseBrowser } from "../lib/supabase/browser";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { GoogleIcon, UserIcon } from "./ui/icons";
import { toast } from "sonner";

export function LoginDialog() {
  const supabase = supabaseBrowser();

  const loginWithGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
    if (error) console.error(error.message);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button size="sm"  className="bg-white text-sm sm:text-md text-gray-700 hover:text-white hover:bg-gray-700">
          <UserIcon className="w-4 h-4 mr-2" />
          Login
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col p-5 items-center gap-4">
          <p className="font-bold mb-5 text-2xl">Login</p>
          <p className="self-start">Login with github:</p>
          <Button
            onClick={() => loginWithGithub()}
            className="text-l w-full text-lg font-normal flex gap-2 items-center"
            variant="outline"
          >
            <Github className="w-5.5 h-5.5 stroke-1" />
            <span>Github</span>
          </Button>
          <p className="self-start">Login with google:</p>
          <Button
            onClick={() => toast.info("Not available yet.")}
            className="text-l w-full text-lg font-normal flex gap-2 items-center"
            variant="outline"
          >
            <GoogleIcon className="w-5 h-5" />
            <span>Google</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}