import Image from 'next/image'
import {privacy_policy} from "@/app/[locale]/(pages)/privacy_policy/content";

const Page = () => {
    return (
        <div className="relative overflow-hidden leading-[24px] ">
            <Image src={'/images/termsGlow2.png'} alt="glow" width={1170} height={1109} className={`absolute top-0 left-[50%] -translate-x-[50%]`} />
            <div className={`relative z-10 px-4 xxm:px-[64px] l:px-[124px] text-[#fff] `}>

                <h1 className={`text-[24px] text-[#fff] font-[700] text-center uppercase xxm:text-[32px] mb-8 pt-8`}>Privacy Policy</h1>
                {privacy_policy.map((item, i) => (
                    <div key={item.title + i}>
                        <h2 className={`text-[18px] text-[#FBF8F3] mb-3 font-[700]`}>{item.title}</h2>
                        {item.items.map((item2, i) => (
                            <p className={`text-[#fff] mb-3 leading-[24px]`} key={item2 + i}>
                                {item2}
                            </p>
                        ))}
                    </div>
                ))}
                <h2>
                    Contacting us
                </h2>
                <p className={`text-[#fff]`}>
                    If you have any questions about this Policy, or would like to exercise any of your rights in relation to your personal data, you should contact us by email at <a href={`mailto:affiliates@dreamplay.bet`} className={`underline`}>affiliates@dreamplay.bet</a>
                </p>
            </div>
        </div>
    )
}

export default Page