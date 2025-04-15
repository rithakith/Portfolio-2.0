import React from "react";

const StatsGrid: React.FC = () => {
  return (
    <div className="w-fit  bg-color3 rounded-md p-6 flex flex-wrap justify-around gap-4 mx-auto text-center">
      <div className="flex flex-col">
        <span className="text-3xl font-bold">20+</span>
        <span className="text-sm">Projects</span>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-bold">500+</span>
        <span className="text-sm">Hours Coded</span>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-bold">10</span>
        <span className="text-sm">Technologies</span>
      </div>
    </div>
  );
};

export default StatsGrid;
