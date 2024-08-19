import type { MDXComponents } from 'mdx/types';
import { H1 as h1 } from '@/components/h1';
import { H2 as h2 } from '@/components/h2';
import { H3 as h3 } from '@/components/h3';
import { Code as code } from '@/components/code';
import { Blockquote as blockquote } from '@/components/blockquote';
import {Pre as pre} from '@/components/pre';
import { P as p } from './components/p';
import { Li as li } from './components/li';
import { A as a } from './components/a';
import { Img as img } from './components/img';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1,
    h2,
    h3,
    code,
    blockquote,
    pre,
    p,
    li,
    a,
    img,
    ...components,
  };
}