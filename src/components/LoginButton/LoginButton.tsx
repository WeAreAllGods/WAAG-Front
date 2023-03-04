import { Button, Link, Typography } from '@mui/material';
import { ReactNode } from 'react';

function LoginButton(props: {
  children: ReactNode;
  backgroundColor: string;
  href: string;
  color?: string;
}) {
  // 1. destructure props
  const { children, href, backgroundColor, color = '#000' } = props;

  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers

  return (
    <Button
      component={Link}
      href={href}
      css={{
        'width': '80%',
        'height': '40px',
        'borderRadius': '8px',
        backgroundColor,
        color,
        '&:hover': { backgroundColor },
      }}
    >
      <Typography css={{ fontWeight: 600 }}>{children}</Typography>
    </Button>
  );
}

export { LoginButton };
