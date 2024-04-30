import { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  //title: "next.js practice ",
  title: {
    default: "default title",
    //absolute:"absolute title",
    template: "%s | sabarinathan",
  },
  description:
    "i have knowledge in react so i am learning next with code evolution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>header </h1>
          {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        </header>
        {children}
        <footer>
          <h1>footer</h1>
        </footer>
      </body>
    </html>
  );
}
