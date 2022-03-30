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
    for (pages in json) {
        // прербор по страницам
        const TableParam = document.getElementById('table')
        let PageFor = document.createElement('li')
        let TextPageFor = document.createElement('a')
        TextPageFor.className = ' nav-link  rounded-1'
        TextPageFor.setAttribute("data-bs-toggle", "pill")
        Pageflag = false
        MenuForPages.append(PageFor)
        TextPageFor.innerText = json[pages]['title']
        let PageTab = json[pages]['tab']
        let PageID = json[pages]['id']
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
                let TabID = PageTab[tabs]['id']
                TabFor.onclick = function () {

                    MenuGroups.innerHTML = ''
                    let IndexPage = json.map(el => el.id).indexOf(PageID)
                    // console.log(json[IndexPage]['tab'])
                    let IndexTab = json[IndexPage]['tab'].map(el => el.id).indexOf(TabID)
                    let TabGroup = json[IndexPage]['tab'][IndexTab]['group']

                    // console.log(TabGroup)
                    function CreateTable() {
                        MenuGroups.innerHTML = ''
                        // console.log(json[IndexPage]['tab'][IndexTab]['group'])
                        for (let groups in json[IndexPage]['tab'][IndexTab]['group']) {
                            TableParam.innerText = ''
                            let GroupFor = document.createElement("div")
                            GroupFor.className = 'tab-pane fade show active p-2 h5'
                            GroupFor.id = 'v-pills-' + PageTab[tabs]['id']
                            GroupFor.setAttribute("aria-labelledby", 'v-pills-' + PageTab[tabs]['id'])
                            GroupFor.innerText = json[IndexPage]['tab'][IndexTab]['group'][groups]['title']
                            MenuGroups.append(GroupFor)
                            let GroupParam = json[IndexPage]['tab'][IndexTab]['group'][groups]['param']
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

                    clearInterval(IntervalTableCreate)
                    IntervalTableCreate = setInterval(CreateTable, 1000)
                }
            }
            clearInterval(IntervalTableCreate)
            let InputSec = document.getElementById('inputsec')
            InputSec.offsetWidth = '20px'
            InputSec.innerText = ''
            InputSec.hidden = false
            let InputObnov = document.createElement('input')
            InputSec.append(InputObnov)
            InputObnov.type = 'text'
            InputObnov.className = 'form-control'
            InputObnov.placeholder = 'Частота обновления'
            InputObnov.setAttribute("aria-label", "Recipient's username")
            InputObnov.setAttribute("aria-describedby", "button-addon2")
            let ButtonObnov = document.createElement("button")
            InputSec.append(ButtonObnov)
            ButtonObnov.className = "btn btn-outline-secondary"
            ButtonObnov.type = 'button'
            ButtonObnov.id = 'button-addon2'
            ButtonObnov.innerText = 'Enter'


            if (MenuforTabs.children.length === 0) {
                (MenuforTabs.parentElement.parentElement.parentElement.firstElementChild).hidden = false
                MenuforTabs.prepend(Error)
                InputSec.hidden = true
                Error.hidden = false
                MenuforTabs.parentElement.className = 'p-3'
                MenuGroups.parentElement.className = "p-3"
            }
        }
    }
}

let json = ''
let IntervalTableCreate = 0
setInterval(jJson, 1000)
setTimeout(program, 1500)




