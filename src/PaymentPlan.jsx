import React from "react";

const PaymentPlan = () => {
  const installments = [
    {
      percentage: "10%",
      description: "1st Installment",
      date: "Purchase Date",
    },
    { percentage: "5%", description: "2nd Installment", date: "28-APR-2017" },
    { percentage: "5%", description: "3rd Installment", date: "30-SEP-2017" },
    { percentage: "10%", description: "10% Completion", date: "28-FEB-2018" },
    { percentage: "5%", description: "20% Completion", date: "30-AUG-2018" },
    { percentage: "10%", description: "40% Completion", date: "30-MAR-2019" },
    { percentage: "5%", description: "60% Completion", date: "30-AUG-2019" },
    { percentage: "10%", description: "80% Completion", date: "30-JAN-2020" },
    { percentage: "40%", description: "Handover", date: "30-SEP-2020" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Payment Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {installments.map((installment, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 border border-yellow-600 rounded-lg bg-transparent"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-4 border-yellow-600 text-yellow-600 text-lg md:text-xl font-semibold">
                {installment.percentage}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-600">
                {installment.description}
              </h3>
              <p className="text-gray-500">{installment.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPlan;