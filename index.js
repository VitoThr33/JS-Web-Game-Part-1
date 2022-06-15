//image function
function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
//image list
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//item function
function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}
//item list
newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)



//add sword
//let sword = document.createElement('img')
//sword.src = 'assets/sword.png'
//sword.position = 'fixed'
//sword.left = '500px'
//sword.bottom = '405px'
//document.body.append(sword)

//sword.addEventListener('click', function(){
  //  sword.remove()
//})

//green character//
//let greenCharacter = document.createElement('img')
//greenCharacter.src = 'assets/green-character.gif'
//greenCharacter.style.position = 'fixed'
//greenCharacter.style.left = '100px'
//greenCharacter.style.bottom = '100px'
//document.body.append(greenCharacter)

//pine-tree//
//let pinetree = document.createElement('img')
//pinetree.src = 'assets/pine-tree.png'
//pinetree.style.position = 'fixed'
//pinetree.style.left = '450px'
//pinetree.style.bottom = '200px'
//document.body.append(pinetree)




