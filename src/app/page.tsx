import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import Note from "./components/note";

export default function Home() {
  return (
    <main>
      <Header />
      <Note />
      <Footer />
    </main>
  );
}
