// 1 создать 2 кнопки -
// первая с классом button-create - с текстом create-flex-box
// вторая с классом button-delete - с текстом delete-box
// создать div  с классом - flex-box
// создать div  с классом - flex-block

let properties = ['display:flex',
    'justify-content:space-between',
    'justify-content:center',
    'justify-content:space-around',
    'justify-content:space-evenly',
    'justify-content:flex-start',
    'justify-content:flex-end',
    'flex-wrap:nowrap',
    'flex-wrap:wrap',
    'flex-wrap:wrap-reverse',
    'align-items:center',
    'align-items:flex-start',
    'align-items:flex-end',
    'align-content:center',
    'align-content:flex-start',
    'align-content:flex-end',
    'align-content:space-between',
    'flex-direction:column',
    'flex-direction:column-reverse',
    'flex-direction:row',
    'flex-direction:row-reverse' ,
];

let  root  = document.querySelector('.root');
let createBtn = document.createElement('button');
createBtn.className = 'button-create';
createBtn.textContent = 'create flex-box';
createBtn.style.marginRight = 20 + 'px';
createBtn.style.marginBottom = 20 + 'px';

let delBtn = document.createElement('button');
delBtn.className = 'button-delete';
delBtn.textContent = 'delete-box';

let flexBox = document.createElement('div');
flexBox.className = 'flex-box';


let flexBlock = document.createElement('div');
flexBlock.className = 'flex-block';

root.append(createBtn, delBtn, flexBox, flexBlock);


// 2
// при нажатии на кнопку button-create
// создать внутри блока с классом flex-box - кнопка для наших команд с классом flex
// создать внутри блока с классом flex-block - 3 div с классом и с модификаторами
// 4
// если у нас уже есть наши кнопки и 3 box
// то при нажатии на button-create добавить 3 div в flex-block | flex-box не трогаем


// 6
//при нажатии на кнопку с классом flex
// Добавить этой кнопке в текст :active
// при повторном нажатии удалить :active

// 7
//  при нажатии на одну кнопку с классом flex -
// то для блока с классом flex-block выполнить команду нажатой кнопки

createBtn.addEventListener('click', ()=>{

    if (flexBox.children.length === 0){
        properties.forEach((item)=>{
            let flex = document.createElement('button');
            flex.className='flex';
            flex.style.margin = 10 +'px';
            flex.textContent = item;
            flexBox.append(flex);

            flex.addEventListener('click',()=>{
                if (!flex.textContent.includes('active')){
                    flexBlock.classList.add(flex.textContent + ';');

                    flex.textContent += ' active';
                    flex.style.backgroundColor = 'blue'
                }
                else{

                    flex.textContent = flex.textContent.slice(0,flex.textContent.length-7);
                    flex.style.backgroundColor = 'grey';
                    flexBlock.classList.remove(flex.textContent + ';')
                }
                flexBlock.style.cssText = flexBlock.className.slice(11);
            })
        });
    }

    for (let i = 1 ; i < 4; i++){
        let box = document.createElement('div');
        box.className = `box box${i}`;
        flexBlock.append(box);
    }
});


// 3
// при нажатии на кнопку button-delete
// удалить все данные с flex-box и c flex-block

// 5
// если у нас элементов с классом box больше чем 3
// то при нажатии на кнопку button-delete , удаляем только три последних box

delBtn.addEventListener('click', () => {

    if (flexBlock.children.length > 3){
        Array.from(flexBlock.children).forEach((item,idx, array) =>{
            if (idx > array.length - 4){
                item.remove()
            }
        })
    } else {
        Array.from(flexBox.children).forEach((item)=>{
            item.remove()
        });
        Array.from(flexBlock.children).forEach((item)=>{
            item.remove();
        });
    }
});


