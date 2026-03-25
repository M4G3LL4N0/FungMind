"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const supabase = createClient();
    const { error } = await supabase
      .from("waitlist_signups")
      .insert([{ email }]);

    if (error) {
      setMessage("Error joining waitlist. Please try again.");
    } else {
      setMessage("Thank you! You're now on the waitlist.");
      setEmail("");
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-2 rounded-lg bg-zinc-900 text-zinc-100 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-400 to-teal-500 text-black font-medium hover:opacity-90 transition-opacity"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </button>
      </div>
      {message && (
        <p className="mt-2 text-sm text-zinc-400">{message}</p>
      )}
    </form>
  );
}
