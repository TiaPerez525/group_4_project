class DataBase {
    DISPLAY_PRODUCT_INDEX_SAVE_KEY = 'DisplayingProductIndex';

    productList = {
        0:new Product(
            0,
            'images/product/aki-hayakawa_chainsaw-man_rain-studio/d54612e0-8bd2-483c-bd78-cd56fbc5cce5_b3163db1c32948a3842df83776cead58_master.webp',
            'Rain Studio',
            'Aki Hayakawa - Chainsaw Man - Rain Studio',
            '1.850.000',
            'Aki Hayakawa - Chainsaw Man',
            'H35 x W26 x D20cm',
            '2.350.000',
            'Q1,2/2025',
            '199 bản'),
        1:new Product(
            1,
            'images/product/goku-ssj3vs-buu-dragon-ball-sky-top-studio/2029de83-b25c-4903-bbb4-f3ac17fa764a_932ffa83031a420d864427123f603a64_master.webp',
            'Sky Top Studio',
            'Goku SSJ3 vs Buu - Dragon Ball - Sky Top Studio',
            '7.000.000',
            'Goku SSJ3 vs Buu - Dragon Ball',
            '40 x 32 x 15cm',
            '2.500.000',
            'Q1,2/2025',
            '100 bản'),
        2:new Product(
            2,
            'images/product/killua-zoldyck-hunter-x-hunter-cross-studio/43920a88-051c-499a-8ae1-166a5ed2e97a_bc1554b58b7644f78714ef122191aba9_master.webp',
            'Cross Studio',
            'Killua Zoldyck - Hunter x Hunter - Cross Studio',
            '2.600.000',
            'Killua Zoldyck - Hunter x Hunter',
            '18 x 15 x 21.5cm',
            '900.000',
            'Q1/2025',
            '188 bản'),
        3:new Product(
            3,
            'images/product/broly-legendary-dragon-ball-last-sleep-studio/36cb1d5b-1082-466b-998b-b031684b200c_e180d75c5b094c948373242d56673baf_master.webp',
            'Last Sleep Studio',
            'Broly Legendary - Dragon Ball - Last Sleep Studio',
            '9.000.000',
            'Mô hình Broly Legendary - Dragon Ball',
            '93x57x60cm',
            '4.000.000',
            'Q2/2025',
            '188 bản'),
        4:new Product(
            4,
            'images/product/fat-buu_dragon-ball_fat-boy-studio/91436227-a1a2-47d1-a159-5e2c0273a846_05ecca6535cd45e29cfdb91fb1493139_master.webp',
            'LFat Boy Studio',
            'Fat Buu - Dragon Ball - Fat Boy Studio',
            '2.500.000',
            'Fat Buu - Dragon Ball - Fat Boy Studio',
            '18 x 18 x 17cm',
            '2.500.000',
            'Q2/2025',
            '188 bản'),
        5:new Product(
            5,
            'images/product/illumi-zoldyck-hunter-x-hunter-hunter-fan-studio/23140bc7-00ae-48ee-8680-e80bdcbc40ed_02d0bb8554264c1db7604377aed82e60_master.webp',
            'Hunter Fan Studio',
            'Illumi Zoldyck - Hunter x Hunter - Hunter Fan Studio',
            '20.000.000',
            'Illumi Zoldyck - Hunter x Hunter - Hunter Fan Studio',
            '1/6 W28.8 x H40 x D25.7 cm',
            '20.000.000',
            'Q2/2025',
            'New'),
        6:new Product(
            6,
            'images/product/kenpachi-zaraki_bleach_jimei-palace-studio/58c9b70c-8c32-45fe-9339-3b2517a86a25_26d2ad6e67c2434691cf3c2013a34da5_master.webp',
            'Jimei Palace Studio',
            'Kenpachi Zaraki - Bleach - Jimei Palace Studio',
            '16.000.000',
            'Kenpachi Zaraki - Bleach - Jimei Palace Studio',
            'H50 x W40 x D31.5cm',
            '16.000.000',
            'Q2/2025',
            'Trưng bày'),
        7:new Product(
            7,
            'images/product/uchiha-madara_naruto-power-studio/375414e4-f26e-48ad-9ee4-befe5f6f91f7_c170a7e0a18d4f6bad5629ccc9de0a99_master.webp',
            'Power Studio',
            'Uchiha Madara - Naruto - Power Studio',
            '1.700.000',
            'Uchiha Madara - Naruto',
            'H9Cm',
            '1.700.000',
            'Q2/2025',
            'Trưng bày'),
        8:new Product(
            8,
            'images/product/whitebeard_one-piece_lx-studio/52ab2756-f3c1-47a1-9ac5-79ee454328b4_f09ec2400c50439eb0e9f4dfdc6fb1e2_master.webp',
            'LX Studio',
            'Whitebeard - One Piece - LX Studio',
            '4.000.000',
            'Whitebeard - One Piece',
            '36cm(W) x 26cm(D) x 31cm(H)',
            '4.000.000',
            'Q2/2025',
            'Trưng bày'),
        9:new Product(
            8,
            'images/product/musashi-miyamoto_vagabond_niren-studio/de8e9577-e564-4adb-9e72-84dac6003367_4769bae2869c4510b8c7a3a8c7d4ea31_master.webp',
            'Niren Studio',
            'Musashi Miyamoto - Vagabond - Niren Studio',
            '7.200.000',
            'Musashi Miyamoto - Vagabond',
            '1/6 H28 W45 D26cm',
            '7.200.000',
            'Q1/2025',
            'Trưng bày'),
        10:new Product(
            9,
            'images/product/luffy-&-ace_one-piece_jimei-palace/0ec23280-b706-4be7-8423-539cdc544586_c825942a82374124be17598ffc42df98_master.jpg',
            'Jimei Palace',
            'Luffy & Ace - One Piece - Jimei Palace',
            '20.000.000',
            'Luffy & Ace - One Piece',
            '1/6 H28 W45 D26cm',
            '20.000.000',
            'Q1/2025',
            'Trưng bày'),
    }

    displayingProductIndex = 0;

    Awake() {
        let displayingProductIndex = window.localStorage.getItem(this.DISPLAY_PRODUCT_INDEX_SAVE_KEY);

        if (displayingProductIndex != null) 
            this.displayingProductIndex = displayingProductIndex;
    }

    AddToFrontLink(_addingDirectiory) {
        for (let key in this.productList) {
            let product = this.productList[key];
            product.imageLink = _addingDirectiory + product.imageLink;
        }
    }

    HandleSetDisplayingProductIndex(_index) {
        this.displayingProductIndex = _index;
        window.localStorage.setItem(this.DISPLAY_PRODUCT_INDEX_SAVE_KEY, _index)
    }

    GetProductListLength() {
        return Object.keys(this.productList).length;
    }
}