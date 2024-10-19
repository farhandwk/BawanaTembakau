//navbar
const navTentangkamiLanding = document.querySelector(".navTentangkami-landing")
const navHubungikamiLanding = document.querySelector(".navHubungikami-landing")
const navLokasiLanding = document.querySelector(".navLokasi-landing")

function shownavTentangkami() {
    navTentangkamiLanding.classList.add("shownavTentangkami-landing")
}

function closenavTentangkami() {
    navTentangkamiLanding.classList.remove("shownavTentangkami-landing")
}

function shownavHubungikami() {
    navHubungikamiLanding.classList.add("shownavHubungikami-landing")
}

function closenavHubungikami() {
    navHubungikamiLanding.classList.remove("shownavHubungikami-landing")
}

function shownavLokasi() {
    navLokasiLanding.classList.add("shownavLokasi-landing")
}

function closenavLokasi() {
    navLokasiLanding.classList.remove("shownavLokasi-landing")
}

//sidebarLanding
const imgHeaderLanding = document.querySelector(".imgHeader-landing")
const sidebarLanding = document.querySelector(".sidebar-landing")
const closesidebarLanding = document.querySelector(".closesidebar-landing")


imgHeaderLanding.addEventListener("click", () => {
    if (sidebarLanding.classList.contains("showsidebar-landing")) {
        sidebarLanding.classList.remove("showsidebar-landing")
    } else {
        sidebarLanding.classList.add("showsidebar-landing")
    }
})

closesidebarLanding.addEventListener("click", () => {
    if (sidebarLanding.classList.contains("showsidebar-landing")) {
        sidebarLanding.classList.remove("showsidebar-landing")
    } else {
        sidebarLanding.classList.add("showsidebar-landing")
    }
})

//mematikan menghidupkan sidebarLanding berdasarkan ukuran layar

// document.addEventListener("DOMContentLoaded", ()=> {
//     const containerLanding = document.querySelector(".container-landing")
//     const getStyle = window.getComputedStyle(containerLanding)
//     let varWidth = getStyle.width
//     if (varWidth.includes("480px")) {
//         let logo = "SRC/tombolNavbar.png"
//         imgHeaderLanding.src = logo
//     }
//     else if (varWidth.includes("640px")) {
//         let logo = "SRC/tombolNavbar.png"
//         imgHeaderLanding.src = logo
//     }
//     else if (varWidth.includes("768px")) {
//         let logo = "SRC/tombolNavbar.png"
//         imgHeaderLanding.src = logo
//     }
//     else {
//         let logo = "SRC/logo tembakau no background.png"
//         imgHeaderLanding.src = logo
//         sidebarLanding.style.display = "none"
//     }
// })

//variabel container all
const containerAll = document.querySelector(".containerAll")

//variabel container
const containerLanding = document.querySelector(".container-landing")
const getStyle = window.getComputedStyle(containerLanding)
let varWidth = parseInt(getStyle.width)
let varHeight = parseInt(getStyle.height)

//variabel judul landing
const judulLanding = document.querySelector(".judul-landing")

//variabel nav landing
const navLanding = document.querySelector(".nav-landing")

//variabel p landing
const pLanding = document.querySelector(".p-landing")

//variabel container btn landing
const containerBtnLanding = document.querySelector(".containerBtn-landing")

//variabel btn landing
const btnLanding = document.querySelector(".btn-landing")

//variaber container LP landing
const containerLPLanding = document.querySelector(".containerLamsiPaksi-landing")

//variabel btn LP landing
const btnLPLanding = document.querySelectorAll(".btnLP-landing")

//variabel p2 landing
const p2Landing = document.querySelector(".p2-landing")

// variabel containerTembakau tembakau
const containerTembakau = document.querySelector(".container-tembakau")

// variabel containerTembakau1 tembakau
const containerTembakau1 = document.querySelector(".container1-tembakau")

//variabel containerTembakau2 tembakau
const containerTembakau2 = document.querySelector(".container2-tembakau")

//variabel img Tembakau
const imgTembakau = document.querySelectorAll(".img-tembakau")

//variabel imgTembakau 1
const imgTembakau1 = document.querySelector(".img1")

//variabel imgTembakau 1
const imgTembakau2 = document.querySelector(".img2")

//variabel p tembakau
const pTembakau = document.querySelectorAll(".p-tembakau")


document.addEventListener("DOMContentLoaded", () => {
    if (varHeight > varWidth) {

        //style container All
        containerAll.style.backgroundImage = "url(SRC/480x845-Landing.png)"
            //style container landing
        containerLanding.style.height = "86vh"
            // containerLanding.style.backgroundImage = "url(SRC/480x845-Landing.png)"
            //style imgHeaderLanding
        let logo = "SRC/tombolNavbar.png"
        imgHeaderLanding.src = logo
        imgHeaderLanding.style.width = "10%"
        imgHeaderLanding.style.height = "5.5vh"
        imgHeaderLanding.style.margin = "3.5%"
            //style judul landing
        judulLanding.style.marginLeft = "33.5%"
        judulLanding.style.fontSize = "10vw"
            //style nav landing
        navLanding.style.display = "none"
        navLanding.style.backgroundSize = "100% 100vh"
            //style p landing
        pLanding.style.fontSize = "10vw"
        pLanding.style.marginLeft = "11%"
            //style container btn landing
        containerBtnLanding.style.height = "53vh"
            //style btn landing
        btnLanding.style.marginLeft = "11%"
        btnLanding.style.width = "53%"
        btnLanding.style.height = "8vh"
        btnLanding.style.fontSize = "4.5vw"
        btnLanding.style.borderRadius = "4.5vw"
            //style container LP landing
        containerLPLanding.style.marginLeft = "11%"
            //style btn LP landing
        btnLPLanding.forEach(btnLPLanding => {
                btnLPLanding.style.width = "26%"
                btnLPLanding.style.height = "6vh"
                btnLPLanding.style.fontSize = "3.8vw"
                btnLPLanding.style.borderRadius = "4.5vw"
            })
            //style p2 landing
        p2Landing.style.marginLeft = "13%"
        p2Landing.style.fontSize = "4.5vw"
            //style containerTembakau
        containerTembakau.style.backgroundImage = "url(SRC/768x1365.png)"
        containerTembakau.style.display = "flex"
        containerTembakau.style.flexDirection = "column"
            //style containerTembakau1
        containerTembakau1.style.width = "100vw"
        containerTembakau1.height = "50vh"
            //style containerTembakau2
        containerTembakau2.style.width = "100vw"
        containerTembakau2.height = "50vh"
            //style imgTembakau tembakau
        imgTembakau.forEach(imgTembakau => {
                imgTembakau.style.width = "55vw"
                imgTembakau.style.height = "20vh"
            })
            //style imgTembakau1
        imgTembakau1.style.marginLeft = "-25%"
        imgTembakau1.style.marginTop = "5%"
            //style imgTembakau2
        imgTembakau2.style.marginRight = "-25%"
        imgTembakau2.style.marginTop = "5%"
            //style p tembakau
        pTembakau.forEach(pTembakau => {
            pTembakau.style.fontSize = "4vw"
        })
    } else {
        let logo = "SRC/logo tembakau no background.png"
        imgHeaderLanding.src = logo
        sidebarLanding.style.display = "none"
    }
})


//isi sidebarLanding
const tentangkamiSidebar = document.getElementById("tentangkamiSidebar-landing")
const hubungikamiSidebar = document.getElementById("hubungikamiSidebar-landing")
const lokasiSidebar = document.getElementById("lokasiSidebar-landing")

function opententangkamiSidebar() {
    if (tentangkamiSidebar.classList.contains("showsubisiSidebar-landing")) {
        tentangkamiSidebar.classList.remove("showsubisiSidebar-landing")
    } else {
        tentangkamiSidebar.classList.add("showsubisiSidebar-landing")
    }
}

function openhubungikamiSidebar() {
    if (hubungikamiSidebar.classList.contains("showsubisiSidebar-landing")) {
        hubungikamiSidebar.classList.remove("showsubisiSidebar-landing")
    } else {
        hubungikamiSidebar.classList.add("showsubisiSidebar-landing")
    }
}

function openlokasiSidebar() {
    if (lokasiSidebar.classList.contains("showsubisiSidebar-landing")) {
        lokasiSidebar.classList.remove("showsubisiSidebar-landing")
    } else {
        lokasiSidebar.classList.add("showsubisiSidebar-landing")
    }
}


btnLanding.addEventListener("click", () => {
    if (containerLPLanding.classList.contains("showcontainerLamsiPaksi-landing")) {
        containerLPLanding.classList.remove("showcontainerLamsiPaksi-landing")
    } else {
        containerLPLanding.classList.add("showcontainerLamsiPaksi-landing")
    }
})

//rotate shop now
const shopnowBtn = document.querySelector(".btn-landing")
const chevronShopnow = document.getElementById("chevronShopnow-landing")
let isRotated = false

shopnowBtn.addEventListener("click", function() {
    if (!isRotated) {
        chevronShopnow.style.transform = "rotate(90deg)"
        isRotated = true
    } else {
        chevronShopnow.style.transform = "rotate(0deg)"
        isRotated = false
    }
})