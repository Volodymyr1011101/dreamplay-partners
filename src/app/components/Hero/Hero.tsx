import Image from "next/image";

const Hero = () => {
    return (
        <div className={`hero m:flex flex-row-reverse items-center m:pt-8 mb-16 xxm:mb-[144px]`}>
            <Image src={"/images/mainbg2.png"}  width="1100" height="1100" alt={"Hero"} className={`absolute top-0 right-0 hidden xxm:block`} />
            <Image src={`/images/herobg.png`} alt={`a`} width="600" height="600" className={`absolute top-0 right-0 xxm:hidden`} />
            <Image src={'/images/mainImage.png'} alt={'main'} width='800' height='620' className={`xxm:m-auto m:w-[50%] `} />
            <div className="px-4 relative z-10 xm:px-16 m:w-[50%] m:pr-0 m:pl-32 xl:w-[46%]">
                <span className={`font-[400] text-[16px] text-[#949494] leading-[30px] mb-4 block`}>
                    Dreamplay Affiliates. The Official Partner Program of a Premium Gaming Brand
                </span>
                <h1 className={`text-[48px] font-black leading-[56px] tracking-[-2.2px] text-[#FBF8F3] mb-4 xxm:text-[64px] xxm:leading-[84px]`}>
                    Step Into High Stakes, Smart Rewards.
                </h1>
                <span className={`text-[20px] text-[#FBF8F3] leading-[30px] block mb-8 xxm:mb-12 m:mb-16`}>
                    Affiliate with Dreamplay Affiliates - an elite brand, owned by those who build the games.
                </span>
                <a href="#" className={`text-white max-w-[241px] border-2 border-[#24221C] border-solid bg-[#151618] flex  items-center justify-between pl-4 rounded-[100px]`}><span>Become a Partner</span><span className={`p-[28px] bg-[#EFC653] rounded-[50%]`}><Image src={`/images/arrow.png`} alt={'arrow'} width={15} height={15} /></span></a>
            </div>
            <Image src={"/images/bluebg.png"} className={`absolute top-[0] xxm:top-[-200px] left-[-100px] xxm:left-[-200px] hidden s:block m:top-[-500px]`} width="889" height="843" alt={`glow`}/>
        </div>
    )
}

export default Hero;