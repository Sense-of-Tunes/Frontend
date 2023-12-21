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