const pb = new PocketBase('http://127.0.0.1:8090');
const redirectUrl = 'http://127.0.0.1:3000/redirect';

async function loadLinks() {
    const authMethods = await pb.collection('users').listAuthMethods();
    const listItems = [];

    for (const provider of authMethods.authProviders) {
        const $li = $(`<li><a class="button is-bordered"><img src="https://icongr.am/material/${provider.name.toLowerCase()}.svg?size=26&color=f3aa4e" width="16" height="16"><span>${provider.name} ile giriş yap</span></a></li>`);

        $li.find('a')
            .attr('href', provider.authUrl + redirectUrl)
            .data('provider', provider)
            .click(function () {
                localStorage.setItem('provider', JSON.stringify($(this).data('provider')));
            });

        listItems.push($li);
    }

    $('#list').html(listItems.length ? listItems : '<li>No OAuth2 providers.</li>');
}

loadLinks();