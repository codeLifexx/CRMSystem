$(function () {
    var navListIco = $('.nav-list')[0].children;
    for (var i = 0; i < navListIco.length; i++) {
        navListIco[i].querySelector('.ico').style.backgroundPositionY = '-' + i * 48 + 'px'
    }

    var index = 0;
    $('.menu').on('click', function () {
        if (index === 0) {
            $('.menu>img')[0].src = '../icon/gb.svg';
            $('.nav').css({
                'display': 'flex',
                'width': '100%'
            });
            index = 1;
        } else {
            $('.menu>img')[0].src = '../icon/menu.svg';
            $('.nav').css({
                'display': 'none',
                'width': '0'
            });
            index = 0;
        }

    })
})

// 登录守卫
function gotoLogin() {
    if (sessionStorage.getItem('loginName') == null) {
        reLogin('您还没有登录,请重新登录~~')
    }
}
// 退出登录
function exitLogin() {
    sessionStorage.removeItem('loginName')
    reLogin('退出登录,欢迎下次登录~~')
}

const uname = document.getElementById('uname')
const exit = document.getElementById('exit')

// 获取当前登录的用户名
uname.textContent = sessionStorage.getItem('loginName')

// 退出登录
exit.addEventListener('click', exitLogin)



const root = document.querySelector(':root')
const cTheam = document.getElementById('theam')

// 存储主题状态
let clickTheam = 0
if (localStorage.getItem('clickTheam')) {
    clickTheam = localStorage.getItem('clickTheam')
} else {
    clickTheam = 0
}
localStorage.setItem('clickTheam', clickTheam)

// 判断是否改变主题
function isTheam() {
    let theamId = localStorage.getItem('clickTheam')
    if (theamId % 2 !== 0) {
        root.style.setProperty('--font-color', 'pink')
        root.style.setProperty('--bg-color', '#282c34')
        root.style.setProperty('--jx-color', '#282c34')
        root.style.setProperty('--upbtn-color', 'rgba(255,255,255,0.2)')
        root.style.setProperty('--title-color', 'pink')
        root.style.setProperty('--a-this', 'rgba(255,255,255,0.2)')
        root.style.setProperty('--content-color', 'pink')
        root.style.setProperty('--th-bgcolor', 'rgba(255,255,255,0.2)')
        root.style.setProperty('--bg-img', 'url("../images/backgroun3.jpg")')


    } else {
        root.style.setProperty('--font-color', '#fff')
        root.style.setProperty('--bg-color', '#fff')
        root.style.setProperty('--jx-color', '#fff')
        root.style.setProperty('--upbtn-color', '#FEAE85')
        root.style.setProperty('--title-color', '#1B4585')
        root.style.setProperty('--a-this', '#0c2f66')
        root.style.setProperty('--content-color', '#000')
        root.style.setProperty('--th-bgcolor', '#D9E5F1')
        root.style.setProperty('--bg-img', 'url("../images/bg.png")')

    }
}

// 点击修改主题状态
cTheam.addEventListener('click', () => {
    clickTheam++;
    localStorage.setItem('clickTheam', clickTheam)
    isTheam()
})

