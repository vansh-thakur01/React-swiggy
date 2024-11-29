const ShimmerMenu  = ()=>{
    return (
      <div className="flex justify-between items-center h-[225px] w-[1100px] my-6 py-4 border-t-2 border-gray-300">
        <div className="h-[145px] w-[640px] grid gap-2 pt-1">
          <h4 className="w-[210px] h-[24px] bg-slate-200"></h4>
          <h4 className="w-[52px] h-[16px] bg-slate-200"></h4>
          <h4 className="w-[37px] h-[16px] bg-slate-200"></h4>
          <p className="text-gray-500 font-[500] w-[700px] h-[18px] bg-slate-200"></p>
          <p className="text-gray-500 font-[500] w-[690px] h-[18px] bg-slate-200"></p>
        </div>
        <div className=" w-[220px] h-[180px] rounded-3xl bg-slate-200"></div>
      </div>
    );
}

export default ShimmerMenu;