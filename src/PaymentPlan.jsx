// import React from "react";

// const PaymentPlan = ({ key }) => {
//   const { ...key } = key;
//   return (
//     <div className="max-w-4xl mx-auto p-6 mt-4 bg-white">
//       <h2 className="text-4xl tracking-wide  mb-6 text-center font-sans">
//         Payment Plan
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
//         {key.paypaymentPlan.map((installment, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-center gap-1 flex-col space-x-6 p-4  rounded-lg bg-transparent"
//           >
//             <div className="flex-shrink-0">
//               <div className="w-40 h-40 flex items-center justify-center rounded-full border-2 border-[#cc9964] text-[#cc9964] text-lg md:text-3xl  ">
//                 {installment.percentage}
//               </div>
//             </div>

//             <p className="text-black mx-auto text-sm font-semibold  font-sans">
//               {installment.date}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PaymentPlan;
// const installments = [
//   {
//     percentage: "10%",
//     description: "1st Installment",
//     date: "Purchase Date",
//   },
//   { percentage: "5%", description: "2nd Installment", date: "28-APR-2017" },
//   { percentage: "5%", description: "3rd Installment", date: "30-SEP-2017" },
//   { percentage: "10%", description: "10% Completion", date: "28-FEB-2018" },
//   { percentage: "5%", description: "20% Completion", date: "30-AUG-2018" },
//   { percentage: "10%", description: "40% Completion", date: "30-MAR-2019" },
//   { percentage: "5%", description: "60% Completion", date: "30-AUG-2019" },
//   { percentage: "10%", description: "80% Completion", date: "30-JAN-2020" },
//   { percentage: "40%", description: "Handover", date: "30-SEP-2020" },
// ];
import React from "react";

const PaymentPlan = ({ paymentPlan }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-4 bg-white">
      <h2 className="text-4xl tracking-wide mb-6 text-center font-sans">
        Payment Plan
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {paymentPlan.map((installment, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-6 flex-col space-x-6 p-4 rounded-lg bg-transparent"
          >
            <div className="flex-shrink-0">
              <div className="w-40 h-40 flex items-center justify-center rounded-full border-2 border-[#cc9964] text-[#cc9964] text-3xl md:text-4xl">
                {installment.percentage}
              </div>
            </div>
            <p className="text-black mx-auto text-[12px] font-semibold font-sans">
              {installment.dueDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPlan;
