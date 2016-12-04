// gera o grafico

$(document).ready(function () {
    //line GraficoReceita
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'GraficoReceita'
        },
        title: {
            text: 'Receitas'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
    var chart = $('#GraficoReceita').highcharts();
    $('#ModalDetalhaPlano').on('show.bs.modal', function () {
        $('#GraficoReceita').css('visibility', 'hidden');
    });
    $('#ModalDetalhaPlano').on('shown.bs.modal', function () {
        $('#GraficoReceita').css('visibility', 'initial');
        chart.reflow();
    });

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
    $('#plano-criar-novo').simplyCountable({
        counter: '#plano-criar-counter-novo',
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

    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR'
    });
});
