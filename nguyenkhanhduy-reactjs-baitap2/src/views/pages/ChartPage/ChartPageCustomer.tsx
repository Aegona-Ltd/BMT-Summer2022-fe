function ChartPageCustomer() {
    return (
        <div className='card chartPage__card'>
            <h5 className='card-header chartPage__card-header'>
                Khách hàng
            </h5>
            <div className='card-body'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Địa điểm</th>
                            <th className="text-end">Khách hàng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Thốt nốt</td>
                            <td className="text-end">12</td>
                        </tr>
                        <tr>
                            <td>TTM Cái Khế</td>
                            <td className="text-end">11</td>
                        </tr>
                        <tr>
                            <td>Chợ Cái Răng</td>
                            <td className="text-end">7</td>
                        </tr>
                        <tr>
                            <td>Chợ Trung An</td>
                            <td className="text-end">6</td>
                        </tr>
                        <tr>
                            <td>Chợ Ô Môn</td>
                            <td className="text-end">10</td>
                            
                        </tr>
                        <tr>
                            <td>Chợ Cái Răng</td>
                            <td className="text-end">7</td>
                        </tr>
                        <tr>
                            <td>Chợ Trung An</td>
                            <td className="text-end">6</td>
                        </tr>
                        <tr>
                            <td>Chợ Ô Môn</td>
                            <td className="text-end">10</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ChartPageCustomer;