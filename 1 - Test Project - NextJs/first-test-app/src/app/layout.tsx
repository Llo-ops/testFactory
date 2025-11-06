import "./globals.css";
import "./styles/sass/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  );
}
