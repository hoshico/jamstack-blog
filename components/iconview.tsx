'use client';

import Next from '../public/icons/next.svg';
import React from '../public/icons/react.svg';
import Typescript from '../public/icons/typescript.svg';
import Node from '../public/icons/node.svg';
import Express from '../public/icons/express.svg';
import Cssmodules from '../public/icons/cssmodules.svg';
import Mui from '../public/icons/mui.svg';
import Styledcomponents from '../public/icons/styledcomponents.svg';
import Tailwindcss from '../public/icons/tailwindcss.svg';
import Nest from '../public/icons/nest.svg';
import Shadcn from '../public/icons/shadcn.svg';
import Graphql from '../public/icons/graphql.svg';
import Apollo from '../public/icons/apollo.svg';
import Mlb from '../public/icons/mlb.svg';

type Props = {
  label:
    | 'next'
    | 'react'
    | 'typescript'
    | 'node'
    | 'express'
    | 'nest'
    | 'cssmodules'
    | 'mui'
    | 'styledcomponents'
    | 'tailwindcss'
    | 'shadcn'
    | 'graphql'
    | 'apollo'
    | 'mlb';
};

export default function IconView(props: Props) {
  const { label } = props;
  switch (label) {
    case 'next':
      return (
        <Next
          className="size-max"
          strokeWidth={'2.5px'}
        />
      );
    case 'react':
      return (
        <React
          className="size-max"
          strokeWidth={'2.5px'}
          fill="#61DAFB"
        />
      );
    case 'node':
      return (
        <Node
          className="size-max"
          strokeWidth={'2.5px'}
          fill="#5FA04E"
        />
      );
    case 'express':
      return (
        <Express
          className="size-max"
          strokeWidth={'2.5px'}
          fill="#000000"
        />
      );
    case 'typescript':
      return (
        <Typescript
          className="size-max"
          strokeWidth={'2.5px'}
          fill="#3178C6"
        />
      );
    case 'cssmodules':
      return (
        <Cssmodules
          className="size-max"
          strokeWidth={'2.5px'}
          fill="#000000"
        />
      );
    case 'mui':
      return (
        <Mui
          className="size-max"
          strokeWidth={'2.5px'}
          fill="#007FFF"
        />
      );
    case 'styledcomponents':
      return (
        <Styledcomponents
          className="size-max"
          strokeWidth={'2.5px'}
          fill="#DB7093"
        />
      );
    case 'tailwindcss':
      return (
        <Tailwindcss
          className="size-max"
          strokeWidth={'2.5px'}
          fill="#06B6D4"
        />
      );
    case 'nest':
      return (
        <Nest
          className="size-max"
          strokeWidth={'2.5px'}
          fill="#E0234E"
        />
      );
    case 'shadcn':
      return (
        <Shadcn
          className="size-max"
          strokeWidth={'2.5px'}
          fill="#000000"
        />
      );
    case 'graphql':
      return (
        <Graphql
          className="size-max"
          strokeWidth={'2.5px'}
          fill="#E10098"
        />
      );
    case 'apollo':
      return (
        <Apollo
          className="size-max"
          strokeWidth={'2.5px'}
          fill="#311C87"
        />
      );
    case 'mlb':
      return (
        <Mlb
          className="size-max"
          strokeWidth={'2.5px'}
          fill="#041E42"
        />
      );
  }
}
