import svgPaths from "./svg-9b82hvtt29";
import imgLogo1 from "figma:asset/60681953c4b9a32b77e074ca7b723a4d14f64aae.png";

function Frame1() {
  return <div className="h-[442px] shrink-0 w-full" />;
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[372px] top-[214px] w-[714px]">
      <Frame1 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[662px] left-[405px] top-[181px] w-[735.281px]" data-name="content">
      <p className="absolute font-['EB_Garamond:Regular',sans-serif] font-normal h-[83px] leading-[normal] left-[4.28px] text-[64px] text-black top-0 w-[731px]">Hi there, I’m Sining.</p>
      <p className="absolute font-['EB_Garamond:Regular',sans-serif] font-normal h-[335px] leading-[normal] left-[4.28px] text-[64px] text-black top-[107px] w-[714px]">
        <span>{`I’m a `}</span>
        <span className="font-['EB_Garamond:Italic',sans-serif] italic">design leader</span>
        <span>{` and `}</span>
        <span className="font-['EB_Garamond:Italic',sans-serif] italic">researcher</span>
        <span>{`, passionate about working at the intersection of healthcare and technology. `}</span>
      </p>
      <div className="absolute h-[13px] left-[142.28px] top-[191px] w-[308px]">
        <div className="absolute bottom-[-37.39%] left-0 right-[0.17%] top-[-9.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 20">
            <path d={svgPaths.p29357100} fill="var(--stroke-0, black)" id="Vector 5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] left-[4.28px] text-[36px] text-black top-[490px] w-[714px] whitespace-pre-wrap">
        <span>{`You can also find me tinkering on a new hobby,  hanging out with my `}</span>
        <span className="font-['EB_Garamond:Italic',sans-serif] italic">rescue</span> <span className="font-['EB_Garamond:Italic',sans-serif] italic">pup</span>
        <span>{` and writing `}</span>
        <span className="font-['EB_Garamond:Italic',sans-serif] italic">unfiltered vignettes</span>
        <span>{`. `}</span>
      </p>
      <div className="absolute h-[3.347px] left-0 top-[277.34px] w-[239.342px]">
        <div className="absolute inset-[-72.56%_-0.63%_-141.75%_-0.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 241 11">
            <path d={svgPaths.p7f5af00} fill="var(--stroke-0, black)" id="Vector 6" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-px items-center justify-center left-[488.28px] top-[541px] w-[158px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-px relative w-[158px]">
            <div className="absolute bottom-[-279.32%] left-[-0.01%] right-0 top-[-221.42%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 6">
                <path d={svgPaths.p1cc2b00} fill="var(--stroke-0, black)" id="Vector 8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-px items-center justify-center left-[291.28px] top-[597px] w-[158px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-px relative w-[158px]">
            <div className="absolute bottom-[-279.32%] left-[-0.01%] right-0 top-[-221.42%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 6">
                <path d={svgPaths.p1cc2b00} fill="var(--stroke-0, black)" id="Vector 8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[3px] left-[0.28px] top-[641px] w-[266px]">
        <div className="absolute bottom-[-92.97%] left-0 right-[0.01%] top-[-37.91%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 266 7">
            <path d={svgPaths.p14d35f00} fill="var(--stroke-0, black)" id="Vector 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home">
      <p className="absolute font-['EB_Garamond:Regular',sans-serif] font-normal h-[37px] leading-[normal] left-[1273px] text-[32px] text-black top-[36px] w-[135px]">[ About ]</p>
      <p className="absolute font-['EB_Garamond:Regular',sans-serif] font-normal h-[37px] leading-[normal] left-[59px] text-[32px] text-black top-[954px] w-[102px]">[ Work ]</p>
      <p className="absolute font-['EB_Garamond:Regular',sans-serif] font-normal h-[37px] leading-[normal] left-[1262px] text-[32px] text-black top-[950px] w-[146px]">[ Contact ]</p>
      <Frame />
      <Content />
      <div className="absolute h-[63px] left-[59px] top-[32px] w-[58px]" data-name="logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo1} />
      </div>
    </div>
  );
}