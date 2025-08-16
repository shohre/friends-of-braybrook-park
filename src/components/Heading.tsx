'use client';

import React from 'react';

type HeadingProps = {
  text: string;
};

export function Heading({ text }: HeadingProps) {
  return <h1>{text}</h1>;
}


