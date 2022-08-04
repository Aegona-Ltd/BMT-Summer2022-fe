import {  ref, remove } from "firebase/database";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import { database } from "../../../firebase-config";
import { Product } from "../../../shared/interfaces/product";

interface ProductPageTableI {
    products: Product[],
    onEditProduct: (id: number) => void
}

function ProductPageTable(props: ProductPageTableI) {
    const { products, onEditProduct } = props
    
    const handleDeleteProduct = (id: number) => {
        try {
            remove(ref(database, `products/${id}`))
            toast.success('Xóa sản phẩm thành công')
        } catch (err) {
            toast.error('Xóa sản phẩm thất bại')
        }
    }

    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Link</th>
                        <th>Mô tả</th>
                        <th style={{ width: "10rem" }}>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 &&
                        products.map((pro: Product, index: number) => (
                            <tr key={index}>
                                <td>{pro.id}</td>
                                <td>{pro.name}</td>
                                <td>{pro.url}</td>
                                <td>{pro.description}</td>
                                <td className="d-flex justify-content-center">
                                    <button
                                        onClick={() => onEditProduct(pro.id)}
                                        className="btn btn-primary me-1"
                                    >
                                        <FaRegEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteProduct(pro.id)}
                                        className="btn btn-danger ms-1"
                                    >
                                        <FiTrash2 />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ProductPageTable;