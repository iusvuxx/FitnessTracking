# FitTrack PWA 1.0

Ứng dụng theo dõi fitness cá nhân, ưu tiên lưu dữ liệu local trên thiết bị.

## Tính năng
- Dashboard calo nạp vào, calo vận động, macro và nước uống.
- Nhật ký bữa ăn theo ngày, nhập calories/protein/carbs/fat.
- Nhật ký bài tập, thời lượng và calo tiêu hao.
- Lịch sử cân nặng, mục tiêu calo/nước/cân nặng.
- Xuất/nhập bản sao lưu JSON.
- Light/Dark mode.
- PWA có thể cài lên màn hình chính và cache giao diện để mở offline.

## Lưu trữ và quyền riêng tư
Dữ liệu ứng dụng được lưu trong IndexedDB của trình duyệt trên thiết bị. Không có tài khoản, máy chủ hay đồng bộ giữa các thiết bị. Xóa dữ liệu website/Safari, xóa dữ liệu trình duyệt hoặc đổi thiết bị có thể làm mất dữ liệu. Hãy dùng chức năng Xuất dữ liệu JSON để sao lưu định kỳ.

## Chạy thử trên máy tính
Không mở `index.html` trực tiếp bằng `file://`. Chạy một máy chủ HTTP local:
```bash
python3 -m http.server 8000
```
Mở `http://localhost:8000`.

## Triển khai public để cài iPhone
PWA cần HTTPS (localhost chỉ dùng cho phát triển). Có thể dùng GitHub Pages, Netlify hoặc Vercel:
1. Tạo repository GitHub mới và upload toàn bộ nội dung thư mục này.
2. Trên GitHub: Settings → Pages → Deploy from a branch → chọn `main` và `/ (root)`.
3. Chờ GitHub Pages cung cấp URL HTTPS. Nếu dùng Vercel/Netlify, import repository và deploy static site, không cần build command; output/root directory là thư mục dự án.
4. Mở URL bằng Safari trên iPhone.
5. Nhấn Share (biểu tượng hình vuông có mũi tên) → Add to Home Screen / Thêm vào MH chính.
6. Bật “Open as Web App” nếu iOS hiển thị tùy chọn, rồi nhấn Add.

## Lưu ý iPhone
- Dùng Safari để cài PWA.
- Dữ liệu local thường gắn với website/origin và hồ sơ trình duyệt; không tự đồng bộ với MacBook.
- Không dùng Private Browsing để ghi dữ liệu lâu dài.
- Không xóa dữ liệu website nếu chưa export backup.
- Chức năng nhận diện ảnh bằng AI và Apple Health chưa được kết nối trong bản này. Việc nhận diện AI cần dịch vụ/mô hình thực tế; Apple Health cần tích hợp native HealthKit, không được PWA Safari truy cập trực tiếp.
- Calo tiêu hao và macro nhập tay là ước tính/giá trị do người dùng nhập, không phải đo lường y tế.
# FitTrack v2 – bản thử nghiệm

Bản này giữ IndexedDB `fittrack-local` / `state` / `main` của v1, thêm trường mới theo cách bổ sung. Nên xuất sao lưu JSON trước khi cập nhật GitHub Pages. Giữ nguyên origin và đường dẫn `/FitTrack/` để tiếp tục truy cập dữ liệu trình duyệt cũ. Dùng HTTPS hoặc localhost để thử đầy đủ PWA. Thư viện thử nghiệm có 25 thực phẩm với giá trị ước tính trên 100g; cần kiểm tra và chỉnh khẩu phần trước khi lưu. Barcode hỗ trợ nhập mã và tra cứu Open Food Facts khi có mạng. Scan Meal chỉ cho phép chọn ảnh và nhập thủ công, chưa có backend AI. Không có khóa API trong mã.

# Nutrition update

Ẩn nước uống, Barcode và Scan Meal (AI hoãn); dữ liệu lịch sử nước uống được giữ. Thư viện gồm nguyên liệu, món phổ biến và các món kết hợp 50/50 theo khối lượng; tất cả là giá trị ước tính, không phải dữ liệu được kiểm định. Body Goals dùng Mifflin–St Jeor (https://pubmed.ncbi.nlm.nih.gov/2305711/) và mức protein tham khảo ISSN (https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153/). TDEE và mục tiêu là ước lượng cho người lớn khỏe mạnh; không thay thế tư vấn chuyên gia. Mục tiêu được áp dụng chỉ sau khi xác nhận, và chỉnh được trong Cài đặt.

