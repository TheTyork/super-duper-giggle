// fetch('http://127.0.0.1:8000/api/pages/')
//     .then(res => res.json())
//     .then(data =>
//         console.log(data)
//     )


(async () => {
  let response = await fetch('http://127.0.0.1:8000/api/pages/');
  let json = await response.json();
  console.log(json)
  for (pages in json){
      // прербор по страницам
      console.log(json[pages]['title'])

      for (tabs in json[pages]['tab']){
          //перебор по табам
        console.log(json[pages]['tab'][tabs]['title'])

          for (groups in json[pages]['tab'][tabs]['group']){
              // перебор по таблицам
              console.log(json[pages]['tab'][tabs]['group'][groups]['title'])

              for (param in json[pages]['tab'][tabs]['group'][groups]['param']){
                  //перебор по параметрам таблицы
                  console.log(json[pages]['tab'][tabs]['group'][groups]['param'][param]['name'])
                  console.log(json[pages]['tab'][tabs]['group'][groups]['param'][param]['value'])
                  console.log(json[pages]['tab'][tabs]['group'][groups]['param'][param]['si'])

              }
          }
      }
  }
})();