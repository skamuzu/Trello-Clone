import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="  min-h-screen bg-[radial-gradient(circle_at_center,rgba(135,206,235,0.4),transparent_70%)]">
      <Navbar />
      <main className="pt-40 pb-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
