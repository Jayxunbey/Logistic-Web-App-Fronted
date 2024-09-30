const cells = document.querySelectorAll('.cell');

const infoServer = document.getElementById('info-from-server');

let symbolPlayerQueue;

let canPressCell;




// Har bir hujayraga bosilganda
cells.forEach(cell => {

   

    cell.addEventListener('click', () => {
        
        const number = parseInt(cell.getAttribute('data-cell'))+1;
        const symbol = document.getElementById('player-queue-symbol').getAttribute('data-symbol');
    
        let data = {
            cellNumber: number,
            symbol: symbol
    
        };
    
        if (cell.textContent === '' && canPressCell==true) {

            canPressCell = false;
            fetch('http://localhost:8085/api/game/with-bot/mark-cell',{ 
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(data) 
            })
        .then(response => {
            if (!response.ok) {
                reloadForm();
                // throw new Error('Hatolik kuzatildi. 200 qaytmadi');
            }

            // clearTable();
            infoServer.textContent = 'Muvaffaqqiyatli Boglandi';
            return response.json();
        })
        .then(data => {
            

            clearTable();

            displayTable(data.table)

            if(data.gameStatus == 'won'){
                markWinningCells(data.winnerLine);
                return;
            }
            if(data.gameStatus == 'equal'){
                printEqualInfo();
            }

            
            canPressCell = true;
            
        })
        .catch(error => {

            console.error('Xatolik:', error);
            infoServer.textContent = error
        });

        }
    });
});



window.onload = reloadForm;

function reloadForm() {
    // /checking-available-game-and-load

    canPressCell = true;

    fetch('http://localhost:8085/api/game/with-bot/checking-available-game-and-load')
        .then(response => {
            if (!response.ok) {
                throw new Error('Hatolik kuzatildi. 200 qaytmadi');
            }

            clearTable();
            infoServer.textContent = 'Muvaffaqqiyatli Boglandi';
            return response.json();  
        })
        .then(data => {

            displayTable(data.table)
            reloadGameResult();
            printPlayerQueue(data.players);
            
        })
        .catch(error => {

            console.error('Xatolik:', error);
            infoServer.textContent = error
        });
};

/////////////////////////////////////////////////// Yutgan chiziqni ustidan chizish
function markWinningCells(winnerLine) {
    canPressCell = false;
    let counter = 0;
    let k = 0;
    cells.forEach(cell => {
        winnerLine.forEach(number => {

            let numb;

            if (cell.getAttribute('data-cell')==(number-1)){
                cell.classList.add('winning-cell');
                numb = number-1;
                if(cell.textContent==symbolPlayerQueue){
                    printWinInfo();
                }else{
                    printFailInfo();
                }
            }

            

        });



    });

    reloadGameResult();

}

//////////////////////////////////////////////////////// New Game uchun 

document.getElementById('new-game-btn').addEventListener('click', newGame);

function newGame() {

    restart();

    canPressCell = false;

    // API'ga GET so'rovi yuborish
    fetch('http://localhost:8085/api/game/with-bot/new')
        .then(response => {
            if (!response.ok) {
                
                throw new Error('Hatolik kuzatildi. 200 qaytmadi');
            }

            clearTable();
            infoServer.textContent = 'Muvaffaqqiyatli Boglandi';
            return response.json();  
        })
        .then(data => {

            displayTable(data.table)
            printPlayerQueue(data.players);

            canPressCell = true;
            
        })
        .catch(error => {

            console.error('Xatolik:', error);
            infoServer.textContent = error
        });
}


/////////////////////////////////////////////////////////  Tableni ko'rsatish

function displayTable(table) {
    let counter = 0;

    table.forEach(row => {
        row.forEach(cellData => {
             counter++;
            const id = "cell-"+counter;

            let cell = document.getElementById(id)
           

            if (cellData.isMarked) {
                cell.textContent = cellData.markedBy.symbol;
            }
        });
    });

    

}


///////////////////////////////////////////////////////////// Tableni tozalash boshidan

function clearTable() {

    let counter = 0;


    cells.forEach(cell => {
        counter++;
        const id = "cell-"+counter;

        cell.textContent = '';
    })

}

////////////////////////////////////////////////////////////  Qaysi userni navbatilikini va Belgisini chiqarish

function printPlayerQueue(players){


    const placeForWrite = document.getElementById('player-queue-symbol');

    players.forEach(player => {
     
        if (player.name == 'user'){
            placeForWrite.textContent=player.symbol;
            placeForWrite.setAttribute('data-symbol', player.symbol);
            symbolPlayerQueue = player.symbol;
            console.info(symbolPlayerQueue);
        }

    } )

}


///////////////////////////////////////////////////////// Yutkanligi, Yutqizganligi va durrangligi haqida ekranga chiqarish

function printWinInfo(){
    const dc = document.getElementById('game-status-win');
    dc.setAttribute('style','display: block;');
}

function printFailInfo(){
    const dc = document.getElementById('game-status-fail');
    dc.setAttribute('style','display: block;');
}

function printEqualInfo(){
    const dc = document.getElementById('game-status-equal');
    dc.setAttribute('style','display: block;');
    reloadGameResult();
}

//////////////////////////// Bu restart yutkan va yutqizgandan keyin qolib ketadigan o'yinlarni yangi o'yin boshlash payti ekrandan tozalaydi


function restart(){
    const dc = document.getElementsByClassName('game-end-info');

    for (let index = 0; index < dc.length; index++) {

        const element = dc[index];
        element.setAttribute('style','display: none');
        
    }


cells.forEach(cell => {
    cell.classList.remove('winning-cell');
})

}



///////////////////////////////////////////////////////////   Natijani olish va yozish

document.getElementById('reload-result-btn').addEventListener('click', reloadGameResult);

function reloadGameResult() {

    fetch('http://localhost:8085/api/game/with-bot/all-result')
        .then(response => {
            if (!response.ok) {
                throw new Error('Hatolik kuzatildi. 200 qaytmadi');
            }

            // clearTable();
            infoServer.textContent = 'Muvaffaqqiyatli Boglandi';
            return response.json();  
        })
        .then(data => {

            dispayResultTable(data);
            
        })
        .catch(error => {

            console.error('Xatolik:', error);
            infoServer.textContent = error
        });

}

function dispayResultTable(result){
    
    const body = document.getElementById('result-table-rows-body');
    let counter = 0;

    clearGameResultTable();

    result.forEach(row => {
        let tr = document.createElement('tr');
            // tr.classList.add('game-result');
            let tdNumber = document.createElement('td');
            let tdResult = document.createElement('td');
            let tdTime = document.createElement('td');
        
        tdNumber.textContent = (++counter);
        tdTime.textContent = getTimeAsFormatted(row.dateEpoch);

        if (row.winner==null){
            tdResult.textContent = 'Durrang';        
        }
        else{
            if (row.winner.name == "user"){
                tdResult.textContent = 'Siz yutdingiz!';
            }else{
                tdResult.textContent = 'Bot yutdi';
            }
        }

        tr.appendChild(tdNumber);
        tr.appendChild(tdResult);
        tr.appendChild(tdTime);

        body.appendChild(tr);


    })

}

function clearGameResultTable(){
    const body = document.getElementById('result-table-rows-body');
    body.textContent = '';
}

function getTimeAsFormatted(epochTimeInMillisecundsInString){

    let time = parseInt(epochTimeInMillisecundsInString);

    console.info('Kiruvchi: ',time);

    let date = new Date(time);



    // let date = new Date(epochTimeInMillisecundsInString);

    console.info('Date: ',date);
    
    let year = date.getFullYear();
    let month = ('0' + (date.getMonth() + 1)).slice(-2); 
    let day = ('0' + date.getDate()).slice(-2);

    let hours = ('0' + date.getHours()).slice(-2);
    let minutes = ('0' + date.getMinutes()).slice(-2);
    let seconds = ('0' + date.getSeconds()).slice(-2);

    return `${hours}:${minutes}:${seconds}   ${day}-${month}-${year}`;
}