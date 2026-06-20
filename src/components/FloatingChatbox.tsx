import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Zap, MessageCircle, Phone, ArrowLeft, Send } from "lucide-react";

type ChatState = "unopened" | "selector" | "chat";
type Platform = "messenger" | "whatsapp" | "viber";

interface ChatMessage {
  id: string;
  sender: "agent" | "user";
  text: string;
  timestamp: string;
}

interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export default function FloatingChatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatState, setChatState] = useState<ChatState>("unopened");
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [showNotification, setShowNotification] = useState(true);
  
  // Lead submission persistence
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll chat viewport
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, chatState, isFormSubmitted]);

  // Open the Horizontal Roll-Out Selector row (State 2)
  const handleOpenSelector = () => {
    setIsOpen(true);
    setChatState("selector");
    if (showNotification) {
      setShowNotification(false);
    }
  };

  // Close back to unopened State 1
  const handleCloseAll = () => {
    setIsOpen(false);
    setChatState("unopened");
    setSelectedPlatform(null);
  };

  // Transition into Active Live Chat Box (State 3)
  const handleSelectPlatform = (platform: Platform) => {
    setSelectedPlatform(platform);
    setChatState("chat");

    if (isFormSubmitted) {
      initiateLiveChat(platform, formData.fullName, formData.message);
    }
  };

  // Return to state 2 menu options
  const handleBackToSelector = () => {
    setChatState("selector");
    setSelectedPlatform(null);
  };

  /**
   * BACKEND INTEGRATION CALLBACKS
   * These provide simple, clean, ready-to-hook slots where developers can map
   * Meta Graph APIs, Twilio message senders, socket events, or Salesforce pipelines.
   */
  const handleFormSubmission = (data: LeadFormData) => {
    console.log("[Zeke CRM System Link] Lead intake form registered:", data);
    // Placeholder command triggered during form dispatch
    // Examples:
    // fetch('/api/crm/lead', { method: 'POST', body: JSON.stringify(data) });
  };

  const pushLiveChatMessage = (text: string, sender: "agent" | "user") => {
    console.log(`[Zeke Chat Logger Stream] Push Message -> ${sender}: "${text}"`);
    // Placeholder command triggered during user message dispatch or simulated response
    // Examples:
    // socket.emit('chatMessage', { text, sender });
  };

  const initiateLiveChat = (platform: Platform, name: string, initialInquiry: string) => {
    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const platformLabel = platform === "messenger" ? "Messenger" : platform === "whatsapp" ? "WhatsApp" : "Viber";
    
    const initialGreetings: ChatMessage[] = [
      {
        id: "greet-1",
        sender: "agent",
        text: `Welcome inside the Zeke Realty & Construction support framework, ${name}. Direct line verified.`,
        timestamp: timeString,
      },
      {
        id: "greet-2",
        sender: "agent",
        text: `Our engineers and planners have received your inquiry: "${initialInquiry || "No initial scope specified."}"`,
        timestamp: timeString,
      },
      {
        id: "greet-3",
        sender: "agent",
        text: `You have chosen ${platformLabel} gateway dispatch. You can continue sending messages securely on-site or hand over to the physical device.`,
        timestamp: timeString,
      },
    ];
    setMessages(initialGreetings);

    // Initial logs
    initialGreetings.forEach(msg => pushLiveChatMessage(msg.text, msg.sender));
  };

  // Submit Lead Intake Flow (Phase A -> Phase B)
  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !selectedPlatform) return;

    setIsFormSubmitted(true);
    initiateLiveChat(selectedPlatform, formData.fullName, formData.message);

    // Call placeholder CRM integration hook
    handleFormSubmission(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // On-Site Chat Loop (Phase B)
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !selectedPlatform) return;

    const currentText = inputText.trim();
    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const userMessage: ChatMessage = {
      id: Math.random().toString(36).substring(7),
      sender: "user",
      text: currentText,
      timestamp: timeString,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");

    // Dispatch webhook trigger
    pushLiveChatMessage(currentText, "user");

    // Dynamic simulated high-end replies
    setTimeout(() => {
      const responseTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const systemMessageText = `Acknowledged, ${formData.fullName || "User"}. Your update has been synced into our central planning grid. If you prefer offline notifications, hit the hand-off link above to switch directly into the native app.`;
      const systemMessage: ChatMessage = {
        id: Math.random().toString(36).substring(7),
        sender: "agent",
        text: systemMessageText,
        timestamp: responseTime,
      };
      setMessages((prev) => [...prev, systemMessage]);
      pushLiveChatMessage(systemMessageText, "agent");
    }, 1500);
  };

  // Dynamic header styles and hand-off endpoints
  const getPlatformDetails = () => {
    switch (selectedPlatform) {
      case "messenger":
        return {
          headerBg: "bg-[#0084FF]", // Messenger Official Blue
          brandName: "Messenger",
          icon: <Zap className="w-4 h-4 text-white fill-white" />,
          handOffUrl: "https://m.me/zekerealtyconstructiondevelopment",
        };
      case "whatsapp":
        return {
          headerBg: "bg-[#25D366]", // WhatsApp official green
          brandName: "WhatsApp",
          icon: <MessageCircle className="w-4 h-4 text-white fill-white" />,
          handOffUrl: `https://wa.me/639068374150?text=${encodeURIComponent(formData.message || "Hello Zeke Realty & Construction Development team!")}`,
        };
      case "viber":
        return {
          headerBg: "bg-[#7360F2]", // Viber brand purple / crimson red fallback
          brandName: "Viber",
          icon: <Phone className="w-4 h-4 text-white fill-white" />,
          handOffUrl: "viber://chat?number=%2B639068374150",
        };
      default:
        return {
          headerBg: "bg-industrial-black",
          brandName: "Assistance Desk",
          icon: <MessageSquare className="w-4 h-4 text-white" />,
          handOffUrl: "#",
        };
    }
  };

  const platformInfo = getPlatformDetails();

  // Animation variants representing leftward horizontal "roll-out" from the main trigger button
  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 22 
      } 
    },
    exit: { 
      opacity: 0, 
      x: 10, 
      transition: { 
        duration: 0.15 
      } 
    },
  };

  return (
    <div 
      id="floating-chatbox" 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      {/* Container holding either the option row + anchor button OR just trigger */}
      <div className="relative flex items-center justify-end select-none">
        
        {/* STATE 2: HORIZONTAL "ROLL-OUT" SELECTOR MENU (Aligns left of anchor button) */}
        <AnimatePresence>
          {isOpen && chatState === "selector" && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center gap-3 pr-3 overflow-hidden"
            >
              {/* Button 1: Close Button (X) - Light purple background circle */}
              <motion.button
                variants={childVariants}
                onClick={handleCloseAll}
                className="w-12 h-12 rounded-full bg-[#eddfff] text-[#7C3AED] hover:bg-[#dfcbfc] shadow-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 duration-200 border border-[#7C3AED]/10 focus:outline-none"
                title="Minimize menu"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Button 2: Messenger Circle Button (Teal / Brand Blue) */}
              <motion.button
                variants={childVariants}
                onClick={() => handleSelectPlatform("messenger")}
                className="w-12 h-12 rounded-full bg-[#14B8A6] text-white shadow-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 duration-200 focus:outline-none"
                title="Connect via Facebook Messenger"
              >
                <Zap className="w-5 h-5 fill-white" />
              </motion.button>

              {/* Button 3: WhatsApp Circle Button (WhatsApp Green) */}
              <motion.button
                variants={childVariants}
                onClick={() => handleSelectPlatform("whatsapp")}
                className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 duration-200 focus:outline-none"
                title="Connect via WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </motion.button>

              {/* Button 4: Viber Circle Button (Zeke Brand Construction Red) */}
              <motion.button
                variants={childVariants}
                onClick={() => handleSelectPlatform("viber")}
                className="w-12 h-12 rounded-full bg-[#C8102E] text-white shadow-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 duration-200 focus:outline-none"
                title="Connect via Viber"
              >
                <Phone className="w-5 h-5 fill-white" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STATE 1: MAIN ANCHOR BUTTON (Fixed bottom-right corner) */}
        <button
          onClick={isOpen ? handleCloseAll : handleOpenSelector}
          id="chatbox-trigger"
          className="relative w-14 h-14 rounded-full bg-[#111111] border border-white/10 hover:border-industrial-red/50 shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none z-10"
          aria-label="Toggle Support Options"
        >
          {isOpen && (
            <span className="absolute inset-0 rounded-full border border-industrial-red/40 animate-pulse pointer-events-none" />
          )}

          {/* Alarm Ring notification when unopened */}
          {showNotification && !isOpen && (
            <span className="absolute inset-0 rounded-full bg-industrial-red/20 animate-ping pointer-events-none" />
          )}

          {isOpen ? (
            <X className="w-6 h-6 text-industrial-red" />
          ) : (
            <MessageSquare className="w-6 h-6 text-white" />
          )}

          {/* Overlapping top-right number notifier */}
          {showNotification && !isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C8102E] flex items-center justify-center shadow-lg border border-[#111111]"
            >
              <span className="text-[10px] font-mono font-black text-white leading-none">
                1
              </span>
            </motion.div>
          )}
        </button>
      </div>

      {/* STATE 3: EMBEDDED PERSISTENT LIVE CHAT WINDOW (Renders above State 1 Button Anchor) */}
      <AnimatePresence>
        {chatState === "chat" && selectedPlatform && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 35, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 23 }}
            className="absolute bottom-20 right-0 w-[325px] sm:w-[360px] h-[500px] max-h-[500px] bg-[#111111] border border-white/10 shadow-2xl flex flex-col overflow-hidden text-white rounded-none select-text z-20"
            style={{ originY: 1, originX: 1 }}
          >
            {/* Dynamic Adaptable Header */}
            <div className={`p-4 flex items-center justify-between shadow-md ${platformInfo.headerBg} transition-all duration-300`}>
              <div className="flex items-center space-x-2.5">
                {/* Return command */}
                <button
                  onClick={handleBackToSelector}
                  className="p-1 rounded bg-black/10 hover:bg-black/20 text-white transition-colors cursor-pointer focus:outline-none"
                  title="Back to options"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center space-x-1.5">
                  {platformInfo.icon}
                  <span className="font-display font-black text-[11px] sm:text-[12px] uppercase tracking-widest text-white leading-none">
                    Zeke {platformInfo.brandName} Gateway
                  </span>
                </div>
              </div>

              {/* Force Close Widget */}
              <button
                onClick={handleCloseAll}
                className="text-white/80 hover:text-white p-1 rounded hover:bg-black/10 transition-colors cursor-pointer focus:outline-none"
                title="Minimize panel"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Custom Technical Visual Overlay */}
            <div className="bg-[#0c0c0e] px-4 py-2 border-b border-white/5 flex items-center justify-between font-mono">
              <span className="text-[8px] tracking-widest text-zinc-500 uppercase">
                CHANNEL VERIFICATION: COMPLETED
              </span>
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
            </div>

            {/* Phase C - Sticky Switch Banner */}
            <div className="bg-[#1A1A1E] border-b border-white/10 px-4 py-2.5 flex items-center justify-between text-xs font-sans text-zinc-300">
              <span className="flex items-center gap-1 font-medium text-[11px]">
                Prefer the App?
              </span>
              <a
                href={platformInfo.handOffUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#C8102E] hover:text-red-400 uppercase tracking-widest text-[9px] transition-colors"
              >
                <span>Switch to Official {platformInfo.brandName}</span>
                <ArrowLeft className="w-2.5 h-2.5 rotate-180" />
              </a>
            </div>

            {/* WINDOW BODY VIEWS */}
            {!isFormSubmitted ? (
              /* Phase A - Intake Lead Capture Form (Fully sharp corners, Zeke industrial design) */
              <form
                onSubmit={handleLeadSubmit}
                className="flex-1 overflow-y-auto p-5 bg-[#0a0a0c] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <p className="text-[11px] font-sans tracking-wide text-zinc-400 leading-relaxed uppercase border-l-2 border-[#C8102E] pl-2.5 mb-2">
                    Please provide your contact specifications to securely register of your live chat session.
                  </p>

                  <div className="space-y-1">
                    <label className="block text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full text-xs px-3 py-2.5 bg-[#111111] border border-white/10 rounded-none text-white focus:outline-none focus:border-[#C8102E] transition-colors font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jane@example.com"
                        className="w-full text-xs px-3 py-2.5 bg-[#111111] border border-white/10 rounded-none text-white focus:outline-none focus:border-[#C8102E] transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+63 917 123 4567"
                        className="w-full text-xs px-3 py-2.5 bg-[#111111] border border-white/10 rounded-none text-white focus:outline-none focus:border-[#C8102E] transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                      Inquiry / Message Scope
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type details of your realty or construction scope..."
                      rows={3}
                      className="w-full text-xs px-3 py-2.5 bg-[#111111] border border-white/10 rounded-none text-white focus:outline-none focus:border-[#C8102E] resize-none transition-colors font-sans"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-11 bg-[#C8102E] hover:bg-neutral-900 hover:border hover:border-white/20 text-white font-display font-black text-xs tracking-widest uppercase transition-all duration-300 rounded-none shadow-md cursor-pointer mt-4"
                >
                  START LIVE CHAT
                </button>
              </form>
            ) : (
              /* Phase B - Persistent On-Site Chat Loop */
              <div className="flex-1 flex flex-col justify-end bg-[#0a0a0c] overflow-hidden">
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-850">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-none p-3.5 text-xs sm:text-[13px] font-sans leading-relaxed tracking-wide ${
                          msg.sender === "user"
                            ? "bg-[#C8102E] text-white"
                            : "bg-zinc-900 border border-white/5 text-zinc-300"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[8px] font-mono text-zinc-600 mt-1 uppercase tracking-widest">
                        {msg.timestamp}
                      </span>
                    </div>
                  ))}
                  <div ref={messageEndRef} />
                </div>

                {/* On-Site Message Send Form */}
                <form
                  onSubmit={handleSendMessage}
                  className="p-3 bg-[#111111] border-t border-white/10 flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type details of your scope..."
                    className="flex-1 text-xs px-3 py-2.5 bg-zinc-950 border border-white/10 rounded-none text-white placeholder-zinc-500 focus:outline-none focus:border-[#C8102E] transition-all font-sans"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="h-9 px-4 rounded-none bg-[#C8102E] hover:bg-neutral-900 disabled:bg-zinc-800 disabled:text-zinc-600 font-display font-black text-[10px] tracking-widest text-white uppercase flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed transition-all focus:outline-none border border-transparent hover:border-white/10"
                  >
                    <span>SEND</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>

                <div className="p-1 px-4 bg-[#0c0c0e] border-t border-white/5 text-[8px] font-mono text-zinc-600 text-center tracking-wider uppercase">
                  CRM Live Tunnel Verified
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
