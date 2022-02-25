(async () => {
    let response = await fetch('http://127.0.0.1:8000/api/pages/')
    let json = await response.json()
    for (pages in json) {
        flagPage = true
        // прербор по страницам
        let MenuForPages = document.getElementById('menu')
        const TableParam = document.getElementById('table')
        let PageFor = document.createElement('li')
        let TextPageFor = document.createElement('a')
        if (flagPage) {
            PageFor.className = 'nav-item active'
        } else {
            PageFor.className = 'nav-item'
        }
        MenuForPages.append(PageFor)
        TextPageFor.innerText = json[pages]['title']
        let PageTab = json[pages]['tab']
        TextPageFor.className = 'nav-link text-white'
        PageFor.append(TextPageFor)
        TextPageFor.onclick = function () {
            let MenuGroups = document.getElementById('groups')
            MenuGroups.innerHTML = ''
            let MenuforTabs = document.getElementById('tabs')
            let flagTab = true
            MenuforTabs.innerHTML = ''
            for (tabs in PageTab) {
                console.log(PageTab[tabs]['title'])
                let TabFor = document.createElement("button")
                if (flagTab) {
                    TabFor.className = 'nav-link active text-start'
                } else {
                    TabFor.className = 'nav-link text-start'
                }
                flagTab = false
                TabFor.id = PageTab[tabs]['id']
                TabFor.setAttribute("data-bs-toggle", "pill")
                TabFor.setAttribute("data-bs-target", "#v-pills-home")
                TabFor.type = 'button'
                TabFor.setAttribute("aria-controls", "v-pills-" + PageTab[tabs]['id'])
                TabFor.setAttribute("aria-selected", 'false')
                MenuforTabs.append(TabFor)
                TabFor.innerText = PageTab[tabs]['title']
                let TabGroup = PageTab[tabs]['group']
                TabFor.onclick = function () {
                    flagGroup = true
                    MenuGroups.innerHTML = ''
                    for (groups in TabGroup) {
                        let GroupFor = document.createElement("div")
                        GroupFor.className = 'active'
                        GroupFor.innerText = TabGroup[groups]['title']
                        MenuGroups.append(GroupFor)
                        flagGroup = false
                        let TheadParam = document.createElement('thead')
                        let TbodyParam = document.createElement('tbody')
                        TableParam.append(TheadParam)
                        let TDParam = document.createElement("td")
                        TheadParam.append(TDParam)
                        let GroupParam = TabGroup[groups]['param']
                        for (param in GroupParam) {

                        }

                        TableParam.append(TbodyParam)

                    }


                }
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
})()