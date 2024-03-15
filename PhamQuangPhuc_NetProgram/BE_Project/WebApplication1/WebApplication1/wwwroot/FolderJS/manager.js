
const form = document.getElementById('createUserForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data);
    // Gửi dữ liệu bằng fetch
    fetch('https://localhost:7188/Manager/CreateAccount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Đặt loại nội dung là JSON nếu bạn gửi dữ liệu JSON
            // Các headers khác nếu cần
        },
        body: JSON.stringify(data), // Chuyển đổi đối tượng dữ liệu thành chuỗi JSON

    })
        .then((response) => response.json()) //định dạng trả về 
        .then((result) => {
            alert(
                result[0].code + " - " + result[0].description
            )
            console.log(result)
        })
            // Xử lý kết quả từ API 
        .catch((error) => console.error(error));// Xử lý lỗi nếu có 
       
        
});

