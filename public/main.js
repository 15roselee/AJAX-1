// const {
//     getMaxListeners
// } = require("process");



console.log('白梦冰是大傻子2');
console.log(XMLHttpRequest);
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/2.js')
    request.onload = () => {
        // 创建script标签
        const script = document.createElement('script')
        // 添加响应内容
        script.innerHTML = request.response;
        // 将script标签插入到body内
        document.body.append(script)
    }
    request.onerror = () => {
        console.log('失败了');
    }
    request.send()
}
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css');
    request.onload = () => {
        console.log(request.response);
        // 创建style标签
        const style = document.createElement('style')
        // 填写style内容
        style.innerHTML = request.response
        // 插到头部
        document.head.append(style)
        console.log('成功了');
    }
    request.onerror = () => {
        console.log('失败了');
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    // request.onload = () => {}
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {

            if (request.status >= 200 && request.status < 300) {
                console.log("下载完成");
                //创建div
                const div = document.createElement('div')
                //填写div内容
                div.innerHTML = request.response
                //插入到身体
                document.body.appendChild(div)
            } else {
                alert("下载失败")
            }
        }
    }

    request.onerror = () => {}
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseXML);
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim());

        }
    };
    request.send()
};
getJSON.onclick = () => {
    const request = new XMLHttpRequest
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.response);

            // const object = JSON.parse(request.response)
            // console.log(object);

            let object
            try {
                object = object = JSON.parse(request.response)
            } catch (error) {
                console.log('出错了，错误详情是：');
                console.log(error);
                object = {
                    'name': 'no name'
                }
            }
            console.log(object);
            myName.textContent = object.name
        }
    }
    request.send()
}
let n = 1;
getPAGE.onclick = () => {

    const request = new XMLHttpRequest
    request.open('GET', `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.response);
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li);
            });
            n += 1;
        }
    }
    request.send()
}