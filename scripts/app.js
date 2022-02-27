user = 'ynsmrtpc'
apirepo = `https://api.github.com/users/${user}`

listrepos = document.createElement('ul')
document.getElementById('github').appendChild(listrepos)
$.getJSON(apirepo + '/repos', function(data) {
    console.log('data now', data)

    data.forEach(projects => {

        listItemRepo = document.createElement('li')
        listItemRepo.className = 'li'
        listrepos.appendChild(listItemRepo)

        hlink = document.createElement('a')
        hlink.target = '_blank'
        listItemRepo.appendChild(hlink)

        // btncode = document.createElement('button')
        // btncode.className = 'btn btn-light'
        // btncode.textContent = 'Open Code'
        // listItemRepo.appendChild(btncode)

        btnlink = document.createElement('a')
        btnlink.target = '_blank'
        btnlink.className = 'btn btn-light'
        btnlink.textContent = 'Open Website'
        btnlink.href = `https://${projects.name}.netlify.app/`
        listItemRepo.appendChild(btnlink)

        hlink = document.createElement('a')
        hlink.target = '_blank'
        listItemRepo.appendChild(hlink)

        hr = document.createElement('hr')
        listItemRepo.appendChild(hr)
        hlink.textContent = `${projects.name}`.toUpperCase()
        hlink.href = projects.html_url
    })
})