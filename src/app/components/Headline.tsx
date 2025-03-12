const MainHeadline = ({ text }: { text: string }) => {
  return (
    <h2 className="m-auto block w-full max-w-[635px] text-center text-[42px] leading-[40px] font-[700] text-[#d0190d]">
      {text}
    </h2>
  )
}

const Overline = ({ text }: { text: string }) => {
  return (
    <span
      className="block text-center text-[28px] font-[900] text-black uppercase"
      id="topnycdoctor"
    >
      {text}
    </span>
  )
}

const Headline = () => {
  return (
    <div className="m-auto max-w-[1440px] pt-[24px]" id="heading">
      <div className="topdoctordiv m-auto px-0 py-[24px] md:px-3" id="topdoctordiv">
        <div className="block text-center">
          <Overline text="Top NYC Gut Doctor:" />
          <MainHeadline text="“Do This Once A Day To Empty Your Bowels Like Clockwork...”" />
        </div>
      </div>
    </div>
  )
}

export default Headline
