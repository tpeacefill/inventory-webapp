import React from "react";

interface MetricHeadInfoProps {
  selectedOption: string;
}

const MetricHeadInfo: React.FC<MetricHeadInfoProps> = ({ selectedOption }) => {
  return (
    <div className="flex flex-col flex-1">
      <p className="font-Poppins">
        {selectedOption === "of products"
          ? "Total number of products"
          : "Total stock value"}
      </p>
      <div className="flex flex-row items-center gap-5">
        <h3 className="mt-1 text-xl font-medium font-Poppins">_ _ _ _</h3>
        <p className="font-Poppins">Units</p>
      </div>
    </div>
  );
};

export default MetricHeadInfo;
