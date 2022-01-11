export async function getText (file, setText) {
    await fetch(file).then(response => response.text()).then(jsonResponse => {setText(jsonResponse)})
}

export function parseTextToList(text){

    return text.split('#').map((str)=>{return string2jsx(str)})
}

export function string2jsx(str){
    return <div dangerouslySetInnerHTML={{__html: str}}></div>
}
