

/**
 * 
 * @param {type} type 
 * @param {idAttribute} id atributo 
 * @param {classAttribute} class Name 
 * @returns {divElement} : div
 */
export const createDiv = (type, classAttribute = "", idAttribute = "") => {
    const element = document.createElement(type);

    element.setAttribute("id", idAttribute);
    element.setAttribute("class", classAttribute);

    return element;
}

