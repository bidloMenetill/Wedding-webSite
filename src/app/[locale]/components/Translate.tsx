'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useState, useEffect } from 'react';

export const Translate: FC = () => {
 const locale = useLocale();
    const router = useRouter();
    const pathName = usePathname();
    const [selectedLanguage, setSelectedLanguage] = useState(locale);

    useEffect(() => {
        if (locale !== selectedLanguage) {
           const newPathname = pathName.replace(
      /^\/[a-zA-Z]{2}(\/.*)?/,
      `/${selectedLanguage}$1`
    );
    router.replace(newPathname);
        }
    }, [locale, selectedLanguage]);

    const list = [
        { id: 'ru', label: 'Ru' },
        { id: 'kg', label: 'Kg' }
    ];
    return (
        <header className='mx-auto z-50 pt-[10px] relative'>
            <ul className='flex text-[1.2rem] text-[#0004]  justify-center gap-5 items-center'>
                {
                    list.map(({ id, label }) => (
                        <li
                            key={id}
                            className={`cursor-pointer ${locale === id ? 'text-[#fafafac4]' : ''}`}
                            onClick={() => setSelectedLanguage(id)}
                        >
                            {label}
                        </li>
                    ))
                }
            </ul>
        </header>
    );
};
