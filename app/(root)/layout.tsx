//Fukncjoalnosc dla MobileBara i SideBara, aby na telefonach tez ladnie chdozilo
import MobileNav from "@/components/ui/MobileNav";
import SideBar from "@/components/ui/SideBar";
import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName:'Pete', lastName: 'Dziwisz' };

  return (
    <html lang="en">
        <main className="flex h-screen w-full font-inter">
            <SideBar user={loggedIn} />
            <div className="flex size-full flex-col">
              <div className="root-layout">
                <Image src="/icons/logo.svg" width={30} height={30} alt="logo"/>
                <div>
                  <MobileNav user={loggedIn}/>
                </div>
              </div>
              {children}
            </div>          
        </main> 
    </html>
  );
}
