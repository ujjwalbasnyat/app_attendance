import Header from "@/components/header";
import Footer from "@/components/footer";
import Herosection from "@/components/herosection";
import AdminPanel from "@/components/cards/adminpanel";

export default function Home() {
  return (
    <div>
      <Header/>
      <AdminPanel/>
      <Herosection/>
      <Footer/>
    </div>
  );
}
