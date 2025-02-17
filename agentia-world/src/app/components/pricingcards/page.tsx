import { CiCircleCheck } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: "Starter",
    price: "$499/month",
    features: [
      "2 AI Agent Instances",
      "Basic Neural Processing",
      "24/7 Support",
      "Weekly Analytics",
      "Basic Integration Support",
    ],
  },
  {
    title: "Pro",
    price: "$999/month",
    features: [
      "10 AI Agent Instances",
      "Advanced Neural Processing",
      "Priority Support",
     " Real-time Analytics",
     "Custom Integration",
     "API Access",
     "Advanced Security",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom Pricing",
    features: [
      "Unlimited AI Agent Instances",
      "Full Neural Suite",
      "Dedicated Support Team",
      "Advanced Analytics Dashboard",
      "Custom Development",
      "Full API Access",
      "Enterprise Security",
      "Custom Training",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full px-4 py-16 text-white text-center">
      <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Choose Your Plan
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-medium my-4">
          Flexible pricing tailored to your needs
          </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4 md:px-12 mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-900 my-10 hover:border-purple-800 hover:border-[1px] rounded-xl p-8 shadow-lg hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-white">{plan.title}</h3>
            <p className="text-3xl font-bold mt-4 text-purple-400">{plan.price}</p>
            <ul className="mt-6 space-y-3 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <CiCircleCheck className="text-purple-600 mr-2 text-2xl font-bold" /> {feature}
                </li>
              ))}
            </ul>
            <Button className="bg-gray-800 border-[1px] border-purple-800 text-white  rounded-lg w-full mt-3 py-3 flex justify-center items-center hover:shadow-sm hover:shadow-purple-500 hover:scale-105 transition-all duration-300">Get Started</Button>
           
          </div>
        ))}
      </div>
    </section>
  );
}
