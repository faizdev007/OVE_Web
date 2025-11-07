export async function executeRecaptcha(action: string): Promise<string | null> {
  if (typeof window === "undefined") return null;

  try {
    await new Promise<void>((resolve) => window.grecaptcha.ready(resolve));

    const token = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
      { action }
    );

    return token;
  } catch (err) {
    console.error("reCAPTCHA failed:", err);
    return null;
  }
}
