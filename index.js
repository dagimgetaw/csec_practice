const handleClick = () => {
  const msg = document.getElementById("inputMsg").value;
  console.log(msg);
  document.getElementById("text").innerHTML = `Hello, ${msg}`;
};

const handleChangeValue = (res) => {
  console.log(res);
  document.getElementById("result").innerHTML = res;
};