interface BusinessHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const BusinessHero = ({ title, subtitle, description, image }: BusinessHeroProps) => {
  return (
    <div 
      className="relative h-96 bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(34, 34, 139, 0.8), rgba(34, 34, 139, 0.8)), url(${image})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-6">{subtitle}</p>
          <p className="text-lg opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessHero;