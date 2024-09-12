import { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

import ThemeProvider from '@/hooks/theme-context';
import { Toaster } from 'react-hot-toast';
import SwitchTheme from '@/components/switch-theme';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
	title: 'portfolio ~ barbaraeguche',
	description: 'My Portfolio'
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" className="!scroll-smooth">
	        <head>
		        <link href="https://fonts.googleapis.com/css2?family=Shalimar&display=swap" rel="stylesheet"/>
		        <link href="https://fonts.googleapis.com/css2?family=Judson" rel="stylesheet"/>
	        </head>
	        <body className="m-0 p-0 box-border font-serif">
		        <ThemeProvider>
			        <Header/>
			        {children}
			        <Toaster position='top-right'/>
	                <Footer/>
	                {/*<SwitchTheme/>*/}
                </ThemeProvider>
            </body>
        </html>
    );
};