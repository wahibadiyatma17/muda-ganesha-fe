// WA: Social media MG data
export interface BaseFooterMenuProps {
  name: string;
  url: string;
  iconUrl?: string;
}

export type FooterMenuProps = Array<BaseFooterMenuProps>;

export const SOCIAL_MEDIA_MG = [
  { name: 'Email', url: '' },
  { name: 'WhatsApp', url: '' },
  { name: 'Facebook', url: '' },
  { name: 'Instagram', url: '' },
  { name: 'YouTube', url: '' },
  { name: 'TikTok', url: '' },
] as FooterMenuProps;

export const ABOUT_MG = [
  { name: 'Sejarah', url: '' },
  { name: 'Visi Misi', url: '' },
  { name: 'Struktur Organisasi', url: '' },
  { name: 'Laporan Keuangan', url: '' },
  { name: 'Pengembangan Portal', url: '' },
] as FooterMenuProps;

export const PAGES_LIST_MG = [
  { name: 'Beranda', url: '' },
  { name: 'Relasi', url: '' },
  { name: 'Official Info', url: '' },
  { name: 'Blog Post', url: '' },
  { name: 'Chatting', url: '' },
  { name: 'Masuk Portal', url: '' },
] as FooterMenuProps;

export const BUAT_BESOK_ICON_LIST = [
  { name: 'icon', url: '', iconUrl: '/icon-buat-besok.svg' },
  { name: 'whatsapp', url: '', iconUrl: '/icon-whatsapp.svg' },
  { name: 'gmail', url: '', iconUrl: '/icon-gmail.svg' },
] as FooterMenuProps;
