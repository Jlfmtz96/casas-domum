import { Footer } from "@/components";
import { NavBar } from "./components/NavBar";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main>
      {/* <Slide images={images}/> */}
      <NavBar />

      <div >
          {children}
      </div>

      <Footer />

    </main>
  );
}