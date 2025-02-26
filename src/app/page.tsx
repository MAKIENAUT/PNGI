import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Phone, Mail, Home } from "lucide-react";

export default function CompanyProfile() {
  return (
    <div className="min-h-screen bg-slate-800 flex flex-col p-8 relative overflow-hidden">
      {/* Search Bar */}
      <div className="relative w-full max-w-4xl mx-auto mb-12">
        <div className="flex items-center rounded-full bg-white/10 border border-white/20 backdrop-blur-sm p-2 pl-4">
          <Input 
            type="text" 
            placeholder="Company Profile" 
            className="flex-grow bg-transparent border-none text-white text-lg placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-start max-w-4xl mx-auto z-10">
        <h1 className="text-white text-7xl md:text-9xl font-bold tracking-tighter mb-2 font-montserrat-sans">
          PETRO NORTH
        </h1>
        <h2 className="text-white text-2xl md:text-4xl font-light mb-16 font-montserrat-sans">
          Petroleum Importation
        </h2>
      </div>
      
      {/* Contact Info Footer */}
      <div className="mt-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 max-w-4xl mx-auto w-full z-10">
        <div className="flex items-center gap-2 text-white">
          <Phone className="h-6 w-6 text-yellow-300" />
          <span className="text-lg">+63 920 920 7247</span>
        </div>
        
        <div className="flex items-center gap-2 text-white">
          <Mail className="h-6 w-6 text-yellow-300" />
          <span className="text-lg">hello@reallygreatsite.com</span>
        </div>
        
        <div className="flex items-center gap-2 text-white">
          <Home className="h-6 w-6 text-yellow-300" />
          <span className="text-lg">Subic Bay Freeport Zone</span>
        </div>
      </div>
      
      {/* This is a placeholder for where you'll add your bubble/fluid image later */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-80 pointer-events-none">
        {/* Your bubble image will go here */}
        <Image src="/bubble-fluid.png" alt="Decorative element" width={850} height={850} />
      </div>
    </div>
  );
}