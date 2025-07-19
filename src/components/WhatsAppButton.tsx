
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in learning more about Petluri EduTech's training programs for our institution. Could you please provide more details?"
    );
    window.open(`https://wa.me/917788990099?text=${message}`, '_blank');
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 animate-pulse"
          >
            <MessageCircle size={24} />
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 bg-brand-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat with us on WhatsApp
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
