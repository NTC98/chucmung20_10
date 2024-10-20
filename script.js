// Mảng chứa các URL của các hình ảnh
const images = [
    'images/hinh1.jpg',
    'images/hinh2.jpg',
    'images/hinh3.jpg',
    'images/hinh4.jpg',
    'images/hinh5.jpg',
    'images/hinh6.jpg',
    'images/hinh7.jpg',
    'images/hinh8.jpg',
    'images/hinh9.jpg',
    'images/hinh10.jpg',
    'images/hinh11.jpg',
    'images/hinh12.jpg',
    'images/hinh13.jpg'
];

// Mảng chứa các lời chúc
const messages = [
    'Chúc bạn một ngày 20/10 thật ý nghĩa và hạnh phúc!',
    'Chúc những người phụ nữ tuyệt vời luôn xinh đẹp, mạnh khỏe và thành công!',
    'Ngày 20/10 vui vẻ, hạnh phúc bên người thân yêu!',
    'Gửi lời chúc yêu thương đến bạn trong ngày 20/10. Chúc mọi điều tốt đẹp nhất đến với bạn!',
    'Dành tặng những lời chúc tốt đẹp nhất nhân ngày Phụ nữ Việt Nam 20/10. Luôn vui tươi và xinh đẹp nhé!',
    'Nhân ngày 20/10, xin được chúc tất cả các bạn nữ hay ăn chóng lớn và học tập tốt, lao động tốt phấn đấu trở thành người phụ nữ giỏi việc nước, đảm việc nhà.',
    'Nhân ngày Phụ nữ Việt Nam. Tôi xin chúc các chị em đồng nghiệp mãi xinh đẹp, luôn giỏi việc nước, đảm việc nhà và hăng hái trong mọi cuộc chơi.',
    'Chúc bạn luôn cười tươi, cười duyên, cười e thẹn, cười trẻ trung và cười hoài trong ngày hôm nay 20/10.',
    'Chúc các bạn nữ luôn tươi cười như hít phải khí N2O, bay bổng như H2, thăng hoa như I2, bản lĩnh như N2, và hiền hòa như H2O.',
    'Ngày 20/10 tôi xin dành tặng bạn lời chúc sức khỏe, vui vẻ, hát hay như chim sẻ, và có nhiều tài lẻ, nói chung là làm gì cũng suôn sẻ.',
    'Nhân ngày 20/10, chúc bạn có làn da mịn màng, chúc cho môi thắm dịu dàng, chúc cho chân trắng lại càng thêm xa.',
    'Chúc các bạn nữ: Hay ăn chóng béo, Tiền nhiều như kẹo, Tình chặt như keo, Dẻo dai như mèo, Mịn màng trắng trẻo, Sức khỏe như Heo.',
    'Chúc bạn luôn tươi trẻ, mạnh mẽ và tự tin mỗi ngày!',
    'Mong bạn sẽ luôn vui vẻ và thành công trong cuộc sống!',
    'Ngày 20/10 thật đặc biệt, chúc bạn nhận được nhiều niềm vui và hạnh phúc!',
    'Chúc mọi điều tốt lành đến với bạn trong ngày 20/10!',
    'Nhân ngày 20/10, chúc bạn luôn tươi trẻ, xinh đẹp và tràn đầy năng lượng!',
    'Chúc bạn một ngày 20/10 thật ý nghĩa, mọi điều tốt đẹp và may mắn luôn đến với bạn!',
    'Chúc bạn 20/10 vui vẻ, ngập tràn hạnh phúc và luôn tỏa sáng như chính con người bạn!',
    'Chúc bạn một ngày Phụ nữ Việt Nam thật nhiều niềm vui và đầy ắp tiếng cười!',
    'Chúc các chị em phụ nữ ngày 20/10 đầy ắp yêu thương, niềm vui và mãi tươi trẻ!',
    'Chúc phái đẹp luôn giữ được nụ cười rạng rỡ và hạnh phúc không chỉ trong ngày 20/10 mà mọi ngày!',
    'Phụ nữ như một ly trà, càng pha càng đậm đà. Chúc các chị em luôn “đậm đà” hương vị cuộc sống.',
    'Là mặt trời thì tỏa nắng, là phụ nữ chắc chắn xinh. Chúc chị em phụ nữ ngày 20/10 luôn tươi thắm như đóa hoa hồng, rực rỡ như ánh ban mai.',
    'Đủ nắng hoa sẽ nở, đủ gió mây sẽ bay, đủ yêu thương hạnh phúc sẽ đong đầy. Mọi vẻ đẹp của cuộc sống được tạo nên là nhờ vào sức mạnh của tình yêu với người phụ nữ. Chúc mừng ngày Phụ nữ Việt Nam 20/10.',
    'Có rất nhiều lý do để hạnh phúc và sự hiện diện của những người phụ nữ xung quanh tôi chính là một trong những lý do tạo nên điều đó. Chúc mừng ngày Phụ nữ Việt Nam 20/10!'
];

// Lấy phần tử img và p trong HTML
const randomImageElement = document.getElementById('randomImage');
const randomMessageElement = document.getElementById('randomMessage');

// Hàm để chọn ngẫu nhiên hình ảnh và lời chúc
function showRandomContent() {
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomMessageIndex = Math.floor(Math.random() * messages.length);
    
    randomImageElement.src = images[randomImageIndex];
    randomMessageElement.textContent = messages[randomMessageIndex];
}

// Gọi hàm để hiển thị nội dung khi trang web tải xong
window.onload = showRandomContent;

