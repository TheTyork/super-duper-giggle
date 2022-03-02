(async () => {
    let response = await fetch('api/pages/')
    let json = await response.json()
    for (pages in json) {
        // прербор по страницам
        let MenuForPages = document.getElementById('menu')
        const TableParam = document.getElementById('table')
        let PageFor = document.createElement('li')
        let TextPageFor = document.createElement('a')
        let Line = document.getElementById('line')
        let LineTab = document.getElementById('linetab')

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

            for (let tabs in PageTab) {
                console.log(PageTab[tabs]['title'])
                let TabFor = document.createElement("button")
                if (flagTab) {
                    TabFor.className = 'nav-link active text-start '
                } else {
                    TabFor.className = 'nav-link text-start '
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
                }
            }
        }
    }
})()