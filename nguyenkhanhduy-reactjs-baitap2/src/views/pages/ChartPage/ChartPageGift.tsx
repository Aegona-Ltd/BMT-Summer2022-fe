function ChartPageGift() {
    return (
        <div className='card chartPage__card'>
            <h5 className='card-header chartPage__card-header'>
                Quà tặng
            </h5>
            <div className='card-body'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Địa điểm</th>
                            <th className="text-end">Đã tặng</th>
                            <th className="text-end">Còn lại</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chợ Trung An</td>
                            <td className="text-end">117</td>
                            <td className="text-end">1125</td>
                        </tr>
                        <tr>
                            <td>Chợ Ô Môn</td>
                            <td className="text-end">129</td>
                            <td className="text-end">1571</td>
                        </tr>
                        <tr>
                            <td>Thốt Nốt</td>
                            <td className="text-end">29</td>
                            <td className="text-end">1272</td>
                        </tr>
                        <tr>
                            <td>Chợ Cái Răng</td>
                            <td className="text-end">56</td>
                            <td className="text-end">1244</td>
                        </tr>
                        <tr>
                            <td>TTM Cái Khế</td>
                            <td className="text-end">119</td>
                            <td className="text-end">1181</td>
                        </tr>
                        <tr>
                            <td>Thốt Nốt</td>
                            <td className="text-end">29</td>
                            <td className="text-end">1272</td>
                        </tr>
                        <tr>
                            <td>Chợ Cái Răng</td>
                            <td className="text-end">56</td>
                            <td className="text-end">1244</td>
                        </tr>
                        <tr>
                            <td>TTM Cái Khế</td>
                            <td className="text-end">119</td>
                            <td className="text-end">1181</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ChartPageGift;