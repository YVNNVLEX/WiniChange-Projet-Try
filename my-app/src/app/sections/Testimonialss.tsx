import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mireille Ahoua",
      location: "CIV",
      image: "/testimonials/vertical.jpg",
      testimonial:
        "J'utilise Winichange depuis près de 2 ans, et les transactions de vente et d'achat de cryptomonnaies y sont automatiques.",
      color: "#356169",
      bgColor: "#3561691d",
    },
    {
      id: 2,
      name: "Aminata KONE",
      location: "Mali",
      image: "/testimonials/vertical.jpg",
      testimonial:
        "Winichange est la meilleure plateforme pour acheter et vendre des cryptomonnaies, non seulement en Afrique mais dans le monde entier.",
      color: "#DC3F4D",
      bgColor: "#DC3F4D1A",
    },
    {
      id: 3,
      name: "Ibrahima DIALLO",
      location: "Togo",
      image: "/testimonials/vertical.jpg",
      testimonial:
        "Comme je le dis à mes amis, Winichange est le site le plus utile pour gérer mes transactions depuis toujours !",
      color: "#3d52a9",
      bgColor: "#3d52a91d",
    },
    {
      id: 4,
      name: "Fatoumata KONE",
      location: "Senegal",
      image: "/testimonials/vertical.jpg",
      testimonial:
        "Je tiens à exprimer ma gratitude envers Winichange pour leur service exceptionnel et leur soutien précieux lors de la récupération de mes fonds.",
      color: "#d19500",
      bgColor: "#d195001d",
    },
];


  return (
    <div className='bg-black w-full'>
        <div className="container mx-auto py-10">
      <div className="text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Nos clients satisfaits 
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 rounded-lg shadow-lg border"
            style={{
              backgroundColor: testimonial.bgColor,
              borderColor: testimonial.color,
            }}
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 overflow-hidden rounded-full">
                <Image
                  src={testimonial.image}
                  alt={`Client ${testimonial.name}`}
                  width={64}
                  height={64}
                  className="object-cover bg-red-200"
                />
              </div>
            </div>
            <div className="mb-4">
              <h6
                className="text-lg font-medium"
                style={{ color: testimonial.color }}
              >
                {testimonial.testimonial}
              </h6>
            </div>
            <div className="text-sm flex">
              <p className="font-bold" style={{ color: testimonial.color }}>
                {testimonial.name}
              </p>
              <span className="mx-1 text-white">•</span>
              <p className="font-bold" style={{ color: testimonial.color }}>
                {testimonial.location}
              </p>
            </div>
          </div>
        ))}
      </div>
       </div>
    </div>
  );
};

export default Testimonials;
