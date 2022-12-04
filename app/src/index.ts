import Clazz from "./Class"
import Smily from "../res/smily.png"

console.log(Clazz.getCrap())
document.write(`Hello world! ${Clazz.getCrap()}`)
const img = document.createElement('img')
img.src = Smily
document.body.appendChild(img)
new Clazz().sidekickFunc()


// throw new Error('ciao!!!!!!')