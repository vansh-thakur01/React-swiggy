export const StyledLi = ( {children} ) => {
    console.log(children);
    return (
      <li className=" text-neutral-600 hover:text-slate-950">
        {children}
      </li>
    );
};
