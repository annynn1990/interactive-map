import * as THREE from 'three'
import Experience from '../Experience.js'
import { EventEmitter } from 'events'
import gsap from 'gsap'

export default class Interests {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.camera = this.experience.camera
    this.debug = this.experience.debug
    this.device = this.sizes.device
    this.scrolling = this.experience.scrolling

    this.sizes.on('switchdevice', (device) => {
      this.device = device
      console.log(device);
    })

    // Debug
    if(this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('interest1')
    }

    this.obj = {
      x: 4,
      y: 1.2,
      z: 0.5
    }

    // Setup
    this.points = []
    this.raycaster = new THREE.Raycaster()
    this.setInterests()
    this.showInfos()
  }

  setInterests() {
    this.points = [
      {
        position: new THREE.Vector3(2.62, 1.2, 0.9),
        element: document.querySelector('.mcba')
      },
      {
        position: new THREE.Vector3(-3.75, 1.2, 0.25),
        element: document.querySelector('.mudac')
      },
      {
        position: new THREE.Vector3(-3.75, 1.2, -1.55),
        element: document.querySelector('.elysee')
      },
      {
        position: new THREE.Vector3(-0.65, 0.17, -1.2),
        element: document.querySelector('.arcadia')
      },
      {
        position: new THREE.Vector3(3.12, 0.17, 0.41),
        element: document.querySelector('.nabi')
      },
      {
        position: new THREE.Vector3(-4.26, 0.17, 0.66),
        element: document.querySelector('.lumen')
      }
    ]

    // Debug
    if(this.debug.active) {
        this.debugFolder
        .add(this.points[2].position, 'x')
        .name('x2')
        .min(-10)
        .max(10)
        .step(0.01)

        this.debugFolder
        .add(this.points[2].position, 'y')
        .name('y2')
        .min(-10)
        .max(10)
        .step(0.01)

        this.debugFolder
        .add(this.points[2].position, 'z')
        .name('z2')
        .min(-10)
        .max(10)
        .step(0.01)

        this.debugFolder
        .add(this.points[1].position, 'x')
        .name('x1')
        .min(-10)
        .max(10)
        .step(0.01)

        this.debugFolder
        .add(this.points[1].position, 'y')
        .name('y1')
        .min(-10)
        .max(10)
        .step(0.01)

        this.debugFolder
        .add(this.points[1].position, 'z')
        .name('z1')
        .min(-10)
        .max(10)
        .step(0.01)
    }
  }

  showInfos() {
    const mcba = document.querySelector('.mcba')
    const mudac = document.querySelector('.mudac')
    const elysee = document.querySelector('.elysee')
    const arcadia = document.querySelector('.arcadia')
    const nabi = document.querySelector('.nabi')
    const lumen = document.querySelector('.lumen')

    const closeIcn = document.querySelector('.close')

    const infoPanel = document.querySelector('.info-panel')
    const infoPanelImage = document.querySelector('.info-panel-image')
    const infoPanelLogo = document.querySelector('.info-panel-logo')
    const infoPanelTitle = document.querySelector('.info-panel-title')
    const infoPanelLead = document.querySelector('.info-panel-lead')
    const infoPanelDescription = document.querySelector('.info-panel-description')
    const infoPanelMo = document.querySelector('.info-panel-monday')
    const infoPanelTu = document.querySelector('.info-panel-tuesday')
    const infoPanelWe = document.querySelector('.info-panel-wednesday')
    const infoPanelTh = document.querySelector('.info-panel-thursday')
    const infoPanelFr = document.querySelector('.info-panel-friday')
    const infoPanelSa = document.querySelector('.info-panel-saturday')
    const infoPanelSu = document.querySelector('.info-panel-sunday')
    const infoPanelPhone = document.querySelector('.info-panel-phone')
    const infoPanelEmail = document.querySelector('.info-panel-email')
    const infoPanelWebsite = document.querySelector('.info-panel-website')
    let infoPanelRightStyle = '0'

    const infos = [
      // Museums
      {
        'image': './images/img-mcba.jpg',
        'logo': './images/logo-mcba.svg',
        'title': '洛桑州立美術館',
        'lead': '沃州美術館於 1841 年開幕，是瑞士歷史最悠久、專門展示藝術作品的美術館之一。現設於 Plateforme 10 藝術園區，每年從約一萬件館藏中策劃多場特展。',
        'description': `杜克羅、格萊爾、斯坦蘭、瓦洛東與蘇特，都是讓沃州美術館（MCBA）享譽國內外的藝術家。他們的作品構成館藏的重要部分，整體館藏約有一萬件。<br><br>美術館每年舉辦多場特展，並安排各類文化活動，包括講座、導覽，以及適合成人與兒童參加的工作坊。每月第一個星期六免費入場。`,
        'schedule': [
          '休館',
          '10:00 - 18:00',
          '10:00 - 18:00',
          '10:00 - 20:00',
          '10:00 - 18:00',
          '10:00 - 18:00',
          '10:00 - 18:00'
        ],
        'contact': [
          '+41 21 316 34 45',
          'mcba@plateforme10.ch'
        ],
        'website': 'https://www.mcba.ch/en/'
      },
      {
        'image': './images/img-mudac.jpg',
        'logo': './images/logo-mudac.svg',
        'title': '洛桑當代設計與應用藝術博物館（mudac）',
        'lead': 'mudac 是洛桑的當代設計與應用藝術博物館，也是瑞士西部唯一完全以設計為主題的機構。',
        'description': `博物館透過數百場大膽且別具特色的展覽，建立自身風格與國際聲譽，並持續促進當代創作不同領域之間的開放交流。<br><br>展覽內容涵蓋設計師與藝術家的個展，也透過展覽引導大眾思考當代社會議題，呈現設計一詞所涵蓋的多元面向。<br><br>每項展覽都帶來不同觀點，使 mudac 在瑞士及國際藝文界建立重要地位；其策劃的展覽也多次巡迴歐洲與亞洲。`,
        'schedule': [
          '10:00 - 18:00',
          '休館',
          '10:00 - 18:00',
          '10:00 - 20:00',
          '10:00 - 18:00',
          '10:00 - 18:00',
          '10:00 - 18:00'
        ],
        'contact': [
          '+41 21 318 44 00',
          'mudac@plateforme10.ch'
        ],
        'website': 'https://mudac.ch/en/'
      },
      {
        'image': './images/img-elysee.jpg',
        'logo': './images/logo-elysee.svg',
        'title': '愛麗舍攝影博物館（Photo Elysée）',
        'lead': 'Photo Elysée 是國際重要的攝影專門博物館之一。每年策劃多元展覽、出版具參考價值的內容，並舉辦創新且向大眾開放的活動。',
        'description': `Photo Elysée 於 1985 年以攝影博物館之名創立，透過攝影史上的重要人物，持續探討攝影媒介如何不斷演變，並發掘以嶄新視角呈現當代世界、預示未來的攝影創作。博物館致力於涵蓋攝影的各種主題，帶領觀眾探索並重新認識影像。<br><br>館藏超過 120 萬件攝影作品，從 1840 年代早期攝影技術一路涵蓋至數位影像，並收藏多位攝影師的完整作品與檔案，包括 Sabine Weiss、Jan Groover、René Burri、Ella Maillart、Nicolas Bouvier、Charlie Chaplin、Gertrude Fehr、Hans Steiner 及 Olivier Föllmi。`,
        'schedule': [
          '10:00 - 18:00',
          '休館',
          '10:00 - 18:00',
          '10:00 - 20:00',
          '10:00 - 18:00',
          '10:00 - 18:00',
          '10:00 - 18:00'
        ],
        'contact': [
          '+41 21 318 44 00',
          'info@elysee.ch'
        ],
        'website': 'https://elysee.ch/en'
      },
      // Restaurants & Cafés
      {
        'image': './images/img-arcadia.jpg',
        'logo': './images/logo-arcadia.svg',
        'title': 'Arcadia 地中海餐廳',
        'lead': `位於洛桑藝術園區中心，提供道地的地中海料理。`,
        'description': `Arcadia 餐廳以七道標誌性拱門為特色，提供單點地中海料理，結合清新風味、當季在地食材與地方產品。餐點也可搭配特色調酒，以及當地啤酒與葡萄酒。<br><br>無論是享用日常午餐，或在晚上慶祝特別時刻，都能在輕鬆友善的環境中享受美味餐飲。`,
        'schedule': [
          '10:00 - 23:00',
          '休館',
          '10:00 - 23:00',
          '10:00 - 23:00',
          '10:00 - 23:00',
          '10:00 - 23:00',
          '10:00 - 18:00'
        ],
        'contact': [
          '+41 21 318 44 10',
          'info@arcadiarestaurant.ch'
        ],
        'website': 'https://www.arcadiarestaurant.ch/'
      },
      {
        'image': './images/img-nabi.jpg',
        'logo': './images/logo-nabi.svg',
        'title': 'Le Nabi 咖啡餐廳',
        'lead': `參觀 Plateforme 10 前後，品嚐傳統風味料理！`,
        'description': `餐廳以親切、溫馨又富創意的料理為特色，依照季節與在地生產者的收成調整菜單，重新演繹傳統菜色。飲品也以手工製作為主，並以合理價格提供細緻服務，適合親友共享。餐廳歡迎兒童，並設有鼓勵創意的遊戲區，讓用餐體驗更豐富。`,
        'schedule': [
          '休館',
          '09:30 - 18:00',
          '09:30 - 18:00',
          '09:30 - 20:00',
          '09:30 - 18:00',
          '09:30 - 18:00',
          '09:30 - 18:00'
        ],
        'contact': [
          '+41 21 311 02 90',
          'info@lenabi.ch'
        ],
        'website': 'https://www.mcba.ch/en/cafe-restaurant-2/'
      },
      {
        'image': './images/img-lumen.jpg',
        'logo': './images/logo-lumen.svg',
        'title': 'Lumen 咖啡館',
        'lead': `以真材實料的手工產品，提供輕鬆快速的餐飲選擇。`,
        'description': `Lumen 咖啡館提供快速、隨興的餐點，選用手工製作的食材，以餐盤、陶碗或佛卡夏麵包等簡單方式呈現，展現當地飲食傳統。飲品皆精選手工產品，包括精釀蘋果酒、啤酒、葡萄酒與自製無酒精飲品；咖啡則採用新鮮烘焙的咖啡豆。咖啡館位於 Voie Verte 綠色步道沿線，也提供外帶服務。`,
        'schedule': [
          '10:00 - 18:00',
          '休館',
          '10:00 - 18:00',
          '10:00 - 20:00',
          '10:00 - 18:00',
          '10:00 - 18:00',
          '10:00 - 18:00'
        ],
        'contact': [
          '+41 21 311 02 90',
          'info@cafelumen.ch'
        ],
        'website': 'https://mudac.ch/de/cafe-lumen/'
      }
    ]

    if (this.device === 'desktop') {
      infoPanelRightStyle  = '-33%'
    } else {
      infoPanelRightStyle  = '-100%'
    }

    mcba.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[0].image
      infoPanelLogo.src = infos[0].logo
      infoPanelTitle.innerHTML = infos[0].title
      infoPanelLead.innerHTML = infos[0].lead
      infoPanelDescription.innerHTML = infos[0].description
      infoPanelMo.innerHTML = infos[0].schedule[0]
      infoPanelTu.innerHTML = infos[0].schedule[1]
      infoPanelWe.innerHTML = infos[0].schedule[2]
      infoPanelTh.innerHTML = infos[0].schedule[3]
      infoPanelFr.innerHTML = infos[0].schedule[4]
      infoPanelSa.innerHTML = infos[0].schedule[5]
      infoPanelSu.innerHTML = infos[0].schedule[6]
      infoPanelPhone.innerHTML = infos[0].contact[0]
      infoPanelEmail.innerHTML = infos[0].contact[1]
      infoPanelWebsite.href = infos[0].website
    });

    mudac.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[1].image
      infoPanelLogo.src = infos[1].logo
      infoPanelTitle.innerHTML = infos[1].title
      infoPanelLead.innerHTML = infos[1].lead
      infoPanelDescription.innerHTML = infos[1].description
      infoPanelMo.innerHTML = infos[1].schedule[0]
      infoPanelTu.innerHTML = infos[1].schedule[1]
      infoPanelWe.innerHTML = infos[1].schedule[2]
      infoPanelTh.innerHTML = infos[1].schedule[3]
      infoPanelFr.innerHTML = infos[1].schedule[4]
      infoPanelSa.innerHTML = infos[1].schedule[5]
      infoPanelSu.innerHTML = infos[1].schedule[6]
      infoPanelPhone.innerHTML = infos[1].contact[0]
      infoPanelEmail.innerHTML = infos[1].contact[1]
      infoPanelWebsite.href = infos[1].website
    });

    elysee.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[2].image
      infoPanelLogo.src = infos[2].logo
      infoPanelTitle.innerHTML = infos[2].title
      infoPanelLead.innerHTML = infos[2].lead
      infoPanelDescription.innerHTML = infos[2].description
      infoPanelMo.innerHTML = infos[2].schedule[0]
      infoPanelTu.innerHTML = infos[2].schedule[1]
      infoPanelWe.innerHTML = infos[2].schedule[2]
      infoPanelTh.innerHTML = infos[2].schedule[3]
      infoPanelFr.innerHTML = infos[2].schedule[4]
      infoPanelSa.innerHTML = infos[2].schedule[5]
      infoPanelSu.innerHTML = infos[2].schedule[6]
      infoPanelPhone.innerHTML = infos[2].contact[0]
      infoPanelEmail.innerHTML = infos[2].contact[1]
      infoPanelWebsite.href = infos[2].website
    });

    arcadia.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[3].image
      infoPanelLogo.src = infos[3].logo
      infoPanelTitle.innerHTML = infos[3].title
      infoPanelLead.innerHTML = infos[3].lead
      infoPanelDescription.innerHTML = infos[3].description
      infoPanelMo.innerHTML = infos[3].schedule[0]
      infoPanelTu.innerHTML = infos[3].schedule[1]
      infoPanelWe.innerHTML = infos[3].schedule[2]
      infoPanelTh.innerHTML = infos[3].schedule[3]
      infoPanelFr.innerHTML = infos[3].schedule[4]
      infoPanelSa.innerHTML = infos[3].schedule[5]
      infoPanelSu.innerHTML = infos[3].schedule[6]
      infoPanelPhone.innerHTML = infos[3].contact[0]
      infoPanelEmail.innerHTML = infos[3].contact[1]
      infoPanelWebsite.href = infos[3].website
    });

    nabi.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[4].image
      infoPanelLogo.src = infos[4].logo
      infoPanelTitle.innerHTML = infos[4].title
      infoPanelLead.innerHTML = infos[4].lead
      infoPanelDescription.innerHTML = infos[4].description
      infoPanelMo.innerHTML = infos[4].schedule[0]
      infoPanelTu.innerHTML = infos[4].schedule[1]
      infoPanelWe.innerHTML = infos[4].schedule[2]
      infoPanelTh.innerHTML = infos[4].schedule[3]
      infoPanelFr.innerHTML = infos[4].schedule[4]
      infoPanelSa.innerHTML = infos[4].schedule[5]
      infoPanelSu.innerHTML = infos[4].schedule[6]
      infoPanelPhone.innerHTML = infos[4].contact[0]
      infoPanelEmail.innerHTML = infos[4].contact[1]
      infoPanelWebsite.href = infos[4].website
    });

    lumen.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[5].image
      infoPanelLogo.src = infos[5].logo
      infoPanelTitle.innerHTML = infos[5].title
      infoPanelLead.innerHTML = infos[5].lead
      infoPanelDescription.innerHTML = infos[5].description
      infoPanelMo.innerHTML = infos[5].schedule[0]
      infoPanelTu.innerHTML = infos[5].schedule[1]
      infoPanelWe.innerHTML = infos[5].schedule[2]
      infoPanelTh.innerHTML = infos[5].schedule[3]
      infoPanelFr.innerHTML = infos[5].schedule[4]
      infoPanelSa.innerHTML = infos[5].schedule[5]
      infoPanelSu.innerHTML = infos[5].schedule[6]
      infoPanelPhone.innerHTML = infos[5].contact[0]
      infoPanelEmail.innerHTML = infos[5].contact[1]
      infoPanelWebsite.href = infos[5].website
    });

    closeIcn.addEventListener('click', () => {
      infoPanel.style.right = infoPanelRightStyle
    });
  }

  resize() {}

  update() {
    for(const point of this.points) {
      const screenPosition = point.position.clone()
      screenPosition.project(this.camera.orthographicCamera)

      point.element.classList.add('visible')

      // this.raycaster.setFromCamera(screenPosition, this.camera.orthographicCamera)
      // const intersects = this.raycaster.intersectObjects(this.scene.children, true)

      // if(intersects.length === 0) {
      //   point.element.classList.add('visible')
      // } else {
      //   const intersectionDistance = intersects[0].distance
      //   const pointDistance = point.position.distanceTo(this.camera.orthographicCamera.position)

      //   if(intersectionDistance < pointDistance) {
      //     point.element.classList.remove('visible')
      //   } else {
      //     point.element.classList.add('visible')
      //   }
      // }

      const translateX = screenPosition.x * this.sizes.width * 0.5
      const translateY = - screenPosition.y * this.sizes.height * 0.5
      point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
    }
  }
}
