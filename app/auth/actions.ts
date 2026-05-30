"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function safeNext(formData: FormData) {
  const next = String(formData.get("next") ?? "/");
  return next.startsWith("/") && !next.startsWith("//") ? next : "/";
}

function authRedirect(message: string, next: string) {
  const params = new URLSearchParams({ message, next });
  redirect(`/auth?${params.toString()}`);
}

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const next = safeNext(formData);
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    authRedirect(error.message, next);
  }

  revalidatePath("/", "layout");
  redirect(next);
}

export async function signUp(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const next = safeNext(formData);
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}${next}`,
    },
  });

  if (error) {
    authRedirect(error.message, next);
  }

  authRedirect("Check your email to confirm your Ride4Ride account.", next);
}
