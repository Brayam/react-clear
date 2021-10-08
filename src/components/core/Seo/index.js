import React from 'react';
import { Helmet } from 'react-helmet-async';

const HOST = window.location.protocol.concat("//").concat(window.location.host);

function SEO ({ metaRobots, title, metaDescription, socialTitle, socialDescription, socialImage }) {
  return (
    <Helmet>
      <meta name="robots" content={`${metaRobots ? metaRobots : "index, follow"}`} />

      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={HOST} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={HOST} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:image" content={HOST + socialImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={HOST} />
      <meta property="twitter:title" content={socialTitle} />
      <meta property="twitter:description" content={socialDescription} />
      <meta property="twitter:image" content={HOST + socialImage} />
    </Helmet>
  );
};

export default SEO;