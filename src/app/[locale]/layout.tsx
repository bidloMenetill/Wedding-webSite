import { getMessages } from "next-intl/server";
import "../globals.css";
import { Merriweather } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
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
      <body className={`${merriweather.className} bg-black overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
