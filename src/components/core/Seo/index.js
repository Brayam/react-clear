import React from 'react';
import { Helmet } from 'react-helmet-async';

const HOST = window.location.protocol.concat("//").concat(window.location.host);

function SEO (props) {
  return (
    <Helmet>
      <meta name="robots" content={`${props.metaRobots ? props.metaRobots : "index, follow"}`} />

      <title>{props.title}</title>
      <meta name="description" content={props.metaDescription} />
      <link rel="canonical" href={HOST} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={HOST} />
      <meta property="og:title" content={props.socialTitle ? props.socialTitle : props.title} />
      <meta property="og:description" content={props.socialDescription ? props.socialDescription : props.metaDescription} />
      <meta property="og:image" content={HOST + props.socialImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={HOST} />
      <meta property="twitter:title" content={props.socialTitle ? props.socialTitle : props.title} />
      <meta property="twitter:description" content={props.socialDescription ? props.socialDescription : props.metaDescription} />
      <meta property="twitter:image" content={HOST + props.socialImage} />
    </Helmet>
  );
};

export default SEO;