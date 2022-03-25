import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartState } from '../reducers/cart.reducer';
import { RootState } from '../reducers/root.reducer';
import Cart from './Cart';
import Sidebar from './Sidebar';

type LayoutProps = PropsWithChildren<{}>;

function Layout({ children }: LayoutProps) {
  const [sidebarShow, setSidebarShow] = useState(false);
  const cart = useSelector<RootState, CartState>((root) => root.cart);

  let totalAmount = useMemo(() => {
    let result = 0;
    cart.forEach((item) => {
      result += item.amount;
    });
    return result;
  }, [cart]);

  useEffect(() => {
    setSidebarShow(!!cart.length);
  }, [cart]);
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <nav className="w-full h-14 flex flex-row relative content-theme border-b border-theme">
        <div className="ml-auto my-auto">
          <button
            className={`btn-theme ${
              sidebarShow && 'text-blue-500 border-b border-blue-500'
            }`}
            onClick={() => setSidebarShow((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            {!!totalAmount && (
              <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {totalAmount}
              </span>
            )}
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
