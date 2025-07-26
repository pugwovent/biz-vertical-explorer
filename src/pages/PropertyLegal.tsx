import Navigation from "@/components/Navigation";
import BusinessHero from "@/components/BusinessHero";
import FAQSection from "@/components/FAQSection";
import heroImage from "@/assets/hero-business.jpg";

const PropertyLegal = () => {
  const faqs = [
    {
      question: "What documents do I need for a property purchase?",
      answer: "You'll need proof of identity, proof of income, bank statements, mortgage pre-approval letter, property survey, title insurance, and homeowner's insurance documentation."
    },
    {
      question: "How long does the conveyancing process take?",
      answer: "Typically 8-12 weeks from offer acceptance to completion, though this can vary based on chain complexity, mortgage approvals, and survey results."
    },
    {
      question: "What are the legal fees for buying a property?",
      answer: "Legal fees typically range from £500-£2000 plus disbursements (searches, Land Registry fees, etc.) which can add another £300-£800 depending on the property."
    },
    {
      question: "Do I need a solicitor for selling my property?",
      answer: "Yes, you legally need a qualified solicitor or licensed conveyancer to handle the sale of your property, prepare contracts, and manage the transfer of ownership."
    },
    {
      question: "What is included in property searches?",
      answer: "Standard searches include local authority, environmental, water and drainage, chancel repair liability, and flood risk searches to identify any issues affecting the property."
    },
    {
      question: "Can I change my mind after exchanging contracts?",
      answer: "No, once contracts are exchanged, you are legally bound to complete the purchase. Withdrawal after exchange can result in losing your deposit and facing legal action."
    },
    {
      question: "What happens if the property chain breaks down?",
      answer: "If the chain breaks, all parties may need to find alternative arrangements. Your solicitor will advise on options including finding new buyers/sellers or temporary accommodation."
    },
    {
      question: "Do I need building regulations approval for home improvements?",
      answer: "Many home improvements require building regulations approval, including extensions, loft conversions, new bathrooms, and structural changes. Always check with local authorities first."
    }
  ];

  return (
    <div>
      <Navigation />
      <BusinessHero
        title="Property Legal Services"
        subtitle="Expert Legal Support for Property Transactions"
        description="Professional conveyancing and property law services ensuring smooth, secure property transactions with comprehensive legal protection and guidance."
        image={heroImage}
      />
      <FAQSection
        title="Property Legal Services FAQ"
        faqs={faqs}
      />
    </div>
  );
};

export default PropertyLegal;