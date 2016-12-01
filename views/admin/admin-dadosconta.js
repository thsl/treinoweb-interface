// gera o grafico

$(document).ready(function () {
    // contador de caracteres
    $('#plano-descricao').simplyCountable({
        counter: '#plano-descricao-counter',
        countType: 'characters',
        strictMax: true,
        countDirection: 'down',
        maxCount: 150
    });
    $('#plano-criar').simplyCountable({
        counter: '#plano-criar-counter',
        countType: 'characters',
        strictMax: true,
        countDirection: 'down',
        maxCount: 150
    });


    // alerta de exclusão
    $('.swal-btn-cancel').click(function (e) {
        e.preventDefault();
        swal({
                title: "Você tem certeza desta ação?",
                text: "Esta ação excuirá este registro",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Sim, excluir",
                cancelButtonText: "Não, cancelar",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function (isConfirm) {
                if (isConfirm) {
                    swal({
                        title: "Excluído!",
                        text: "O registro foi excluído",
                        type: "success",
                        confirmButtonClass: "btn-success"
                    });
                } else {
                    swal({
                        title: "Cancelado",
                        text: "Ação cancelada",
                        type: "error",
                        confirmButtonClass: "btn-danger"
                    });
                }
            });
    });


});
