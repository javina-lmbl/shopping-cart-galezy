import { PropsWithChildren, useState } from 'react';
import Sidebar from './Sidebar';

type LayoutProps = PropsWithChildren<{}>;

function Layout({ children }: LayoutProps) {
  const [sidebarShow, setSidebarShow] = useState(false);
  return (
    <div className="flex flex-col h-screen w-screen">
      <nav className="w-full h-12 flex flex-row content-theme border-b border-theme">
        <div className="ml-auto my-auto">
          <button
            className={`btn-theme ${
              sidebarShow && 'text-blue-500 border-b border-blue-500'
            }`}
            onClick={() => setSidebarShow((prev) => !prev)}
          >
            Carrito
          </button>
        </div>
      </nav>
      <div className="flex flex-row w-full h-full">
        <div className="w-full h-full overflow-auto">{children}</div>
        <Sidebar show={sidebarShow} right>
          {/* TODO: shopping cart */}
        </Sidebar>
      </div>
    </div>
  );
}

export default Layout;
