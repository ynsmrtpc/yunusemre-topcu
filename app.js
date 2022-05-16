user = 'ynsmrtpc'
apirepo = `https://api.github.com/users/${user}`;

listrepos = document.createElement('div');
listrepos.className = 'container'
document.querySelector('#github').appendChild(listrepos);
rowDiv = document.createElement('div');
rowDiv.className = 'row';
listrepos.appendChild(rowDiv);
rowDiv.style = "padding: 15px ";

$.getJSON(apirepo + '/repos', function(data) {
    console.log('data now', data)

    data.forEach(projects => {
        projectName = projects.name.toUpperCase();
        rowDiv.innerHTML +=
            `
<div class="card" style="width: 25%; background: transparent; opacity: .7; ">
  <div class="card-body" style="width:100%;height:100%; ">
    <h6 class="card-title">${projectName}</h6>
    <a class="btn" href="${projects.html_url}" target="_blank" class="card-link">Github</a>
<!--    <a class="btn" href="${projects.name}.netlify.app" class="card-link" target="_blank">Visit Site</a> -->
  </div>
</div>
 `
    });
});

$(document).ready(function() {
    $('#dark-light').click(function(e) {
        e.preventDefault();
        // $('.mobile').style.background = '#fafafa !important';
        // $('.mobile').style.color = '#343434 !important';
        const dark = document.getElementById('mobile');
        dark.style.background = '#fafafa';
        dark.style.color = '#343434';
        light = document.getElementById('dark-light');
        light.innerHTML = '<i class="fa fa-sun"></i>';
        $(document).ready(function() {
            $('#dark-light').click(function(e) {
                e.preventDefault();
                // $('.mobile').style.background = '#fafafa !important';
                // $('.mobile').style.color = '#343434 !important';
                const dark = document.getElementById('mobile');
                dark.style.background = '#343434 ';
                dark.style.color = '#fafafa ';
                light = document.getElementById('dark-light');
                light.innerHTML = '<i class="fas fa-moon"></i>';
            })
        })
    })
})
