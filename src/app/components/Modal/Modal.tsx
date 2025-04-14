import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

export default function Modal({ children, show, onClose }: { children: React.ReactNode, show: boolean, onClose: () => void }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!show || !mounted) return null;

    return createPortal(
        <div
            className="fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center backdrop-blur-md"
            onClick={onClose}
        >
            <div onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.body
    );
}
