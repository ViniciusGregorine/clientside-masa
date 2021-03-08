var ul = document.getElementById('place')



for (i = 0; i < 4; i++) {
    let li = document.createElement('li')
    
    li.innerHTML = `<li class="place__list">
                        <span class="place__name">name</span>
                        <canvas class="place__graph"></canvas>
                    </li>`

    ul.appendChild(li)
 } 