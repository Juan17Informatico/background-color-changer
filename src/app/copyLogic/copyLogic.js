

export const copyLogic = (idCopy, idResultText, idCheckImg, idLoadingImg) => {
    
    const idLoadingImgElement = document.querySelector(`#${idLoadingImg}`); 
    const checkElement = document.querySelector(`#${idCheckImg}`); 

    const idCopyElement = document.querySelector(`#${idCopy}`); 
    const idResultTextElement = document.querySelector(`#${idResultText}`); 
    
    idCopyElement.addEventListener('click', () => {

        idCopyElement.classList.add('display-none'); 
        idLoadingImgElement.classList.remove('display-none')

        setTimeout(() => {
            
            idLoadingImgElement.classList.add("display-none");
            checkElement.classList.remove('display-none'); 
            
            setTimeout(() => {
                idCopyElement.classList.remove('display-none');
                checkElement.classList.add('display-none'); 

                navigator.clipboard.writeText(idResultTextElement.textContent);
                console.log('llegue');
            }, 250);
            
        
        }, 750);
        
        

    });


    // console.log(idBtn, idResult);


}       