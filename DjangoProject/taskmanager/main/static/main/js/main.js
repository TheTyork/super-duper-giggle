// fetch('http://127.0.0.1:8000/api/pages/')
//     .then(res => res.json())
//     .then(data =>
//         console.log(data)
//     )


(async () => {
  let response = await fetch('http://127.0.0.1:8000/api/pages/');
  let json = await response.json();
  console.log(json)
  for (pages in json) {


      // прербор по страницам
      let MenuForPages = document.getElementById('menu')

      let PageFor = document.createElement('li')
      let TextPageFor = document.createElement('a')

      PageFor.className = 'nav-item'
      MenuForPages.append(PageFor)
      TextPageFor.innerText = json[pages]['title']
      let PageTab = json[pages]['tab']

      TextPageFor.className = 'nav-link text-white'
      PageFor.append(TextPageFor)

      TextPageFor.onclick = function () {
          let MenuforTabs = document.getElementById('tabs')
          let flag = true
          MenuforTabs.innerHTML=''
          for (tabs in PageTab) {
                  console.log(PageTab[tabs]['title'])
                  let TabFor = document.createElement("button")
                  if (flag){
                        TabFor.className = 'nav-link active'
                    }
                  else {
                      TabFor.className = 'nav-link '
                  }
                  TabFor.id = PageTab[tabs]['id']
                  TabFor.setAttribute("data-bs-toggle", "pill")
                  TabFor.setAttribute("data-bs-target", "#v-pills-home")
                  TabFor.type = 'button'
                  TabFor.setAttribute("aria-controls", "v-pills-" + PageTab[tabs]['id'])
                  TabFor.setAttribute("aria-selected", 'false')
                  MenuforTabs.append(TabFor)
                  TabFor.innerText = PageTab[tabs]['title']
                  flag = false
              // for (groups in json[pages]['tab'][tabs]['group']) {
              //     // перебор по таблицам
              //     console.log(json[pages]['tab'][tabs]['group'][groups]['title'])
              //
              //     for (param in json[pages]['tab'][tabs]['group'][groups]['param']) {
              //         //перебор по параметрам таблицы
              //         console.log(json[pages]['tab'][tabs]['group'][groups]['param'][param]['name'])
              //         console.log(json[pages]['tab'][tabs]['group'][groups]['param'][param]['value'])
              //         console.log(json[pages]['tab'][tabs]['group'][groups]['param'][param]['si'])
              //
              //     }
              // }
          }
      }
  }
})();