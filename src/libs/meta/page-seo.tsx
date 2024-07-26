import { useLocale } from 'next-intl';
import Head from 'next/head';
import { headers } from 'next/headers';

import { DEFAULT_LOCALE, SUPPORTED_LANGUAGES } from '../i18n';
import { APP_TITLE, getAlternateHrefLinks } from './meta';

interface PageSEOProps {
  title?: string;
  description?: string;
  url?: string;
}

export const PageSEO = (props: PageSEOProps) => {
  const headersList = headers();
  const asPath = headersList.get('x-url-path') || '/';
  const currentLocale = useLocale();

  const {
    title,
    url = `${process.env.NEXT_PUBLIC_APP_URL}${asPath}`,
    description = APP_TITLE,
  } = props;

  return (
    <Head>
      <title>{title}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />

      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      <meta property="og:url" content={url} />
      <meta name="twitter:url" content={url} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      <meta property="og:site_name" content={APP_TITLE} />
      <meta property="og:locale" content={currentLocale} />
      <meta property="og:type" content="website" />

      {getAlternateHrefLinks({ asPath, locales: SUPPORTED_LANGUAGES })}
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_APP_URL}/${currentLocale === DEFAULT_LOCALE ? '' : currentLocale}${
          asPath === '/' ? '' : asPath
        }`}
      />
    </Head>
  );
};
