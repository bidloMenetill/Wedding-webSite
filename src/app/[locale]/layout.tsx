import { getMessages } from "next-intl/server";
import "../globals.css";

import { Cormorant_Infant} from "next/font/google"
import { NextIntlClientProvider } from "next-intl";
const cormorant = Cormorant_Infant({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata = {
  title: "Камиль & Элина - Свадебный сайт",
  description: "Приглашаем на свадьбу Камиля & Элины",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) 
{
  const messages = await getMessages();
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.className} bg-black overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
