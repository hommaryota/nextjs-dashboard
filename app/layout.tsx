import "@/app/ui/global.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <p className="text-blue-500">aaa</p>
    </html>
  );
}
