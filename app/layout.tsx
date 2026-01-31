import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import '@/styles/globals.css';
import SiteHeader from '@/ui/SiteHeader';
import SiteFooter from '@/ui/SiteFooter';
import Sidebar from '@/ui/Sidebar';
import CustomElementsLoader from '@/ui/CustomElementsLoader';

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display'
});

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Signal Web UI',
  description: 'Documentation for the Signal Web UI component system.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-body">
        <signal-app-shell padded className="min-h-screen bg-slate-50 text-slate-900">
          <CustomElementsLoader />
          <SiteHeader />
          <div className="mx-auto flex max-w-6xl gap-0 px-0 lg:px-0">
            <Sidebar />
            <main className="flex-1 px-6 py-10">
              <signal-card padded className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
                {children}
              </signal-card>
            </main>
          </div>
          <SiteFooter />
        </signal-app-shell>
      </body>
    </html>
  );
}
