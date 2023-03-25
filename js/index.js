

const login = document.querySelector('.login')
const register = document.querySelector('.register')
const goRegister = document.querySelector('.register-link')
const goLogin = document.querySelector('.login-link')


const btn = document.getElementById('btn')
const username = document.getElementById('username')
const pwd = document.getElementById('password')
const form = document.getElementsByTagName('form')


const bgkq = document.querySelector('.bgkq')
const bgls = document.querySelector('.bgls')


Array.from(form).forEach(item => {
    item.addEventListener('submit', (event) => {
        event.preventDefault()
    })
})

goRegister.addEventListener('click', () => {
    theam()
    form[1].style.opacity = 0
    form[2].style.opacity = 1
    // getComputedStyle(register).zIndex = 2
    register.style.zIndex = 1
    login.style.zIndex = 0

})
goLogin.addEventListener('click', () => {
    theam()
    form[1].style.opacity = 1
    form[2].style.opacity = 0
    register.style.zIndex = 0
    login.style.zIndex = 1
})





const uname = document.getElementById('uname')
const uPwd = document.getElementById('uPwd')
const rePwd = document.getElementById('rePwd')
const ruser = document.getElementById('ruser')

let userArr = []

if (sessionStorage.getItem('userArr')) {
    userArr = JSON.parse(sessionStorage.getItem('userArr'))
} else {
    userArr = [{ username: 'admin', password: '123456' }]
}

sessionStorage.setItem('userArr', JSON.stringify(userArr))



// 注册
ruser.addEventListener('click', () => {
    if (uPwd.value && uname.value && rePwd.value) {
        if (uPwd.value == rePwd.value) {
            let reArr = []
            userArr.forEach(item => {
                reArr.push(item.username)
            })

            if (reArr.includes(uname.value)) {
                alert('该用户已经注册过了！')
            } else {
                const obj = {
                    username: uname.value,
                    password: uPwd.value,
                }
                userArr.push(obj)
                sessionStorage.setItem('userArr', JSON.stringify(userArr))
                form[1].style.opacity = 1
                form[2].style.opacity = 0
                register.style.zIndex = 0
                login.style.zIndex = 1
                theam()
                alert('注册成功，快点登陆吧~~')
            }
        } else {
            alert('两次密码不一致，请重新输入~~')
        }
    }else{
        alert('请填写完整的信息~')
    }


})

// 登录
function Login() {
    let uuser = { username: username.value.trim(), password: pwd.value.trim() }
    let newUser = JSON.parse(sessionStorage.getItem('userArr'))

    for (let i = 0; i < newUser.length; i++) {
        if (newUser[i].username == uuser.username && newUser[i].password == uuser.password) {
            sessionStorage.setItem('loginName', newUser[i].username)
            location.href = '班级管理.html'
            return
        }
    }

    for (let i = 0; i < newUser.length; i++) {
        if (newUser[i].username !== uuser.username && newUser[i].password !== uuser.password) {
            alert('用户名密码错误，请重新输入~~')
            return
        }
    }

}

btn.addEventListener('click', Login)


// 切换主题
const root = document.querySelector(':root')
let click = 0
function theam() {
    click++
    console.log(click)
    if (click % 2 !== 0) {
        root.style.setProperty('--my-color', 'skyblue')
        root.style.setProperty('--bt-bg', 'violet')
        root.style.setProperty('--l-img', 'url(../images/432.png)')
        bgkq.classList.add('actives')
        bgls.classList.add('active')
    } else {
        root.style.setProperty('--my-color', 'pink')
        root.style.setProperty('--bt-bg', '#f72d7a')
        root.style.setProperty('--l-img', 'url(../images/13.jpg)')
        bgkq.classList.remove('actives')
        bgls.classList.remove('active')
    }
}

qie.addEventListener('click', theam)










