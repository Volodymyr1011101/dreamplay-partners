import type { NextComponentType, NextPageContext } from 'next';
import styles from './footer.module.scss';
interface Links {
    label: string;
    link: string;
}

const Footer: NextComponentType<NextPageContext, {}> = () => {

    return (
        <footer >

        </footer>
    );
};

export default Footer;
