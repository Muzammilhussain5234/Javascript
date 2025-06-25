const loadscript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src);
    };
    script.onerror = () => {
      reject(new Error(`Failed to load script: ${src}`));
    };
    document.body.appendChild(script);
  });
};

const main = async () => {
  let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js");
  console.log( a);
};

main();
// question 2
let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("hey check ur error"));
    }, 3000);
  });
};

let a = async () => {
  try {
    let b = await p();
    console.log(b);
  } catch (err) {
    console.log("u got an error:");
  }
};

a();
// question 3
let p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("10")
      
    }, 3000);
  });
};
let p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("20")

    }, 3000);
  });
};
let p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("30")

    }, 3000);
  });
};

let run=async()=>{
  console.time("run");
  let a1=await p1();
  let a2=await p2();
  let a3=await p3();
  console.log(a1,a2,a3);
  console.timeEnd("run");
}
run()