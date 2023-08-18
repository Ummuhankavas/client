

const Products = () => {
  return (
    <div className="products-wrapper grid grid-cols-card gap-4">
        <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
            <div className="product-img">
                <img src='https://cdn.yeniakit.com.tr/images/news/625/elma-muhtesem-bir-meyve-h1540738370-351a91.jpeg' alt='elma' className="h-20 object-cover w-full border-b"/>
            </div>
            <div className="product-info flex flex-col p-3">
                <span className="font-bold">Elma</span>
                <span>12₺</span>
            </div>
        </div>
    </div>
  )
}

export default Products