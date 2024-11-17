export const mockStockData = [
  {
    institution: "BlackRock",
    industries: [
      {
        name: "Technology",
        sector: "Public",
        marketCap: "Large Cap",
        region: "North America",
        pastData: { performance: 7.5, peRatio: 22.4, dividendYield: 2.1 },
        presentData: { performance: 8.2, peRatio: 24.5, dividendYield: 2.3 },
        futureProjections: { performance: 9.0, peRatio: 26.3, dividendYield: 2.5 },
        summary: "Stable growth in technology stocks, focusing on AI innovations.",
      },
      {
        name: "Healthcare",
        sector: "Public",
        marketCap: "Large Cap",
        region: "Europe",
        pastData: { performance: "N/A", peRatio: 21.3, dividendYield: 2.5 },
        presentData: { performance: 7.4, peRatio: 23.1, dividendYield: 2.7 },
        futureProjections: { performance: 8.1, peRatio: 24.9, dividendYield: 2.9 },
        summary: "Healthcare stocks remain strong with a focus on biotech advancements.",
      },
    ],
  },
  {
    institution: "J.P. Morgan",
    industries: [
      {
        name: "Finance",
        sector: "Private",
        marketCap: "Mid Cap",
        region: "Asia",
        pastData: { performance: 6.5, peRatio: 18.0, dividendYield: 1.6 },
        presentData: { performance: 8.5, peRatio: 18.3, dividendYield: 1.8 },
        futureProjections: { performance: null, peRatio: 19.0, dividendYield: 2.0 },
        summary: "Steady growth in emerging markets driven by consumer demand.",
      },
    ],
  },
  {
    institution: "Goldman Sachs",
    industries: [
      {
        name: "Energy",
        sector: "Private",
        marketCap: "Mid Cap",
        region: "South America",
        pastData: { performance: "N/A", peRatio: 20.2, dividendYield: 2.0 },
        presentData: { performance: 6.4, peRatio: 20.5, dividendYield: 2.1 },
        futureProjections: { performance: 7.0, peRatio: 21.0, dividendYield: 2.3 },
        summary: "Focus on stability in the energy sector through diversification.",
      },
    ],
  },
  {
    institution: "Morgan Stanley",
    industries: [
      {
        name: "Energy",
        sector: "Public",
        marketCap: "Mid Cap",
        region: "North America",
        pastData: { performance: 8.5, peRatio: "N/A", dividendYield: 1.3 },
        presentData: { performance: 9.1, peRatio: 19.6, dividendYield: 1.5 },
        futureProjections: { performance: 9.8, peRatio: 20.2, dividendYield: 1.7 },
        summary: "Renewable energy stocks show strong growth potential.",
      },
    ],
  },
  {
    institution: "Fidelity",
    industries: [
      {
        name: "Real Estate",
        sector: "Private",
        marketCap: "Small Cap",
        region: "Africa",
        pastData: { performance: 3.8, peRatio: 15.0, dividendYield: 1.0 },
        presentData: { performance: null, peRatio: 15.4, dividendYield: 1.2 },
        futureProjections: { performance: 4.7, peRatio: 16.0, dividendYield: 1.4 },
        summary: "Strong demand in housing and commercial properties.",
      },
    ],
  },
];
export const mockNewsData = [
  {
    category: "General",
    headline: "Tech stocks rebound as market confidence grows",
    content: "Technology stocks are showing strong recovery as investor confidence returns.",
    industry: "Technology",
    sector: "Public",
  },
  {
    category: "Institution-Specific",
    institution: "BlackRock",
    headline: "BlackRock announces AI-focused fund for 2024",
    content: "BlackRock introduces a new fund to focus on AI and machine learning technologies.",
    industry: "Technology",
    sector: "Public",
  },
  {
    category: "General",
    headline: "Healthcare stocks stable amid economic uncertainty",
    content: "Healthcare stocks remain a stable investment option, providing consistent returns.",
    industry: "Healthcare",
    sector: "Public",
  },
  {
    category: "Institution-Specific",
    institution: "Fidelity",
    headline: "Fidelity increases holdings in blue-chip healthcare companies",
    content: "Fidelity announces increased focus on blue-chip healthcare companies for stability.",
    industry: "Healthcare",
    sector: "Public",
  },
  // Add more news data as required...
];