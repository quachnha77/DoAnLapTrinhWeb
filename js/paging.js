$(document).ready(function () {
    // Số lượng items trên mỗi trang
    var itemsPerPage = 4;

    // Tổng số items
    var totalItems = $('.content > div').length;

    // Tính số lượng trang
    var totalPages = Math.ceil(totalItems / itemsPerPage);

    // Thêm phân trang
    $('#paging').pagination({
        dataSource: new Array(totalPages).fill(1).map((_, index) => index + 1),
        pageSize: 1,
        showPageNumbers: true,
        showNavigator: true,
        formatResult: function(data) {
            // Ẩn dòng "Total 3 items"
            return '';
        },
        callback: function (data, pagination) {
            // Hiển thị items cho trang hiện tại
            var start = (pagination.pageNumber - 1) * itemsPerPage;
            var end = start + itemsPerPage;

            $('.content > div').hide();
            $('.content > div').slice(start, end).show();
            $('.paginationjs-nav').hide();
        }
    });
    
});