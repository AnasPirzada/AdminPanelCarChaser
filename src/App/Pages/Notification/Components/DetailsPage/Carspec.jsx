import React from "react";

const CarSpec = () => {
  const detailsData = [
    { label: "Model", value: "Volkswagen Altas Exceline" },
    { label: "Year", value: "2009" },
    { label: "VIN", value: "12566896" },
    { label: "Make", value: "Answer" },
    { label: "Trim", value: "Answer" },
    { label: "Mileage/Odometer", value: "Silver" },
    { label: "Model", value: "97951km" },
    { label: "Keys", value: "3" },
    // Add more details as needed
  ];
  const featuresData = [
    "2 sets of tire",
    "Window tint",
    "Aftermarket exhaust",
    "Aftermarket rims",
    "Any rust?",
    "No exterior damage",
    "Dents",
    "Scratches",
    "Roof rack",
    "Remote starter",
    "Aftermarket stereo",
    "Aftermarket rims",
    "Aftermarket spoiler",
    "Any Cracked bodywork",
    "Chipped it cracked",
    "Paint Chips",
    // Add more features as needed
  ];
  return (
    <>
      <div className=" mt-5" style={{ height: "72vh", overflowY: "auto" }}>
        <div>
          <h3 className="mb-3 ">
            <b>Car full details</b>
          </h3>
          {detailsData.map((detail, index) => (
            <div
              key={index}
              className={index < detailsData.length - 1 ? "border-bottom" : ""}
            >
              <p className={`mb-0 ${index > 0 ? " " : ""}`}>{detail.label}</p>
              <h5 className="" style={{ fontSize: "16px" }}>
                {detail.value}
              </h5>
            </div>
          ))}
        </div>
        <div>
          <h3 className="my-3 ">Additional Features</h3>
          <span className="flex-wrap  d-flex ">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className=""
                style={{ flex: "0 0 calc(50% - 1rem)" }}
              >
                <p className="mb-1 text-nowrap ">{feature}</p>
              </div>
            ))}
          </span>
        </div>
        <div>
          <h3 className="my-3">
            <b>Condition & Record</b>
          </h3>
          {[
            { question: "Do you smoke in this vehicle?", answer: "Yes" },
            { question: "Do you have original factory rims?", answer: "Yes" },
            { question: "Is your vehicle drivable?", answer: "Yes" },
            {
              question: "Any accident claim?",
              answer: "Yes",
              details: "Rear damage - $2,000",
            },
            {
              question: "Any mechanical issue or warning light?",
              answer: "Yes",
            },
            { question: "How soon are you ready to sell?", answer: "Yes" },
            {
              question: "Anything you feel we should know about your car",
              answer: "Details answer",
            },
          ].map((item, index) => (
            <div key={index}>
              <p className="mt-2">{item.question}</p>
              {item.details ? (
                <div className="d-flex">
                  <h5>{item.answer}</h5>
                  <p>{item.details}</p>
                </div>
              ) : (
                <h5 className="mb-2">{item.answer}</h5>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarSpec;
