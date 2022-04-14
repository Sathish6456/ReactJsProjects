export const incrementF=(pl)=>{
    console.log('inc');
    return {
        type:'inc',
        payload:pl
    }
}

export const decrementF=()=>{
    console.log('dec');
    return {
        type:'dec'
    }
}