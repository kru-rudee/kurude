export default function Home() {
  const categories = [
    "ภาษาไทย",
    "คณิตศาสตร์",
    "วิทยาศาสตร์",
    "ภาษาอังกฤษ",
    "สังคมศึกษา",
    "ปฐมวัย",
  ];

  const mediaItems = [
    "ใบงานภาษาไทย ม.1",
    "PowerPoint วรรณคดีไทย",
    "เกมคำศัพท์ภาษาไทย",
    "แผนการสอน Active Learning",
    "แบบประเมินการอ่าน",
    "สื่อคำราชาศัพท์",
  ];

  return (
    <main style={{ background: "#F0FDFA", minHeight: "100vh" }}>
      {/* Navbar */}
      <header
        style={{
          background: "white",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          position: "sticky",
          top: 0,
        }}
      >
        <div>
          <h1 style={{ color: "#0F766E", margin: 0 }}>
            ครูฤดี
          </h1>
          <small>www.kurude.com</small>
        </div>

        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="#">หน้าแรก</a>
          <a href="#">สื่อการสอน</a>
          <a href="#">AI ช่วยครู</a>
          <a href="#">ชุมชนครู</a>
        </nav>

        <button
          style={{
            background: "#14B8A6",
            color: "white",
            border: "none",
            borderRadius: "10px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          สมัครสมาชิก
        </button>
      </header>

      {/* Hero */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "80px 20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        <div>
          <div
            style={{
              background: "#CCFBF1",
              display: "inline-block",
              padding: "8px 20px",
              borderRadius: "999px",
              color: "#0F766E",
              marginBottom: "20px",
            }}
          >
            คลังสื่อการสอนเพื่อครูไทย
          </div>

          <h2 style={{ fontSize: "52px", marginBottom: "20px" }}>
            พื้นที่รวม
            <span style={{ color: "#0F766E" }}>
              {" "}สื่อการสอนคุณภาพ
            </span>
            <br />
            เพื่อครูไทย
          </h2>

          <p style={{ color: "#555", fontSize: "18px" }}>
            ดาวน์โหลดสื่อ แผนการสอน ใบงาน ข้อสอบ
            และใช้ AI ช่วยสร้างการเรียนรู้
          </p>

          <div
            style={{
              display: "flex",
              marginTop: "30px",
              background: "white",
              padding: "10px",
              borderRadius: "18px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <input
              placeholder="ค้นหาสื่อการสอน..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                padding: "15px",
              }}
            />
            <button
              style={{
                background: "#0F766E",
                color: "white",
                border: "none",
                borderRadius: "12px",
                padding: "0 24px",
              }}
            >
              ค้นหา
            </button>
          </div>
        </div>

        {/* AI Box */}
        <div
          style={{
            background:
              "linear-gradient(135deg,#14B8A6,#0F766E)",
            color: "white",
            borderRadius: "35px",
            padding: "40px",
          }}
        >
          <h3 style={{ fontSize: "32px" }}>
            AI ผู้ช่วยครูฤดี
          </h3>

          <ul style={{ lineHeight: 2 }}>
            <li>📚 สร้างแผนการสอน</li>
            <li>📝 สร้างข้อสอบ</li>
            <li>🎨 สร้างใบงาน</li>
            <li>📊 Rubric ประเมินผล</li>
          </ul>
        </div>
      </section>

      {/* Banner Ads */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            background: "white",
            border: "2px dashed #99F6E4",
            borderRadius: "30px",
            padding: "50px",
            textAlign: "center",
          }}
        >
          <small style={{ color: "#666" }}>
            พื้นที่โฆษณาผู้สนับสนุนเว็บไซต์
          </small>

          <h3 style={{ color: "#0F766E" }}>
            Banner Sponsor 1200 × 300 px
          </h3>

          <p style={{ color: "#777" }}>
            เหมาะสำหรับมหาวิทยาลัย
            สำนักพิมพ์ และคอร์สอบรมครู
          </p>
        </div>
      </section>

      {/* Categories */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "80px auto",
          padding: "0 20px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          หมวดหมู่สื่อการสอน
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(150px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {categories.map((category) => (
            <div
              key={category}
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "20px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* Media */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "0 20px 100px",
        }}
      >
        <h2>สื่อการสอนแนะนำ</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {mediaItems.map((item) => (
            <div
              key={item}
              style={{
                background: "white",
                borderRadius: "25px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  background: "#CCFBF1",
                  height: "160px",
                  borderRadius: "18px",
                }}
              />

              <h3>{item}</h3>

              <p style={{ color: "#666" }}>
                ดาวน์โหลดฟรี พร้อมใช้งาน
              </p>

              <button
                style={{
                  background: "#0F766E",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                ดาวน์โหลด
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
