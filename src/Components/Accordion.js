import ResMenuCard from "./ResMenuCards.js";

const Accordion = ({card ,cardHiddenArr,i,setcardHidden ,stateViaProps,whichAccotdionToOpne})=>{
    return (
      <div className="border-b-[17px] ">
        <h2
          className="text-2xl cursor-pointer font-extrabold px-6 py-2 flex justify-between items-center "
          onClick={() => {
            const cardArr = [...cardHiddenArr];
            cardArr[i] = cardArr[i] === "hidden" ? card?.title : "hidden";
            setcardHidden(cardArr);

            // stateViaProps === true ? whichAccotdionToOpne(true) : whichAccotdionToOpne(false);
          }}
        >
          <div className="">
            {card.title} ({card.itemCards.length})
          </div>
          <div>
            {cardHiddenArr[i] === "hidden" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            )}
          </div>
        </h2>
        <div className={cardHiddenArr[i]}>
          {/* <div> */}
          {/* {stateViaProps && card.itemCards.map((val) => { */}
          {card.itemCards.map((val) => {
            return (
              <div className="mt-5" key={val?.card?.info?.id}>
                <ResMenuCard resdata={val?.card?.info} />
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Accordion;