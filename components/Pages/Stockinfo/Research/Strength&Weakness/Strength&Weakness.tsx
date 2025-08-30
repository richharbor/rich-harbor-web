import React from 'react';
import { Check, X } from 'lucide-react';

const swotAnalysis = {
  strengths: [
    {
      title: "Market Leader",
      description:
        "NSE's market share in cash equities has gone from ~84% in FY14 to ~94% in 9MFY25. It is the largest derivatives exchange in the world by number of contracts traded, as on FY24. (Source: Annual Report)",
    },
    {
      title: "High Revenue Growth",
      description:
        "NSE's revenue grew at a 3-yr CAGR of ~38% and at a 10-yr CAGR of 27% (Source: Annual Report)",
    },
    {
      title: "Scalable Fixed-Cost Model",
      description:
        "Operating leverage allows profitability to grow faster than revenues, with EBITDA margins at ~80%. (Source: Annual Report)",
    },
    {
      title: "Investor-Centric Policies",
      description:
        "High dividend payout ratio (~53% in FY24), reflecting commitment to shareholder returns. (Source: Annual Report)",
    },
  ],
  weaknesses: [
    {
      title: "Concentration of Revenue",
      description:
        "NSE heavily relies on trading volume in specific segments like equity derivatives, exposing it to revenue fluctuations driven by market volatility.",
    },
    {
      title: "Regulatory Scrutiny",
      description:
        "As the largest exchange in India, NSE operates under constant scrutiny from regulators like SEBI, making it more susceptible to compliance-related challenges.",
    },
  ],
};

const StrengthsWeaknesses = () => {
  return (
    <div className="bg-transparent p-5 font-sans">
      <h2 className="font-bold text-3xl mb-6">Strengths & Weaknesses</h2>

      <h3 className="font-bold text-2xl mb-4">Strengths</h3>
      <ul className="list-none space-y-4">
        {swotAnalysis.strengths.map((strength, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-lg">{strength.title}:</h4>
              <p className="text-white/50">{strength.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="font-bold text-2xl mt-8 mb-4">Weaknesses</h3>
      <ul className="list-none space-y-4">
        {swotAnalysis.weaknesses.map((weakness, index) => (
          <li key={index} className="flex items-start">
            <X className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-lg">{weakness.title}:</h4>
              <p className="text-white/50">{weakness.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StrengthsWeaknesses;