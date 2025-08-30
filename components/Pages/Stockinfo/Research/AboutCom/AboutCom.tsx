import React from 'react';

const aboutData = {
  about: `The National Stock Exchange (NSE) is a leading stock exchange in India, established in 1992 and headquartered in Mumbai. It is the world's largest derivatives exchange by the number of contracts traded and the third largest in cash equities by the number of trades. NSE introduced electronic trading, making it the first exchange in India to do so, and it is known for its flagship index, the NIFTY 50.`,
  boardOfDirectors: [
    { name: 'Ashishkumar Chauhan', role: 'Managing Director & CEO' },
    { name: 'S Sudarshan', role: 'Public Interest Director, Professor in IIT Bombay' },
    { name: 'S Ravindran', role: 'Public Interest Director, Former Executive Director at SEBI' },
    { name: 'Tablesh Pandey', role: 'Non-Independent Director, Managing Director of LIC' },
    { name: 'Rajesh Gopinathan', role: 'Public Interest Director, Professor in IIT Bombay, Former MD & CEO of Tata Consultancy Services' },
    { name: 'Abhilasha Kumari', role: 'Public Interest Director, Retired Chief Justice of the Manipur High Court, Former Judicial Member, Lokpal of India' },
    { name: 'Veneet Nayar', role: 'Non-Independent Director, Founder Chairman of Sampark Foundation, Former Vice Chairman and CEO of HCL Technologies' },
    { name: 'Mamata Biswal', role: 'Public Interest Director, Professor of Law & ICSSR Senior Research Fellow, GNLU' },
  ],
};

const AboutSection = () => {
  return (
    <div className="bg-transparent p-5 font-sans">
      <h2 className="font-bold text-3xl mb-6">About Co.</h2>
      <p className="text-white/50 leading-relaxed mb-8">{aboutData.about}</p>
      
      <h3 className="font-bold text-2xl mb-4">Board of Directors & Management</h3>
      <h4 className="font-bold text-xl mb-4">Board of Directors</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {aboutData.boardOfDirectors.map((director, index) => (
          <div key={index} className="flex flex-col">
            <h5 className="font-semibold text-lg mb-1">{director.name}</h5>
            <p className="text-white/50">{director.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;