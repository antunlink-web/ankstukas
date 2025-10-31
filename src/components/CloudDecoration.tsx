const CloudDecoration = ({ className = "", position = "top" }: { className?: string; position?: "top" | "bottom" }) => {
  return (
    <div className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 right-0 pointer-events-none ${className}`}>
      {/* Large floating clouds */}
      <div className="relative h-40 overflow-hidden">
        <div className="absolute -top-10 left-[10%] w-32 h-32 bg-gradient-to-br from-secondary-light/30 to-secondary/20 rounded-full blur-2xl animate-float" />
        <div className="absolute -top-5 left-[30%] w-40 h-24 bg-gradient-to-br from-secondary-light/40 to-secondary/30 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-0 right-[20%] w-36 h-28 bg-gradient-to-br from-secondary-light/35 to-secondary/25 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute -top-8 right-[5%] w-28 h-28 bg-gradient-to-br from-secondary-light/30 to-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>
    </div>
  );
};

export default CloudDecoration;
