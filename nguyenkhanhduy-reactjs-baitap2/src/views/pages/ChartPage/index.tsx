import Banner from '../../../shared/components/Banner';
import ChartDoughnut from './ChartDoughnut';
import ChartLine from './ChartLine';
import ChartPageBar from './ChartPageBar';
import ChartPageCustomer from './ChartPageCustomer';
import ChartPageGeneral from './ChartPageGeneral';
import ChartPageGift from './ChartPageGift';
import ChartPie from './ChartPie';
import ChartPolar from './ChartPolar';

function ChartPage() {
    return (
        <section className="mt-110 chartPage">
            <Banner title='Thống kê' current='Thống kê' />
            <div className='container py-5'>
                <ChartPageGeneral />
                <div className='row g-5 mb-5'>
                    <div className='col-md-8'>
                        <div className='card chartPage__card'>
                            <h5 className='card-header chartPage__card-header'>
                                Doanh thu năm 2022
                            </h5>
                            <div className='card-body'>
                                <ChartPageBar />
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card chartPage__card'>
                            <h5 className='card-header chartPage__card-header'>
                                Top sản phẩm mua nhiều nhất
                            </h5>
                            <div className='card-body'>
                                <ChartPie/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mb-5 g-5'>
                    <div className='col-md-4'>
                        <div className='card chartPage__card'>
                            <h5 className='card-header chartPage__card-header'>
                                Lợi nhuận năm 2022
                            </h5>
                            <div className='card-body'>
                                <ChartPolar />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8 col-12'>
                        <div className='card chartPage__card'>
                            <h5 className='card-header chartPage__card-header'>
                                Doanh số bán hàng năm 2022
                            </h5>
                            <div className='card-body'>
                                <ChartLine />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row row-cols-lg-3 row-cols-1 g-5'>
                    <div className=''>
                        <ChartPageGift />
                    </div>
                    <div className=''>
                        <div className='card chartPage__card'>
                            <h5 className='card-header chartPage__card-header'>
                                Số lượng sản phẩm
                            </h5>
                            <div className='card-body'>
                                <ChartDoughnut />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <ChartPageCustomer />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default ChartPage;