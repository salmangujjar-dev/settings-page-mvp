"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PropsWithChildren, useEffect, useState } from "react";

export function Providers({ children }: PropsWithChildren) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
