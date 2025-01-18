import speakingIcon from "../assets/images/public-speaking-icon.webp";
import careerIcon from "../assets/images/career-oriented-icon.webp";
import thinkingIcon from "../assets/images/creative-thinking-icon.webp";
const Body = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="bannerWrapper flex pt-[62px] pb-[117px]">
            <div className="max-w-[573px] w-[100%]">
              <h1 className="text-[64px] font-bold text-[#101828]">
                Up Your <span className="text-[#20B486]">Skills </span>To{" "}
                <span className="text-[#20B486]">Advance</span> Your{" "}
                <span className="text-[#20B486]">Career</span> Path
              </h1>
              <p className="text-[16px] text-[#646464] mt-[20px] mb-[36px] w-[487px]">
                Learn UI-UX Design skills with weekend UX . The latest online
                learning system and material that help your knowledge growing.
              </p>
              <div className="flex max-w-[350px] w-[100%] justify-between mb-[50px]">
                <button className="text-[18px] py-[16px] px-[28px] bg-[#20B486] text-[#FFFFFF] rounded-[8px]">
                  Get Started
                </button>
                <button className="text-[18px] py-[16px] px-[28px] bg-[#EAFFF9] text-[#20B486] rounded-[8px]">
                  Get free trial
                </button>
              </div>
              <div className="flex gap-x-[26px] items-center">
                <div className="flex items-center gap-x-[10px] min-w-[163px] w-[100%] py-[4px]">
                  <img src={speakingIcon} alt="public speaking icon" />
                  <p className="text-[#1D2939] text-[16px]">Public Speaking</p>
                </div>
                <div className="flex items-center gap-x-[10px] min-w-[163px] w-[100%] py-[4px]">
                  <img src={careerIcon} alt="career icon" />
                  <p className="text-[#1D2939] text-[16px]">Career-Oriented</p>
                </div>
                <div className="flex items-center gap-x-[10px] min-w-[163px] w-[100%] py-[4px]">
                  <img src={thinkingIcon} alt="creative thinking icon" />
                  <p className="text-[#1D2939] text-[16px]">Creative Thinking</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
