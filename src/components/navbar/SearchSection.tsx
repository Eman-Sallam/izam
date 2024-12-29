'use client';

import { memo, useRef } from 'react';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

type SearchSectionProps = {
  className?: string;
};

const SearchSection = ({ className }: SearchSectionProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div
      className={cn(
        'flex items-center bg-white p-2 rounded-full h-14 w-auto lg:w-96',
        className
      )}
    >
      <span className="p-3 bg-primary rounded-full">
        <Search size={'24px'} onClick={handleSearchClick} strokeWidth={3} />
      </span>

      <Input
        type="text"
        className="hidden placeholder:text-gray-400 md:block border-0 text-lg text-gray-900 w-full focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Search by name, job title, ..."
        ref={inputRef}
      />
    </div>
  );
};

export default memo(SearchSection);
