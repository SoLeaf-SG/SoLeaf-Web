import type { MouseEventHandler } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { company } from '../data/company';

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  const { pathname, search, hash } = useLocation();

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
      return;
    }

    onClick?.();
    if (pathname === '/') {
      if (!search && !hash) event.preventDefault();
      window.scrollTo(0, 0);
    }
  };

  return (
    <Link to="/" className={className} aria-label={`${company.brandName} — home`} onClick={handleClick}>
      <span className="logo" aria-hidden="true">
        <span className="logo__mark">
          <img
            src={company.logo}
            srcSet="/logo/tyllage-logo-96.webp 96w, /logo/tyllage-logo-144.webp 144w"
            sizes="48px"
            width={48}
            height={48}
            alt=""
            decoding="async"
          />
        </span>
        <span className="logo__word" />
      </span>
    </Link>
  );
}
