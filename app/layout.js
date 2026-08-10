export const metadata = {
  title: "Save the Date",
  description: "Invitation électronique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
