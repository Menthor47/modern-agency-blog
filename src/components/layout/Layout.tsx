
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
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="flex-1" role="main" aria-label="Main content">
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
