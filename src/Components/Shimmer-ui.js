const Shimmer = ({key}) => {
  return (
      <div key={key} className="[&>div]:bg-slate-200 [&>div:hover]:bg-gray-600 [&>div]:rounded-xl grid gap-2">
        <div className="w-[290px] h-[260px] "></div>
        <div className="w-[280px] h-[16px] "></div>
        <div className="w-[50px] h-[16px] "></div>
        <div className="w-[70px] h-[16px] "></div>
        <div className="w-[200px] h-[16px] "></div>
      </div>
  );
};

export default Shimmer;
