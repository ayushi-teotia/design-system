import * as React from 'react';
import { Link } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const href = 'http://innovaccer.com';
  const target = '_blank';
  const size = 'regular';
  const appearance = 'subtle';
  const disabled = false;

  const options = {
    href,
    target,
    size,
    appearance,
    disabled,
  };

  return (
    <Link {...options} onClick={action('link click')}>
      Click this link.
    </Link>
  );
};

export default {
  title: 'Components/Link/All',
  component: Link,
  parameters: {
    docs: {
      docPage: {
        title: 'Link',
      },
    },
  },
};
