//로더가 불러올 파일이 item에 문자열로 저장됨.
module.exports = function (item) {
  console.log("hello my loader");

  return item.replace("console.log(", "alert(");
};
