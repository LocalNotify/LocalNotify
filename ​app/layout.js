export const metadata = {
  title: 'LocalNotify',
  description: 'Solution de SMS marketing',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
} // Redéploiement Vercel

