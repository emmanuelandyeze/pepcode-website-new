"use client";

import { useState } from "react";

const monthlyPlans = [
  {
    name: "Basic",
    price: "₦7,500",
    subtitle: "Solo entrepreneurs, freelancers & small traders just getting started",
    sections: [
      {
        title: "USERS & LIMITS",
        features: [
          "1 user",
          "Up to 50 transactions/month",
          "Up to 10 SKUs"
        ]
      },
      {
        title: "CORE FEATURES",
        features: [
          "Bookkeeping & expense tracking",
          "Basic invoice management",
          "Inventory tracking",
          "Bank balance tracking",
          "Key financial metrics dashboard"
        ]
      },
      {
        title: "E-INVOICING (NRS)",
        features: [
          "Basic e-invoicing — up to 10 invoices/month",
          "VAT/WHT e-invoicing",
          "Compliance reports"
        ]
      },
      {
        title: "SUPPORT",
        features: [
          "Email support",
          "Priority support"
        ]
      }
    ]
  },
  {
    name: "Team",
    price: "₦15,000",
    subtitle: "Small teams that need collaboration and fuller financial visibility",
    isPopular: true,
    sections: [
      {
        title: "USERS & LIMITS",
        features: [
          "Up to 3 users",
          "Up to 150 transactions/month",
          "Up to 20 SKUs"
        ]
      },
      {
        title: "CORE FEATURES",
        features: [
          "Everything in Basic",
          "Multi-user collaboration",
          "Advanced financial metrics",
          "Customer & vendor records",
          "Basic financial reports"
        ]
      },
      {
        title: "E-INVOICING (NRS)",
        features: [
          "E-invoicing — up to 50 invoices/month",
          "VAT/WHT e-invoicing",
          "Compliance & audit reports"
        ]
      },
      {
        title: "SUPPORT",
        features: [
          "Email + chat support",
          "Dedicated account support"
        ]
      }
    ]
  },
  {
    name: "Business",
    price: "₦28,000",
    subtitle: "Growing businesses that need advanced tools, compliance & full automation",
    sections: [
      {
        title: "USERS & LIMITS",
        features: [
          "5+ users (unlimited)",
          "Unlimited transactions",
          "Unlimited SKUs"
        ]
      },
      {
        title: "CORE FEATURES",
        features: [
          "Everything in Team",
          "Advanced expense tracking",
          "Advanced inventory management",
          "Full financial reporting suite",
          "Role-based access control",
          "API access & integrations"
        ]
      },
      {
        title: "E-INVOICING (NRS)",
        features: [
          "Unlimited e-invoicing",
          "VAT/WHT e-invoicing",
          "Compliance & audit-ready reports",
          "Tax filing support"
        ]
      },
      {
        title: "SUPPORT",
        features: [
          "Priority support",
          "Dedicated account manager"
        ]
      }
    ]
  }
];

const annualPlans = [
  {
    name: "Basic",
    price: "₦6,750",
    billingText: "Billed annually at ₦81,000/year",
    subtitle: "Solo entrepreneurs, freelancers & small traders just getting started",
    sections: [
      {
        title: "USERS & LIMITS",
        features: [
          "1 user",
          "Up to 50 transactions/month",
          "Up to 10 SKUs"
        ]
      },
      {
        title: "CORE FEATURES",
        features: [
          "Bookkeeping & expense tracking",
          "Basic invoice management",
          "Inventory tracking",
          "Bank balance tracking",
          "Key financial metrics dashboard"
        ]
      },
      {
        title: "E-INVOICING (NRS)",
        features: [
          "Basic e-invoicing — up to 10 invoices/month",
          "VAT/WHT e-invoicing",
          "Compliance reports"
        ]
      },
      {
        title: "SUPPORT",
        features: [
          "Email support",
          "Priority support"
        ]
      }
    ]
  },
  {
    name: "Team",
    price: "₦13,500",
    billingText: "Billed annually at ₦162,000/year",
    subtitle: "Small teams that need collaboration and fuller financial visibility",
    isPopular: true,
    sections: [
      {
        title: "USERS & LIMITS",
        features: [
          "Up to 3 users",
          "Up to 150 transactions/month",
          "Up to 20 SKUs"
        ]
      },
      {
        title: "CORE FEATURES",
        features: [
          "Everything in Basic",
          "Multi-user collaboration",
          "Advanced financial metrics",
          "Customer & vendor records",
          "Basic financial reports"
        ]
      },
      {
        title: "E-INVOICING (NRS)",
        features: [
          "E-invoicing — up to 50 invoices/month",
          "VAT/WHT e-invoicing",
          "Compliance & audit reports"
        ]
      },
      {
        title: "SUPPORT",
        features: [
          "Email + chat support",
          "Dedicated account support"
        ]
      }
    ]
  },
  {
    name: "Business",
    price: "₦25,200",
    billingText: "Billed annually at ₦302,400/year",
    subtitle: "Growing businesses that need advanced tools, compliance & full automation",
    sections: [
      {
        title: "USERS & LIMITS",
        features: [
          "5+ users (unlimited)",
          "Unlimited transactions",
          "Unlimited SKUs"
        ]
      },
      {
        title: "CORE FEATURES",
        features: [
          "Everything in Team",
          "Advanced expense tracking",
          "Advanced inventory management",
          "Full financial reporting suite",
          "Role-based access control",
          "API access & integrations"
        ]
      },
      {
        title: "E-INVOICING (NRS)",
        features: [
          "Unlimited e-invoicing",
          "VAT/WHT e-invoicing",
          "Compliance & audit-ready reports",
          "Tax filing support"
        ]
      },
      {
        title: "SUPPORT",
        features: [
          "Priority support",
          "Dedicated account manager"
        ]
      }
    ]
  }
];

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 mt-1 mr-3 text-emerald-500"
  >
    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#D1D5DB" fill="none" strokeWidth="1" />
    <path d="M4.5 8L6.5 10L11.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const plans = billingCycle === "monthly" ? monthlyPlans : annualPlans;

  return (
    <section className="pb-20 bg-[#091E42]">
      {/* Navbar Offset */}
      <div className="pt-14 md:pt-20"></div>

      {/* Pricing Header Section */}
      <div className="pt-10 pb-12 px-4">
        <div className="max-w-5xl text-white mx-auto text-center space-y-4">
          <span className="text-[#C7DFFF] font-semibold text-xs uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Pricing plans
          </h2>
          <p className="text-[#C7DFFF] text-base md:text-lg max-w-2xl mx-auto">
            Simple, transparent pricing that grows with you. Try any plan now.
          </p>
        </div>
      </div>

      {/* Billing Cycle Toggle */}
      <div className="flex justify-center mb-10 px-4">
        <div className="flex border rounded-lg border-white/20 bg-white/5 p-1 backdrop-blur-sm">
          <button
            className={`font-medium text-sm px-6 py-2.5 rounded-md cursor-pointer transition-all duration-200 ${billingCycle === "monthly"
              ? "text-[#091E42] bg-white shadow-sm font-semibold"
              : "text-white hover:text-[#C7DFFF]"
              }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly billing
          </button>
          <button
            className={`font-medium text-sm px-6 py-2.5 rounded-md cursor-pointer transition-all duration-200 ${billingCycle === "annual"
              ? "text-[#091E42] bg-white shadow-sm font-semibold"
              : "text-white hover:text-[#C7DFFF]"
              }`}
            onClick={() => setBillingCycle("annual")}
          >
            Annual billing
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-6xl px-5 md:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col bg-white rounded-[24px] p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 shadow-md ${plan.isPopular
                ? "border-2 border-[#3B82F6] shadow-[0_8px_30px_rgb(59,130,246,0.12)]"
                : "border border-gray-200"
                }`}
            >
              {/* Card Header */}
              <div>
                {plan.isPopular && (
                  <div className="mb-4">
                    <span className="bg-[#DBEAFE] text-[#1D4ED8] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>

                {billingCycle === "annual" ? (
                  <div className="flex flex-col my-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-extrabold text-gray-900">{plan.price}</span>
                      <span className="text-sm text-gray-500 font-normal">/month</span>
                    </div>
                    <span className="text-xs text-blue-600 font-semibold mt-1">{plan.billingText}</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1 my-3">
                    <span className="text-3xl md:text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-sm text-gray-500 font-normal">/month</span>
                  </div>
                )}

                <p className="text-sm text-gray-500 leading-relaxed">{plan.subtitle}</p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200/80 my-6"></div>

              {/* Features Sections */}
              <div className="flex-1 space-y-6">
                {plan.sections.map((section, sIndex) => (
                  <div key={sIndex} className="text-left">
                    <h4 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-3">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start text-sm text-gray-700 leading-tight">
                          <CheckIcon />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="https://app.pepcodeinc.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button
                    className={`w-full py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-200 text-center cursor-pointer ${plan.isPopular
                      ? "bg-[#004AAD] hover:bg-[#003B8B] text-white shadow-sm shadow-[#004AAD]/15"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50 bg-white"
                      }`}
                  >
                    Start now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Note */}
      {/* <div className="max-w-6xl px-5 md:px-8 mx-auto mt-12">
        <div className="bg-[#FAF9F5] border border-[#E6E4DD] rounded-xl p-6 text-sm text-[#4A5568] leading-relaxed shadow-sm text-left">
          <span className="font-semibold text-[#1A202C]">Note on NRS / e-invoicing:</span> The NRS feature is now bundled into all tiers at increasing levels — Basic gets entry-level access, Team unlocks VAT/WHT, and Business gets the full compliance and audit-ready suite. This removes the separate ₦4,000 add-on and makes the upgrade path clearer for customers.
        </div>
      </div> */}
    </section>
  );
};

export default Pricing;
