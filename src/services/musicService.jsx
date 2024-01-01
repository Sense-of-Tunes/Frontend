export async function getMusicByCategory(){
    const data = await fetch('http://localhost:5242/api/Music/getEmojidenDuygu?duygu=Mutlu&limit=20')
    const response = await data.json()
    return response
}
export async function getAllEmoji(){
    const data = await fetch("http://localhost:5242/api/Music/getDuyguEmojileri")
    const response = await data.json()
    return response
}

export async function getTrend(){
    const data = await fetch('http://localhost:5242/api/Music/getTrendMuzikler')
    const response = await data.json()
    return response
} 

export async function getMusicByDuygu(duygu,limit){
    const data = await fetch(`http://localhost:5242/api/Music/getEmojidenDuygu?duygu=${duygu}&limit=${limit}`)
    const response = await data.json()
    return response
}

export async function getMusicByUser(kullaniciGirdi){
    const data = await fetch("http://localhost:5242/api/Music/getHisAnaliz_DuyguGetir",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            kullaniciGirdi
        })
    })
    const response = await data.json()
    return response
}