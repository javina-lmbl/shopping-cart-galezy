import { PropsWithChildren, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartState } from '../reducers/cart.reducer';
import { RootState } from '../reducers/root.reducer';
import Cart from './Cart';
import Sidebar from './Sidebar';

type LayoutProps = PropsWithChildren<{}>;

function Layout({ children }: LayoutProps) {
  const [sidebarShow, setSidebarShow] = useState(false);
  const cart = useSelector<RootState, CartState>((root) => root.cart);

  useEffect(() => {
    setSidebarShow(!!cart.length);
  }, [cart]);
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <nav className="w-full h-12 flex flex-row relative content-theme border-b border-theme">
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
      <div className="flex flex-row w-full h-[92%]">
        <div className="w-full h-full overflow-auto">{children}</div>
        <Sidebar show={sidebarShow} right>
          <Cart />
        </Sidebar>
      </div>
    </div>
  );
}

export default Layout;
