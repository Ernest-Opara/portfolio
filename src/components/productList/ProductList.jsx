import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
    return (
        <div>
            <div className="pl">
                <div className="pl-texts">
                    <h1 className="pl-title">Create & Inspire. It's Lama</h1>
                    <p className="pl-desc">
                        Many desktop publishing packages and web page editors 
                        now use Lorem Ipsum as their default model text, and 
                        a search for 'lorem ipsum' will uncover many web sites 
                        still in their infancy.
                    </p>
                </div>
                <div className="pl-list">
                    {products.map((item) => (
                        <Product key={item.id} img={item.img} link={item.link} />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default ProductList
