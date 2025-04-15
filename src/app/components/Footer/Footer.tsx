import type { NextComponentType, NextPageContext } from 'next';
import styles from './footer.module.scss';
import Link from "next/link";
interface Links {
    label: string;
    link: string;
}

const Footer: NextComponentType<NextPageContext, {}> = () => {
const links = [
    {
        label: 'Terms & Conditions',
        link: '/terms_and_conditions'
    },
    {
        label: "Privacy Policy",
        link: '/privacy_policy'
    },
]
    return (
        <footer className={`bg-[#12110E] relative z-10 p-8 text-white`}>
            <div className={`flex flex-col gap-6 items-center mb-[48px] footer-block relative xxm:flex-row xxm:justify-center`}>
                {links.map((item) => (
                    <Link href={item.link} key={item.label}> {item.label} </Link>
                ))}
            </div>
            <div className={`text-[#8D8D8D]`}>
                <p className={`text-center`}>
                    © Dreamplay Aff. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
