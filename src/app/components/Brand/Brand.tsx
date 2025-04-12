import Image from "next/image"
const Brand = () => {
    const features = [
        "Launch-ready across Germany, Austria, Portugal, Sweden, Poland, and Canada (Q2)",
        "Seamless mobile experience — elegant, responsive, friction-free",
        "Security and Fair Play — fully licensed and transparent by design",
        "Player-first philosophy — tailored VIP journeys, loyalty systems, and 24/7 real support",
        "Exclusive in-house games with premium visuals and fast-loading mechanics",
        "Regular promos crafted by us — not bolted on",
        "High LTVs and engagement rates backed by controlled product cycles"
    ];
    return (
        <div className={`relative z-10 px-4 m:flex gap-16 items-center justify-center xxm:px-8 m:px-16 l:px-[124px] mb-[40px] xxm:mb-[96px]`} id='brand'>
            <div className={`mb-6 m:w-[100%]`}>

                <div className={`flex gap-3 items-center mb-6`}>
                    <span>
                        <Image src={`/icons/play.png`} width={42} height={42} alt={`glow`} />
                    </span>
                    <h2 className={`font-semibold text-[#FBF8F3] text-[32px]`}>
                        Our Brand
                    </h2>
                </div>
                <div className={`text-[#FBF8F3] mb-4`}>
                    <h3 className={`font-semibold text-[24px] mb-4`}>
                        Dreamplay: Where Luxury Meets Luck
                    </h3>
                    <p className={`text-[16px] leading-[28px]`}>
                        Dreamplay isn’t just another casino brand — it’s an experience. Rooted in classic gaming elegance, designed for the modern player, and fine-tuned by game developers, our platform is built to retain, delight, and convert.
                    </p>
                </div>
                <div className={`text-[#FBF8F3]`}>
                    <h4 className={`text-[19px] leading-[28px] font-semibold mb-4`}>Why Affiliates Choose Dreamplay:</h4>
                    <ul className={`pl-[5px] mb-4`}>
                        {features.map((item, i) => (
                            <li key={`item${i}`} className={`list-disc list-inside text-[16px] leading-[28px]`}>{item}</li>
                        ))}
                    </ul>
                    <p className={`font-light text-[16px] leading-[28px] italic text-[#FBF8F3]`}>
                        “When the brand owns the platform, the performance follows.”
                    </p>
                </div>
            </div>
            <div>
                <Image src={`/images/devices.png`} width={1502} height={1424} alt={`glow`} />
            </div>
        </div>
    )
}

export default Brand