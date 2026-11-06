const items = {};

/* รายการ Genshin impact */
items["Genshin impact"] = {
  id: "Genshin impact",
  name: "Genshin impact",
  group: "games", // แก้ไขให้สอดคล้องกับกลุ่มเกมอื่นๆ
  category: "Open-World Action RPG",
  maker: "HoYoverse",
  makerLabel: "บริษัท",
  caption: "โลกแฟนตาซีอันกว้างใหญ่ที่ชวนให้ออกเดินทาง",
  description:
    "Genshin Impact เป็นเกมแนว Open-World Action RPG ที่พาเราดำดิ่งสู่โลกแฟนตาซี Teyvat " +
    "พร้อมระบบธาตุและการสำรวจที่อิสระ",
  story:
    "เราจะได้รับบทบาทเป็นพี่น้องฝาแฝดนักเดินทางข้ามดวงดาวมายังเทวัต แต่เมื่อมาถึงฝาแฝดของเราจะหายไป เพื่อตามหาแฝดที่หายไป เราจึงต้องออกเดินทางผจญภัยไปในโลกเทวัต",
  image: "assets/images/collection/ganshin.jpeg",
  related: ["Honkai star rail"],
};

/* รายการ Honkai star rail */
items.ram = {
  id: "ram",
  name: "Honkai star rail",
  group: "game",
  category: "Turn-Based RPG",
  maker: "HoYoverse",
  makerLabel: "บริษัท",
  caption: "ขึ้นรถไฟผจญภัยข้ามหมู่ดาวบนรางสีเงิน",
  description:
    "Honkai star rail เป็นเกมแนว Turn-Based RPG กับคัดซีนต่อสู้สุดตระการตา",
  story:
    "เมื่อลืมตาตื่นก็พบกับโลกที่ดาวแต่ละดวงล้วนเชื่อมต่อกันด้วยรางสีเงิน ร่วมผจญกับภัยพิบัติระดับระเบิดจักรวาลบนรางสีเงิน",
  image: "assets/images/collection/honkai.avif",
  related: ["prince", "budapest"],
};

/* รายการ The Little Prince */
items.prince = {
  id: "prince",
  name: "The Little Prince",
  group: "books",
  category: "หนังสือ",
  maker: "Antoine de Saint-Exupéry",
  makerLabel: "ผู้เขียน",
  caption: "อ่านได้อีก แม้จะรู้เรื่องแล้ว",
  description:
    "เรื่องของเจ้าชายน้อยที่เดินทางไปตามดาวต่าง ๆ เล่มบาง อ่านไม่นาน " +
    "แต่มีหลายตอนที่อยากกลับมาอ่านอีก",
  story:
    "บางครั้งเปิดมาดูรูป บางครั้งก็กลับไปอ่านประโยคที่จำได้ " +
    "อ่านครั้งใหม่แล้วชอบคนละตอนกับครั้งก่อน เล่มนี้เลยยังไม่เบื่อสักที",
  image: "assets/images/collection/the-little-prince.jpg",
  related: ["am", "x100"],
};

/* รายการ Fujifilm X100 */
items.x100 = {
  id: "x100",
  name: "Fujifilm X100",
  group: "cameras",
  category: "สิ่งของ",
  maker: "Fujifilm",
  makerLabel: "ผู้ผลิต",
  caption: "ชอบปุ่มหมุนกับหน้าตาของมัน",
  description:
    "Fujifilm X100 เป็นกล้องที่เห็นรูปแล้วสะดุดตา ตัวกล้องสีเงินกับดำ " +
    "มีช่องมองภาพและปุ่มหมุนด้านบน ดูแล้วอยากลองหยิบมาถ่ายรูป",
  story:
    "ชอบรายละเอียดบนตัวกล้อง ทั้งปุ่มหมุน ขอบโลหะ และผิวจับด้านหน้า " +
    "แค่ดูรูปก็เพลินแล้ว ถ้ามีโอกาสก็อยากลองใช้สักครั้ง",
  image: "assets/images/collection/fujifilm-x100.png",
  related: ["budapest", "hobbit"],
};

/* รายการ The Grand Budapest Hotel */
items.budapest = {
  id: "budapest",
  name: "The Grand Budapest Hotel",
  group: "films",
  category: "หนัง",
  maker: "Wes Anderson",
  makerLabel: "ผู้กำกับ",
  caption: "ชอบสีและของเล็ก ๆ ในแต่ละฉาก",
  description:
    "The Grand Budapest Hotel เล่าเรื่องวุ่น ๆ ในโรงแรมสีชมพู " +
    "มีทั้งตัวละครที่แต่งตัวจัดและฉากที่จำได้ทันที",
  story:
    "ดูรอบแรกตามเรื่อง พอดูอีกทีก็มัวแต่มองสี เสื้อผ้า และของในฉาก " +
    "มีรายละเอียดที่เพิ่งเห็นเพิ่มทุกครั้ง",
  image: "assets/images/collection/the-grand-budapest-hotel.jpg",
  related: ["converse", "ram"],
};

/* รายการ AM */
items.am = {
  id: "am",
  name: "AM",
  group: "music",
  category: "เพลง",
  maker: "Arctic Monkeys",
  makerLabel: "ศิลปิน",
  caption: "เห็นปกก็จำได้ทันที",
  description:
    "AM ของ Arctic Monkeys เป็นอัลบั้มที่หยิบมาฟังระหว่างเดินทาง " +
    "มีเพลงที่คุ้นหูจนร้องตามได้หลายเพลง",
  story:
    "ชอบเสียงเบสที่วนอยู่ในเพลง เปิดแล้วเดินต่อได้เรื่อย ๆ " +
    "ไม่ต้องคอยหยิบโทรศัพท์มาเลือกเพลงใหม่",
  image: "assets/images/collection/arctic-monkeys-am.jpg",
  related: ["hobbit", "x100"],
};

/* รายการ The Hobbit */
items.hobbit = {
  id: "hobbit",
  name: "The Hobbit",
  group: "books",
  category: "หนังสือ",
  maker: "J. R. R. Tolkien",
  makerLabel: "ผู้เขียน",
  caption: "อยากออกเดินทางตั้งแต่เห็นปก",
  description:
    "The Hobbit เริ่มจากบ้านของบิลโบ แล้วพาออกไปไกลกว่าที่เจ้าตัวคิดไว้ " +
    "เป็นเล่มที่หยิบอ่านเมื่อมีเวลายาวหน่อย",
  story:
    "ชอบตอนที่บิลโบยังลังเลว่าจะไปดีไหม อ่านแล้วอยากรู้ว่าพอเดินออกจากบ้าน " +
    "เขาจะเจออะไรต่อ",
  image: "assets/images/collection/the-hobbit.jpg",
  related: ["budapest", "converse"],
};

/* รายการ Converse All Star */
items.converse = {
  id: "converse",
  name: "Converse All Star",
  group: "objects",
  category: "สิ่งของ",
  maker: "Converse",
  makerLabel: "แบรนด์",
  caption: "คู่เรียบ ๆ ที่ใส่กับอะไรก็ได้",
  description:
    "รองเท้าผ้าใบสีดำกับพื้นยางสีขาว หน้าตาคุ้นเคยที่เห็นได้เรื่อย ๆ " +
    "ทั้งในรูปเก่าและบนถนน",
  story:
    "ชอบที่รูปทรงมันเรียบ มีแค่ผ้า เชือก และขอบยาง " +
    "พอมีรอยใช้งานก็ยิ่งดูเป็นรองเท้าของคนที่ใส่จริง ๆ",
  image: "assets/images/collection/converse-all-star.jpg",
  related: ["prince", "am"],
};

/* อ่าน id จาก URL */
const itemId =
    new URLSearchParams(window.location.search).get("id") || "gtm";
const item = Object.hasOwn(items, itemId) ? items[itemId] : null;

/* ฟังก์ชันแสดงข้อมูล */
function showDetail(item) {
  document.title = "Detail | Personal Collection";
  document.querySelectorAll("[data-field]").forEach(function (element) {
    if (item[element.dataset.field]) {
      element.textContent = item[element.dataset.field];
    }
  });
  const image = document.querySelector("#detail-image");
  if (image) {
    image.src = item.image;
    image.alt = item.name;
  }
}

/* ฟังก์ชันรายการที่เกี่ยวข้อง */
function showRelated(item) {
  if (!item.related) return;
  item.related.forEach(function (id, index) {
    const related = items[id];
    if (!related) return;
    const suffix = index === 0 ? "" : "-2";
    
    const linkEl = document.querySelector("#related-link" + suffix);
    const imgEl = document.querySelector("#related-image" + suffix);
    const nameEl = document.querySelector("#related-name" + suffix);
    const captionEl = document.querySelector("#related-caption" + suffix);

    if (linkEl) linkEl.href = "detail.html?id=" + id;
    if (imgEl) {
      imgEl.src = related.image;
      imgEl.alt = related.name;
    }
    if (nameEl) nameEl.textContent = related.name;
    if (captionEl) captionEl.textContent = related.caption;
  });
}

/* เลือกการแสดงผล */
if (item) {
  showDetail(item);
  showRelated(item);
} else {
  const detailContent = document.querySelector("#detail-content");
  const notFound = document.querySelector("#not-found");
  if (detailContent) detailContent.hidden = true;
  if (notFound) notFound.hidden = false;
  document.title = "Detail | Personal Collection";
}