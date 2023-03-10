const addInformetion = () =>{
    const inputField = document.getElementById('inputPassword1');
    const inputValue = inputField.value;
    inputField.value = ''; 
    inpurValueSetLocalStorage(inputValue)

}

const chackLocalStorage = () =>{
    let element = {};
    const chackElement = localStorage.getItem('name');
    if(chackElement){
        element = JSON.parse(chackElement);
    }
    return element;
}

const inpurValueSetLocalStorage = (inputValue,name)=>{
    const element = chackLocalStorage();
    element[inputValue]=' ';
    const elementStringFey =JSON.stringify(element);
    localStorage.setItem('Name',elementStringFey);
    
}
const removeButton1 = () =>{
    removeElementByLocalStorage()
}
const removeElementByLocalStorage = () =>{
    localStorage.removeItem('Name');
}

// 2nd
const addInformetion2 = () =>{
    const inputField = document.getElementById('inputPassword2');
    const inputValue = inputField.value;
    inputField.value = ''; 
    inpurValueSetLocalStorage2(inputValue)

}
const inpurValueSetLocalStorage2 = (inputValue,name)=>{
    const element = chackLocalStorage();
    element[inputValue]=' ';
    const elementStringFey =JSON.stringify(element);
    localStorage.setItem('Email',elementStringFey);
}
const removeButton2 = () =>{
    removeElementByLocalStorage2()
}
const removeElementByLocalStorage2 = () =>{
    localStorage.removeItem('Email');
}
// 3rd

const addInformetion3 = () =>{
    const inputField = document.getElementById('inputPassword3');
    const inputValue = inputField.value;
    inputField.value = ''; 
    inpurValueSetLocalStorage3(inputValue)

}
const inpurValueSetLocalStorage3 = (inputValue,name)=>{
    const element = chackLocalStorage();
    element[inputValue]=' ';
    const elementStringFey =JSON.stringify(element);
    localStorage.setItem('Message',elementStringFey);
}
const removeButton3 = () =>{
    removeElementByLocalStorage3()
}
const removeElementByLocalStorage3 = () =>{
    localStorage.removeItem('Message');
}