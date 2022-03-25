async function jJson() {
    let response = await fetch('api/pages/');
    json = await response.json()
}

async function program() {
    let Pageflag = true
    let flagErrorTabs = true
    let FlagErrorGrups = true

    let Error = document.createElement('div')
    Error.className = ' h3 p-3 '
    let MenuForPages = document.getElementById('menu')
    MenuForPages.innerText = ''

    function IntervalPages(TabGroup, TableParam, MenuGroups, MenuforTabs) {
        for (let groups in TabGroup) {
            TableParam.innerText = ''
            let GroupFor = document.createElement("div")
            GroupFor.className = 'tab-pane fade show active p-2 h5'

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
            FlagErrorGrups = false
            let TRBodyError = document.createElement('tr')
            let TDError = document.createElement('td')
            TDError.innerText = "Данные отсутвуют"
            TRBodyError.append(TDError)
            TbodyParam.append(TRBodyError)
            TRBodyError.hidden = true
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
            if (TbodyParam.children.length === 1) {
                TRBodyError.hidden = false
            }

        }


        if (MenuforTabs.parentElement.offsetHeight > MenuGroups.parentElement.offsetHeight) {
            MenuforTabs.parentElement.className = 'p-3 border-end'
            MenuGroups.parentElement.className = "p-3"
        } else {
            MenuforTabs.parentElement.className = 'p-3'
            MenuGroups.parentElement.className = "p-3 border-start"
        }
        if (MenuGroups.children.length === 0) {
            MenuGroups.prepend(Error)
            Error.hidden = false

        }
    }

    console.log(FlagObnvTable)
    if (FlagObnvTable) {
        IntervalPages(TabGroup, TableParam, MenuGroups, MenuforTabs)
        console.log(TabGroup)
    }
    for (pages in json) {
        // прербор по страницам
        let TableParam = document.getElementById('table')
        let PageFor = document.createElement('li')
        let TextPageFor = document.createElement('a')
        TextPageFor.className = ' nav-link  rounded-1'
        TextPageFor.setAttribute("data-bs-toggle", "pill")
        Pageflag = false
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
            if (flagErrorTabs) {
                MenuforTabs.parentElement.parentElement.parentElement.prepend(Error)
                Error.innerText = 'Данные отсутвуют'
            }
            MenuforTabs.parentElement.parentElement.parentElement.firstElementChild.hidden = true
            flagErrorTabs = false
            for (let tabs in PageTab) {
                MenuforTabs.parentElement.className = 'p-3 border-end'
                let TabFor = document.createElement("button")
                if (flagTab) {
                    TabFor.className = 'nav-link  text-start  rounded-1 mb-2'
                } else {
                    TabFor.className = ' nav-link  text-start   rounded-1 mb-2'
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
                console.log(TabGroup)
                TabFor.onclick = function () {
                    TabGroup = PageTab[tabs]['group']
                    MenuGroups.innerHTML = ''
                    IntervalPages(TabGroup, TableParam, MenuGroups, MenuforTabs)
                    FlagObnvTable = true


                }
            }
            if (MenuforTabs.children.length === 0) {
                (MenuforTabs.parentElement.parentElement.parentElement.firstElementChild).hidden = false
                MenuforTabs.prepend(Error)
                Error.hidden = false
                MenuforTabs.parentElement.className = 'p-3'
                MenuGroups.parentElement.className = "p-3"
            }
        }
    }
}

let json = ''
let FlagObnvTable = false
let TabGroup  = ''
let TableParam = document.getElementById('table')
let MenuGroups = document.getElementById('groups')
let MenuforTabs = document.getElementById('tabs')
setInterval(jJson, 1000)
setInterval(program, 1500)




