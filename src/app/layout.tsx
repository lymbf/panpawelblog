import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import MaxWidthWrapper from "@/components/UI/wrappers/MaxWidthWrapper";
import {cn} from "@/lib/utils";
import useInit from "@/application/init";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Pan Paweł Blog Osobisty",
    description: "Blog Pan Paweł to moje osobiste miejsce, dla archiwizacji swoich myśli / badań / tekstów",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    useInit();
    return (
        <html lang="en">
            <body className={cn('font min-h-screen flex flex-col text-foreground')}>
                 <Header/>
                 <main className={'flex flex-row justify-center w-full'}>
                     <MaxWidthWrapper className={''}>
                         {children}
                     </MaxWidthWrapper>
                 </main>
                <Footer/>
             </body>
        </html>
    );
}
