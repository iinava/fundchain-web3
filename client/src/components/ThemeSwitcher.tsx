import React from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/button';
import { SunIcon } from '../assets/SunIcon';
import { MoonIcon } from '../assets/MoonIcon';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='flex gap-4'>
      {theme === 'dark' ? (
        <Button
          className='rounded-full '
          variant='flat'
          onClick={() => setTheme('light')}
        >
          <SunIcon/>
        </Button>
      ) : (
        <Button
          className='rounded-full '
          variant='flat'
          onClick={() => setTheme('dark')}
        >
          <MoonIcon/>
        </Button>
      )}
    </div>
  );
}
