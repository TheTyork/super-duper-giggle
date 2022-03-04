(async () => {
    let response = await fetch('api/pages/')
    let json = await response.json()
    let Pageflag = true
    for (pages in json) {
        // прербор по страницам
        let MenuForPages = document.getElementById('menu')
        const TableParam = document.getElementById('table')
        let PageFor = document.createElement('li')
        let TextPageFor = document.createElement('a')
        TextPageFor.className = ' nav-link text-white  rounded-1 '
        TextPageFor.setAttribute("data-bs-toggle", "pill")
        Pageflag = false
        console.log(false)
        MenuForPages.append(PageFor)
        TextPageFor.innerText = json[pages]['title']
        let PageTab = json[pages]['tab']
        PageFor.append(TextPageFor)
        TextPageFor.onclick = function () {
            let MenuGroups = document.getElementById('groups')
            MenuGroups.innerHTML = ''
            let MenuforTabs = document.getElementById('tabs')
            let flagTab = true
            MenuforTabs.innerHTML = ''
            for (let tabs in PageTab) {
                console.log(PageTab[tabs]['title'])
                let TabFor = document.createElement("button")
                if (flagTab) {
                    TabFor.className = 'nav-link  text-start  rounded-1 '

                } else {
                    TabFor.className = ' nav-link  text-start   rounded-1 '
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
                    MenuGroups.innerHTML = ''
                    for (let groups in TabGroup) {
                        TableParam.innerText = ''
                        let GroupFor = document.createElement("div")
                        GroupFor.className = 'tab-pane fade show active p-2'
                        GroupFor.id = 'v-pills-' + PageTab[tabs]['id']
                        GroupFor.setAttribute("aria-labelledby", 'v-pills-' + PageTab[tabs]['id'])
                        GroupFor.innerText = TabGroup[groups]['title']
                        MenuGroups.append(GroupFor)
                        let GroupParam = TabGroup[groups]['param']
                        let TableAll = document.createElement('table')
                        MenuGroups.append(TableAll)
                        TableAll.className = 'table table-dark border p-2'
                        let TheadParam = document.createElement('thead')
                        let TbodyParam = document.createElement('tbody')
                        TableAll.append(TheadParam)
                        TableAll.append(TbodyParam)
                        let TRHead = document.createElement('tr')
                        TheadParam.append(TRHead)
                        let TDParamName = document.createElement("td")
                        TDParamName.innerText = 'Name'
                        TRHead.append(TDParamName)
                        let TDParamValue = document.createElement("td")
                        TDParamValue.innerText = 'Value'
                        TRHead.append(TDParamValue)
                        let TDParamID = document.createElement("td")
                        TDParamID.innerText = 'Si'
                        TRHead.append(TDParamID)
                        for (let param in GroupParam) {
                            let TRBody = document.createElement('tr')
                            TbodyParam.append(TRBody)
                            let ParamForName = document.createElement('td')
                            ParamForName.innerText = GroupParam[param]['name']
                            let ParamForValue = document.createElement('td')
                            ParamForValue.innerText = GroupParam[param]['value']
                            let ParamForSi = document.createElement('td')
                            ParamForSi.innerText = GroupParam[param]['si']
                            TRBody.append(ParamForName)
                            TRBody.append(ParamForValue)
                            TRBody.append(ParamForSi)

                        }
                    }
                    if (MenuforTabs.parentElement.offsetHeight > MenuGroups.parentElement.offsetHeight) {
                        MenuforTabs.parentElement.className = 'p-3 border-end'
                        MenuGroups.parentElement.className = "p-3"
                    } else {
                        MenuforTabs.parentElement.className = 'p-3'
                        MenuGroups.parentElement.className = "p-3 border-start"
                    }
                }
            }
        }
    }
})()