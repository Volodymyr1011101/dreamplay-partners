import Image from 'next/image';
const PartnersPage = () => {

    const content = [
        {
            image: '/icons/global.svg',
            title: 'Untapped Market, Maximum Margins',
            description: 'Targeting top Tier-1 & Tier-2 GEOs — Germany, Austria, Portugal, Poland, and Canada. A fresh brand with strong traffic and solid margins.'
        },
        {
            image: '/icons/crown.svg',
            title: 'Elite Yet Agile Affiliate Experience',
            description: 'Dedicated managers, special deals, and fast onboarding. We stay proactive, hands-on, and obsessed with performance. You’re never flying solo.'
        },
        {
            image: '/icons/global.svg',
            title: 'Transparent Stats, Real Revenue',
            description: 'Instant earnings visibility, no bundled brands, no surprises. Real revenue, clean reporting, and full clarity in what you earn — precisely, in real time.'
        },
        {
            image: '/icons/building.svg',
            title: 'Promotions That Actually Perform',
            description: 'Curated in-house promos and VIP programs designed to retain and convert — because we own the full stack. Consistent, data-backed, and built to win.'
        },
        {
            image: '/icons/bag.svg',
            title: 'Monthly Payouts, No Delays',
            description: 'Reconciliations at the start of each month. Payouts via Skrill, Neteller, Bank Transfer, Crypto — all completed within 5 working days.'
        },
        {
            image: '/icons/phone.svg',
            title: 'Reliable Support That Converts',
            description: 'Top-tier conversion rates, VIP-level account managers, and tailored partner offers — built on responsiveness, transparency, and real care.'
        }
    ]
    return (
        <div className={`px-4 text-white relative z-10 m:px-16 l:px-[124px] mb-8 xxm:mb-[96px]`} id='partners'>
            <Image src={`/images/partnersglow.png`} width={966} height={916} alt={`glow`} className={`absolute bottom-0 right-0`}/>
            <div className={`flex gap-3 items-center  mb-6`}>
                <span><Image src={`/images/puzzle-dynamic-premium.png`} width={42} height={42} alt={'puzzle'}/></span>
                <h2 className={`font-semibold text-[32px] `}>Why Partner With Us</h2>
            </div>
            <div className={`flex flex-col gap-8 flex-wrap xxm:flex-row  overflow-hidden xxm:px-4 m:px-0 xxm:gap-0`}>
                {content.map((item, index) => (
                    <div key={index} className={`relative ${index > 0 ? "partners-block" : ''} xxm:w-[47%] m:w-[28%] grow xxm:p-6 m:p-12`}>
                        <div className={`gradient p-[14px] max-w-[48px] xxm:max-w-[88px] xxm:h-[88px] xxm:p-[26px] rounded-[7px] mb-4 border border-[#24221C] border-solid`}>
                            <Image src={item.image} width={20} height={20} alt={'icon'} className={`w-[35px]`}/>
                        </div>
                        <h3 className={`font-[500] text-[24px] mb-4 leading-[32px]`}>
                            {item.title}
                        </h3>
                        <p className={`text-[16px] leading-[24px]`}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PartnersPage