"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isLoading) {
      setIsLoading(true);
      setError("");
      
      try {
        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.ok) {
          setIsSubmitted(true);
          setEmail("");
        } else {
          // Handle specific error messages
          if (response.status === 409) {
            setError("You're already on the waitlist! 🎉");
          } else {
            setError(data.error || 'Failed to join waitlist. Please try again.');
          }
        }
      } catch (error) {
        console.error('Error joining waitlist:', error);
        setError('Network error. Please check your connection and try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-md text-center">
        <div className="rounded-2xl bg-gray-800/40 p-6 backdrop-blur-xs">
          <div className="mb-4 text-2xl">🎉</div>
          <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
            You're on the list!
          </h3>
          <p className="text-sm text-indigo-200/65">
            We'll notify you as soon as Juno is ready. Thanks for your patience!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            required
            disabled={isLoading}
            className="flex-1 rounded-xl bg-gray-800/60 px-4 py-3 text-gray-200 placeholder-gray-400 backdrop-blur-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[length:100%_100%] flex items-center gap-2 justify-center whitespace-nowrap sm:w-auto w-full"
          >
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            {isLoading ? "Joining..." : "Join Waitlist"}
          </button>
        </div>
      </form>
      
      {error && (
        <div className="mt-3 rounded-lg bg-red-900/20 border border-red-500/20 px-4 py-2 text-center">
          <p className="text-sm text-red-200">{error}</p>
        </div>
      )}
    </div>
  );
}
