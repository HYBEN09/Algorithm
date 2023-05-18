function solution(my_string) {
    const vowels = ["a", "e", "i", "o", "u"]
    let results = ''
    
    for(let key of my_string){
        if(!vowels.includes(key)){
            results += key
        }
    }
    return results
}