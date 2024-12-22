class DataBase {
    DISPLAY_PRODUCT_INDEX_SAVE_KEY = 'DisplayingProductIndex';
    ACCOUNT_SAVE_KEY = 'Account';
    STRING_SEPERATOR = '#';

    productList = {
        0:new Product(
            0,
            'Rain Studio',
            'Aki Hayakawa - Chainsaw Man - Rain Studio',
            '1.850.000',
            'Aki Hayakawa - Chainsaw Man',
            'H35 x W26 x D20cm',
            '2.350.000',
            'Q1,2/2025',
            '199 bản',
            'images/product/aki-hayakawa_chainsaw-man_rain-studio/d54612e0-8bd2-483c-bd78-cd56fbc5cce5_b3163db1c32948a3842df83776cead58_master.webp',
            'images/product/aki-hayakawa_chainsaw-man_rain-studio/4e92b887-755d-4a26-9c29-e0e8d8441196_bf24134428c9466388d59adb6b21c55f_master.webp',
            [
                'images/product/aki-hayakawa_chainsaw-man_rain-studio/d54612e0-8bd2-483c-bd78-cd56fbc5cce5_b3163db1c32948a3842df83776cead58_master.webp',
                'images/product/aki-hayakawa_chainsaw-man_rain-studio/1dd4a307-42b6-4a1b-8cf2-f5e38ed2d0ba_95423c0f0dba40df86124ffb447f71e3_master.webp',
                'images/product/aki-hayakawa_chainsaw-man_rain-studio/c9330d17-0ea3-4de8-828d-f4ca88aedeb3_c49f222d75b940eb9e1fca3903b46f05_master.webp',
                'images/product/aki-hayakawa_chainsaw-man_rain-studio/421cbc32-2813-412a-b4ab-0ee87ccaf666_e47ad07492ac4e54bb626a08d56c3aec_master.webp',
                'images/product/aki-hayakawa_chainsaw-man_rain-studio/4b2052ee-dd5b-4a74-ab23-0b85bf1053b5_1f5a49b75891493997c856dae6732290_master.webp',
                'images/product/aki-hayakawa_chainsaw-man_rain-studio/4e92b887-755d-4a26-9c29-e0e8d8441196_bf24134428c9466388d59adb6b21c55f_master.webp'
            ]
        ),
        1:new Product(
            1,
            'Sky Top Studio',
            'Goku SSJ3 vs Buu - Dragon Ball - Sky Top Studio',
            '7.000.000',
            'Goku SSJ3 vs Buu - Dragon Ball',
            '40 x 32 x 15cm',
            '2.500.000',
            'Q1,2/2025',
            '100 bản',
            'images/product/goku-ssj3vs-buu-dragon-ball-sky-top-studio/2029de83-b25c-4903-bbb4-f3ac17fa764a_932ffa83031a420d864427123f603a64_master.webp',
            'images/product/goku-ssj3vs-buu-dragon-ball-sky-top-studio/ca215920-921a-4ff1-ab61-65acd894a890_70c2c2ed0a17460aba24d253d4fbe2e3_master.webp',
            [
                'images/product/goku-ssj3vs-buu-dragon-ball-sky-top-studio/2029de83-b25c-4903-bbb4-f3ac17fa764a_932ffa83031a420d864427123f603a64_master.webp',
                'images/product/goku-ssj3vs-buu-dragon-ball-sky-top-studio/ca215920-921a-4ff1-ab61-65acd894a890_70c2c2ed0a17460aba24d253d4fbe2e3_master.webp',
                'images/product/goku-ssj3vs-buu-dragon-ball-sky-top-studio/9d7e2847-44ec-4722-90d7-de8feb200e81_302d02fc4e434097953bbe88741de129_master.webp',
                'images/product/goku-ssj3vs-buu-dragon-ball-sky-top-studio/e7588016-deaf-4ced-95a6-ed8108fd4c15_8d5b847c71f648d28d70d517488c3636_master.jpg',
                'images/product/goku-ssj3vs-buu-dragon-ball-sky-top-studio/8f36446b-68b8-4626-bdef-e2f20df29017_72dd0f8d1cea4acd8ca709f7f5dac188_master.jpg'
            ]
        ),
        2:new Product(
            2,
            'Cross Studio',
            'Killua Zoldyck - Hunter x Hunter - Cross Studio',
            '2.600.000',
            'Killua Zoldyck - Hunter x Hunter',
            '18 x 15 x 21.5cm',
            '900.000',
            'Q1/2025',
            '188 bản',
            'images/product/killua-zoldyck-hunter-x-hunter-cross-studio/43920a88-051c-499a-8ae1-166a5ed2e97a_bc1554b58b7644f78714ef122191aba9_master.webp',
            'images/product/killua-zoldyck-hunter-x-hunter-cross-studio/5a965193-d01d-4ac4-a497-0401535cd3d3_5f27cf59a6a6421f9d69471e95d0dcd6_master.webp',
            [
                'images/product/killua-zoldyck-hunter-x-hunter-cross-studio/5a965193-d01d-4ac4-a497-0401535cd3d3_5f27cf59a6a6421f9d69471e95d0dcd6_master.webp',
                'images/product/killua-zoldyck-hunter-x-hunter-cross-studio/2745e7e5-0865-4443-9be3-318b8455122a_f892256a6ff6430f9c980a3422376da0_master.webp',
                'images/product/killua-zoldyck-hunter-x-hunter-cross-studio/43920a88-051c-499a-8ae1-166a5ed2e97a_bc1554b58b7644f78714ef122191aba9_master.webp',
                'images/product/killua-zoldyck-hunter-x-hunter-cross-studio/ae4c2c08-290d-464a-a350-ded761fb0750_85be291f0e0746979d4cd903cd1e6624_master.webp',
                'images/product/killua-zoldyck-hunter-x-hunter-cross-studio/c5263f51-46ca-44eb-9834-8d90a443d18d_28db5b90f6a64f028b70901006d9ebb3_master.webp'
            ]
        ),
        3:new Product(
            3,
            'Last Sleep Studio',
            'Broly Legendary - Dragon Ball - Last Sleep Studio',
            '9.000.000',
            'Mô hình Broly Legendary - Dragon Ball',
            '93x57x60cm',
            '4.000.000',
            'Q2/2025',
            '188 bản',
            'images/product/broly-legendary-dragon-ball-last-sleep-studio/36cb1d5b-1082-466b-998b-b031684b200c_e180d75c5b094c948373242d56673baf_master.webp',
            'images/product/broly-legendary-dragon-ball-last-sleep-studio/41c14cae-b8f3-4581-91c3-539308721087_18601e0e396444008bbe7f6f688d462f_master.webp',
            [
                'images/product/broly-legendary-dragon-ball-last-sleep-studio/41c14cae-b8f3-4581-91c3-539308721087_18601e0e396444008bbe7f6f688d462f_master.webp',
                'images/product/broly-legendary-dragon-ball-last-sleep-studio/3deb87a0-78df-4f52-b545-77f030f99250_5a63ef2b5c214bfe8ca253b78293d5dd_master.webp',
                'images/product/broly-legendary-dragon-ball-last-sleep-studio/4e9c0998-f30b-4403-8fde-fcd6bbf309d1_779020fd3f104d3c90ac047fb32b0057_master.webp',
                'images/product/broly-legendary-dragon-ball-last-sleep-studio/36cb1d5b-1082-466b-998b-b031684b200c_e180d75c5b094c948373242d56673baf_master.webp',
                'images/product/broly-legendary-dragon-ball-last-sleep-studio/8111fb96-0454-409d-bc9d-22647b2a3747_c903a232742b45b0b0c12ba8ecbc7a98_master.jpg',
                'images/product/broly-legendary-dragon-ball-last-sleep-studio/d5bc728d-3cb1-4a74-b429-2df1706ff8ae_91cd2ac73c2042139c90bcae078c387d_master.webp',
                'images/product/broly-legendary-dragon-ball-last-sleep-studio/df50ccef-0302-4e7a-9c2c-6648f61627df_5f9662e06b0a44bc9ad09706c634e016_master.webp',
                'images/product/broly-legendary-dragon-ball-last-sleep-studio/f9978f90-1f9c-4337-b64f-ee4d00cd8aa6_3e8d090fdaac4f2097babd96cf14c977_master.webp'
            ]
        ),
        4:new Product(
            4,
            'LFat Boy Studio',
            'Fat Buu - Dragon Ball - Fat Boy Studio',
            '2.500.000',
            'Fat Buu - Dragon Ball - Fat Boy Studio',
            '18 x 18 x 17cm',
            '2.500.000',
            'Q2/2025',
            '188 bản',
            'images/product/fat-buu_dragon-ball_fat-boy-studio/91436227-a1a2-47d1-a159-5e2c0273a846_05ecca6535cd45e29cfdb91fb1493139_master.webp',
            'images/product/fat-buu_dragon-ball_fat-boy-studio/91436227-a1a2-47d1-a159-5e2c0273a846_05ecca6535cd45e29cfdb91fb1493139_master.webp',
            [
                'images/product/fat-buu_dragon-ball_fat-boy-studio/91436227-a1a2-47d1-a159-5e2c0273a846_05ecca6535cd45e29cfdb91fb1493139_master.webp'
            ]
        ),
        5:new Product(
            5,
            'Hunter Fan Studio',
            'Illumi Zoldyck - Hunter x Hunter - Hunter Fan Studio',
            '20.000.000',
            'Illumi Zoldyck - Hunter x Hunter - Hunter Fan Studio',
            '1/6 W28.8 x H40 x D25.7 cm',
            '20.000.000',
            'Q2/2025',
            'New',
            'images/product/illumi-zoldyck-hunter-x-hunter-hunter-fan-studio/23140bc7-00ae-48ee-8680-e80bdcbc40ed_02d0bb8554264c1db7604377aed82e60_master.webp',
            'images/product/illumi-zoldyck-hunter-x-hunter-hunter-fan-studio/23140bc7-00ae-48ee-8680-e80bdcbc40ed_02d0bb8554264c1db7604377aed82e60_master.webp',
            [
                'images/product/illumi-zoldyck-hunter-x-hunter-hunter-fan-studio/23140bc7-00ae-48ee-8680-e80bdcbc40ed_02d0bb8554264c1db7604377aed82e60_master.webp'
            ]
        ),
        6:new Product(
            6,
            'Jimei Palace Studio',
            'Kenpachi Zaraki - Bleach - Jimei Palace Studio',
            '16.000.000',
            'Kenpachi Zaraki - Bleach - Jimei Palace Studio',
            'H50 x W40 x D31.5cm',
            '16.000.000',
            'Q2/2025',
            'Trưng bày',
            'images/product/kenpachi-zaraki_bleach_jimei-palace-studio/58c9b70c-8c32-45fe-9339-3b2517a86a25_26d2ad6e67c2434691cf3c2013a34da5_master.webp',
            'images/product/kenpachi-zaraki_bleach_jimei-palace-studio/e2f72d3e-ffdb-4477-b7ef-46a6241ffd85_189ff071c8ae4d2e9a2ab53e25674b8e_master.webp',
            [
                'images/product/kenpachi-zaraki_bleach_jimei-palace-studio/58c9b70c-8c32-45fe-9339-3b2517a86a25_26d2ad6e67c2434691cf3c2013a34da5_master.webp',
                'images/product/kenpachi-zaraki_bleach_jimei-palace-studio/423b4397-acb7-4732-863e-22e7c8dc7598_779cac8d44ce45948198890a65d660bb_master.webp',
                'images/product/kenpachi-zaraki_bleach_jimei-palace-studio/d4592650-8e6c-490b-a11f-aba4068d3465_9245378bc1d046abb0123f971df1ca18_master.webp',
                'images/product/kenpachi-zaraki_bleach_jimei-palace-studio/e2f72d3e-ffdb-4477-b7ef-46a6241ffd85_189ff071c8ae4d2e9a2ab53e25674b8e_master.webp'
            ]
        ),
        7:new Product(
            7,
            'Power Studio',
            'Uchiha Madara - Naruto - Power Studio',
            '1.700.000',
            'Uchiha Madara - Naruto',
            'H9Cm',
            '1.700.000',
            'Q2/2025',
            'Trưng bày',
            'images/product/uchiha-madara_naruto-power-studio/375414e4-f26e-48ad-9ee4-befe5f6f91f7_c170a7e0a18d4f6bad5629ccc9de0a99_master.webp',
            'images/product/uchiha-madara_naruto-power-studio/375414e4-f26e-48ad-9ee4-befe5f6f91f7_c170a7e0a18d4f6bad5629ccc9de0a99_master.webp',
            [
                'images/product/uchiha-madara_naruto-power-studio/375414e4-f26e-48ad-9ee4-befe5f6f91f7_c170a7e0a18d4f6bad5629ccc9de0a99_master.webp'
            ]
        ),
        8:new Product(
            8,
            'LX Studio',
            'Whitebeard - One Piece - LX Studio',
            '4.000.000',
            'Whitebeard - One Piece',
            '36cm(W) x 26cm(D) x 31cm(H)',
            '4.000.000',
            'Q2/2025',
            'Trưng bày',
            'images/product/whitebeard_one-piece_lx-studio/593a8c15-9362-4544-874f-313c6ec5825b_316f34153d6641219a3d37aa0dbb18aa_master.webp',
            'images/product/whitebeard_one-piece_lx-studio/52ab2756-f3c1-47a1-9ac5-79ee454328b4_f09ec2400c50439eb0e9f4dfdc6fb1e2_master.webp',
            [
                'images/product/whitebeard_one-piece_lx-studio/52ab2756-f3c1-47a1-9ac5-79ee454328b4_f09ec2400c50439eb0e9f4dfdc6fb1e2_master.webp',
                'images/product/whitebeard_one-piece_lx-studio/593a8c15-9362-4544-874f-313c6ec5825b_316f34153d6641219a3d37aa0dbb18aa_master.webp'
            ]
        ),
        9:new Product(
            9,
            'Niren Studio',
            'Musashi Miyamoto - Vagabond - Niren Studio',
            '7.200.000',
            'Musashi Miyamoto - Vagabond',
            '1/6 H28 W45 D26cm',
            '7.200.000',
            'Q1/2025',
            'Trưng bày',
            'images/product/musashi-miyamoto_vagabond_niren-studio/de8e9577-e564-4adb-9e72-84dac6003367_4769bae2869c4510b8c7a3a8c7d4ea31_master.webp',
            'images/product/musashi-miyamoto_vagabond_niren-studio/571c18c1-4817-4ba4-a63a-7ace1ee5b861_87cd483576304e12a42e8e5a31f2f778_master.webp',
            [
                'images/product/musashi-miyamoto_vagabond_niren-studio/18f04575-01f9-49e3-8848-ec348ada85f7_e1b48bbb11874289b57b9876f4a387e4_master.webp',
                'images/product/musashi-miyamoto_vagabond_niren-studio/571c18c1-4817-4ba4-a63a-7ace1ee5b861_87cd483576304e12a42e8e5a31f2f778_master.webp',
                'images/product/musashi-miyamoto_vagabond_niren-studio/42195da7-2034-4747-9446-c331a4e5bf98_fc78fab62ca8427198b5ff27c194a323_master.webp',
                'images/product/musashi-miyamoto_vagabond_niren-studio/de8e9577-e564-4adb-9e72-84dac6003367_4769bae2869c4510b8c7a3a8c7d4ea31_master.webp'
            ]
        ),
        10:new Product(
            10,
            'Jimei Palace',
            'Luffy & Ace - One Piece - Jimei Palace',
            '20.000.000',
            'Luffy & Ace - One Piece',
            '1/6 H28 W45 D26cm',
            '20.000.000',
            'Q1/2025',
            'Trưng bày',
            'images/product/luffy-&-ace_one-piece_jimei-palace/0ec23280-b706-4be7-8423-539cdc544586_c825942a82374124be17598ffc42df98_master.jpg',
            'images/product/luffy-&-ace_one-piece_jimei-palace/040ae8ba-afdd-424d-80ef-829d4615a841_845dce411b434506a21a052b32473774_master.jpg',
            [
                'images/product/luffy-&-ace_one-piece_jimei-palace/0ec23280-b706-4be7-8423-539cdc544586_c825942a82374124be17598ffc42df98_master.jpg',
                'images/product/luffy-&-ace_one-piece_jimei-palace/040ae8ba-afdd-424d-80ef-829d4615a841_845dce411b434506a21a052b32473774_master.jpg',
                'images/product/luffy-&-ace_one-piece_jimei-palace/888c5f67-58a5-409c-8101-382a83f31cc7_1d23a0e681a84a4da8811e3639a263ac_master.jpg',
                'images/product/luffy-&-ace_one-piece_jimei-palace/af6e6f8c-e493-47ad-88bd-12980e579d36_44341d55e4d74b9da5c1f9e96554c8f8_master.webp',
                'images/product/luffy-&-ace_one-piece_jimei-palace/cb5d2cad-8258-4429-963e-1d657667fc0b_eae3555cbe7e4cf68ef4f25692fbc8af_master.webp'
            ]
        ),
    }

    displayingProductIndex = 0;
    accountList;
    accountListLength;

    Awake() {
        let displayingProductIndex = window.localStorage.getItem(this.DISPLAY_PRODUCT_INDEX_SAVE_KEY);

        if (displayingProductIndex != null) 
            this.displayingProductIndex = displayingProductIndex;

        this.accountList = {};
        this.accountListLength = 0;
        let accountSaveString = window.localStorage.getItem(this.ACCOUNT_SAVE_KEY);

        if (accountSaveString != null) {
            let accountSplitedSaveString = accountSaveString.split(this.STRING_SEPERATOR);
            this.accountListLength = parseInt(accountSplitedSaveString[0]);

            for (var i = 0; i < this.accountListLength; i++) {
                let account = new Account(
                    accountSplitedSaveString[i*5 + 1],
                    accountSplitedSaveString[i*5 + 2],
                    accountSplitedSaveString[i*5 + 3],
                    accountSplitedSaveString[i*5 + 4],
                    parseInt(accountSplitedSaveString[i*5 + 5])
                );

                this.accountList[i] = account;
            }
        }

        for (var i = 0; i < this.accountListLength; i++) {
            console.log(this.accountList[i]);
        }

        console.log(accountSaveString);
    }

    HandleSetDisplayingProductIndex(_index) {
        this.displayingProductIndex = _index;
        window.localStorage.setItem(this.DISPLAY_PRODUCT_INDEX_SAVE_KEY, _index)
    }

    GetProductListLength() {
        return Object.keys(this.productList).length;
    }

    AddAccount(_account) {
        this.accountList[this.accountListLength] = _account;
        this.accountListLength++;
        let saveString = this.accountListLength;

        for (var i = 0; i < this.accountListLength; i++) {
            let account = this.accountList[i];
            saveString += 
                this.STRING_SEPERATOR +
                account.firstName + this.STRING_SEPERATOR + 
                account.lastName + this.STRING_SEPERATOR + 
                account.email + this.STRING_SEPERATOR + 
                account.password + this.STRING_SEPERATOR + 
                account.gCoin;
        }
        
        window.localStorage.setItem(this.ACCOUNT_SAVE_KEY, saveString);
    }
}