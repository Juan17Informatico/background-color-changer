

export const copyLogic = (id, idResult) => {

    const idBtn = document.querySelector(`#${id}`); 
    const idResultImg = document.querySelector(`#${idResult}`); 
    
    idBtn.addEventListener('click', () => {
        console.log(idBtn, idResultImg);

    });


    // console.log(idBtn, idResult);


}       