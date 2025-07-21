
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import BackToTop from "@/components/ui/back-to-top";
import ExitIntentPopup, { useExitIntent } from "@/components/ui/exit-intent-popup";
import { useToast } from "@/hooks/use-toast";

const Layout = () => {
  const { showPopup, setShowPopup } = useExitIntent();
  const { toast } = useToast();

  const handlePopupSubmit = async (email: string) => {
    // Here you would integrate with your email service
    console.log('Email submitted:', email);
    toast({
      title: "Success!",
      description: "Your free guide is on its way to your inbox!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      
      {showPopup && (
        <ExitIntentPopup
          onClose={() => setShowPopup(false)}
          onSubmit={handlePopupSubmit}
        />
      )}
    </div>
  );
};

export default Layout;
