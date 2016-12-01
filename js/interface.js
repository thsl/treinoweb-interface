// Coisas genéricas para TODA a interface
$(document).ready(function () {
// Traduz o select2
    $(".select2").select2({
        "language": "pt-BR",
        dropdownParent: $(".modal")
    });
    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR'
    });
    //Ativa checkboxes
    $('.checkbox').prop('indeterminate', true)
});