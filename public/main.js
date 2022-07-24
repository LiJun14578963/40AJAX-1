let n = 1;
getPage.onclick = () => {
    console.log('111')
    const request = new XMLHttpRequest();
    request.open("GET",`/page${n + 1}`);
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li)
            });
            n += 1;
        };
    };
    request.send()
};

getJSON.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("get","/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const object = JSON.parse(request.response)//把JSON内容转化为对象或者其他的
            myName.textContent = object.name//在id为myName的标签上增加文本内容，文本内容为对象里面的内容
        }
    };
    request.send()
};
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())//.trim()可以去除其他的元素
        }
    };
    request.send()
};
getHTML.onclick= () =>{
    const request = new XMLHttpRequest();//创建一个请求
    request.open('GET','/3.html');//调用open,第一个参数get   第二个参数路径
    request.onload= () => {
        console.log(request.response);
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    };//监听成功执行一个函数
    request.onerror= () => {};//监听失败执行一个函数
    request.send();//发送出去
};

getJS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/2.js');
    request.onload = ()=>{
        console.log(request.response)
        //创建script 标签
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    };
    request.onerror = ()=>{};
    request.send();
};

getCSS.onclick = () => {
    const request = new XMLHttpRequest();//创建 HttpRequest 对象
    request.open("GET", "/style.css");
    
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <300){
                //下载完成，但是不知道是成功2xx 还是失败4xx  5xx
                const style = document.createElement('style')//创建一个style标签节点
                style.innerHTML = request.response//request.response的内容等于style里面HTML的内容
                document.head.appendChild(style)//在head里面插入style
            }else{
                alert('加载CSS失败')
            }
        }
    };
    request.send();
};
