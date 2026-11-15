export const metadata = {
  title: 'LocalNotify',
  description: 'Solution de SMS marketing',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
