document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 14; 
    loadData(1, itemsPerPage);
});

function RemovePost(id) // xóa trên id
{
    console.log(id);
    const blogs = JSON.parse(localStorage.getItem('Blog'));
    blogs.splice(id,1);
    localStorage.setItem('Blog',JSON.stringify(blogs));
    // console.log(blogs)
}

function loadData(currentPage, itemsPerPage) {
    if (typeof(Storage) !== "undefined") {
        var data = localStorage.getItem('Blog'); // Replace 'Blog' with your actual localStorage key
        if (data !== null) {
            try {
                var blogs = JSON.parse(data); //biến đổi nó thành một đối tượng JavaScript.
                displayUsers(blogs, currentPage, itemsPerPage);
                setupPagination(blogs.length, currentPage, itemsPerPage);
            } catch (e) {
                console.error("Error parsing JSON from localStorage:", e);
            }
        } else {
            console.log("No blog data in localStorage.");
        }
    } else {
        console.error("Local Storage is not supported in this browser.");
    }
}

//Them bai viet
var AddButton = document.getElementById("themmoi");
AddButton.addEventListener("click", () => {
    popup.style.display = "block";
});
var saveButton = document.getElementById("saveChangesButton");
saveButton.addEventListener("click",() =>
{
    var updatedTieuDe = document.getElementById('popupTieuDe').value;
    var updatedNoiDung = document.getElementById('popupNoiDung').value;
    var updatedType = document.getElementById('typeSelect').value; // Ensure your select element has an ID
    const post =
    {
        tieude: updatedTieuDe,
        noidung: updatedNoiDung,
        loai: updatedType
    };
    let blogs = localStorage.getItem("Blog") ? JSON.parse(localStorage.getItem("Blog")) : [];
    
    // Thêm đối tượng thông tin người dùng mới vào danh sách tài khoản
    blogs.push(post);
    
    // Lưu danh sách tài khoản đã được cập nhật vào localStorage
    localStorage.setItem("Blog", JSON.stringify(blogs));
    console.log("da dong");
    popup.style.display = "none";
});



function displayUsers(blogs, currentPage, itemsPerPage) {
    var container = document.querySelector('.container .content');
    container.innerHTML = ''; // Clear existing content

    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    var paginatedUsers = blogs.slice(startIndex, endIndex); // cắt các item hiển thị

    paginatedUsers.forEach(function(blog, i) {
        var blogElement = document.createElement('ul');
        blogElement.innerHTML = 
            `<li class="id"><p>${i+1 || 'N/A'}</p></li>
             <li class="tieude"><p>${blog.tieude || 'N/A'}</p></li>
             <li class="noidung"><p>${blog.noidung || 'N/A'}</p></li>
             <li class="loaibaiviet"><p>${blog.loai || 'N/A'}</p></li>
             <li class="tacvu">
                    <div id="edit">
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5813 2.96108L15.4 5.41354C15.5187 5.51686 15.5187 5.68543 15.4 5.78875L8.575 11.7269L5.675 12.0069C5.2875 12.045 4.95938 11.7595 5.00313 11.4223L5.325 8.89919L12.15 2.96108C12.2687 2.85776 12.4625 2.85776 12.5813 2.96108ZM17.6437 2.33845L16.1187 1.01162C15.6437 0.598341 14.8719 0.598341 14.3938 1.01162L13.2875 1.97411C13.1688 2.07743 13.1688 2.246 13.2875 2.34932L16.1063 4.80178C16.225 4.9051 16.4188 4.9051 16.5375 4.80178L17.6437 3.83929C18.1187 3.42329 18.1187 2.75172 17.6437 2.33845ZM12 10.1118V12.8797H2V4.17915H9.18125C9.28125 4.17915 9.375 4.14381 9.44687 4.08399L10.6969 2.99642C10.9344 2.78979 10.7656 2.43905 10.4312 2.43905H1.5C0.671875 2.43905 0 3.02361 0 3.74413V13.3147C0 14.0352 0.671875 14.6198 1.5 14.6198H12.5C13.3281 14.6198 14 14.0352 14 13.3147V9.02426C14 8.73334 13.5969 8.58923 13.3594 8.79315L12.1094 9.88072C12.0406 9.94325 12 10.0248 12 10.1118Z" fill="black"/>
                        </svg> 
                    </div>
                    <div id="remove">
                        <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5714 1.57155H8.35714L8.10536 1.06321C8.05202 0.954533 7.96986 0.863116 7.86812 0.799244C7.76638 0.735371 7.6491 0.701578 7.52946 0.701665H4.46786C4.34849 0.701199 4.23142 0.734867 4.13004 0.79881C4.02866 0.862753 3.94708 0.954386 3.89464 1.06321L3.64286 1.57155H0.428571C0.314907 1.57155 0.205898 1.61737 0.125526 1.69894C0.0451529 1.78051 0 1.89114 0 2.00649L0 2.87637C0 2.99173 0.0451529 3.10235 0.125526 3.18392C0.205898 3.26549 0.314907 3.31131 0.428571 3.31131H11.5714C11.6851 3.31131 11.7941 3.26549 11.8745 3.18392C11.9548 3.10235 12 2.99173 12 2.87637V2.00649C12 1.89114 11.9548 1.78051 11.8745 1.69894C11.7941 1.61737 11.6851 1.57155 11.5714 1.57155ZM1.425 13.3965C1.44544 13.7278 1.58951 14.0387 1.82787 14.266C2.06624 14.4932 2.38098 14.6197 2.70804 14.6198H9.29196C9.61902 14.6197 9.93376 14.4932 10.1721 14.266C10.4105 14.0387 10.5546 13.7278 10.575 13.3965L11.1429 4.1812H0.857143L1.425 13.3965Z" fill="black"/>
                        </svg> 
                    </div>       
            </li>`;
        container.appendChild(blogElement);
        // Lấy phần tử SVG có id="edit" trong phần tử người dùng hiện tại
        var editSVG = blogElement.querySelector("#edit");

        // Thêm sự kiện click vào phần tử SVG "edit"
        editSVG.onclick = function() {
            // Lấy thông tin người dùng từ mảng "blogs" dựa trên chỉ mục "i"
            const currentBlog = blogs[i];
            console.log(currentBlog);

            // Set the value of the input fields
            document.getElementById("popupTieuDe").value = currentBlog.tieude || '';
            document.getElementById("popupNoiDung").value = currentBlog.noidung || '';

            // Set the selected option in the select element
            var typeSelect = document.getElementById("typeSelect"); // Make sure this is the correct ID of your <select> element
            for (var j = 0; j < typeSelect.options.length; j++) {
                if (typeSelect.options[j].value == currentBlog.role) {
                    typeSelect.selectedIndex = j;
                    break;
                }
            }

            // Hiển thị popup và cập nhật thông tin người dùng
            popup.style.display = "block";


            var saveButton = document.getElementById('saveChangesButton');
            saveButton.addEventListener('click', function() {
                var updatedTieuDe = document.getElementById('popupTieuDe').value;
                var updatedNoiDung = document.getElementById('popupNoiDung').value;
                var updatedLoai = document.getElementById('typeSelect').value; // Ensure your select element has an ID
            
                // Find the blog based on the stored email
                var blog = blogs.find(blog => blog.tieude === currentBlog.tieude);
                if (blog) {
                    blog.tieude = updatedTieuDe;
                    blog.noidung = updatedNoiDung;
                    blog.loai = updatedLoai;
            
                    // Update the blogs array in localStorage
                    localStorage.setItem('Blog', JSON.stringify(blogs));

                    // Reload the page
                    location.reload();
                }
                popup.style.display = 'none';
            });
        }

        // Lấy phần tử có class "remove" trong phần tử người dùng hiện tại
        var removeButton = blogElement.querySelector("#remove");

        // Thêm sự kiện click vào phần tử "remove"
        removeButton.addEventListener('click', function() {
            // Lấy thông tin tài khoản từ phần tử HTML
            var tieudeElement = blogElement.querySelector('.tieude p');
            var tieude = tieudeElement.textContent;

            // Lấy danh sách tài khoản từ localStorage
            var data = localStorage.getItem('Blog'); 
            var blogs = JSON.parse(data);

            // //Lọc , Điều này giống như việc xóa một bài viết khỏi danh sách bài viết.
            var updatedBlogs = blogs.filter(function(blog) {
                return blog.tieude !== tieude;
            });

            // Cập nhật danh sách tài khoản trong localStorage
            localStorage.setItem('Blog', JSON.stringify(updatedBlogs));

            // Xóa phần tử HTML hiển thị tài khoản
            blogElement.remove();
        });


    });
}

function setupPagination(totalItems, currentPage, itemsPerPage) {
    var totalPages = Math.ceil(totalItems / itemsPerPage);//Hàm Math.ceil được sử dụng để làm tròn lên để đảm bảo rằng có đủ trang để hiển thị tất cả các mục.
    var paginationContainer = document.getElementById('pagination');

    // Xóa toàn bộ các nút phân trang hiện có 
    paginationContainer.innerHTML = '';

    // Create and append pagination controls
    for (let i = 1; i <= totalPages; i++) {
        var pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.innerText = i;
        pageLink.addEventListener('click', function (e) {
            e.preventDefault();
            loadData(i, itemsPerPage);
        });

        if (currentPage === i) {
            pageLink.style.fontWeight = 'bold';
        }

        paginationContainer.appendChild(pageLink);
    }
}

var searchType; // Khai báo biến searchType
var timkiem = document.getElementById('timkiem');
timkiem.addEventListener('click', function() {
    var input = document.getElementById('input').value;
    
    var data = localStorage.getItem('Blog'); 
    var blogs = JSON.parse(data);

    var container = document.querySelector('.content');
    container.innerHTML = '';

    searchType = document.getElementById('tatca').value;
    blogs.forEach(function(blog, i) {
        var match = false; // Biến để xác định có khớp với tìm kiếm không

        function fuzzySearch(input, text) {
            const regex = new RegExp(input.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i');
            return regex.test(text);
        }
        
        // Kiểm tra dựa trên lựa chọn của thẻ select
        switch(searchType) {
            case 'Tiêu đề':
                match = fuzzySearch(input, blog.tieude);
                break;
            case 'Nội dung':
                match = fuzzySearch(input, blog.noidung);
                break;
            case 'Loại bài viết':
                match = fuzzySearch(input, blog.loai);
                break;
        }
        

        if (match) {
            var blogElement = document.createElement('ul');
            blogElement.innerHTML = 
                `<li class="id"><p>${i+1 || 'N/A'}</p></li>
                <li class="tieude"><p>${blog.tieude || 'N/A'}</p></li>
                <li class="noidung"><p>${blog.noidung || 'N/A'}</p></li>
                <li class="loaibaiviet"><p>${blog.loai || 'N/A'}</p></li>
                <li class="tacvu">
                    <div id="edit">
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5813 2.96108L15.4 5.41354C15.5187 5.51686 15.5187 5.68543 15.4 5.78875L8.575 11.7269L5.675 12.0069C5.2875 12.045 4.95938 11.7595 5.00313 11.4223L5.325 8.89919L12.15 2.96108C12.2687 2.85776 12.4625 2.85776 12.5813 2.96108ZM17.6437 2.33845L16.1187 1.01162C15.6437 0.598341 14.8719 0.598341 14.3938 1.01162L13.2875 1.97411C13.1688 2.07743 13.1688 2.246 13.2875 2.34932L16.1063 4.80178C16.225 4.9051 16.4188 4.9051 16.5375 4.80178L17.6437 3.83929C18.1187 3.42329 18.1187 2.75172 17.6437 2.33845ZM12 10.1118V12.8797H2V4.17915H9.18125C9.28125 4.17915 9.375 4.14381 9.44687 4.08399L10.6969 2.99642C10.9344 2.78979 10.7656 2.43905 10.4312 2.43905H1.5C0.671875 2.43905 0 3.02361 0 3.74413V13.3147C0 14.0352 0.671875 14.6198 1.5 14.6198H12.5C13.3281 14.6198 14 14.0352 14 13.3147V9.02426C14 8.73334 13.5969 8.58923 13.3594 8.79315L12.1094 9.88072C12.0406 9.94325 12 10.0248 12 10.1118Z" fill="black"/>
                        </svg> 
                    </div>
                    <div id="remove">
                        <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5714 1.57155H8.35714L8.10536 1.06321C8.05202 0.954533 7.96986 0.863116 7.86812 0.799244C7.76638 0.735371 7.6491 0.701578 7.52946 0.701665H4.46786C4.34849 0.701199 4.23142 0.734867 4.13004 0.79881C4.02866 0.862753 3.94708 0.954386 3.89464 1.06321L3.64286 1.57155H0.428571C0.314907 1.57155 0.205898 1.61737 0.125526 1.69894C0.0451529 1.78051 0 1.89114 0 2.00649L0 2.87637C0 2.99173 0.0451529 3.10235 0.125526 3.18392C0.205898 3.26549 0.314907 3.31131 0.428571 3.31131H11.5714C11.6851 3.31131 11.7941 3.26549 11.8745 3.18392C11.9548 3.10235 12 2.99173 12 2.87637V2.00649C12 1.89114 11.9548 1.78051 11.8745 1.69894C11.7941 1.61737 11.6851 1.57155 11.5714 1.57155ZM1.425 13.3965C1.44544 13.7278 1.58951 14.0387 1.82787 14.266C2.06624 14.4932 2.38098 14.6197 2.70804 14.6198H9.29196C9.61902 14.6197 9.93376 14.4932 10.1721 14.266C10.4105 14.0387 10.5546 13.7278 10.575 13.3965L11.1429 4.1812H0.857143L1.425 13.3965Z" fill="black"/>
                        </svg> 
                    </div>       
                </li>`;
            container.appendChild(blogElement);
            // Cài đặt sự kiện cho nút Edit
            var editSVG = blogElement.querySelector("#edit");
            editSVG.onclick = function() {
                // Lấy thông tin người dùng từ mảng "blogs" dựa trên chỉ mục "i"
                const currentBlog = blogs[i];
                console.log(currentBlog);

                // Set the value of the input fields
                document.getElementById("popupTieuDe").value = currentBlog.tieude || '';
                document.getElementById("popupNoiDung").value = currentBlog.noidung || '';

                // Set the selected option in the select element
                var typeSelect = document.getElementById("typeSelect"); // Make sure this is the correct ID of your <select> element
                for (var j = 0; j < typeSelect.options.length; j++) {
                    if (typeSelect.options[j].value == currentBlog.role) {
                        typeSelect.selectedIndex = j;
                        break;
                    }
                }

                // Hiển thị popup và cập nhật thông tin người dùng
                popup.style.display = "block";

                var saveButton = document.getElementById('saveChangesButton');
                saveButton.addEventListener('click', function() {
                    var updatedTieuDe = document.getElementById('popupTieuDe').value;
                    var updatedNoiDung = document.getElementById('popupNoiDung').value;
                    var updatedLoai = document.getElementById('typeSelect').value; // Ensure your select element has an ID
                
                    // Find the blog based on the stored email
                    var blog = blogs.find(blog => blog.email === currentBlog.email);
                    if (blog) {
                        blog.fullname = updatedTieuDe;
                        blog.email = updatedNoiDung;
                        blog.role = updatedLoai;
                
                        // Update the blogs array in localStorage
                        localStorage.setItem('Blog', JSON.stringify(blogs));

                        // Reload the page
                        location.reload();
                    }
                
                    popup.style.display = 'none';
                });

            }
        }
    });

    if (container.innerHTML === '') {
        container.innerHTML = '<p>Không tìm thấy tài khoản.</p>';
    }
});



// Tạo biến lưu trữ popup
var popup = document.getElementById("popup");
var closeButton = document.getElementById("closePopup");

// Khi người dùng nhấn nút đóng hoặc bấm bất kỳ nơi nào trên overlay, đóng popup
closeButton.onclick = function() {
    popup.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

// quanlybaiviet
document.querySelector('.trangtongquan').addEventListener('click', function() {
    window.location.href = 'trangtongquan.html';
});
document.querySelector('.quanlythongtin').addEventListener('click', function() {
    window.location.href = 'quanlythongtin.html';
});
document.querySelector('.quanlynguoidung').addEventListener('click', function() {
    window.location.href = 'quanlynguoidung.html';
});
document.querySelector('.trangchu').addEventListener('click', function() {
    window.location.href = 'trangchu.html';
});
document.querySelector('.taikhoan').addEventListener('click', function() {
    window.location.href = 'taikhoan.html';
});
document.querySelector('.dangxuat').addEventListener('click', function() {
    if(confirm('Đăng xuất!') == true){
        window.location.href = 'trangchu.html';
        localStorage.removeItem('login');
    }
});



document.getElementById("lammoi").addEventListener('click', function() {
    location.reload();
});