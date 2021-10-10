import React from 'react';
import { Redirect } from 'react-router-dom';

import './styles.scss';

export default function NotFound() {
  return <Redirect to={'/'} />
}