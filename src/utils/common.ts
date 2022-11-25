/*
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-11-24 18:04:14
 * @LastEditors: houqiangxie
 * @LastEditTime: 2022-11-25 10:23:43
 */
// 文件下载
class Download {
  constructor(url: string, name: string = "下载文件") {
    this.openDownload(url, name);
  }
  openDownload(urls: string, name: string) {
    const nameStr = name.replace(/(.*)(\..*)/, "$1");
    const link = urls;
    const lastIndex = link.split(".").length - 1;
    const type = link.split(".")[lastIndex];
    if (["jpg", "png", "jpeg", "gif"].includes(type)) {
      // 图片
      this.getBase64Image2(link, (image: string) => {
        this.XMLHttpRequest(image, `${nameStr}.${type}`, "image");
      });
    } else {
      // 非图片
      this.XMLHttpRequest(link, name, "file");
    }
  }
  XMLHttpRequest(link: string, name: string, type: string) {
    const x = new XMLHttpRequest();
    x.open("GET", link, true);
    x.responseType = "blob";
    x.onload = function () {
      console.log("onload");
      const blob = x.response;
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = name || "";
      a.click();
    };
    x.send();
  }
  getBase64Image2(img: string, cb: Function) {
    const canvas = document.createElement("canvas");
    const image = new Image();
    image.setAttribute("crossOrigin", "anonymous");
    image.src = `${img}?v=${Math.random()}`;
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
      ctx?.drawImage(image, 0, 0, image.width, image.height);
      const ext = image.src
        .substring(image.src.lastIndexOf(".") + 1)
        .toLowerCase();
      const base64 = canvas.toDataURL(`image/${ext}`);
      cb(base64);
    };
  }
  dataURLtoBlob(base64: string, cb: Function) {
    const arr = base64.split(",");
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n > 0) {
      n -= 1;
      u8arr[n] = bstr.charCodeAt(n);
    }
    const blob = new Blob([u8arr]);
    cb(blob);
  }
}

export {Download}


 