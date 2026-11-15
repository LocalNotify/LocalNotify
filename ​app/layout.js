export const metadata = {
  title: 'LocalNotify - SMS Marketing',
  description: 'Solution de SMS marketing pour entreprises',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
