user = 'ynsmrtpc'
apirepo = `https://api.github.com/users/${user}`

listrepos = document.createElement('div');
listrepos.className = 'container mx-auto mt-6'
listrepos.idName = 'card-start';
document.getElementById('github').appendChild(listrepos);
rowDiv = document.createElement('div');
rowDiv.className = 'row';
listrepos.appendChild(rowDiv);

$.getJSON(apirepo + '/repos', function(data) {
    console.log('data now', data)

    data.forEach(projects => {

        colDiv = document.createElement('div');
        colDiv.className = 'col-md-20';
        rowDiv.appendChild(colDiv);

        cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.style = 'width: 18rem;';
        colDiv.appendChild(cardDiv);

        cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';
        cardDiv.appendChild(cardBodyDiv);

        h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.innerHTML = `${projects.name}`.toUpperCase() + '<br><br>';
        cardBodyDiv.appendChild(h5);

        visit_a = document.createElement('a');
        visit_a.className = 'btn mr-2';
        visit_a.innerHTML = '<i class="fas fa-link"></i>';
        visit_a.textContent = 'Visit Site'
        visit_a.href = `https://${projects.name}.netlify.app/`;
        visit_a.target = '_blank'
        visit_a.style = 'position:absolute; bottom:5px; left: 5px;'
        cardBodyDiv.appendChild(visit_a);

        github_a = document.createElement('a');
        github_a.className = 'btn';
        github_a.innerHTML = '<i class="fas fa-github"></i>';
        github_a.textContent = 'Github'
        github_a.href = `${projects.html_url}`;
        github_a.target = '_blank'
        github_a.style = 'position:absolute; bottom:5px; right: 5px;'
        cardBodyDiv.appendChild(github_a);
    })
})