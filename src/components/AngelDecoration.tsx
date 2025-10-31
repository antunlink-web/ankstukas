import angelImage from "@/assets/angel-decoration.png";

const AngelDecoration = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <img 
        src={angelImage} 
        alt="" 
        className="w-20 h-20 opacity-20 animate-float"
      />
    </div>
  );
};

export default AngelDecoration;
