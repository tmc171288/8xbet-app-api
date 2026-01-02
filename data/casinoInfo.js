const casinoInfo = {
  id: 1,
  name: "8xbet App",
  description:
    "Nhà cái uy tín hàng đầu Việt Nam với hơn 10 năm kinh nghiệm trong ngành cá cược trực tuyến.  8xbet cung cấp đa dạng trò chơi casino, thể thao, slot games với tỷ lệ cược cạnh tranh nhất thị trường.",
  logo: "https://picsum.photos/300/300?random=logo",
  established: "2014",
  license: "PAGCOR Licensed - Philippine Amusement and Gaming Corporation",
  languages: ["Tiếng Việt", "English", "ไทย", "中文"],
  currencies: ["VND", "USD", "THB", "CNY"],

  features: [
    {
      icon: "🎰",
      title: "Live Dealer 24/7",
      description: "Dealer xinh đẹp, chuyên nghiệp phục vụ 24/7",
    },
    {
      icon: "📱",
      title: "Mobile App",
      description: "Ứng dụng iOS & Android mượt mà, tốc độ cao",
    },
    {
      icon: "🇻🇳",
      title: "Hỗ trợ tiếng Việt",
      description: "Đội ngũ CSKH tiếng Việt tận tâm",
    },
    {
      icon: "⚡",
      title: "Nạp rút nhanh",
      description: "Giao dịch trong 30 giây, không giới hạn",
    },
    {
      icon: "🔒",
      title: "Bảo mật SSL 256-bit",
      description: "Công nghệ mã hóa hàng đầu thế giới",
    },
    {
      icon: "🎁",
      title: "Khuyến mãi hấp dẫn",
      description: "Thưởng 100% nạp đầu, hoàn trả hàng tuần",
    },
  ],

  statistics: {
    total_users: 250000,
    daily_active_users: 15000,
    total_games: 500,
    partners: 50,
    countries: 8,
    total_payout: "1.2 tỷ VND/ngày",
  },

  payment_methods: [
    {
      type: "Bank Transfer",
      banks: [
        "Vietcombank",
        "ACB",
        "Techcombank",
        "VietinBank",
        "BIDV",
        "MB Bank",
      ],
      min_deposit: 100000,
      max_deposit: 500000000,
      processing_time: "30 giây",
    },
    {
      type: "E-Wallet",
      providers: ["MoMo", "ZaloPay", "ViettelPay", "ShopeePay"],
      min_deposit: 50000,
      max_deposit: 50000000,
      processing_time: "Tức thì",
    },
    {
      type: "Cryptocurrency",
      coins: ["USDT", "BTC", "ETH"],
      min_deposit: 100000,
      max_deposit: 1000000000,
      processing_time: "5-10 phút",
    },
  ],

  support: {
    email: "support@8xbetapp.com",
    hotline: "1900-8888",
    chat: "24/7 Live Chat",
    telegram: "@CSKHKM8X",
    facebook: "fb.com/8xbetapp",
    working_hours: "24/7",
  },

  promotions: [
    {
      id: 1,
      title: "Thưởng 100% nạp đầu",
      description: "Tặng 100% lần nạp đầu tiên, tối đa 5.000.000 VND",
      code: "WELCOME100",
      valid_until: "2025-12-31",
    },
    {
      id: 2,
      title: "Hoàn trả 1.5% mỗi tuần",
      description: "Hoàn trả 1.5% tổng cược mỗi tuần, không giới hạn",
      code: "CASHBACK15",
      valid_until: "2025-12-31",
    },
    {
      id: 3,
      title: "Giới thiệu bạn bè",
      description: "Nhận 500.000 VND cho mỗi bạn bè nạp đầu",
      code: "REFER500K",
      valid_until: "2025-12-31",
    },
  ],

  vip_program: {
    levels: ["Bronze", "Silver", "Gold", "Platinum", "Diamond"],
    benefits: [
      "Hoàn trả cao hơn",
      "Quà tặng sinh nhật",
      "Quản lý tài khoản riêng",
      "Rút tiền ưu tiên",
      "Tham gia sự kiện VIP",
    ],
  },
};

module.exports = casinoInfo;
