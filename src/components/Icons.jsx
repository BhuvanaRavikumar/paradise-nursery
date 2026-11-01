import React from 'react';

export function Icon({ name, size = 20, strokeWidth = 1.8, ...props }) {
  const paths = {
    bag: <><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></>,
    arrow: <><path d="M4 12h16"/><path d="m13 5 7 7-7 7"/></>,
    leaf: <><path d="M20 4c-8 0-15 4-15 12a4 4 0 0 0 4 4c8 0 12-7 11-16Z"/><path d="M5 20c3-5 7-8 12-11"/></>,
    plus: <path d="M12 5v14M5 12h14"/>,
    minus: <path d="M5 12h14"/>,
    trash: <><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/><path d="M10 11v6M14 11v6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    drop: <path d="M12 2C8 8 5 11 5 15a7 7 0 0 0 14 0c0-4-3-7-7-13Z"/>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    x: <path d="M5 5l14 14M19 5 5 19"/>,
    truck: <><path d="M3 6h12v12H3zM15 10h4l3 4v4h-7"/><circle cx="7.5" cy="19" r="2"/><circle cx="18.5" cy="19" r="2"/></>,
    shield: <><path d="m12 2 9 4v6c0 5-3.6 8.7-9 10-5.4-1.3-9-5-9-10V6l9-4Z"/><path d="m8 12 3 3 5-6"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.leaf}</svg>;
}
