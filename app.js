//设置初始值
let count = 0;

//选择elements：要改变效果的和要触发event的
const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

// add eventlistener-错误
//我最初的设想 这个？咋写，失败了（补充：可以用classlist）
// buttons.addEventListener('click', function(e){
//     if (e.target === ?)
// })
//我想再把我设想的那个写出来，但是注意：buttons是nodelist，数组不能用eventlistener。
// buttons.addEventListener("click", function (e) {
//   console.log(e.currentTarget);
//   console.log(e.target);
// });

//我想从parent入手(成功)
const buttonContainer = document.querySelector(".button-container");
buttonContainer.addEventListener("click", function (e) {
  //   console.log(e.currentTarget);
  //   console.log(e.target.classList);
  const select = e.target.classList;
  if (select.contains("decrease")) {
    count--;
  } else if (select.contains("increase")) {
    count++;
  } else if (select.contains("reset")) {
    count = 0;
  }
  //加颜色：如果写count=0，那么当数字由负数加成0时0是红的，由正数减成0时0是绿的；reset也一样，不会是黑的。
  //但是count===0，只要数字为0，就是黑的
  if (count > 0) {
    value.style.color = "green";
  }
  if (count < 0) {
    value.style.color = "red";
  }
  if (count === 0) {
    value.style.color = "black";
  }
  value.textContent = count;
});

//参考：add event listener，用forEach给每个btn都加个listener。
// buttons.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const effect = e.currentTarget.classList;
//     if (effect.contains("decrease")) {
//       count--;
//     } else if (effect.contains("reset")) {
//       count = 0;
//     } else if (effect.contains("increase")) {
//       count++;
//     }
//     value.textContent = count;
//   });
// });
