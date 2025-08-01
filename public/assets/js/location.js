$(document).ready(function () {

    const openPopupBtns = document.querySelectorAll('.choose-location-btn');
    const popupOverlay = document.getElementById('locationPopup');
    const closePopupBtn = document.getElementById('closePopup');

    openPopupBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {

            modalLocation.construct();

            popupOverlay.style.display = 'flex';
            document.querySelector('body').style.overflow = 'hidden';
        });
    });

    closePopupBtn.addEventListener('click', function () {
        popupOverlay.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    });

    // Đóng popup khi click ra ngoài
    // popupOverlay.addEventListener('click', function(e) {
    //     if (e.target === popupOverlay) {
    //         popupOverlay.style.display = 'none';
    //         document.querySelector('body').style.overflow ='auto';
    //     }
    // });

    let locationElement = $('#location_province');
    let districtElement = $('#location_district');
    let wardElement = $('#location_ward');
    let btnConfirm = $('#confirm_location');
    let locationName = $('.locationName');

    let locationOption = {
        placeholder: "Chọn thành phố",
        dropdownParent: locationElement.parent(),
    };
    let districtOption = {
        placeholder: "Chọn quận/ huyện",
        dropdownParent: districtElement.parent(),
    };
    let wardOption = {
        placeholder: "Chọn phường/ xã",
        dropdownParent: wardElement.parent(),
    };

    let locationObject = {
        locationid: function (locationid = null) {
            let locationId = localStorage.getItem('locationid') || 8;
            if (locationid != null) {
                locationId = locationid;
            }
            localStorage.setItem('locationid', locationId);
            return locationId;
        },
        districtid: function (districtid = null) {

            let districtId = localStorage.getItem('districtid') || 1;
            if (districtid != null) {
                districtId = districtid;
            }
            localStorage.setItem('districtid', districtId);
            return districtId;
        },
        districtname: function (districtname = null) {

            let districtName = localStorage.getItem('districtname') || '';
            if (districtname != null) {
                districtName = districtname;
            }
            localStorage.setItem('districtname', districtName);
            return districtName;
        },
        wardid: function (wardid = null) {

            let wardId = localStorage.getItem('wardid') || 1;
            if (wardid != null) {
                wardId = wardid;
            }
            localStorage.setItem('wardid', wardId);
            return wardId;
        },

        wardname: function (wardname = null) {

            let wardName = localStorage.getItem('wardname') || 1;
            if (wardname != null) {
                wardName = wardname;
            }
            localStorage.setItem('wardname', wardName);
            return wardName;
        },
        locationname: function () {

            let locationName = localStorage.getItem('locationname') || 'Hồ Chí Minh';
            if (localStorage.getItem('listLocation') == null) {
                $.ajaxSetup({ async: false });
                $.post(
                    "/api/get-location",
                    function (response) {
                        let data = response.data;
                        if (data) {
                            localStorage.setItem('listLocation', JSON.stringify(data));
                        }
                    }
                );
                $.ajaxSetup({ async: true });
            }

            if (localStorage.getItem('locationid') != null) {

                $.each(JSON.parse(localStorage.getItem('listLocation')), function (key, val) {

                    if (localStorage.getItem('locationid') == val.id) {

                        localStorage.setItem('locationname', val.text);
                        locationName = val.text;
                    }
                });
            }

            return locationName;
        },
        saveDataLocationDKOL: function () {

            let dataLocation = JSON.stringify({
                'locationid': locationObject.locationid(),
                'districtid': locationObject.districtid(),
                "wardid": locationObject.wardid(),
                "source": 1
            });

            localStorage.setItem("dataLocation", dataLocation);

        }
    };

    var modalLocation = {
        construct: function () {

            let locationElement = $('#location_province');

            $.ajax({
                url: '/api/get-location',
                type: "POST",
                data: "",
                dataType: "json",

                success: function (response) {
                    let data = response.data;

                    if (response.error_code == 0) {
                        locationElement.empty();

                        var option = '<option value="">Chọn thành phố</option>';
                        locationElement.append(option);
                        $.each(data, function (key, val) {
                            /** Default : HCM */


                            if (localStorage.getItem('locationid') != null && localStorage.getItem('locationid') == val.Id) {
                                option = '<option value="' + val.Id + '" selected>' + val.Name + '</option>';
                            } else {
                                option = '<option value="' + val.Id + '">' + val.Name + '</option>';
                            }
                            locationElement.append(option);
                        });

                        locationElement.select2(locationOption);
                        $('#loading').hide();
                    }


                },
                error: function (data, textStatus, errorThrown) {

                },
            });

            locationElement.val(localStorage.getItem('locationid')).trigger('change');
            districtElement.val(localStorage.getItem('districtid')).trigger('change');
            wardElement.val(localStorage.getItem('wardid')).trigger('change');
        },
        getLocation: function () {

            $('#loading').show();
            let locationElement = $('#location_province');
            $.ajax({
                url: '/api/get-location',
                type: "POST",
                data: "",
                dataType: "json",
                async: true,
                success: function (response) {
                    let data = response.data;

                    if (response.error_code == 0) {
                        locationElement.empty();

                        var option = '<option value="">Chọn thành phố</option>';
                        locationElement.append(option);
                        $.each(data, function (key, val) {
                            /** Default : HCM */
                            if (localStorage.getItem('locationid') != null && localStorage.getItem('locationid') == val.Id) {
                                option = '<option value="' + val.Id + '" selected>' + val.Name + '</option>';
                            } else {
                                option = '<option value="' + val.Id + '">' + val.Name + '</option>';
                            }
                            locationElement.append(option);
                        });

                        locationElement.select2(locationOption);
                        $('#loading').hide();
                    } else {
                        var option = '<option value="">Chọn thành phố</option>';
                        locationElement.append(option);
                        locationElement.select2(locationOption);
                    }


                },
                error: function (data, textStatus, errorThrown) {
                    $('#loading').hide();
                },
            });
        },

        loadDistrict: function (locationId) {

            $('#loading').show();
            let wardElement = $('#location_ward');

            wardElement.empty();

            $.ajax({
                url: "/api/get-district",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({ location_id: parseInt(locationId) }),
                dataType: "json",
                async: true,
                success: function (response) {
                    let data = response.data;

                    if (response.error_code == 0) {

                        districtElement.empty();
                        var option = '<option value="">Chọn quận/ huyện</option>';
                        districtElement.append(option);

                        $.each(data, function (key, val) {

                            if (val.Id == localStorage.getItem('districtid')) {
                                var option = '<option value="' + val.Id + '" selected>' + val.Name + '</option>';

                            } else {
                                var option = '<option value="' + val.Id + '">' + val.Name + '</option>';
                            }



                            districtElement.append(option);
                        });

                        districtElement.removeAttr('disabled');
                        $('#loading').hide();

                    } else {

                        $('#loading').hide();
                        districtElement.empty();
                        var option = '<option value="">Chọn quận/ huyện</option>';
                        districtElement.append(option);
                        districtElement.select2(districtOption);

                        wardElement.empty();
                        wardElement.select2(wardOption);

                    }

                },
                error: function (data, textStatus, errorThrown) {
                    $('#loading').hide();
                },
            });


        },
        loadWard: function (locationId, DistrictId) {

            $('#loading').show();
            let wardElement = $('#location_ward');
            $.ajax({
                url: "/api/get-ward",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({ location_id: parseInt(locationId), district_id: parseInt(DistrictId) }),
                dataType: "json",
                async: true,
                success: function (response) {
                    let data = response.data;

                    if (response.error_code == 0) {
                        wardElement.empty();

                        var option = '<option value="">Chọn phường/ xã</option>';
                        wardElement.append(option);

                        $.each(data, function (key, val) {

                            if (val.Id == localStorage.getItem('wardid')) {
                                var option = '<option value="' + val.Id + '" selected>' + val.Name + '</option>';
                            } else {
                                var option = '<option value="' + val.Id + '">' + val.Name + '</option>';
                            }

                            wardElement.append(option);
                        });

                        wardElement.select2(wardOption);
                        wardElement.removeAttr('disabled');
                        $('#loading').hide();

                    } else {
                        $('#loading').hide();
                        wardElement.empty();

                        var option = '<option value="">Chọn phường/ xã</option>';
                        wardElement.append(option);

                        wardElement.select2(wardOption);
                    }
                },
                error: function (data, textStatus, errorThrown) {
                    $('#loading').hide();
                },
            });
        },

        saveLocation: function (locationId, LocationName) {

            localStorage.setItem("locationid", locationId);
            localStorage.setItem("locationname", LocationName);
            sessionStorage.setItem("locationid", locationId);
            sessionStorage.setItem("locationname", LocationName);
        },
        saveDistrict: function (districtId, districtName) {

            localStorage.setItem("districtid", districtId);
            localStorage.setItem("districtname", districtName);
            sessionStorage.setItem("districtid", districtId);
            sessionStorage.setItem("districtname", districtName);
        },
        saveWard: function (wardId, wardName) {

            localStorage.setItem("wardid", wardId);
            localStorage.setItem("wardname", wardName);
            sessionStorage.setItem("wardid", wardId);
            sessionStorage.setItem("wardname", wardName);
        },
        saveDataLocationDKOL: function () {

            let dataLocation = JSON.stringify({
                'locationid': locationObject.locationid(),
                'locationname': locationObject.locationname(),
                'districtid': locationObject.districtid(),
                'districtname': locationObject.districtname(),
                'wardid': locationObject.wardid(),
                'wardname': locationObject.wardname(),
                'source': 1
            });

            sessionStorage.setItem("dataLocation", dataLocation);
            localStorage.setItem("dataLocation", dataLocation);
            sessionStorage.setItem("is_popup_location", 1);

            if (locationObject.districtname() == null && locationObject.locationname() == null) {
                $('.locationname').html('Chọn vị trí');
                $('.locationname-suggest').html('Chọn vị trí');
            } else {
                const locationName = localStorage.getItem('locationname');
                const districtName = localStorage.getItem('districtname');

                // Cập nhật vị trí hiển thị bên ngoài (nếu có)
                $('.locationname').html(districtName + ", " + locationName);

                // Lấy thẻ <a> bên trong .title-suggest
                var link = $('.title-suggest').find('a');

                // Kiểm tra nếu tồn tại thẻ <a> thì mới xử lý
                if (link.length > 0) {
                    // Cập nhật lại text của title
                    var newTitle = 'Gói đề xuất tại ';

                    // Cập nhật nội dung của link
                    link.html('...' + locationName);

                    // Ghép lại
                    $('.title-suggest').html(newTitle).append(link);
                }
            }

            $.ajax({
                url: "/api/save-location",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    location_id: parseInt(locationObject.locationid()),
                    district_id: parseInt(locationObject.districtid()),
                    ward_id: parseInt(locationObject.wardid())
                }),
                dataType: "json",
                success: function (response) {
                    let data = response.data;

                    if (response.error_code == 0) {

                        $('#loading').hide();
                        modalLocation.closePopup();
                        window.location.href = window.location.href;
                    } else {
                        $('#loading').hide();

                    }
                },
                error: function (data, textStatus, errorThrown) {
                    $('#loading').hide();
                },
            });

        },
        closePopup: function () {
            const popupOverlay = document.getElementById('locationPopup');
            popupOverlay.style.display = 'none';
            document.querySelector('body').style.overflow = 'auto';
        }
    }


    locationElement.select2(locationOption);
    districtElement.select2(districtOption);
    wardElement.select2(wardOption);


    /**
     * Khi load page mà có thông tin location trong storage
     * Thì sẽ lấy ra tên thành phố/ tỉnh, nối với dấu ... và hiển thị ngay sau text gói đề xuất
     */
    if (localStorage.getItem('locationname') != null && localStorage.getItem('districtname') != null) {
        const locationName = localStorage.getItem('locationname');
        const districtName = localStorage.getItem('districtname');

        // Cập nhật vị trí hiển thị bên ngoài (nếu có)
        $('.locationname').html(districtName + ", " + locationName);

        // Lấy thẻ <a> bên trong .title-suggest
        var link = $('.title-suggest').find('a');

        // Kiểm tra nếu tồn tại thẻ <a> thì mới xử lý
        if (link.length > 0) {
            // Cập nhật lại text của title
            var newTitle = 'Gói đề xuất tại ';

            // Cập nhật nội dung của link
            link.html('...' + locationName);

            // Ghép lại
            $('.title-suggest').html(newTitle).append(link);
        }
    } else {
        $('.locationname').html('Chọn vị trí');
        $('.locationname-suggest').html('Chọn vị trí');
    }

    locationElement.on('change', function () {

        var locationId = $('#location_province').val() ?? localStorage.getItem('locationid');



        // districtElement = $('#location_district');
        // districtElement.empty();

        // wardElement = $('#location_ward');
        // wardElement.empty();

        modalLocation.loadDistrict(locationId);
        $('.location .error').hide();
        $('.location .error').html('');
    });

    districtElement.on('change', function () {

        $("[for=district]").addClass("hidden");

        // wardElement = $('#location_ward');
        // wardElement.empty();

        var districtId = $('#location_district').val() ?? localStorage.getItem('districtid');
        var locationId = $('#location_province').val() ?? localStorage.getItem('locationid');
        modalLocation.loadWard(locationId, districtId);
        $('.district .error').hide();
        $('.district .error').html('');
    });

    wardElement.on('change', function (e) {
        var wardid = $('#location_ward').val();
        var wardname = $('#location_ward').text();

        $("[for=ward]").addClass("hidden");
        $('.ward .error').hide();
        $('.ward .error').html('');
    });

    btnConfirm.on('click', function (e) {

        if (localStorage.getItem('locationname') != null) {

            locationName.text(localStorage.getItem('locationname'));
        }
        e.preventDefault();
        let error = false;
        $('.error').addClass('hidden');

        $('.error').hide();

        if (typeof locationElement.find("option:selected").val() === 'undefined' ||
            locationElement.find("option:selected").val() === '' ||
            locationElement.find("option:selected").val() === 'Chọn thành phố') {

            $('.location .error').html('Vui lòng chọn thành phố.');
            $('.location .error').removeClass('hidden');
            $('.location .error').show();
            $("[for=location]").removeClass("hidden");
            error = true;
        }

        if (typeof districtElement.find("option:selected").val() == 'undefined' ||
            districtElement.find("option:selected").val() === '' ||
            districtElement.find("option:selected").val() === 'Chọn quận/ huyện') {

            $('.district .error').html('Vui lòng chọn quận/ huyện.');
            $('.district .error').removeClass('hidden');
            $('.district .error').show();
            $("[for=district]").removeClass("hidden");
            error = true;
        }

        if (typeof wardElement.find("option:selected").val() == "undefined" ||
            wardElement.find("option:selected").val() === '' ||
            wardElement.find("option:selected").val() === 'Chọn phường/ xã') {

            $("[for=ward]").removeClass("hidden");
            $('.ward .error').html('Vui lòng chọn phường/ xã.');
            $('.ward .error').removeClass('hidden');
            $('.ward .error').show();
            error = true;
        }

        if (error == false) {

            modalLocation.saveLocation(locationElement.find("option:selected").val(), locationElement.find("option:selected").text());
            modalLocation.saveDistrict(districtElement.find("option:selected").val(), districtElement.find("option:selected").text());

            modalLocation.saveWard(wardElement.find("option:selected").val(), wardElement.find("option:selected").text());

            locationName.text(locationElement.find("option:selected").text());

            modalLocation.saveDataLocationDKOL();


        }

    });

    function detectDevice() {
        let userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
            return "Android";
        } else if (/iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
            return "iOS";
        } else {
            return userAgent;
        }
    }
    // function getRealViewportHeight() {
    //     return window.visualViewport ? window.visualViewport.height : window.innerHeight;
    // }
    const deviceName = detectDevice();
    if (deviceName === "Android") {
        $('body').addClass('android');
    }

    $(document).on('select2:open', function (e) {
        let dropdown = $('.select2-container--open .select2-dropdown');
        let searchInput = $('.select2-container--open input.select2-search__field');

        // Khi người dùng scroll (kéo) dropdown thì blur input
        dropdown.on('touchmove wheel', function () {
            searchInput.blur();
        });

        if (deviceName === "Android") {
            searchInput.on('focus', function () {
                $('.location-popup').scrollTop = 0;
                //     if (locationPopupParent && locationPopupContent) {
                //         let offsetTop = locationPopupContent.offsetTop -10;
                //         console.log(offsetTop)
                //         locationPopupParent.scrollTop = offsetTop;
                //     }
            });
            // searchInput.on('blur', function() {
            //     setTimeout(() => {
            //         console.log("Input đã mất focus");
            //     }, 30);
            // });
        }
    });
});