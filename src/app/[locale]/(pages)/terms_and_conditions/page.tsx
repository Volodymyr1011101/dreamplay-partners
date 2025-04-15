import Image from "next/image"
import {terms} from "@/app/[locale]/(pages)/terms_and_conditions/content";

const Page = () => {
    return (
        <div className="relative overflow-hidden leading-[24px]">
            <Image src="/images/termsGlow2.png" alt="logo" width={1170} height={1109} className={`absolute top-0`}/>
            <div className="relative z-10 px-4 xxm:px-[64px] l:px-[124px] text-[#fff]">

                <h1 className={`text-[24px] text-[#fff] font-[700] text-center uppercase xxm:text-[32px] mb-8 pt-8`}>Terms and Conditions</h1>
                <h3 className={`text-[16px] text-[#FBF8F3] mb-3`}>VERSION 1.0 EFFECTIVE FROM [02.04.2025]</h3>
                <p className={`mb-3 `}>
                    This Affiliate Agreement ("Agreement") outlines the terms and conditions between you ("Affiliate") and Dreamplay Affiliates ("We", "Us", "Company", “Affiliate Program”).
                </p>
                <p className={`mb-3 `}>
                    By registering for our Affiliate Program and using our marketing tools, links, or accepting any commissions, you confirm that you have read, understood, and agreed to this Agreement.
                </p>
                <p className={`mb-3 `}>
                    We may amend this Agreement at any time. While we will make reasonable efforts to notify Affiliates of major changes, your continued participation constitutes acceptance of any revisions.  Your continued use of the Affiliate Program will constitute your consent to the updated Agreement.
                </p>

                {terms.map(term => (
                    <div key={term.title}>
                    <h3 className={`text-[16px] text-[#FBF8F3] mb-3`} >{term.title}</h3>
                        {term.items.map((item, index) => (
                            <p className={`mb-3 `} key={item + index}>{item}</p>
                        ))}
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Page;