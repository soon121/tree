const api = "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"
const inp = document.getElementById('inp')
const images = document.querySelector('.images')


const getImage = async () => {

// make a request to open api
    const methods = {
    method:"POST",
    headers:{
    "content-Type":"application/json",
    "Authorization":`Bearer ${api}`
    },
body:JSON.stringify(
{
     "prompt":inp.value,
     "n":3,
     "size":"256×256"
}
  )
    }

 


const res = await fetch("https://api.openai.com/v1/images/generations"   , methods)



//parse the response as json
const data = await res.json()



const listImages = data.data;
Images.innerHTML=''
listImages.map(photo => {
const container=document.createElement("div")
images.append(container)
const img = document.createElement("img")
container.append(img)
img.src=photo.url
})
}
