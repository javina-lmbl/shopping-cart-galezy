import { PropsWithChildren } from 'react';

type SidebarProps = PropsWithChildren<{
  show?: boolean;
  right?: boolean;
}>;

function Sidebar({ show, right, children }: SidebarProps) {
  return (
    <aside
      className={[
        'content-theme border border-theme h-full min-w-[250px] max-w-[250px] overflow-y-auto',
        'duration-100 transition-all',
        show
          ? 'relative translate-x-0'
          : right
          ? 'absolute right-full'
          : 'absolute left-full',
      ].join(' ')}
    >
      {children}
    </aside>
  );
}

export default Sidebar;
