import Image from "next/image";
const Commissions = () => {

    const content = [
        {
            title: 'RevShare – 35% to 50%',
            description: 'Transparent. Profitable. And most importantly — no negative carryover. Your success resets each month.'
        },
        {
            title: 'Choose How You Win',
            description: 'Flexible, fair, and built around your traffic strengths.'
        },
        {
            title: 'Sub-Affiliate – 5%+',
            description: 'Grow your network. Earn a percentage from the partners you refer.'
        }
    ]
    return (
        <div className={`relative`}>
            <Image src={`/images/commissionsglow.png`} width={1502} height={1424} alt={`glow`} className={`absolute top-[-300px] right-0 l:w-full max-h-[1300px] object-fill m:top-[-96px]`}/>
            <div className={`w-full bg-[#EFC653] rounded-[24px] relative z-100 px-4 py-6 xxm:x-8 xxm:py-8 m:py-16 m:px-16 l:py-[64px] l:px-[124px] mb-[40px] xxm:mb-[96px]`}>
                <div className={`flex gap-3 items-center mb-6`}>
                    <span><Image src={`/icons/wallet.png`} alt={`wallet`} width={42} height={42} className={`xxm:w-[62px] xxm:h-[62px]`}/> </span>
                    <h2 className={`text-[32px] font-semibold xxm:text-[48px]`}>Commissions</h2>
                </div>
                <div className={`flex flex-col gap-6 m:flex-row`}>
                    {content.map((item, index) => (
                        <div key={index} className={`bg-[#111111] text-[#D4D4D4] text-[20px] leading-[32px] rounded-[16px] p-6 m:w-[30%] grow`}>
                            <h3 className={`text-[24px] font-bold text-[#EFC653] tracking-[-.1px]  `}>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Commissions