export const metadata = {
  title: "next.js practice ",
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
        </header>
        {children}
        <footer>
          <h1>footer</h1>
        </footer>
      </body>
    </html>
  );
}
