import React from 'react';

import Image from 'next/image';
import {
  ABOUT_MG,
  BaseFooterMenuProps,
  BUAT_BESOK_ICON_LIST,
  PAGES_LIST_MG,
  SOCIAL_MEDIA_MG,
} from '@/constants/footer';

const Footer = () => {
  return (
    <div className="flex flex-col h-[956px] bg-[#F5F5F5] lg:h-[300px]">
      <div className="flex flex-col lg:flex-row w-full px-4 pt-4  space-y-5  lg:space-y-0 lg:space-x-[185px] lg:px-[88px]) ">
        <div className="flex flex-col w-full py-2 space-y-3">
          <div className="flex space-x-1 items-center">
            <div className="w-6 h-6">
              <Image src="/icon-mg.png" width={24} height={24} alt="icon mg" />
            </div>
            <h2 className="text-2xl font-bold text-[#443E3E]">Muda Ganesha</h2>
          </div>
          <p className="text-xs text-[#8F8F8F]">
            Kampus ITB - Gd. CRCS (Center for Research and Community Service) Lt. 7 Jl. Ganesha no.
            10, Bandung
          </p>
          <div className="w-[346px] h-[90px] relative">
            <Image src="/homepage/image-maps.png" fill style={{ objectFit: 'cover' }} alt="maps" />
          </div>
        </div>

        <div className="flex flex-col space-y-2 w-full md:w-[25rem]">
          <h3 className="font-bold text-base text-[#443E3E] mb-2">Sosmed MG</h3>
          {SOCIAL_MEDIA_MG.map((socialMedia: BaseFooterMenuProps, index: number) => (
            <a href={socialMedia.url} target={'_blank'}>
              <p className="text-xs text-[#8F8F8F]">{socialMedia.name}</p>
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-2 w-full md:w-[30rem]">
          <h3 className="font-bold text-base text-[#443E3E] mb-2">Tentang MG</h3>
          {ABOUT_MG.map((socialMedia: BaseFooterMenuProps, index: number) => (
            <a href={socialMedia.url} target={'_blank'}>
              <p className="text-xs text-[#8F8F8F]">{socialMedia.name}</p>
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-2 w-full md:w-[30rem]">
          <h3 className="font-bold text-base text-[#443E3E] mb-2">Jelajah Portal</h3>
          {PAGES_LIST_MG.map((socialMedia: BaseFooterMenuProps, index: number) => (
            <a href={socialMedia.url} target={'_blank'}>
              <p className="text-xs text-[#8F8F8F]">{socialMedia.name}</p>
            </a>
          ))}
        </div>
        <p className="text-xs text-[#8F8F8F] mt-1 lg:hidden">©2022 Muda Ganesha</p>
      </div>
      <div className="w-full h-[0.5px] bg-[#8F8F8F] my-2 lg:my-4" />
      <div className="px-4 lg:px-[88px] space-y-2 flex flex-col lg:flex-row w-full lg:justify-between">
        <div className="text-xs text-[#8F8F8F] lg:w-[25rem]">
          by Buat Besok & MG Team | Collab | Products
        </div>
        <div className="flex space-x-[10px] w-full lg:w-[25rem] lg:justify-end">
          {BUAT_BESOK_ICON_LIST.map((icon: BaseFooterMenuProps, index: number) => (
            <img
              key={index}
              src={icon.iconUrl}
              width={index === 0 ? '52px' : '16px'}
              height={'16px'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
