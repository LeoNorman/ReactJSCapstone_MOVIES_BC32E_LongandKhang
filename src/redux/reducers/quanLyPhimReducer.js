

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 1408,
            "tenPhim": "Jurassic World New",
            "biDanh": "jurassic-world-new",
            "trailer": "",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/jurassic-world-new_gp01.jpg",
            "moTa": "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-10-15T17:37:52.38",
            "danhGia": 10,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        },
        {
            "maPhim": 1408,
            "tenPhim": "Jurassic World New",
            "biDanh": "jurassic-world-new",
            "trailer": "",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/jurassic-world-new_gp01.jpg",
            "moTa": "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-10-15T17:37:52.38",
            "danhGia": 10,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        },
    ]
}

export const quanLyPhimReducer = (state = stateDefault, {type, action}) => {
    switch(type) {


        default: return {...state}
    }
}