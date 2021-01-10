(async () => {
    var data = await fetch('./data.json').then(res=>res.json());

    let {ကိလေသာ, သန္တာန်, စိတ်, စေတသိက်, နိပ္ဖန္နရုပ်, လက္ခဏာရုပ်} = data;
    let [{ဝိမိဿက}, {ပါပဇာတိ}, {ကလျာဏဇာတိ}] = စေတသိက်;
    let [{သဗ္ဗစိတ္တက}, {ပကိဏ်း}] = ဝိမိဿက;
    let [{သောဘဏ}, {ဝိရတီ}, {အပ္ပမညာ}] = ကလျာဏဇာတိ;
    let [{မဟာဘုတ်}, {ပသာဒရုပ်}, {ဂေါစရရုပ်}, {ဘာဝရုပ်}, {ဟဒယရုပ်}, {ဇီဝိတရုပ်}, {အဟာရရုပ်}] = နိပ္ဖန္နရုပ်;

    let body          = document.body;
    let table         = document.createElement('table');
    let tableBody     = document.createElement('tbody');
    
    table.appendChild(tableBody)
    body.appendChild(table)

    const setColumn = (tableRow, content) => {
        var tableData = document.createElement("td");
        tableData.innerHTML = content;
        tableRow.appendChild(tableData)
    }

    const setRow = (item, total = 1) => {
        let tableBodyRow  = document.createElement('tr');
        tableBody.appendChild(tableBodyRow)

        Array(total).fill(null).map(()=> {
            var tableData = document.createElement("td");
            tableData.setAttribute("colspan", 20)
            tableData.innerHTML = item;
            tableBodyRow.appendChild(tableData);
        })
    }

    ကိလေသာ.map(content => {
        သန္တာန်.map((item, index) => {
            var tableRow = document.createElement("tr");

            if(index === 0) {
                var tableData = document.createElement("th");
                tableData.setAttribute("rowspan", 2)
                tableData.innerHTML = content;
                tableRow.appendChild(tableData)
            }
            
            setColumn(tableRow, item)
            စိတ်.map(item => setColumn(tableRow, item));
            သဗ္ဗစိတ္တက.map(item => setColumn(tableRow, item));
            ပကိဏ်း.map(item => setColumn(tableRow, item));
            ပါပဇာတိ.map(item => setColumn(tableRow, item));
            သောဘဏ.map(item => setColumn(tableRow, item));
            ဝိရတီ.map(item => setColumn(tableRow, item));
            အပ္ပမညာ.map(item => setColumn(tableRow, item));
            မဟာဘုတ်.map(item => setColumn(tableRow, item));
            ပသာဒရုပ်.map(item => setColumn(tableRow, item));
            ဂေါစရရုပ်.map(item => setColumn(tableRow, item));
            ဘာဝရုပ်.map(item => setColumn(tableRow, item));
            ဟဒယရုပ်.map(item => setColumn(tableRow, item));
            ဇီဝိတရုပ်.map(item => setColumn(tableRow, item));
            အဟာရရုပ်.map(item => setColumn(tableRow, item));
            လက္ခဏာရုပ်.map(item => setColumn(tableRow, item));

            tableBody.appendChild(tableRow)
        });
    });
})();