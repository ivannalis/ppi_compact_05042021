/* -------------------------------------------------------------------------- */
/*                           confirm delete kategori                          */
/* -------------------------------------------------------------------------- */

let modal = document.getElementById('defaultModal')
let btnConfirm = document.getElementById('btn-sub-confirm')
let wrong = document.getElementById('konfirmText')
let input = document.getElementById('confirm')

let tbleIn = document.getElementById('sID')

let sn = ''

function alertDelete() {
    modal.style.display = 'block'
    sn += event.srcElement.id
}

function closeModal() {
    modal.style.display = 'none'
}

function OkeDelete() {
    if (input.value != 'ppi compact' || input.value === '') {
        wrong.style.display = 'block'
    } else {
        location.href = '/auth/_admin/' + sn
    }
}

/* -------------------------------------------------------------------------- */
/*                         end confirm delete kategori                        */
/* -------------------------------------------------------------------------- */