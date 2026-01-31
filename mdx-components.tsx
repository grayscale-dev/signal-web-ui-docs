import type { MDXComponents } from 'mdx/types';
import type { ReactNode } from 'react';

type HeadingProps = {
  children?: ReactNode;
};

const Heading = ({ level, children }: HeadingProps & { level: number }) => {
  return <signal-heading level={level}>{children}</signal-heading>;
};

const Text = ({ children }: HeadingProps) => {
  return <signal-text>{children}</signal-text>;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Heading level={1}>{children}</Heading>,
    h2: ({ children }) => <Heading level={2}>{children}</Heading>,
    h3: ({ children }) => <Heading level={3}>{children}</Heading>,
    h4: ({ children }) => <Heading level={4}>{children}</Heading>,
    p: ({ children }) => <Text>{children}</Text>,
    ...components
  };
}
