LANDING PAGE VẢI CÁ SẤU POLY - AN PHÁT

1. Mở website
- Mở file index.html bằng trình duyệt.
- Khi upload lên hosting/GitHub Pages, giữ nguyên cấu trúc thư mục.

2. Thay logo
- File logo hiện tại: assets/images/logo-an-phat.jpg
- Đây là bản sao trực tiếp từ logo người dùng cung cấp, không vẽ lại.

3. Thay ảnh
- Thay đúng tên file trong assets/images hoặc chỉnh đường dẫn trong index.html.
- Nên dùng WebP để giảm dung lượng.

4. Hotline chính thức
- 0936 057 751
- 0962 403 636
Các nút gọi điện đang dùng tel:0936057751 và tel:0962403636.

5. Form báo giá
- Hiện chạy ở chế độ DEMO an toàn.
- Không có API nên dữ liệu chưa được gửi đi.
- Tích hợp endpoint thật trong assets/js/main.js ở sự kiện submit của #leadForm.

6. Google Sheets/API
- Có thể thay phần xử lý submit bằng fetch() đến Google Apps Script Web App hoặc API riêng.
- Chỉ thông báo gửi thành công sau khi endpoint trả về thành công.

7. GitHub Pages
- Đưa toàn bộ thư mục này lên repository.
- Bật Settings > Pages > Deploy from a branch > main > /(root).
- Nếu đặt landing page trong thư mục con, URL GitHub Pages sẽ có thêm tên thư mục/repository.

8. URL mục tiêu
- Canonical hiện đặt là: https://vaithunanphat.com/ca-sau-poly
- Để chạy đúng URL này trên domain chính, cần triển khai landing page vào website/hosting của vaithunanphat.com tại path /ca-sau-poly hoặc cấu hình reverse proxy/hosting tương ứng.

9. Ảnh bị loại khỏi dự án
- Các ảnh do người dùng cung cấp nhưng hiển thị chỉ một số điện thoại không được đưa vào landing page, theo yêu cầu mới nhất.
- Bảng màu hình ảnh có 1 số điện thoại nên không dùng trực tiếp; danh sách 46 tên/mã màu được chuyển thành HTML chữ dựa trên ảnh người dùng cung cấp.

10. Bản V2
- Đã chỉnh ảnh khối ứng dụng để không bị kéo méo: dùng object-fit: cover, chiều cao cố định trên desktop/tablet và tỉ lệ 4:3 trên mobile.

11. Bản V3
- Bổ sung mục "Nhà xưởng" vào menu.
- Bổ sung section Nhà xưởng & kho nguyên liệu.
- Thêm 12 ảnh thực tế nhà xưởng, kho vải mộc, sợi và nguyên liệu do người dùng cung cấp.
- Ảnh được chuyển sang WebP và tối ưu dung lượng để tải nhanh hơn.

12. Bản V4
- Đã sửa ảnh Hero đầu trang để hiển thị toàn bộ ảnh, không còn bị cắt mất phần trên/dưới.
- Bỏ ép tỷ lệ 3:2 và chuyển Hero sang object-fit: contain, height:auto.
- Giữ ảnh cân đối trên desktop, tablet và mobile.
