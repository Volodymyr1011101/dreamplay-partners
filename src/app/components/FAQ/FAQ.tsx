'use client'
import './styles.scss'
import {useEffect} from "react";
import Image from "next/image";
const FAQ = () => {
    const content = [
        {
            title: 'How are payouts processed?',
            description: ['We reconcile earnings at the beginning of each month, with payouts issued within 5 working days via Skrill, Neteller, Bank Transfer, or Crypto.']
        },
        {
            title: 'What GEOs and traffic sources are accepted?',
            description: ['We welcome social, PPC, SEO, UAC, streamers, and direct outreach. All traffic sources are reviewed individually to ensure alignment with our standards.']
        },
        {
            title: 'How do I get started?',
            description: ['Register via the form', 'Your personal manager will reach out to assist', 'Launch campaigns, start earning']
        },
        {
            title: 'Why should I trust Dreamplay Affiliates?',
            description: [' We\'re not a reseller—we\'re the creators. Dreamplay Affiliates is backed by a full-cycle iGaming team that handles product, promos, and support directly. Our pillars are reliability, transparency, and safety. Every partner gets a dedicated manager and round-the-clock support.']
        },
        {
            title: 'How is commission calculated?',
            description: ['RevShare: Earn 35–50% of NGR', 'CPA: Receive a fixed one-time amount for each qualified lead', 'Hybrid: Combine CPA and RevShare for upfront + ongoing income']
        },
    ]
    useEffect(() => {
        document.querySelectorAll('.accordion-header').forEach(button => {
            button.addEventListener('click', () => {
                const item = button.parentElement;
                const content:HTMLDivElement | null = item!.querySelector('.accordion-content');
                const arrow = item!.querySelector('.faq-arrow');
                item!.classList.toggle('active');

                if (item!.classList.contains('active')) {
                    content!.style.maxHeight = content!.scrollHeight + 30 + 'px';
                } else {
                    content!.style.maxHeight = '';
                }
            });
        });
    }, []);
    return (
        <div className="px-4 xxm:px-8 relative z-10 m:px-16 l:px-[124px] mb-[72px]" id='faq'>
            <div className={`flex items-center gap-3 mb-6`}>
                <span>
                    <Image src={'/icons/faq.png'} alt={`icon`} width={42} height={42} />
                </span>
            <h2 className={`text-[#FBF8F3] text-[32px] font-semibold`}>FAQ</h2>
            </div>
            <div className="accordion relative z-10 flex flex-col gap-4 mb-6">
                {content.map((item, index) => (
                    <div className="accordion-item rounded-[16px] overflow-hidden" key={index}>
                        <button className={`accordion-header px-4 py-6 flex justify-between w-full items-center bg-[#151618] text-left text-[20px] leading-[32px] font-bold`}><span>{item.title}</span> <span><Image src={'/icons/arrow.svg'} width={15} height={8} alt={'arrow'} className={`faq-arrow rotate-[180deg]`}/></span></button>
                        <div className="accordion-content">
                            {item.description.length > 1 ?
                            <ul className={`flex flex-col gap-2 pb-4`}>
                                {item.description.map((description, index) => (
                                    <li key={index} className={`leading-[28px] list-decimal list-inside`}>{description}</li>
                                ))}
                            </ul> : item.description.map((description, index) => (
                                <p key={index} className={`text-[16px] leading-[28px] pb-4`}>{description}</p>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
            <a href="https://t.me/Yaroslav" className={`text-white max-w-[261px] border-2 border-[#24221C] border-solid bg-[#151618] flex  items-center justify-between pl-4 rounded-[100px] ml-auto`}><span>Still have questions? </span><span className={`p-[28px] bg-[#EFC653] rounded-[50%] `}><Image src={`/images/arrow.png`} alt={'arrow'} width={15} height={15} /></span></a>
        </div>
    )
}

export default FAQ