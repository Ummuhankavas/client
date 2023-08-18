import CartTotals from '../components/cart/CartTotals.jsx';
import Categories from '../components/categories/Categories.jsx';
import Header from '../components/header/Header.jsx';
import Products from '../components/products/Products.jsx';


const HomePage = () => {
  return (
    <>
      <Header />
      <div className='home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24'>
        <div className='categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-64'>
          <Categories />
        </div>
        <div className='products flex-[8] max-h-[calc(100vh_-_112px)] overflow-auto'>
          <Products />
        </div>
        <div className='cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border'>
          <div>
            <CartTotals />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage