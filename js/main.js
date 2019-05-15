// 把 code 写到 #code 和 style 标签
function writeCode(profix, code, fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = profix || ''
    let n = 0
    let id = setInterval(() => {
        n = n + 1
        domCode.innerHTML = profix + code.substring(0, n)
        domCode.innerHTML = Prism.highlight(domCode.innerHTML, Prism.languages.css)
        styleTag.innerHTML = profix + code.substring(0, n)
        domCode.scrollTop = 10000
        if (n > code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 5)
}

function createPaper(fn) {
    let paper = document.createElement('div')
    paper.id = 'paper'
    let content = document.createElement('pre')
    content.id = 'content'
    document.body.appendChild(paper)
    paper.appendChild(content)
    fn.call()
}

function writeMarkdown(markdown, fn) {
    let domMarkdown = document.querySelector('#content')
    let n = 0
    let id = setInterval(() => {
        n = n + 1
        domMarkdown.innerHTML = markdown.substring(0, n)
        domMarkdown.scrollTop = 10000
        if (n > markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 0)
}

function markdownED(fn) {
    document.getElementById('content').innerHTML =
    marked('# me\n## 性别\n## 民族\n## 电话\n# me\n ## 性别\n   ## 民族\n   ## 电话\n   ')
    fn.call()
}


var result = `
    /*  nih
        nih
        你好
        a
        s
        d
        g
        你好
        s
        fv
        rtdf  */
    * {
        transition: all .3s;
    }
    #code {
        border: 1px solid rgb(0, 0, 0);
        padding: 20px;
        height: 80vh;
    }

    /*  现在，我需要代码高亮  */

    .token.property{
        color: #268bd2;
    }
    .token.punctuation{
        color: #666c6e;
    }
    .token.selector{
        color: #2aa198;
    }
    .token.function{
        color: #b58900;
    }
    .token.comment{
        color: #93a1a1;
    }

    /*  再加点 3D 效果  */


    #code {
        transform: rotate(360deg);
    }


    /*  现在，我开始介绍我自己，请看右面  */

`


var result2 = `
#code {
    position: fixed;
    left: 0;
    width: 38%;
}

#paper {
    position: fixed;
    right: 0;
    width: 60%;
    height: 100vh;     
    background: green;
}
`


var result3 = `
    /*  将简历格式化  */

    /*  %￥#@%￥#@%……￥%@￥#%#@  */
`


var resultMD = `
    # me
    ## 性别
    ## 民族
    ## 电话
    # me
    ## 性别
    ## 民族
    ## 电话
`

var resultX = `
    /*  这就是我的简历  */

    /*  感谢观赏  */
`

writeCode('', result, () => {
    createPaper(() => {
        writeCode(result, result2, () => {
            writeMarkdown(resultMD, () => {
                writeCode(result + result2, result3, () => {
                    markdownED(() => {
                        writeCode(result + result2 + result3, resultX, () => {
                            console.log('ok')
                        })
                    })
                })
            })
        })
    })
})
