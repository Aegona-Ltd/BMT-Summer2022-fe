document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data);
    if (widgetId1 != 0) {
        // Gửi dữ liệu bằng fetch
        fetch('https://localhost:7188/ContactUs/ContactForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Đặt loại nội dung là JSON nếu bạn gửi dữ liệu JSON
                // Các headers khác nếu cần
            },
            body: JSON.stringify(data), // Chuyển đổi đối tượng dữ liệu thành chuỗi JSON

        })
            .then(response => response.json())
            .then(result => {
                console.log('API Response:', result);
                // Xử lý kết quả từ API nếu cần
            })
        //.catch(error => {
        //    console.error('Error:', error);
        //    // Xử lý lỗi nếu có
        //});
    } else {
        var messstring = 'PLEASE DO CAPTCHA';
        ShowMessage(0,messstring)
    }
  
});