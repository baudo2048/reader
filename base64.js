export default function functionName() 
{
var root = document.createElement('div')
var img1 = document.createElement('img')
img1.src= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAqUlEQVR4Ae3WIQgCQRBA0ReMRjt27BjtdoxGo/GCYXs22Hu4YOd6771jMJ51EaYduwrz4ZedMB+2jCRZmD2uKI28YC3ggbmDLwy+2GLu7E7FUA0mlEZO1d6rilINinaEe/8m6IAS2zKofo+tyaDp174sDsigDOqyOIMyKCY4M7oGzWIzCIrYw9JBeTGOODdyjI78E+aOvrFRscKzY9BdwA43lIYeJcmCfACE8X0cfCuToAAAAABJRU5ErkJggg=='

root.appendChild(img1)

img1.onclick = ev => {

    // store.assets.img.img1.base64
    img1.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA9ElEQVR4Ae3WIQjCQBiGYTsGOwuLBoMdg2Aw2JPBYMeOwY7BzoIdwzr2HgzraXFhwbBwvkaD/Hcw3Rf+D57Oe9zBjXzS8/l8GQo8EH7sgF6Xo0EwyEaUCAbpCOP09SPCp96XHqEfYEfoByRH6AeYEfoBEAjwAA8YhAcI8IB0HuABHnDFFjPkWOMG+YAaG3zbCq1qwBMzWNupBpwRu1IxYIrY7RUDUjZXDBgjdpliwAKxWyoGnBC7QjGgwzzy/nd6AUCFzLg6tfpXosEROd6bYIXLv78SLYKICsm7CwUUsGc/tkE0xrsyI+4DXacGJXL4fD6f6F6ID9HMBjI45AAAAABJRU5ErkJggg=='
}




return root
}
