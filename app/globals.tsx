// app/globals.tsx or utils/globals.ts (recommended to place in utils)
export const onlyNumber = (e: React.FormEvent<HTMLInputElement>) => {
  const value = e.currentTarget.value;
  const cleaned = value.replace(/[^0-9]/g, ''); // remove all non-digits
  e.currentTarget.value = cleaned;
};

export {};

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}
