interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  titlecolor?: string;      
  subtitlecolor?: string;
  stylePosition?: string;  
}

export default function Hero({ 
  title, 
  subtitle, 
  image, 
  titlecolor, 
  subtitlecolor,
  stylePosition = "center", // default
}: HeroProps) {
  return (
    <div
      className="relative w-full h-[250px] md:h-[400px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: stylePosition, 
      }}
    >
      {/* Text */}
      <div className="relative px-4">
        <h1 className={`mt-2 text-3xl md:text-5xl font-bold drop-shadow-lg ${titlecolor || "text-white"}`}
        style={{ textShadow: "0 6px 18px rgba(0,0,0,0.6)"}}> {/*Skugga på titeln*/}
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-2 text-lg md:text-2xl drop-shadow-md ${subtitlecolor || "text-white/90"}`}
          style={{ textShadow: "0 4px 12px rgba(0,0,0,0.5)"}}> {/*Skugga på underrubriken */}
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
