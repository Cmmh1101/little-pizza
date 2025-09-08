import Script from 'next/script';

type Option = 'opt1' | 'opt2' | 'opt3';

const cfg = {
  opt1: {
    src: 'https://birdeye.com/embed/v7/175502672222276/11/987654321301115183',
    id: 'bf-revz-widget-987654321301115183',
  },
  opt2: {
    src: 'https://birdeye.com/embed/v7/175502672222276/6/9876543214615183',
    id: 'bf-revz-widget-9876543214615183',
  },
  opt3: {
    src: 'https://birdeye.com/embed/v7/175502672222276/8/9876543218815183',
    id: 'bf-revz-widget-9876543218815183',
  },
} as const;

export default function BirdeyeWidget({ option = 'opt2' as Option }) {
  const { src, id } = cfg[option];
  return (
    <div className='w-full px-0 py-28'>
      <Script src={src} strategy="afterInteractive" async />
      <div id={id} />
      <noscript>Enable JavaScript to view our reviews.</noscript>
    </div>
  );
}