let arr = [
  {
    id: "1",
    title: "Title1",
    author: "Author1",
  },
  {
    id: "2",
    title: "Title2",
    author: "Author2",
  },
  {
    id: "3",
    title: "Title3",
    author: "Author3",
  },
  {
    id: "4",
    title: "Title4",
    author: "Author4",
  },
];
let htmlstring;
const getjson = localStorage.getItem("localdata");
if (!getjson) {
  let htmlstring = "";
  arr.forEach((item) => {
    let string = `
                          <div class="row">
                              <div class="titleandauthor"><span>${item.title}</span>by<span>${item.author}</span></div>
                              <button type="button" class="remove_btn" id="${item.id}">Remove</button>
                          </div>
                      `;
    htmlstring += string;
    string = "";
  });
  const getWrapper = document.querySelector(".wrapper");
  if (getWrapper) {
    getWrapper.innerHTML = htmlstring;
  }
} else {
  htmlstring = "";
  const arr2 = JSON.parse(getjson);
  arr2.forEach((item) => {
    let string = `
                              <div class="row">
                                  <div class="titleandauthor"><span>${item.title}</span>by<span>${item.author}</span></div>
                                  <button type="button" class="remove_btn" id="${item.id}">Remove</button>
                              </div>
                          `;
    htmlstring += string;
    string = "";
  });
  const getWrapper = document.querySelector(".wrapper");
  if (getWrapper) {
    getWrapper.innerHTML = htmlstring;
  }
}
const getAddBtn = document.querySelector(".add_btn");
getAddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formTitle = document.querySelector(".form_name").value;
  const formAuthor = document.querySelector(".form_author").value;
  const obj = {
    id: Date.now().toString(),
    title: `${formTitle}`,
    author: `${formAuthor}`,
  };
  const getjson = localStorage.getItem("localdata");
  if (!getjson) {
    arr.push(obj);
  } else {
    arr = JSON.parse(getjson);
    arr.push(obj);
  }
  let htmlstring = "";
  arr.forEach((item) => {
    let string = `
                          <div class="row">
                              <div class="titleandauthor"><span>${item.title}</span>by<span>${item.author}</span></div>
                              <button type="button" class="remove_btn" id="${item.id}">Remove</button>
                          </div>
                      `;
    htmlstring += string;
    string = "";
  });
  const getWrapper = document.querySelector(".wrapper");
  if (getWrapper) {
    getWrapper.innerHTML = htmlstring;
  }
  const stringifieddata = JSON.stringify(arr);
  localStorage.setItem("localdata", stringifieddata);
});
// localStorage.removeItem('localdata');
/// ///////////////////////////////////////////////////////// REMOVE ////
const getWrapper1 = document.querySelector(".wrapper");
getWrapper1.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove_btn")) {
    const getjson = localStorage.getItem("localdata");
    let arr1 = [];
    if (!getjson) {
      arr1 = arr.filter((data) => data.id !== e.target.id);
      localStorage.setItem("localdata", JSON.stringify(arr1));
    } else {
      arr = JSON.parse(getjson);
      arr1 = arr.filter((data) => data.id !== e.target.id);
      localStorage.setItem("localdata", JSON.stringify(arr1));
    }
    let htmlstring = "";
    arr1.forEach((item) => {
      let string = `
                              <div class="row">
                                  <div class="titleandauthor"><span>${item.title}</span>by<span>${item.author}</span></div>
                                  <button type="button" class="remove_btn" id="${item.id}">Remove</button>
                              </div>
                          `;
      htmlstring += string;
      string = "";
    });
    const getWrapper = document.querySelector(".wrapper");
    if (getWrapper) {
      getWrapper.innerHTML = htmlstring;
    }
  }
});
