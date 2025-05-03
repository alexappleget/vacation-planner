interface IHowWorksCards {
  step: number;
  title: string;
  description: string;
}

export const HowWorksCards = ({ step, title, description }: IHowWorksCards) => {
  return (
    <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] shadow-md hover:shadow-lg transition-shadow border border-[#cbd5e1]">
      <div className="flex items-center justify-center w-12 h-12 bg-[#0077b6] rounded-full">
        <span className="text-lg font-extrabold text-[#f1f5f9]">{step}</span>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};
