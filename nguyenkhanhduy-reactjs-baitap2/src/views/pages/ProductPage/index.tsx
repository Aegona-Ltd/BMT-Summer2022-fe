import { child, get, limitToLast, onValue, query, ref, set, update } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import { database } from '../../../firebase-config';
import { Product } from "../../../shared/interfaces/product";
import { Button, Modal, Pagination } from 'react-bootstrap';
import { AiOutlinePlus } from "react-icons/ai";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from "../../../shared/components/InputField";
import { toast } from "react-toastify";
import ProductPageTable from "./ProductPageTable";
import InputSearch from "../../../shared/components/InputSearch";

const schema = Yup.object({
    name: Yup.string().required('Tên không được để trống.'),
    description: Yup.string().required('Mô tả không được để trống.')
}).required();

interface PaginationI {
    totalPage: number,
    limit: number,
    currentPage: number
}

function ProductPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [product, setProduct] = useState<Product>()
    const valueSearch = useRef<string>("")

    const [pagination, setPagination] = useState<PaginationI>({
        currentPage: 1,
        limit: 5,
        totalPage: 0
    })

    const db = ref(database);

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<Product>({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        const recentPostRef = query(ref(database, 'products'))
        onValue(recentPostRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();

                const arr = Object.keys(data)
                    .map(function (key) {
                        return data[key];
                    });

                setProducts(arr.slice(0, 2));
                setPagination(prev => ({ ...prev, totalPage: Math.ceil(arr.length / prev.limit), currentPage: 1 }))
            }
            else {
                setProducts([])
            }
        })

    }, [])

    const handleCloseModal = () => setShowModal(false);

    const handleShowModal = (id: number) => {
        reset();
        if (id !== -1) {
            get(child(db, `products/${id}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    const data: Product = snapshot.val();
                    setValue('name', data.name);
                    setValue('url', data.url);
                    setValue('id', data.id);
                    setValue('description', data.description);

                    setProduct(data);
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
        else {
            setProduct({ id: -1, description: '', name: '', url: '' })
        }
        setShowModal(true);
    }

    const handleSubmitForm = handleSubmit(data => {
        const slug = data.name.toLowerCase().split(' ').join('-');

        if (product && product.id !== -1) {
            try {
                update(ref(database, `products/${data.id}`), { ...data, url: slug });
                toast.success('Cập nhật sản phẩm thành công');
            }
            catch (err) {
                toast.error('Cập nhật sản phẩm thất bại');
            }
        }
        else {
            try {
                const queryGetLastProduct = query(ref(database, 'products'), limitToLast(1))

                get(queryGetLastProduct)
                    .then(snapshot => {
                        const lastProduct = snapshot.val()
                        const convertToArrProduct = Object.keys(lastProduct)
                            .map(function (key) {
                                return lastProduct[key];
                            });
                        const generateId = convertToArrProduct[0].id + 1
                        const product = {
                            ...data, url: slug, id: generateId
                        };
                        set(ref(database, `products/${generateId}`), { ...product });
                        toast.success('Thêm sản phẩm thành công');
                    })
            }
            catch (err) {
                toast.error('Thêm sản phẩm thất bại');
            }
        }
        handleCloseModal();
    })

    const handleLoadProducts = (page: number) => {
        const queryGetProducts = query(ref(database, 'products'))
        get(queryGetProducts)
            .then(snapshot => {
                const data = snapshot.val();

                const arr: Product[] = Object.keys(data)
                    .map(function (key) {
                        return data[key];
                    });
                const start = (page - 1) * pagination.limit;
                const end = pagination.limit * page;


                if (valueSearch.current !== "") {
                    const newProducts = arr.filter((pro: Product) => (pro.name.toLowerCase().includes(valueSearch.current.toLowerCase()) || pro.url.toLowerCase().includes(valueSearch.current.toLowerCase()) || pro.description.toLowerCase().includes(valueSearch.current.toLowerCase())));
                    setProducts(newProducts.slice(start, end))
                    setPagination(prev => ({ ...prev, totalPage: Math.ceil(newProducts.length / prev.limit) }))
                }
                else {
                    setProducts(arr.slice(start, end))
                    setPagination(prev => ({ ...prev, totalPage: Math.ceil(arr.length / prev.limit) }))
                }
            })
    }

    const handleChangePage = (pageNumber: number) => {
        setPagination(prev => ({ ...prev, currentPage: pageNumber }));
        handleLoadProducts(pageNumber)
    }

    const handleSearchCategory = async (value: string, page: number) => {
        valueSearch.current = value
        handleLoadProducts(page)
    }

    return (
        <section className="product mt-110">
            <div className="container py-5">
                <div className="row mb-3 g-3">
                    <div className="col-lg-3">
                        <InputSearch
                            onChangeValue={(value) => handleSearchCategory(value, 1)}
                            valueInput=""
                        />
                    </div>
                    <div className="col d-flex justify-content-end">
                        <button
                            onClick={() => handleShowModal(-1)}
                            className="btn btn-primary product__btn">
                            <AiOutlinePlus /> Thêm sản phẩm
                        </button>
                    </div>
                </div>

                <ProductPageTable
                    onEditProduct={(id) => handleShowModal(id)}
                    products={products}
                />

                <div className="d-flex justify-content-end">
                    <Pagination>
                        <Pagination.Prev
                            onClick={() => handleChangePage(pagination.currentPage - 1)}
                            disabled={pagination.currentPage === 1}
                        />
                        {Array.from({ length: pagination.totalPage }).map((page, index) => (
                            <Pagination.Item
                                onClick={() => handleChangePage(index + 1)}
                                active={pagination.currentPage === index + 1}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next
                            onClick={() => handleChangePage(pagination.currentPage + 1)}
                            disabled={pagination.currentPage === pagination.totalPage}
                        />

                    </Pagination>
                </div>
            </div>

            <Modal
                size="lg"
                show={showModal}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <h5 className="mb-0">
                        {product && product.id !== -1 ? 'Cập nhật' : 'Thêm'} Sản phẩm
                    </h5>
                </Modal.Header>
                <Modal.Body>
                    <InputField
                        errMessage={errors.name?.message}
                        id="name"
                        labelClass="col-md-3 col-12"
                        placeholder="Tên sản phẩm"
                        register={register('name')}
                        input={true}
                        label="Tên sản phẩm"
                    />
                    <InputField
                        errMessage={errors.description?.message}
                        id="description"
                        labelClass="col-md-3 col-12"
                        placeholder="Mô tả"
                        register={register('description')}
                        input={true}
                        label="Mô tả"
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Đóng
                    </Button>
                    <Button
                        onClick={handleSubmitForm}
                        className="bg-ad-primary btn-ad-primary"
                    >
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default ProductPage;