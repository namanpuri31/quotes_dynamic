let realdata=''
const qut=document.getElementById('quotes')
const auth=document.getElementById('author')
const butn=document.getElementById('btn')
const newdata=()=>{
    let rnum=Math.floor(Math.random()*1644)
    if(realdata[rnum].author==null){
        realdata[rnum].author='~Unknown'
    }
    qut.innerText=realdata[rnum].text
    auth.innerText="Author: "+realdata[rnum].author

    
}

const generateApi= async ()=>{
    let api="http://type.fit/api/quotes"
    try {
        // await is used to complete the work first then nly it can proceed
        let data= await fetch(api);
        // converting to json format
        realdata= await data.json();
        //  printng the data
        // console.log(realdata.length)
        // console.log(realdata[0].author)
        newdata();
    } catch (error) {
        
    }
}
butn.addEventListener('click',newdata)
generateApi()