import {useState, useEffect} from "react";
import spinner from "../Componets/Spinner.jsx";
import Spinner from "../Componets/Spinner.jsx";
import Product from "../Componets/Products.jsx";
const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [newProduct, setNewProduct] = useState([]);
    function OnchangeListerElectronics() {
        const newProd = posts.filter((items) => {
            return (
                items.category === "electronics"
            )
        })
        setNewProduct(newProd);

    }
    function OnchangeListerJewelery() {
        const newProd = posts.filter((items) => {
            return (
                items.category === "jewelery"
            )
        })
        setNewProduct(newProd);

    }
    function OnchangeListerWomens() {
        const newProd = posts.filter((items) => {
            return (
                items.category === "women's clothing"
            )
        })
        setNewProduct(newProd);

    }
    function OnchangeListerAll() {

        setNewProduct(posts);

    }
    async function fetchProductData() {
        setLoading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);
        } catch (error) {
            console.log("Error Occured");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, [])

    return (<div>
        <div className="flex justify-center space-x-4">
    <button className="px-4 py-2 bg-blue-500 text-white rounded mt-[3%]" onClick={OnchangeListerAll}>All</button>
    <button className="px-4 py-2 bg-blue-500 text-white rounded mt-[3%]" onClick={OnchangeListerElectronics}>Electronics</button>
    <button className="px-4 py-2 bg-blue-500 text-white rounded mt-[3%]" onClick={OnchangeListerJewelery}>Jewelery</button>
    <button className="px-4 py-2 bg-blue-500 text-white rounded mt-[3%]" onClick={OnchangeListerWomens}>Women's Clothing</button>
</div>
        {loading ? <Spinner/> : posts.length > 0 ? (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
        gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]">
                {(newProduct.length > 0 ? newProduct : posts).map((post) => (<Product key={post.id} post={post}/>))}
            </div>) : <div className="w-screen h-screen flex justify-center items-center">
                <p className="font-bold">No Data Found</p>
            </div>}
        </div>);
};

export default Home;