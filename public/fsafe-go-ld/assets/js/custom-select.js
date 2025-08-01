jQuery(document).ready(function ($) {
    $('#province').select2({
        placeholder: 'Hồ Chí Minh',
        language: {
            noResults: function () {
                return 'Không tìm thấy kết quả';
            },
        },
    });
    $('#province').on('select2:open', function () {
        $('.select2-search__field').attr('placeholder', 'Nhập thông tin');
    });
});
