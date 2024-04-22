"use client";
import { Github } from "lucide-react";
import { supabaseBrowser } from "../lib/supabase/browser";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { UserIcon } from "./ui/icons";

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
        <Button className="bg-white text-gray-700 hover:text-white hover:bg-gray-700">
          <UserIcon className="w-4 h-4 mr-2" />
          Login
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col p-5 items-center gap-4">
          <Button
            onClick={() => loginWithGithub()}
            className="text-l flex gap-2 items-center"
            variant="outline"
          >
            <Github className="w-5 h-5" />
            <span>Login with github</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
