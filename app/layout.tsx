import Footer from '../components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Title from Root Layout</title>
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
