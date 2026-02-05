"use client";

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  titlecolor?: string;      
  subtitlecolor?: string;   
}

export default function Hero({ 
  title, 
  subtitle, 
  image, 
  titlecolor, 
  subtitlecolor,
}: HeroProps) {
  return (
    <div
      className="relative w-full h-[250px] md:h-[400px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Text */}
      <div className="relative px-4">
        <h1 className={`mt-2 text-3xl md:text-5xl font-bold ${titlecolor || "text-white"}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-2 text-lg md:text-2xl ${subtitlecolor || "text-white/90"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
