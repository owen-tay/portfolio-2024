import { Comfortaa
} from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Comfortaa
({ subsets: ["latin"] });

export const metadata = {
  title: "Owen Taylor | Frontend Web Developer",
  description: "Glasgow based Frontend Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Owen Taylor | Frontend Web Developer</title>
        <meta name="description" content="Glasgow based Frontend Web Developer" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
