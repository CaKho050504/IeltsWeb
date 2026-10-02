const hoList = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh", "Phan", "Vũ", "Võ", "Đặng", "Bùi", "Đỗ", "Hồ", "Ngô", "Dương", "Lý"];
const tenNu = ["Hương", "Anh", "My", "Trang", "Hằng", "Ly", "Linh", "Lan", "Phương", "Thảo", "Ngọc", "Hà", "Nhi", "Mai", "Yến", "Quyên", "Thanh", "Vy", "Trâm", "Thi", "Thu", "Cẩm", "Châu", "Nhung"];
const tenNam = ["Tuấn", "Khải", "Nam", "Long", "Tùng", "Phát", "Huy", "Hoàng", "Sơn", "Dũng", "Thành", "Đạt", "Khoa", "Phúc", "Đức", "Minh", "Quân", "Hiếu", "Bình", "Phong", "Cường", "Trí", "Kiên", "Hùng"];
const titles = ["Giáo viên IELTS", "Chuyên gia IELTS Listening", "Giảng viên luyện thi cấp tốc", "Academic Director tại DOL IELTS", "Trưởng phòng Chuyên môn Writing", "Giáo viên Speaking & Pronunciation", "Giảng viên IELTS Master", "Chuyên gia Ngữ pháp & Cấu trúc"];
const achievements = [
    ["8.5 IELTS Speaking", "9.0 IELTS Reading"],
    ["8.5 IELTS Writing", "9.0 IELTS Listening"],
    ["9.0 IELTS Reading", "8.5 IELTS Listening"],
    ["8.0 IELTS Writing", "8.5 IELTS Reading"],
    ["9.0 IELTS Overall", "8.5 IELTS Speaking"]
];
const educations = [
    ["Thạc sĩ TESOL Đại học Victoria, Úc", "Cử nhân Ngôn ngữ Anh Đại học KHXH&NV"],
    ["Thạc sĩ Giáo dục RMIT University", "Chứng chỉ CELTA (Pass A)"],
    ["Cử nhân Xuất sắc RMIT", "Điểm SAT 1550/1600"],
    ["Thạc sĩ Ngôn ngữ học ứng dụng", "Học bổng toàn phần Chính phủ Úc"],
    ["Tiến sĩ Ngôn ngữ học", "Cử nhân Sư phạm Tiếng Anh"]
];
const achievementsList = [
    ["Cố vấn chuyên môn các chương trình Tiếng Anh VTV7", "Hơn 8 năm kinh nghiệm giảng dạy IELTS"],
    ["Linearthinking Ambassador 2025", "Giúp hơn 500 học viên đạt 7.0+"],
    ["Giải Nhất Hùng biện Tiếng Anh toàn quốc 2022", "Tác giả cuốn 'Tư duy Đọc hiểu IELTS'"],
    ["Top 1% chứng chỉ TESOL quốc tế", "Huấn luyện viên phát âm giọng Anh-Mỹ chuẩn"],
    ["Kinh nghiệm 6 năm ôn thi Đại học & IELTS", "Nổi tiếng với phong cách dạy hài hước, dễ hiểu"]
];
const categories = ["IELTS", "SAT", "THCS", "KIDS"];

const dolTeachers = [];
let usedNames = new Set();

for (let i = 1; i <= 120; i++) {
    const isMale = i % 2 !== 0; // Nam chẵn, nữ lẻ
    
    // Tạo tên giáo viên Việt Nam ngẫu nhiên & độc nhất
    let fullName = "";
    while(true) {
        const ho = hoList[Math.floor(Math.random() * hoList.length)];
        const tenDem = isMale ? "Văn" : "Thị";
        const ten = isMale ? tenNam[Math.floor(Math.random() * tenNam.length)] : tenNu[Math.floor(Math.random() * tenNu.length)];
        const chucDanh = isMale ? "Thầy" : "Cô";
        
        if (Math.random() > 0.5) {
            fullName = `${chucDanh} ${ho} ${ten}`;
        } else {
            fullName = `${chucDanh} ${ho} ${tenDem} ${ten}`;
        }
        
        if (!usedNames.has(fullName)) {
            usedNames.add(fullName);
            break;
        }
    }

    const score = (Math.floor(Math.random() * 3) * 0.5 + 7.5).toFixed(1); // 7.5, 8.0, 8.5
    
    // Lấy avatar người ngẫu nhiên (chất lượng cao)
    // Để tránh trùng lặp, dùng picId từ 1 -> 99
    const picId = (i % 90) + 1;
    const genderStr = isMale ? "men" : "women";
    const avatarUrl = `https://randomuser.me/api/portraits/${genderStr}/${picId}.jpg`;
    
    // Phân vào 1-2 category ngẫu nhiên
    const numCats = Math.random() > 0.5 ? 2 : 1;
    const shuffledCats = [...categories].sort(() => 0.5 - Math.random());
    const teacherCats = shuffledCats.slice(0, numCats);
    
    dolTeachers.push({
        id: i,
        name: fullName,
        avatar: avatarUrl,
        bgColor: isMale ? "#F0F8FF" : "#FFF0F5",
        title: titles[Math.floor(Math.random() * titles.length)],
        ielts_overall: score,
        ielts_skills: achievements[Math.floor(Math.random() * achievements.length)],
        education: educations[Math.floor(Math.random() * educations.length)],
        achievements: achievementsList[Math.floor(Math.random() * achievementsList.length)],
        category: teacherCats
    });
}

// Helper to format skills and education array into HTML
function generateBulletPoints(items) {
    if (!items || !items.length) return '';
    return items.map(item => `<li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill text-primary-dol me-2 mt-1"></i><span>${item}</span></li>`).join('');
}
