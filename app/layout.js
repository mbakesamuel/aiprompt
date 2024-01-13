import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Provider from "@components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "next-auth-google",
  description: "this is my prompt application",
};

const RootLayout = async ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
