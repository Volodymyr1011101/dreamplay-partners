import Image from "next/image";
import Form from "@/app/components/ui/Form/Form";

const Connect = () => {
    return (
        <div className={`px-4 relative overflow-hidden m:flex m:gap-8 xxm:p-8 m:px-[64px] l:px-[124px]`} id={`connect`}>
            <div className={`m:w-[50%]`}>
                <div className={`absolute w-[300px] m:w-[600px] z-[-1] top-[65px] m:top-[150px] right-[-30px] xxm:right-[150px] m:right-[initial] m:left-[200px]`}>
                    <Image width={200} height={200} src={`/images/inner.svg`} alt={`bg`} className={`absolute top-[-20px] w-full m:left-[-100px] m:top-[-120px]`} />
                    <Image width={400} height={400} src={`/images/outer.svg`} alt={`bg`} className={`absolute to-[0] w-[50%]`} />

                </div>
                <div className={`flex gap-3 items-center relative connect mb-12`}>
                    <span>
                        <Image src={'/icons/connect.png'} alt={'icon'} width={42} height={42} className={`xxm:w-[62px] xxm:h-[62px]`}/>
                    </span>
                    <h2 className={`font-[600] text-[32px] xxm:text-[48px] text-[#FBF8F3]`}>
                        Connect with Us
                    </h2>
                </div>
                <div className={`flex flex-col gap-4 text-[#FBF8F3] mb-6`}>
                    <h3 className={`font-[500] text-[24px] text-[#FBF8F3]`}>
                        Talk To Us Anytime
                    </h3>
                    <a href="mailto:affiliates@dreamplay.bet">📧 affiliates@dreamplay.bet</a>
                    <div className={`flex gap-[3px] text-[#FBF8F3]`}>
                        <span>💬</span>
                        <a href="https://t.me/Yaroslav">Telegram</a>
                        <span>|</span>
                        <a href="https://teams.microsoft.com/l/chat/0/0?users=affiliates@dreamplay.bet">Teams</a>
                        {/*<span>|</span>*/}
                        {/*<a href="#">WhatsApp</a>*/}
                    </div>
                </div>
                <a href="https://dashboard.dreamplayaffiliates.com/affiliate_registration/tfc6c1f52" className={`text-white max-w-[261px] border-2 border-[#24221C] border-solid bg-[#151618] flex  items-center justify-between pl-4 rounded-[100px] mr-auto mb-6`}><span>Become a Partner</span><span className={`p-[28px] bg-[#EFC653] rounded-[50%] `}><Image src={`/images/arrow.png`} alt={'arrow'} width={15} height={15} /></span></a>
            </div>
            <Form/>
        </div>
    )
}

export default Connect