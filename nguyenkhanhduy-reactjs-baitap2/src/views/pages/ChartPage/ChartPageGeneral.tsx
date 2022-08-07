import { AiOutlineGift } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";

function ChartPageGeneral() {
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3 mb-5'>
            <div className='col'>
                <div className="chartPage__general d-flex justify-content-between align-items-center">
                    <div className="chartPage__general-data">
                        <p className="chartPage__general-data-text mb-2">Tổng sản phẩm</p>
                        <h3 className="chartPage__general-data-number">20</h3>
                    </div>
                    <span className="chartPage__general-icon" style={{ backgroundColor: "#C3DDFD", color: "#4582F5" }}>
                        <AiOutlineGift size={30} />
                    </span>
                </div>
            </div>
            <div className='col'>
                <div className="chartPage__general d-flex justify-content-between align-items-center">
                    <div className="chartPage__general-data">
                        <p className="chartPage__general-data-text mb-2">Tổng doanh thu</p>
                        <h3 className="chartPage__general-data-number">
                            3000$
                        </h3>
                    </div>
                    <span className="chartPage__general-icon" style={{ backgroundColor: "#FFF59C", color: " #FFD52F" }}>
                        <MdOutlineAttachMoney size={30} />
                    </span>
                </div>
            </div>
            <div className='col'>
                <div className="chartPage__general d-flex justify-content-between align-items-center">
                    <div className="chartPage__general-data">
                        <p className="chartPage__general-data-text mb-2">Tổng đặt hàng</p>
                        <h3 className="chartPage__general-data-number">300</h3>
                    </div>
                    <span className="chartPage__general-icon" style={{ backgroundColor: "#AFECEF", color: "#047481" }}>
                        <FaShippingFast size={30} />
                    </span>
                </div>
            </div>
            <div className='col'>
                <div className="chartPage__general d-flex justify-content-between align-items-center">
                    <div className="chartPage__general-data">
                        <p className="chartPage__general-data-text mb-2">Tổng khách hàng</p>
                        <h3 className="chartPage__general-data-number">50</h3>
                    </div>
                    <span className="chartPage__general-icon" style={{ backgroundColor: "#FCD9BD", color: "#D03801" }}>
                        <FiUsers size={30} />
                    </span>
                </div>
            </div>

        </div>
    );
}

export default ChartPageGeneral;