"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Design canvas width this layout was built for (every absolute px value
// inside is authored against this exact frame width, confirmed against the
// Figma file). Instead of stretching the canvas to fill whatever viewport
// width the visitor has (which breaks every absolute left/top/right value),
// we keep the canvas at its native size and uniformly scale the whole thing
// to match the current window width — the same idea as Figma's own "Scale"
// resize constraint. No element inside this file needs to change.
const DESIGN_WIDTH = 1440;

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    function updateScale() {
      if (typeof window === "undefined") return;
      const nextScale = window.innerWidth / DESIGN_WIDTH;
      setScale(nextScale);
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    }

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Re-measure if the content's natural height changes after fonts/images load.
  useEffect(() => {
    if (!contentRef.current || typeof ResizeObserver === "undefined") return;
    const node = contentRef.current;
    const observer = new ResizeObserver(() => {
      setContentHeight(node.scrollHeight);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="bg-[#FFF] w-full relative overflow-hidden"
      style={{ height: contentHeight ? contentHeight * scale : undefined }}
    >
      <div
        ref={contentRef}
        className="bg-[#FFF] relative"
        style={{
          width: DESIGN_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
      <div className="bg-[#FFF] w-full h-[766px] absolute left-0 top-0"></div>
      <img
        src="/ChatgptImageJun12202608_40_28Pm1.png"
        className="w-full h-[675px] absolute left-0 top-[138px] max-w-none"
        alt="ChatGPT Image Jun 12, 2026, 08_40_28 PM 1"
      />
      <img
        src="/ChatgptImageJun12202609_19_24Pmphotoroom1.png"
        className="w-full h-[180px] absolute left-0 top-px max-w-none"
        alt="ChatGPT Image Jun 12, 2026, 09_19_24 PM-Photoroom 1"
      />
      <div className="w-full h-[264px] absolute left-0 top-[148px] flex flex-col items-center justify-center">
          <p className="text-[#000] font-instrumentSerif text-[80px] h-[105px] text-center">
            Research made approachable for <i>you</i>
          </p>
          <p className="text-[#535353] font-googleSansFlex text-[25px] w-[985px] h-[67px] text-center mt-8">
            Synthica creates a playground for high school students to conduct
            research and participate in competitions regardless of their levels.
          </p>
          <div className="relative mt-8">
            <svg
              width="157"
              height="54"
              viewBox="0 0 157 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[157px] h-[54px]"
            >
              <rect
                width="156.753"
                height="53.7859"
                rx="26.8929"
                fill="#B1DBFE"
              />
            </svg>
            <p className="text-[#244A73] font-googleSansFlex text-xl absolute inset-0 flex items-center justify-center">
              Join us now
            </p>
          </div>
        </div>
      <div className="rounded-[20px] bg-[rgba(188,188,188,0.10)] w-[175px] h-[60px] absolute left-7 top-[47px]"></div>
      <div className="w-[140px] h-[42px] absolute left-[42px] top-14">
        <p className="text-[#000] font-googleSansFlex text-xl w-[89px] h-[30px] absolute left-[51px] top-[9px]">
          Synthica
        </p>
        <img
          src="/Image2.png"
          className="rounded-[20px] w-[42px] h-[42px] absolute -left-0 -top-0 max-w-none"
          alt="image 2"
        />
      </div>
      <div className="w-[457px] h-[60px] absolute right-7 top-[47px]">
        <div className="rounded-[20px] bg-[rgba(188,188,188,0.10)] w-[457px] h-[60px] absolute left-0 top-0"></div>
        <div className="w-[416px] h-[25px] absolute left-[25px] top-[19px]">
          <p className="text-[#4B4B4B] font-googleSansFlex text-lg w-[52px] h-[25px] absolute left-0 top-0">
            Home
          </p>
          <p className="text-[#4B4B4B] font-googleSansFlex text-lg w-[53px] h-[25px] absolute left-[68px] top-0">
            About
          </p>
          <p className="text-[#4B4B4B] font-googleSansFlex text-lg w-[65px] h-[25px] absolute left-[136px] top-0">
            Journal
          </p>
          <p className="text-[#4B4B4B] font-googleSansFlex text-lg w-[74px] h-[25px] absolute left-[216px] top-0">
            Program
          </p>
          <p className="text-[#4B4B4B] font-googleSansFlex text-lg w-[110px] h-[25px] absolute left-[306px] top-0">
            Work with us
          </p>
        </div>
      </div>
      <p className="text-[#4B4B4B] font-googleSansFlex text-[40px] bg-linear-[90deg,#B0DBFD0%,#0070C8100%] w-full h-[53px] absolute left-0 top-[813px] text-center pl-8">
        At Synthica, we kickstart your Research Career.
      </p>
      <p className="text-[#000] font-googleSansFlex text-[40px] font-medium bg-linear-[90deg,#B0DBFD0%,#0070C84.81%] w-[450px] h-[101px] absolute left-[87px] top-[1579px]">
        Learn how we work in 4 simple steps.
      </p>
      <div className="rounded-[50px] bg-[#F4F5F7] w-[1073px] h-[581px] absolute left-[197px] top-[908px]"></div>
      <div className="rounded-[25px] bg-[#FFF] w-[390px] h-[509px] absolute left-[236px] top-[944px]"></div>
      <div className="rounded-[25px] border border-[#DCEBFA] bg-[#EAF4FF] w-[580px] h-[284px] absolute left-[651px] top-[1169px]"></div>
      <img
        src="/Rectangle9.png"
        className="rounded-[25px] w-[580px] h-[204px] absolute left-[651px] top-[944px] max-w-none"
        alt="Rectangle 9"
      />
      <div className="w-[424px] h-[72px] absolute left-[729px] top-[1010px]">
        <p className="text-[#000] font-googleSansFlex text-[40px] font-medium w-[142px] h-[52px] absolute left-[140px] top-0">
          16000+
        </p>
        <p className="text-[#000] font-googleSansFlex text-[19px] w-[424px] h-[25px] absolute -left-0 top-12">
          Researchers as members of Synthica worldwide
        </p>
      </div>
      <div className="w-[578px] h-[33px] absolute left-[652px] top-[1201px]">
        <div className="rounded-[50px] bg-[#DCEBFA] w-[77px] h-[33px] absolute left-0 top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[105px] h-[33px] absolute left-[86px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[105px] h-[33px] absolute left-[201px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[105px] h-[33px] absolute left-[315px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[105px] h-[33px] absolute left-[429px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[35px] h-[33px] absolute left-[543px] top-0"></div>
      </div>
      <div className="w-[579px] h-[33px] absolute left-[651px] top-[1342px]">
        <div className="rounded-[50px] bg-[#DCEBFA] w-[53px] h-[33px] absolute -left-0 top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[131px] h-[33px] absolute left-[61px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[70px] h-[33px] absolute left-[201px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[145px] h-[33px] absolute left-[280px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[65px] h-[33px] absolute left-[429px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[78px] h-[33px] absolute left-[501px] top-0"></div>
      </div>
      <div className="w-[579px] h-[33px] absolute left-[651px] top-[1389px]">
        <div className="rounded-[50px] bg-[#DCEBFA] w-[110px] h-[33px] absolute left-0 top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[77px] h-[33px] absolute left-[115px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[141px] h-[33px] absolute left-[201px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[75px] h-[33px] absolute left-[349px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[111px] h-[33px] absolute left-[429px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-8 h-[33px] absolute left-[547px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[110px] h-[33px] absolute left-0 top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[77px] h-[33px] absolute left-[115px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[141px] h-[33px] absolute left-[201px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[75px] h-[33px] absolute left-[349px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[111px] h-[33px] absolute left-[429px] top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-8 h-[33px] absolute left-[547px] top-0"></div>
      </div>
      <div className="w-[578px] h-[33px] absolute left-[652px] top-[1295px]">
        <div className="rounded-[50px] bg-[#DCEBFA] w-[78px] h-[33px] absolute left-0 -top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[132px] h-[33px] absolute left-[87px] -top-0"></div>
        <div className="rounded-[50px] bg-[#D2E4F8] w-[152px] h-[33px] absolute left-[228px] -top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-[124px] h-[33px] absolute left-[394px] -top-0"></div>
        <div className="rounded-[50px] bg-[#DCEBFA] w-11 h-[33px] absolute left-[534px] -top-0"></div>
      </div>
      <div className="rounded-[50px] bg-[#DCEBFA] w-[132px] h-[33px] absolute left-[652px] top-[1248px]"></div>
      <div className="rounded-[50px] border border-[#DCEBFA] bg-[#D2E4F8] w-[134px] h-[33px] absolute left-[793px] top-[1248px]"></div>
      <div className="rounded-[50px] border border-[#DCEBFA] bg-[#D2E4F8] w-[145px] h-[33px] absolute left-[936px] top-[1248px]"></div>
      <div className="rounded-[50px] bg-[#DCEBFA] w-[140px] h-[33px] absolute left-[1090px] top-[1248px]"></div>
      <div className="w-[98px] h-[19px] absolute left-[811px] top-[1255px]">
        <div className="w-[13px] h-[13px] absolute left-0 top-[3px]">
          <div className="w-[13px] h-[13px] absolute left-0 top-0">
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0 top-0.5"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0 top-[3px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0 top-[5px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0 top-[7px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-2 top-0.5"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-2 top-[3px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-2 top-[5px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-2 top-[7px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-2 top-2"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-2 top-2.5"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0.5 top-0.5"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0.5 top-[3px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0.5 top-[5px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0.5 top-[7px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0.5 top-2"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[5px] top-[3px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[5px] top-[5px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[5px] top-[7px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[5px] top-2"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[5px] top-2.5"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[5px] top-3"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0.5 top-0"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-2.5 top-0.5"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-2.5 top-[3px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-2.5 top-[5px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-2.5 top-[7px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-2.5 top-2"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-2.5 top-0"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[3px] top-0.5"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[3px] top-[3px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[3px] top-[5px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[3px] top-[7px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[3px] top-2"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[3px] top-2.5"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[7px] top-[3px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[7px] top-[5px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[7px] top-[7px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[7px] top-2"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[7px] top-2.5"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[7px] top-3"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-3 top-0.5"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-3 top-[3px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-3 top-[5px]"></div>
            <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-3 top-[7px]"></div>
          </div>
        </div>
        <p className="text-[#244A73] font-googleSansFlex text-sm font-medium w-[81px] h-[19px] absolute left-[17px] top-0">
          Community
        </p>
      </div>
      <div className="w-[114px] h-[19px] absolute left-[954px] top-[1255px]">
        <p className="text-[#244A73] font-googleSansFlex text-sm font-medium w-[97px] h-[19px] absolute left-[17px] top-0">
          Opportunities
        </p>
        <div className="w-[13px] h-[13px] absolute -left-0 top-[3px]">
          <div className="w-[13px] h-[13px] absolute left-0 top-0">
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[3px] top-[3px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[3px] top-0.5"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[3px] top-0"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[5px] top-[5px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[7px] top-[5px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-2 top-[5px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[3px] top-[5px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[5px] top-[7px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[7px] top-[7px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[3px] top-[7px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-0 top-[7px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[5px] top-2"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[7px] top-2"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-2 top-2"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[3px] top-2"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-0 top-2"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[5px] top-2.5"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[7px] top-2.5"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[3px] top-2.5"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-0 top-2.5"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[5px] top-3"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[7px] top-3"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-2 top-3"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-2.5 top-3"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-3 top-3"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[3px] top-3"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-0 top-3"></div>
          </div>
        </div>
      </div>
      <div className="w-[111px] h-[19px] absolute left-[903px] top-[1301px]">
        <p className="text-[#244A73] font-googleSansFlex text-sm font-medium w-[94px] h-[19px] absolute left-[17px] -top-0">
          Competitions
        </p>
        <div className="w-[13px] h-[13px] absolute -left-0 top-[3px]">
          <div className="w-[13px] h-[13px] absolute left-0 top-0">
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-0 top-[5px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-0 top-[7px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-0 top-2"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-0 top-2.5"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-0 top-3"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-0.5 top-[5px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-0.5 top-[7px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-0.5 top-2"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-0.5 top-2.5"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-0.5 top-3"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[3px] top-[7px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[3px] top-2"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[3px] top-2.5"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[3px] top-3"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[5px] top-0"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[5px] top-0.5"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[5px] top-[3px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[5px] top-[7px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[5px] top-2"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[7px] top-0"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[7px] top-[7px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-[7px] top-2"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-2 top-[7px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-2 top-2"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-2 top-2.5"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-2 top-3"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-2.5 top-[5px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-2.5 top-[7px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-2.5 top-2"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-2.5 top-2.5"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-2.5 top-3"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-3 top-[5px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-3 top-[7px]"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-3 top-2"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-3 top-2.5"></div>
            <div className="bg-[#000] w-0.5 h-0.5 absolute left-3 top-3"></div>
          </div>
        </div>
      </div>
      <p className="text-[#4B4B4B] font-googleSansFlex text-2xl w-[398px] h-12 absolute left-[92px] top-[1694px]">
        Learn how Synthica works and become a part of us.
      </p>
      <div className="w-10 h-10 absolute left-[647px] top-[1589px]">
        <div className="rounded-[50px] bg-[#244A73] w-10 h-10 absolute -left-0 top-0"></div>
        <p className="text-[#FFF] font-googleSansFlex text-2xl w-[7px] h-6 absolute left-4 top-2">
          1
        </p>
      </div>
      <div className="w-10 h-10 absolute left-[647px] top-[2047px]">
        <div className="rounded-[50px] bg-[#244A73] w-10 h-10 absolute -left-0 -top-0"></div>
        <p className="text-[#FFF] font-googleSansFlex text-2xl w-2.5 h-6 absolute left-3.5 top-2 text-center">
          2
        </p>
      </div>
      <div className="w-10 h-10 absolute left-[647px] top-[2506px]">
        <div className="rounded-[50px] bg-[#244A73] w-10 h-10 absolute -left-0 -top-0"></div>
        <p className="text-[#FFF] font-googleSansFlex text-2xl w-2.5 h-6 absolute left-3.5 top-2 text-center">
          3
        </p>
      </div>
      <div className="w-10 h-10 absolute left-[647px] top-[2965px]">
        <div className="rounded-[50px] bg-[#244A73] w-10 h-10 absolute -left-0 top-0"></div>
        <p className="text-[#FFF] font-googleSansFlex text-2xl w-3 h-6 absolute left-3.5 top-2 text-center">
          4
        </p>
      </div>
      <div className="w-[566px] h-[410px] absolute left-[717px] top-[1589px]">
        <svg
          width="567"
          height="411"
          viewBox="0 0 567 411"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[566px] h-[410px] absolute -left-0 top-0 "
        >
          <path
            d="M0 20C0 8.9543 8.95431 0 20 0H546.106C557.151 0 566.106 8.9543 566.106 20V390.326C566.106 401.372 557.151 410.326 546.106 410.326H20C8.95431 410.326 0 401.372 0 390.326V20Z"
            fill="#F4F5F7"
          />
        </svg>
        <img
          src="/Rectangle25.png"
          className="rounded-[20px] w-[413px] h-[234px] absolute left-[77px] top-[97px] max-w-none"
          alt="Rectangle 25"
        />
        <p className="text-[#000] font-googleSansFlex text-[17px] w-[506px] h-10 absolute left-[31px] top-[26px] text-center">
          Become part of our global network of student researchers by joining
          our Discord server and connecting with peers.
        </p>
        <div className="rounded-[30px] bg-[#FFF] shadow-[02px2px0rgba(0,0,0,0.25)] w-[482px] h-[72px] absolute left-[43px] top-[307px]"></div>
        <div className="w-[359px] h-[31px] absolute left-[104px] top-[328px]">
          <div className="w-6 h-6 absolute left-0 top-[3px] overflow-hidden">
            <div className="w-6 h-6 absolute left-0 top-0">
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-0 top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-0 top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-0 top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-0 top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-0 top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-0 top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-[15px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-[15px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-[15px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[15px] top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[15px] top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[15px] top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[18px] top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[18px] top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[18px] top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[21px] top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[21px] top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[21px] top-1.5"></div>
            </div>
          </div>
          <p className="text-[#000] font-googleSansFlex text-2xl w-[326px] h-[31px] absolute left-[33px] -top-0 text-center">
            Join our Research Community
          </p>
        </div>
      </div>
      <div className="w-[566px] h-[410px] absolute left-[717px] top-[2043px]">
        <svg
          width="567"
          height="411"
          viewBox="0 0 567 411"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[566px] h-[410px] absolute -left-0 top-0 "
        >
          <path
            d="M0 20C0 8.9543 8.95431 0 20 0H546.106C557.151 0 566.106 8.9543 566.106 20V390.326C566.106 401.372 557.151 410.326 546.106 410.326H20C8.95431 410.326 0 401.372 0 390.326V20Z"
            fill="#F4F5F7"
          />
        </svg>
        <img
          src="/Rectangle25(1).png"
          className="rounded-[20px] w-[413px] h-[234px] absolute left-[77px] top-[97px] max-w-none"
          alt="Rectangle 25"
        />
        <p className="text-[#000] font-googleSansFlex text-[17px] w-[506px] h-10 absolute left-[31px] top-[25px] text-center">
          Access our high-quality research curriculum and learn the foundations
          of academic research at your own pace.
        </p>
        <div className="rounded-[30px] bg-[#FFF] shadow-[02px2px0rgba(0,0,0,0.25)] w-[482px] h-[72px] absolute left-[43px] top-[307px]"></div>
        <div className="w-[398px] h-[31px] absolute left-[84px] top-[328px]">
          <div className="w-6 h-6 absolute -left-0 top-[3px] overflow-hidden">
            <div className="w-6 h-6 absolute left-0 top-0">
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-0 top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-0 top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-0 top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-0 top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-0 top-[15px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-0 top-[18px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-[15px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-[15px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-[15px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-[15px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[15px] top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[15px] top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[15px] top-[15px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[15px] top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[18px] top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[18px] top-[15px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[18px] top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[21px] top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[21px] top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[21px] top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[21px] top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[21px] top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[21px] top-[15px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[21px] top-[21px]"></div>
            </div>
          </div>
          <p className="text-[#000] font-googleSansFlex text-2xl w-[365px] h-[31px] absolute left-[33px] -top-0">
            Learn from our Expert Curriculum
          </p>
        </div>
      </div>
      <div className="w-[566px] h-[410px] absolute left-[717px] top-[2499px]">
        <svg
          width="567"
          height="411"
          viewBox="0 0 567 411"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[566px] h-[410px] absolute -left-0 top-0 "
        >
          <path
            d="M0 20C0 8.9543 8.95431 0 20 0H546.106C557.151 0 566.106 8.9543 566.106 20V390.326C566.106 401.372 557.151 410.326 546.106 410.326H20C8.95431 410.326 0 401.372 0 390.326V20Z"
            fill="#F4F5F7"
          />
        </svg>
        <img
          src="/Rectangle25(2).png"
          className="rounded-[20px] w-[413px] h-[234px] absolute left-[77px] top-[97px] max-w-none"
          alt="Rectangle 25"
        />
        <p className="text-[#000] font-googleSansFlex text-[17px] w-[506px] h-10 absolute left-[33px] top-8 text-center">
          Apply what you've learned to create your own original research
          project, with guidance from our community resources.
        </p>
        <div className="rounded-[30px] bg-[#FFF] shadow-[02px2px0rgba(0,0,0,0.25)] w-[482px] h-[72px] absolute left-[43px] top-[307px]"></div>
        <div className="w-[365px] h-[31px] absolute left-[101px] top-[328px]">
          <p className="text-[#000] font-googleSansFlex text-2xl w-[337px] h-[31px] absolute left-[27px] top-0">
            Develop your Research Project
          </p>
          <div className="w-6 h-6 absolute left-0 top-[3px] overflow-hidden">
            <div className="w-[18px] h-6 absolute left-[3px] top-0">
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[3px] top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-1.5 top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-[15px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[9px] top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-[15px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-3 top-[21px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[15px] top-0"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[15px] top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[15px] top-[9px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[15px] top-3"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[18px] top-[3px]"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[18px] top-1.5"></div>
              <div className="bg-[#FFF] w-[3px] h-[3px] absolute left-[18px] top-[9px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[566px] h-[410px] absolute left-[724px] top-[2956px]">
        <svg
          width="567"
          height="411"
          viewBox="0 0 567 411"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[566px] h-[410px] absolute -left-0 -top-0 "
        >
          <path
            d="M0 20C0 8.9543 8.95431 0 20 0H546.106C557.151 0 566.106 8.9543 566.106 20V390.326C566.106 401.372 557.151 410.326 546.106 410.326H20C8.95431 410.326 0 401.372 0 390.326V20Z"
            fill="#F4F5F7"
          />
        </svg>
        <img
          src="/Rectangle25(3).png"
          className="rounded-[20px] w-[413px] h-[234px] absolute left-[77px] top-[97px] max-w-none"
          alt="Rectangle 25"
        />
        <p className="text-[#000] font-googleSansFlex text-[17px] w-[506px] h-10 absolute left-[31px] top-[26px] text-center">
          Showcase your findings at our international research competitions and
          earn recognition for your work.
        </p>
        <div className="rounded-[30px] bg-[#FFF] shadow-[02px2px0rgba(0,0,0,0.25)] w-[482px] h-[72px] absolute left-[43px] top-[307px]"></div>
      </div>
      <div className="bg-[#D9D9D9] w-0.5 h-[412px] absolute left-[666px] top-[1631px]"></div>
      <div className="bg-[#D9D9D9] w-0.5 h-[409px] absolute left-[666px] top-[2092px]"></div>
      <div className="bg-[#D9D9D9] w-0.5 h-[405px] absolute left-[666px] top-[2553px]"></div>
      <div className="w-[325px] h-[31px] absolute left-[818px] top-[3285px]">
        <div className="w-[325px] h-[31px] absolute -left-0 -top-0">
          <div className="w-6 h-6 absolute -left-0 top-[3px]">
            <div className="w-6 h-6 absolute left-0 top-0">
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-0 top-[9px]"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-[3px] top-[9px]"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-[3px] top-[18px]"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-[3px] top-[21px]"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-1.5 top-1.5"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-1.5 top-[15px]"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-[9px] top-0"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-[9px] top-1.5"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-[9px] top-[9px]"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-[9px] top-3"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-3 top-0"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-3 top-1.5"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-3 top-[9px]"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-3 top-3"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-[15px] top-1.5"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-[15px] top-[15px]"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-[18px] top-[9px]"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-[18px] top-[18px]"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-[18px] top-[21px]"></div>
              <div className="bg-[#000] w-[3px] h-[3px] absolute left-[21px] top-[9px]"></div>
            </div>
          </div>
          <p className="text-[#000] font-googleSansFlex text-2xl w-[295px] h-[31px] absolute left-[31px] -top-0">
            Participate in Competitions
          </p>
        </div>
      </div>
      <div className="w-full h-[714px] absolute left-0 top-[4541px]">
        <div className="flex pt-px pr-14 pb-px pl-[54px] flex-col justify-center items-start border-t border-t-[#000] border-b border-b-[#000] bg-[#FFF] w-full absolute left-0.5 top-0">
          <div className="border-r border-r-[#000] border-l border-l-[#000] w-full h-[55px]"></div>
        </div>
        <div className="flex py-px px-14 flex-col justify-center items-start border-t border-t-[#000] border-b border-b-[#000] bg-[#FFF] w-full h-[601px] absolute left-0 top-[57px]">
          <div className="flex pr-px flex-col items-start shrink-0 border-r border-r-[#000] border-l border-l-[#000] w-full h-[600px]">
            <div className="flex flex-col justify-center items-start w-full">
              <img
                src="/Backgroundborder.png"
                className="border border-[#000] w-[1088px] h-[602px] overflow-hidden max-w-none"
                alt="Background+Border"
              />
            </div>
          </div>
        </div>
        <div className="flex pt-px pr-14 pb-px pl-[54px] flex-col justify-center items-start border-t border-t-[#000] border-b border-b-[#000] bg-[#FFF] w-full absolute left-0.5 top-[657px]">
          <div className="flex pt-0 pr-[468px] pb-0 pl-[18px] items-center gap-0.5 border-r border-r-[#000] border-l border-l-[#000] w-full h-[55px]">
            <p className="text-[#000] font-googleSansFlex text-[21px] font-medium leading-[62.4px] w-[586px] h-[63px]">
              © 2026 Synthica. All rights reserved. Platform developed with{" "}
            </p>
            <div className="w-3.5 h-3.5 relative">
              <div className="w-3.5 h-3.5 absolute left-0 top-0">
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0 top-0.5"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0 top-1"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0 top-[5px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0 top-[7px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[9px] top-0.5"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[9px] top-1"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[9px] top-[5px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[9px] top-[7px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[9px] top-[9px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[9px] top-[11px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0.5 top-0.5"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0.5 top-1"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0.5 top-[5px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0.5 top-[7px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0.5 top-[9px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[5px] top-1"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[5px] top-[5px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[5px] top-[7px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[5px] top-[9px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[5px] top-[11px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[5px] top-3"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-0.5 top-0"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[11px] top-0.5"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[11px] top-1"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[11px] top-[5px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[11px] top-[7px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[11px] top-[9px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[11px] top-0"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-1 top-0.5"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-1 top-1"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-1 top-[5px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-1 top-[7px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-1 top-[9px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-1 top-[11px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[7px] top-1"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[7px] top-[5px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[7px] top-[7px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[7px] top-[9px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[7px] top-[11px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-[7px] top-3"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-3 top-0.5"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-3 top-1"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-3 top-[5px]"></div>
                <div className="bg-[#FFF] w-0.5 h-0.5 absolute left-3 top-[7px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex items-start gap-10 h-[124px] absolute left-[157px] top-[3580px]">
        <div className="flex p-7 flex-col items-start gap-2.5 rounded-xl border border-[#E7E7E7] bg-[#FFF] w-[344px] h-[124px] absolute left-0 top-0 overflow-hidden">
          <div className="flex flex-col items-start gap-5 shrink-0 w-[339px] h-[72px]">
            <div className="flex flex-col items-start gap-5 w-fit">
              <div className="flex p-1.5 justify-center items-center rounded bg-[#D2E4F8] w-8 h-8">
                <div className="flex py-[5px] px-[3px] justify-center items-center shrink-0 w-5 h-5 overflow-hidden">
                  <div className="flex justify-center items-center shrink-0 w-3.5 h-2.5 overflow-hidden">
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 w-3.5 h-2.5 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_152_687)">
                        <path
                          d="M1 5.23529L4.84 9L13 1"
                          stroke="#244A73"
                          strokeWidth="1.5"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_152_687">
                          <rect width="14" height="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex pt-0 pr-[175px] pb-0.5 pl-0 items-center w-[339px] h-5">
                <p className="text-[#131313] font-googleSansFlex text-xl leading-5 w-[164px] h-5">
                  Zero money spent
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-7 flex-col items-start gap-2.5 rounded-xl border border-[#E7E7E7] bg-[#FFF] w-[360px] h-[124px] absolute left-96 top-0 overflow-hidden">
          <div className="flex flex-col items-start gap-5 w-[290px]">
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex pt-1.5 pr-1.5 pb-1.5 pl-1.5 justify-center items-center rounded bg-[#D2E4F8] w-8 h-8">
                <div className="flex py-[5px] px-[3px] justify-center items-center shrink-0 w-5 h-5 overflow-hidden">
                  <div className="flex justify-center items-center shrink-0 w-3.5 h-2.5 overflow-hidden">
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 w-3.5 h-2.5 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_152_698)">
                        <path
                          d="M1 5.23529L4.84 9L13 1"
                          stroke="#244A73"
                          strokeWidth="1.5"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_152_698">
                          <rect width="14" height="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer text-nowrap flex pb-0.5 justify-center items-center w-full h-5">
                <p className="text-[#131313] font-googleSansFlex text-xl leading-5 w-[290px] h-5">
                  Open to all high school students
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex p-7 flex-col items-start gap-2.5 rounded-xl border border-[#E7E7E7] bg-[#FFF] w-[360px] absolute left-[784px] top-0 overflow-hidden">
          <div className="flex flex-col items-start gap-5 w-[304px] h-[72px]">
            <div className="flex flex-col items-start gap-5 w-fit">
              <div className="flex p-1.5 justify-center items-center rounded bg-[#D2E4F8] w-8 h-8">
                <div className="flex py-[5px] px-[3px] justify-center items-center shrink-0 w-5 h-5 overflow-hidden">
                  <div className="flex justify-center items-center shrink-0 w-3.5 h-2.5 overflow-hidden">
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 w-3.5 h-2.5 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_152_709)">
                        <path
                          d="M1 5.23529L4.84 9L13 1"
                          stroke="#244A73"
                          strokeWidth="1.5"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_152_709">
                          <rect width="14" height="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex pt-0 pr-[35px] pb-0.5 pl-0 items-center w-[339px] h-5">
                <p className="text-[#131313] font-googleSansFlex text-xl leading-5 w-[304px] h-5">
                  Research Leadership Opportunity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex flex-col justify-center font-googleSansFlex text-[42px] leading-[57.6px] bg-linear-[90deg,#B0DBFD0%,#0070C851.44%] text-[#4B4B4B] w-[724px] h-[58px] absolute left-[420px] top-[3494px] text-center">
        Zero cost. Non-selective Program.
      </p>
      <div className="flex py-[42px] px-0 justify-center items-center bg-[#FFF] w-full h-[716px] absolute left-0 top-[3765px] overflow-hidden">
        <div className="shrink-0 w-full h-[632px] relative">
          <button className="cursor-pointer text-nowrap flex pt-6 pr-[263px] pb-6 pl-[263px] justify-center items-center w-full h-28 absolute left-0 top-0">
            <p className="flex flex-col justify-center shrink-0 text-[#000] font-googleSansFlex text-[49px] font-medium leading-[62.4px] w-[674px] h-16 text-center">
              Frequently Asked Questions
            </p>
          </button>
          <div className="w-[1070px] h-[529px] absolute left-[88px] top-28">
            <div className="flex pt-3 flex-col justify-end items-end gap-4 w-[489px] h-[484px] absolute left-0 top-[15px]">
              <div className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] w-[489px] h-[110px] relative">
                <div className="inline-flex pt-0 pr-[41px] pb-0 pl-[23px] items-center gap-[191px] w-[485px] h-[30px] absolute left-1 top-10">
                  <p className="flex flex-col justify-center text-[#1E1E1E] font-googleSansFlex text-[19px] leading-[30px] w-[206px] h-[30px] absolute left-[23px] top-0">
                    What is Synthica?
                  </p>
                  <div className="w-6 h-6 absolute left-[420px] top-[3px] overflow-hidden">
                    <div className="rounded-[10px] bg-[#111] w-3.5 h-0.5 absolute left-[5px] top-[11px]"></div>
                    <div className="rounded-[10px] bg-[#111] w-0.5 h-3.5 absolute left-[11px] top-[5px]"></div>
                  </div>
                </div>
                <div className="border-t border-t-[#F4F5F7] w-[489px] h-[117px] absolute left-0 -top-[7px]"></div>
              </div>
              <div className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] w-[485px] h-[110px] relative">
                <div className="inline-flex pt-0 pr-[39px] pb-0 pl-[17px] items-center gap-[7px] w-[481px] h-[30px] absolute left-1 top-10">
                  <p className="flex flex-col justify-center text-[#1E1E1E] font-googleSansFlex text-[19px] leading-[30px] w-[394px] h-[30px] absolute left-[17px] top-0">
                    How much does it cost to join Synthica?
                  </p>
                  <div className="w-6 h-6 absolute left-[418px] top-[3px] overflow-hidden">
                    <div className="rounded-[10px] bg-[#111] w-3.5 h-0.5 absolute left-[5px] top-[11px]"></div>
                    <div className="rounded-[10px] bg-[#111] w-0.5 h-3.5 absolute left-[11px] top-[5px]"></div>
                  </div>
                </div>
                <div className="border-t border-t-[#F4F5F7] w-[485px] h-[122px] absolute left-0 -top-3"></div>
              </div>
              <div className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] w-[489px] h-[110px] relative">
                <div className="inline-flex pt-0 pr-[38px] pb-0 pl-5 items-center gap-[65px] w-[485px] h-[30px] absolute left-1 top-10">
                  <p className="flex flex-col justify-center text-[#1E1E1E] font-googleSansFlex text-[19px] leading-[30px] w-[338px] h-[30px] absolute left-5 top-0">
                    How can I join the community?
                  </p>
                  <div className="w-6 h-6 absolute left-[423px] top-[3px] overflow-hidden">
                    <div className="rounded-[10px] bg-[#111] w-3.5 h-0.5 absolute left-[5px] top-[11px]"></div>
                    <div className="rounded-[10px] bg-[#111] w-0.5 h-3.5 absolute left-[11px] top-[5px]"></div>
                  </div>
                </div>
                <div className="border-t border-t-[#F4F5F7] w-[489px] h-[117px] absolute left-0 -top-[7px]"></div>
              </div>
              <div className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] w-[489px] h-[110px] relative">
                <div className="inline-flex pt-0 pr-[39px] pb-0 pl-[17px] items-center gap-8 w-[485px] h-[30px] absolute left-1 top-10">
                  <p className="flex flex-col justify-center text-[#1E1E1E] font-googleSansFlex text-[19px] leading-[30px] w-[373px] h-[30px] absolute left-[17px] top-0">
                    What is the Global Research Challenge?
                  </p>
                  <div className="w-6 h-6 absolute left-[422px] top-[3px] overflow-hidden">
                    <div className="rounded-[10px] bg-[#111] w-3.5 h-0.5 absolute left-[5px] top-[11px]"></div>
                    <div className="rounded-[10px] bg-[#111] w-0.5 h-3.5 absolute left-[11px] top-[5px]"></div>
                  </div>
                </div>
                <div className="border-t border-t-[#F4F5F7] w-[489px] h-[117px] absolute left-0 -top-[7px]"></div>
              </div>
            </div>
            <div className="inline-flex pl-px flex-col items-end gap-4 w-[488px] h-[324px] absolute left-[536px] top-[60px]">
              <div className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] w-[488px] h-[110px] absolute left-[5px] -top-[34px]">
                <div className="inline-flex pt-0 pr-[50px] pb-0 pl-[26px] items-center gap-[47px] w-[484px] h-[30px] absolute left-1 top-10">
                  <p className="flex flex-col justify-center text-[#1E1E1E] font-googleSansFlex text-[19px] leading-[30px] w-[336px] h-[30px] absolute left-[26px] top-0">
                    Do I need prior research experience?
                  </p>
                  <div className="w-6 h-6 absolute left-[410px] top-[3px] overflow-hidden">
                    <div className="rounded-[10px] bg-[#111] w-3.5 h-0.5 absolute left-[5px] top-[11px]"></div>
                    <div className="rounded-[10px] bg-[#111] w-0.5 h-3.5 absolute left-[11px] top-[5px]"></div>
                  </div>
                </div>
                <div className="border-t border-t-[#F4F5F7] w-[488px] h-[122px] absolute -left-[13px] -top-3"></div>
              </div>
              <div className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] w-[488px] h-[110px] absolute left-[5px] top-[92px]">
                <div className="inline-flex pt-0 pr-[50px] pb-0 pl-[27px] items-center gap-[79px] w-[484px] h-[30px] absolute left-1 top-10">
                  <p className="flex flex-col justify-center text-[#1E1E1E] font-googleSansFlex text-[19px] leading-[30px] w-[303px] h-[30px] absolute left-[27px] top-0">
                    More faq
                  </p>
                  <div className="w-6 h-6 absolute left-[410px] top-[3px] overflow-hidden">
                    <div className="rounded-[10px] bg-[#111] w-3.5 h-0.5 absolute left-[5px] top-[11px]"></div>
                    <div className="rounded-[10px] bg-[#111] w-0.5 h-3.5 absolute left-[11px] top-[5px]"></div>
                  </div>
                </div>
                <div className="border-t border-t-[#F4F5F7] w-[488px] h-[119px] absolute left-0 -top-[9px]"></div>
              </div>
              <div className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] w-[492px] h-[110px] absolute left-px top-[218px]">
                <div className="inline-flex pt-0 pr-[47px] pb-0 pl-8 items-center gap-[189px] w-[488px] h-[30px] absolute left-1 top-10">
                  <p className="flex flex-col justify-center text-[#1E1E1E] font-googleSansFlex text-[19px] leading-[30px] w-[195px] h-[30px] absolute left-8 top-0">
                    more faq
                  </p>
                  <div className="w-6 h-6 absolute left-[417px] top-[3px] overflow-hidden">
                    <div className="rounded-[10px] bg-[#111] w-3.5 h-0.5 absolute left-[5px] top-[11px]"></div>
                    <div className="rounded-[10px] bg-[#111] w-0.5 h-3.5 absolute left-[11px] top-[5px]"></div>
                  </div>
                </div>
                <div className="border-t border-t-[#F4F5F7] w-[492px] h-[121px] absolute left-0 -top-[11px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
