const PRODUCTS = [{"id":"rouge-001","name":"OMG CICA SOFT SUN STICK SPF50+ 0251","category":"OMG","code":"752848","price":60000,"image":"https://cellshop.com.py/media/catalog/product/4/4/4409656_1_6a72_1.jpg?bg-color=255%2C255%2C255&canvas=616%3A616&fit=bounds&height=616&optimize=medium&width=616"},{"id":"rouge-002","name":"OMG COTTON SOFT SUN STICK SPF50+ 9558","category":"OMG","code":"721530","price":60000,"image":"https://dcdn-us.mitiendanube.com/stores/005/512/093/products/texto-del-parrafo-2025-10-16t114618-966-1d41355c95449ac5ee17606261135730-480-0.webp"},{"id":"rouge-003","name":"OMG PERFECT COVER BB CREAM N#27 1436","category":"OMG","code":"752831","price":50000,"image":"https://www.beshop.com.py/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbnBYIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--55bdbbac8e379f3227235f1c0004f48e9f374f8f/27.jpeg"},{"id":"rouge-004","name":"OMG PROTETOR COVER BB CREAM N27 941436","category":"OMG","code":"702621","price":51000,"image":"https://www.beshop.com.py/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbnBYIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--55bdbbac8e379f3227235f1c0004f48e9f374f8f/27.jpeg"},{"id":"rouge-005","name":"ANUA HEARTLEAF 77% SOOTHI TONER 500M0221","category":"ANUA","code":"855464","price":70000,"image":"https://media.farmaciatei.ro/gallery/98639/toner-de-fata-calmant-heartleaf-500-ml-anua-9052.jpg"},{"id":"rouge-006","name":"ANUA HEARTLEAF 77% TONER 150ML 0859","category":"ANUA","code":"856287","price":55000,"image":"../../assets/products/006.jpeg"},{"id":"rouge-007","name":"ANUA HEARTLEAF 80% AMPOULE 30ML 0283","category":"ANUA","code":"848596","price":61000,"image":"https://www.haar-shop.ch/media/catalog/product/thumbnail/f0f9eb14a9ea98bd4a62653fecc68e17f408d65c6a1cde243119081a/image/0/1200x1200/111/99/f/f/ff8941a2ca8cd82c4c19d3f36028592592255847_8809640730283_bi_anua_heartleaf_80_ampoule.jpg"},{"id":"rouge-008","name":"ANUA HEARTLEAF CLEA PORE CONTRO 200M5028","category":"ANUA","code":"848626","price":60000,"image":"https://tshop.r10s.jp/begirl-contact/cabinet/anua/oil/main.jpg"},{"id":"rouge-009","name":"ANUA HEARTLEAF CLEAN FOAM MOIST 150M3659","category":"ANUA","code":"855532","price":53000,"image":"../../assets/products/009.jpeg"},{"id":"rouge-010","name":"ANUA HEARTLEAF DEEP FOAM 150ML 4427","category":"ANUA","code":"846110","price":53000,"image":"../../assets/products/010.jpeg"},{"id":"rouge-011","name":"ANUA HEARTLEAF+HYALU MASK 30 TOALLI 3192","category":"ANUA","code":"855525","price":58000,"image":"../../assets/products/011.jpeg"},{"id":"rouge-012","name":"ANUA HEARTLEAF+LHA PEELING GEL 120ML3666","category":"ANUA","code":"855518","price":58000,"image":"https://www.gloarabia.com/cdn/shop/files/8809640733666-deadskinAnuaRenewHeartleafLHAMoisturePeelingGel_120ml_2.webp?v=1770828185"},{"id":"rouge-013","name":"ANUA HEARTLEAF+PANTHEN PH DEEP 500ML4854","category":"ANUA","code":"855501","price":60000,"image":"https://wcosmetics.com.au/cdn/shop/files/pixelcut-export_b541bbb5-1901-4e52-856d-f90b8d443067.png?v=1756461747"},{"id":"rouge-014","name":"ANUA HYALURONIC 100+ SERUM 30ML 6667","category":"ANUA","code":"851961","price":61000,"image":"../../assets/products/014.jpeg"},{"id":"rouge-015","name":"ANUA HYALURONIC+SQUA CLEANSE 150M5813","category":"ANUA","code":"847179","price":53000,"image":"https://worldbeautyec.com/cdn/shop/files/51oJCkyLpyL.jpg?v=1742962845"},{"id":"rouge-016","name":"ANUA NIACIN SPREAD CLEANS FOAM 150ML0095","category":"ANUA","code":"855839","price":53000,"image":"../../assets/products/016.jpeg"},{"id":"rouge-017","name":"ANUA NIACINAMID 5TXA BRIGHTEN 60PAD 8128","category":"ANUA","code":"852012","price":60000,"image":"https://img.hwahae.co.kr/products/2133256/2133256_20250225134907.jpg"},{"id":"rouge-018","name":"ANUA PDRN 100 HYALUR ACID 60PAD 180M8241","category":"ANUA","code":"851992","price":60000,"image":"https://static.insales-cdn.com/images/products/1/7097/2418858937/Anua-PDRN-100-Hyaluronic-Acid-Glow-Pad.png"},{"id":"rouge-019","name":"ANUA PDRN ACID HYDRAT CAPS MIST 100M3331","category":"ANUA","code":"869256","price":66000,"image":"https://muzaibglam.com/cdn/shop/files/anua-pdrn-hyaluronic-acid-hydrating-capsule-mist-100ml-01.webp?v=1779381884"},{"id":"rouge-020","name":"ANUA PDRN+HYALURON ACID TONER 250ML 1672","category":"ANUA","code":"855488","price":58000,"image":"https://mystiglam.com/cdn/shop/files/ANUA_PDRN_100_Hyaluronic_Acid_Booster_Toner_250Ml_8.45_fl.oz.jpg?v=1762499567"},{"id":"rouge-021","name":"ANUA PEACH 70 NIACIN SERUM 30ML 3550","category":"ANUA","code":"818261","price":61000,"image":"https://anua.com/cdn/shop/files/anua-us-ampoule-serum-30ml-peach-70-niacinamide-serum-1161189370.jpg?v=1748544223&width=1080"},{"id":"rouge-022","name":"ANUA PEACH77+NIACIN CONDT MILK 150ML4342","category":"ANUA","code":"855822","price":61000,"image":"https://www.myhairandbeauty.co.uk/cdn/shop/files/AnuaPeach77NiacinConditioningMilk.jpg?v=1761756458"},{"id":"rouge-023","name":"ANUA PEACH77+NIACIN CREME 50ML 4373","category":"ANUA","code":"847230","price":61000,"image":"../../assets/products/023.jpeg"},{"id":"rouge-024","name":"ANUA PEACH77+NIACIN TONIFICA 250M4359","category":"ANUA","code":"847223","price":61000,"image":"https://cdn11.bigcommerce.com/s-yiii7imtjz/images/stencil/1600x1600/products/7595/39096/tonerr__75396.1697926172.jpg?c=1%3Fimbypass%3Don"},{"id":"rouge-025","name":"ANUA PORE CONTROL OIL 200ML 2829","category":"ANUA","code":"846127","price":60000,"image":"https://www.sephora.com/productimages/sku/s2959070-main-zoom.jpg?imwidth=630"},{"id":"rouge-026","name":"ANUA RETINOL 0.3 SERUM 30ML 4595","category":"ANUA","code":"855853","price":61000,"image":"../../assets/products/026.jpeg"},{"id":"rouge-027","name":"ANUA RICE 70 INTEN MOISTUR MILK 150M5608","category":"ANUA","code":"855419","price":56000,"image":"https://kbeautystudio.com/cdn/shop/files/kbeauty-studio-Anua-Rice-70-Intensive-Moisturizing-Milk-150ml-01.jpg?v=1779438971&width=2400"},{"id":"rouge-028","name":"ANUA RICE+CERAMIDE CLEANS POWDER 40G5462","category":"ANUA","code":"855426","price":56000,"image":"https://larose.care/img/17816/1.jpg"},{"id":"rouge-029","name":"ANUA SERUM GREEN LEMON VITA C 20G 3055","category":"ANUA","code":"855440","price":61000,"image":"https://axiastation.ca/cdn/shop/files/1839_bf736f4c-5bff-4ebb-b97b-07b17e89cec1.webp?v=1761422741"},{"id":"rouge-030","name":"ANUA VITAMIN C+NIACIN BLEMISH 60PAD 6407","category":"ANUA","code":"855433","price":58000,"image":"https://img.hwahae.co.kr/commerce/goods/20241207_160350_%5BPSD%5D22.jpg"},{"id":"rouge-031","name":"ANUA ZERO CAST MOIST SUNSCREEN 50ML 9507","category":"ANUA","code":"855457","price":53000,"image":"https://koreanskincare.com/cdn/shop/files/Anua_Zero-CastMoisturizingFinishSunscreen_Packshot_grande.jpg?v=1768481716"},{"id":"rouge-032","name":"SKIN ANUA 3CERAMIDE PANTHE CREA 100M7251","category":"ANUA","code":"856584","price":58000,"image":"https://bareskin.lt/cdn/shop/files/Anua-3-Ceramide-Panthenol-Moisture-Barrier-Cream.png?v=1734082900"},{"id":"rouge-033","name":"SKIN ANUA 7RICE CERAMIDE HYDRAN 50ML4861","category":"ANUA","code":"851985","price":60000,"image":"https://anua.com/cdn/shop/files/anua-us-ampoule-serum-rice-ceramide-7-hydrating-barrier-serum-1239193730.jpg?v=1779178029&width=2000"},{"id":"rouge-034","name":"SKIN ANUA 8HYALURO FOAMING 150MX40 5561","category":"ANUA","code":"856256","price":51000,"image":"https://anua.com/cdn/shop/files/anua-us-cleanser-8-hyaluronic-acid-hydrating-gentle-foaming-cleanser-1239193743.jpg?v=1779181691&width=2000"},{"id":"rouge-035","name":"SKIN ANUA 8HYALURON BOOSTE SKIN 150M4960","category":"ANUA","code":"856263","price":60000,"image":"https://www.mirai-skin.com/cdn/shop/files/anua_14774037873012_nobg.jpg?v=1775768992&width=1946"},{"id":"rouge-036","name":"SKIN ANUA AZELAIC 10HYAL SOOTHNG 90P8227","category":"ANUA","code":"852005","price":58000,"image":"../../assets/products/036.jpeg"},{"id":"rouge-037","name":"SKIN ANUA AZELAIC CICA TONICO 250ML0743","category":"ANUA","code":"856270","price":60000,"image":"https://wcosmetics.com.au/cdn/shop/files/Clarifying_Toner.png?v=1770797354"},{"id":"rouge-038","name":"SKIN ANUA BHA2% EXFOLIANT TONER 150M4519","category":"ANUA","code":"856324","price":58000,"image":"../../assets/products/038.jpeg"},{"id":"rouge-039","name":"SKIN ANUA BIRCH70 MOIST BOOSTNG 70PA2188","category":"ANUA","code":"856362","price":60000,"image":"https://img.hwahae.co.kr/products/2127165/2127165_20241218170229.jpg"},{"id":"rouge-040","name":"SKIN ANUA BIRCH70 MOIST TONICO 250M1211","category":"ANUA","code":"848657","price":60000,"image":"https://down-br.img.susercontent.com/file/sg-11134201-824ie-mdvs868ih3wn5f"},{"id":"rouge-041","name":"SKIN ANUA COLLAGEN GUASHA CREAM 80ML9326","category":"ANUA","code":"869201","price":94000,"image":"../../assets/products/041.jpeg"},{"id":"rouge-042","name":"SKIN ANUA GREEN LEMON VITA SERUM 20G5295","category":"ANUA","code":"856331","price":69000,"image":"https://safetymakeup.com.tr/cdn/safetymakeup-product_images/65d910c5e584d4a0a836826e/Anua-Green-Lemon-Vita-C-Serum.webp"},{"id":"rouge-043","name":"SKIN ANUA HEARTL70+HYALU LOTION 200M2799","category":"ANUA","code":"847162","price":58000,"image":"../../assets/products/043.jpeg"},{"id":"rouge-044","name":"SKIN ANUA HEARTLE SILK SUN CREAM 50M3185","category":"ANUA","code":"847186","price":55000,"image":"../../assets/products/044.jpeg"},{"id":"rouge-045","name":"SKIN ANUA HEARTLEA70+CERAM CREAM 50M0696","category":"ANUA","code":"847193","price":60000,"image":"../../assets/products/045.jpeg"},{"id":"rouge-046","name":"SKIN AXIS-Y DARK SPOT CORR GLOW CRE 0966","category":"AXIS-Y","code":"852036","price":58000,"image":"https://cdn.thebeautrium.com/image-product/B0085781.png"},{"id":"rouge-047","name":"SKIN AXIS-Y DARK SPOT CORR SERUM 50 0034","category":"AXIS-Y","code":"818254","price":55000,"image":"../../assets/products/047.jpeg"},{"id":"rouge-048","name":"SKIN AXIS-Y DARK SPOT GLOW TONE 125 0959","category":"AXIS-Y","code":"847100","price":55000,"image":"../../assets/products/048.jpeg"},{"id":"rouge-049","name":"SKIN AXIS-Y DILY PURIFYING TONE 200 7924","category":"AXIS-Y","code":"847117","price":58000,"image":"https://www.hagel-shop.de/media/catalog/product/1/2/12118333_1.jpg?bg-color=255%2C255%2C255&canvas=%3A&fit=bounds&height=&quality=80&width="},{"id":"rouge-050","name":"SKIN AXIS-Y NOM STRESS PHYSICAL 50M 0119","category":"AXIS-Y","code":"846233","price":55000,"image":"https://miin-cosmetics.fr/8537-large_default/complete-no-stress-physical-sunscreen-v3.jpg"},{"id":"rouge-051","name":"DR.ALTHEA 2% SALICYLIC CLEAR 65PADS 5293","category":"DR.ALTHEA","code":"870580","price":65000,"image":"https://nudieglow.com/cdn/shop/files/Dr.Althea2_SalicylicAcidClearPad-NudieGlowAustralia_1024x1024.png?v=1770179708"},{"id":"rouge-052","name":"DR.ALTHEA 2% STRETCHFIT CALMING PAD 6306","category":"DR.ALTHEA","code":"870597","price":65000,"image":"../../assets/products/052.jpeg"},{"id":"rouge-053","name":"DR.ALTHEA 15% CALAMINE SPOT POWDE 5033","category":"DR.ALTHEA","code":"870672","price":56000,"image":"../../assets/products/053.jpeg"},{"id":"rouge-054","name":"DR.ALTHEA 147 BARRIER CREAM 50ML 1363/95","category":"DR.ALTHEA","code":"1363/95","price":68000,"image":"../../assets/products/054.jpeg"},{"id":"rouge-055","name":"DR.ALTHEA 345 CREAM INTENS 50ML 6221","category":"DR.ALTHEA","code":"6221","price":69000,"image":"https://alainpharmacy-ae.gumlet.io/media/catalog/product/cache/0a142ac7ffb8bd54ec5d0ecd6a1bbc27/1/6/16-02-13325_dr_althea_345_relief_cream_50_ml_1_.jpg"},{"id":"rouge-056","name":"DR.ALTHEA 345 CREAM MIST 100ML 6115","category":"DR.ALTHEA","code":"6115","price":61000,"image":"https://i.ebayimg.com/images/g/EK8AAeSw9kppCAo6/s-l1200.jpg"},{"id":"rouge-057","name":"DR.ALTHEA 345 CREAM MIST 60ML 6122","category":"DR.ALTHEA","code":"6122","price":55000,"image":"https://glowthie.com/cdn/shop/files/Dr._Althea_345_Relief_Cream_Mist_Glowthie_Portugal.webp?v=1765977375"},{"id":"rouge-058","name":"DR.ALTHEA 345 RELIEF SERUM 7051","category":"DR.ALTHEA","code":"7051","price":60000,"image":"https://se.medpak.shop/cdn/shop/files/dr-althea-345-relief-brightening-face-serum-30-ml-dralt051-1238322381.jpg?v=1778756232&width=1500"},{"id":"rouge-059","name":"DR.ALTHEA PREMIUN QUICK SEBUM 3756","category":"DR.ALTHEA","code":"870559","price":60000,"image":"../../assets/products/059.jpeg"},{"id":"rouge-060","name":"DR.ALTHEA PURE GRINDING CLEANS 5071","category":"DR.ALTHEA","code":"870566","price":58000,"image":"../../assets/products/060.jpeg"},{"id":"rouge-061","name":"DR.ALTHEA REJU 5000 CREAM 6412","category":"DR.ALTHEA","code":"870641","price":65000,"image":"https://www.kkul.com.mx/cdn/shop/files/DRAS01-CRrj.webp?v=1764618870&width=1920"},{"id":"rouge-062","name":"DR.ALTHEA SKIN ESSENCE 3473","category":"DR.ALTHEA","code":"870603","price":51000,"image":"https://of.nice-cdn.com/upload/image/product/large/default/51594_0a2df612.1024x1024.png"},{"id":"rouge-063","name":"SKIN 1004 CENTELLA AIR-FIT SUNCREAM 1608","category":"SKIN1004 CENTELLA","code":"858014","price":57000,"image":"../../assets/products/063.jpeg"},{"id":"rouge-064","name":"SKIN 1004 CENTELLA AMPOU P-C ENRI C 1769","category":"SKIN1004 CENTELLA","code":"857376","price":65000,"image":"../../assets/products/064.jpeg"},{"id":"rouge-065","name":"SKIN 1004 CENTELLA AMPOU P-C INTENS 1752","category":"SKIN1004 CENTELLA","code":"857383","price":61000,"image":"../../assets/products/065.jpeg"},{"id":"rouge-066","name":"SKIN 1004 CENTELLA AMPOULE 30ML 0618","category":"SKIN1004 CENTELLA","code":"869621","price":56000,"image":"https://niasha.ch/cdn/shop/files/SKIN1004CentellaAmpoule30ml_mini__00_490x510_crop_center.png?v=1724925820"},{"id":"rouge-067","name":"SKIN 1004 CENTELLA CICA STICK 20GR 0214","category":"SKIN1004 CENTELLA","code":"846042","price":61000,"image":"../../assets/products/067.jpeg"},{"id":"rouge-068","name":"SKIN 1004 CENTELLA CLAY STICK 27GR 0085","category":"SKIN1004 CENTELLA","code":"846103","price":56000,"image":"https://media.zid.store/a3ba0d14-9be7-4b9c-8088-f40826cbec7c/9387e223-987e-457e-ba76-102b9bd44d0f.png"},{"id":"rouge-069","name":"SKIN 1004 CENTELLA DEEP FOAM 125ML 1653","category":"SKIN1004 CENTELLA","code":"846066","price":58000,"image":"https://down-id.img.susercontent.com/file/id-11134207-7r98t-lrx1omp851hpb0"},{"id":"rouge-070","name":"SKIN 1004 CENTELLA GEL CREAM 75ML 1646","category":"SKIN1004 CENTELLA","code":"846097","price":58000,"image":"https://assets.ajio.com/medias/sys_master/root/20240318/Vvsd/65f8579016fd2c6e6a6761f0/-473Wx593H-4943431030-multi-MODEL.jpg"},{"id":"rouge-071","name":"SKIN 1004 CENTELLA TONE BRIGH 100ML 1172","category":"SKIN1004 CENTELLA","code":"1172","price":66000,"image":"../../assets/products/071.jpeg"},{"id":"rouge-072","name":"SKIN 1004 CENTELLA NIACINAMIDE 30ML 2492","category":"SKIN1004 CENTELLA","code":"869645","price":61000,"image":"https://theskinfit.com/cdn/shop/files/SKIN1004_Madagascar_Centella_Niacinamide_10_Boosting_Shot_Ampoule_30ml_1.png?v=1766124945&width=1024"},{"id":"rouge-073","name":"SKIN 1004 CENTELLA PROBIO-CICA 20ML 0177","category":"SKIN1004 CENTELLA","code":"863803","price":56000,"image":"https://cdn.redcare.it/images/mp/prod/383969bf7ad44287a4d4f5a264f84ce9"},{"id":"rouge-074","name":"SKIN 1004 CENTELLA RETINOL 0.2% 30ML2515","category":"SKIN1004 CENTELLA","code":"869638","price":65000,"image":"https://api.bbccdd.ru/images/product/20465/large_101955.jpg"},{"id":"rouge-075","name":"SKIN 1004 CENTELLA TONING TONER 30ML1196","category":"SKIN1004 CENTELLA","code":"869676","price":47000,"image":"https://cdn.shopify.com/s/files/1/0844/3861/4342/files/SKIN0041.png?v=1760903139"},{"id":"rouge-076","name":"SKIN BOJ GINSENG CLEANSING OIL 210M 0130","category":"BEAUTY OF JOSEON","code":"847155","price":61000,"image":"https://media.zid.store/0cd60bb9-2c75-403f-b4b2-53e643da1ba9/bb33437e-a560-4921-9fbe-509996cc51fd.webp"},{"id":"rouge-077","name":"SKIN BOJ GREEN CALMI SERUM+MASK 30M 6412","category":"BEAUTY OF JOSEON","code":"846141","price":61000,"image":"https://luxplus.imgix.net/content/product/image/129286-96284-1707992593.jpg?auto=format%2Ccompress"},{"id":"rouge-078","name":"SKIN BOJ GREEN PLUM TONE AH+BH 0123/5655","category":"BEAUTY OF JOSEON","code":"846134","price":66000,"image":"https://cosibella.com.de/hpeciai/395663665b0701ee2432628b2d836df5/ger_pl_Beauty-of-Joseon-Green-Plum-Refreshing-Toner-AHA-BHA-Erfrischendes-Gesichtswasser-mit-Sauren-150ml-13095_6.webp"},{"id":"rouge-079","name":"SKIN BOJ GROUND RICE HONEY MASK 150 0246","category":"BEAUTY OF JOSEON","code":"847124","price":61000,"image":"https://kiokii.com/cdn/shop/files/ground-rice-and-honey-glow-mask-150mlbeauty-of-joseonkiokii-and-463466.webp?v=1771617983&width=2000"},{"id":"rouge-080","name":"SKIN BOJ HANBANG KIT SERUM DISC KIT 5897","category":"BEAUTY OF JOSEON","code":"846172","price":71000,"image":"https://www.maquibeauty.com/images/productos/thumbnails/beauty-of-joseon-hanbang-serum-discovery-kit-3-82683_thumb_500x500.jpg"},{"id":"rouge-081","name":"SKIN BOJ LIGHT SERUM CENTELLA+VITAC 6477","category":"BEAUTY OF JOSEON","code":"846196","price":63000,"image":"../../assets/products/081.jpeg"},{"id":"rouge-082","name":"SKIN BOJ RADIANCE CLEANSING BALM 1663","category":"BEAUTY OF JOSEON","code":"846158","price":65000,"image":"../../assets/products/082.jpeg"},{"id":"rouge-083","name":"SKIN BOJ RED BEAN REFRESH PORE MASK 6986","category":"BEAUTY OF JOSEON","code":"852159","price":63000,"image":"../../assets/products/083.jpeg"},{"id":"rouge-084","name":"SKIN BOJ REVIVE EYE SERUM G RETINAL 6146","category":"BEAUTY OF JOSEON","code":"846189","price":71000,"image":"../../assets/products/084.jpeg"},{"id":"rouge-085","name":"SKIN BOJ REVIVE SERUM GINSE+SNAIL 6139","category":"BEAUTY OF JOSEON","code":"846165","price":61000,"image":"../../assets/products/085.jpeg"},{"id":"rouge-086","name":"SKIN BOJ SUN AQUA- FRESH RICE+B5 50M 0277","category":"BEAUTY OF JOSEON","code":"847148","price":60000,"image":"../../assets/products/086.jpeg"},{"id":"rouge-087","name":"MEDICUBE AZELAIC ACID NIACI FOA CLE 3395","category":"MEDICUBE","code":"3395","price":60000,"image":"../../assets/products/087.jpeg"},{"id":"rouge-088","name":"MEDICUBE AZELAIC ACID EXOSO 2000 3630","category":"MEDICUBE","code":"3630","price":61000,"image":"../../assets/products/088.jpeg"},{"id":"rouge-089","name":"MEDICUBE AZELAIC ACID NIACI CLEAR T 5344","category":"MEDICUBE","code":"5344","price":58000,"image":"https://media.ulta.com/i/ulta/2652453?w=1000"},{"id":"rouge-090","name":"MEDICUBE AZELAIC ACID 16% SCOOTHING 9083","category":"MEDICUBE","code":"9083","price":60000,"image":"https://cdn.mercadodigital.com.py/photos/65961-serum-facial-medicube-azelaic-acid-16-bb-soothing-serum-30ml.jpg"},{"id":"rouge-091","name":"MEDICUBE COLLAG FIRM SUN CREAM 50ML 6608","category":"MEDICUBE","code":"6608","price":66000,"image":"https://www.egyglam.com/cdn/shop/files/Medicubecollagenfirmingsuncream_1.jpg?v=1763073246&width=990"},{"id":"rouge-092","name":"MEDICUBE COLLAGEN GLOW BOOSTER SERUM9206","category":"MEDICUBE","code":"856812","price":58000,"image":"../../assets/products/092.jpeg"},{"id":"rouge-093","name":"MEDICUBE COLLAG JELLY CREAM 50ML 2227","category":"MEDICUBE","code":"2227","price":55000,"image":"../../assets/products/093.jpeg"},{"id":"rouge-094","name":"MEDICUBE COLLAGEN GLOW BUBLE SERUM 6783","category":"MEDICUBE","code":"856959","price":61000,"image":"../../assets/products/094.jpeg"},{"id":"rouge-095","name":"MEDICUBE COLLAGEN GLOW SUNSCREEN 1552","category":"MEDICUBE","code":"1552","price":66000,"image":"../../assets/products/095.jpeg"},{"id":"rouge-096","name":"MEDICUBE COLLAGEN NIGHT W MASK 75ML 3217","category":"MEDICUBE","code":"846295","price":61000,"image":"../../assets/products/096.jpeg"},{"id":"rouge-097","name":"MEDICUBE COLLAGEN TRIPL SERUN 6913/4351","category":"MEDICUBE","code":"801669","price":53000,"image":"../../assets/products/097.jpeg"},{"id":"rouge-098","name":"MEDICUBE COLLAGEN TRIPLE CREAM 4313","category":"MEDICUBE","code":"848770","price":61000,"image":"../../assets/products/098.jpeg"},{"id":"rouge-099","name":"MEDICUBE COLLAGEN TRIPLE TONER 140M 4320","category":"MEDICUBE","code":"801683","price":53000,"image":"https://img.ltwebstatic.com/v4/p/spmp/2025/08/01/87/1754031167a1674c3999af095f3818c65e5f31d080_thumbnail_900x.webp"},{"id":"rouge-100","name":"MEDICUBE DEEP LIFTING AGE REPAIR 30M5900","category":"MEDICUBE","code":"863131","price":61000,"image":"../../assets/products/100.jpeg"},{"id":"rouge-101","name":"MEDICUBE DEEP VITA A RETI SERUM 30M 6620","category":"MEDICUBE","code":"801706","price":61000,"image":"../../assets/products/101.jpeg"},{"id":"rouge-102","name":"MEDICUBE DEEP VITA C AMPOULE SET 6944","category":"MEDICUBE","code":"863148","price":63000,"image":"../../assets/products/102.jpeg"},{"id":"rouge-103","name":"MEDICUBE DEEP VITA C CREAM 55GR 9866","category":"MEDICUBE","code":"846288","price":61000,"image":"../../assets/products/103.jpeg"},{"id":"rouge-104","name":"MEDICUBE DEEP VITA C PAD 70 PC 150G 9661","category":"MEDICUBE","code":"801720","price":61000,"image":"../../assets/products/104.jpeg"},{"id":"rouge-105","name":"MEDICUBE EGF NAD FIRMING SERUM 30ML 7271","category":"MEDICUBE","code":"863575","price":68000,"image":"../../assets/products/105.jpeg"},{"id":"rouge-106","name":"MEDICUBE EXOSOME CICA CREAM 50ML 2142","category":"MEDICUBE","code":"842495","price":51000,"image":"../../assets/products/106.jpeg"},{"id":"rouge-107","name":"MEDICUBE EXOSOME CICA TONER 210ML 2159","category":"MEDICUBE","code":"2159","price":55000,"image":"https://www.dreamforecast.com/image/main/medicube/medicube_500038.jpg"},{"id":"rouge-108","name":"MEDICUBE HYALURO MOIST CAPSL CREAM 7478","category":"MEDICUBE","code":"857048","price":61000,"image":"../../assets/products/108.jpeg"},{"id":"rouge-109","name":"MEDICUBE HYPOCH ACID DAILY F. 125ML 9991","category":"MEDICUBE","code":"858120","price":53000,"image":"../../assets/products/109.jpeg"},{"id":"rouge-110","name":"MEDICUBE HYPOCHLOROUS 3H RELIF CR 1194","category":"MEDICUBE","code":"857833","price":61000,"image":"https://www.pontocom.com/img/g/IMG_857833_3.JPG?v=1774415056"},{"id":"rouge-111","name":"MEDICUBE KOJIC A.T PAD TURMERIC 7386","category":"MEDICUBE","code":"7386","price":61000,"image":"../../assets/products/111.jpeg"},{"id":"rouge-112","name":"MEDICUBE KOJIC A.T RESURFACING TONER5023","category":"MEDICUBE","code":"859875","price":60000,"image":"../../assets/products/112.jpeg"},{"id":"rouge-113","name":"MEDICUBE KOJIC A.T NIACINAM SER 30M 7416","category":"MEDICUBE","code":"7416","price":61000,"image":"../../assets/products/113.jpeg"},{"id":"rouge-114","name":"MEDICUBE KOJIC A.T TONING CLEANSER 4958","category":"MEDICUBE","code":"4958","price":53000,"image":"../../assets/products/114.jpeg"},{"id":"rouge-115","name":"MEDICUBE PDRN COL.EXO SHOT 7500 30M 5549","category":"MEDICUBE","code":"837217","price":61000,"image":"../../assets/products/115.jpeg"},{"id":"rouge-116","name":"MEDICUBE ONE DAY EXOS SHOT 2000 30M 4928","category":"MEDICUBE","code":"840774","price":55000,"image":"../../assets/products/116.jpeg"},{"id":"rouge-117","name":"MEDICUBE PDRN BOOSTER GEL 300ML 4979","category":"MEDICUBE","code":"858144","price":57000,"image":"https://skin1004.com/cdn/shop/files/centella-pdrn-gel-300ml.png?v=1"},{"id":"rouge-118","name":"MEDICUBE PDRN CICA SOOT TONER 250ML 2234","category":"MEDICUBE","code":"744829","price":57000,"image":"https://skinstory.com/cdn/shop/files/Medicube-PDRN-Cica-Sooting-Toner-250ml.png?v=1"},{"id":"rouge-119","name":"MEDICUBE PDRN PEPTID SERUM 30ML 8053","category":"MEDICUBE","code":"846271","price":61000,"image":"https://bemol.vtexassets.com/arquivos/ids/586643-800-800?aspect=true&height=800&v=639109838609230000&width=800"},{"id":"rouge-120","name":"MEDICUBE PDRN PEPTIDE SERUM ULTRA 2719","category":"MEDICUBE","code":"863636","price":58000,"image":"../../assets/products/120.jpeg"},{"id":"rouge-121","name":"MEDICUBE PDRN PINK CLLGEN BUBBLE S.8796","category":"MEDICUBE","code":"857055","price":65000,"image":"https://resource.megaeletronicos.com/uploads/Product/new/1/5/9/7/0/4/159704/1784992265_1784992265.webp"},{"id":"rouge-122","name":"MEDICUBE PDRN PINK COLLAG VOL MULTI 7707","category":"MEDICUBE","code":"863612","price":61000,"image":"../../assets/products/122.jpeg"},{"id":"rouge-123","name":"MEDICUBE PDRN PINK GLUTATH S.M.2432/4910","category":"MEDICUBE","code":"857994","price":58000,"image":"../../assets/products/123.jpeg"},{"id":"rouge-124","name":"MEDICUBE PDRN PINK SUN STICK SPF50+ 8872","category":"MEDICUBE","code":"8872","price":69000,"image":"../../assets/products/124.jpeg"},{"id":"rouge-125","name":"MEDICUBE RED ACNE BODY WASH 400G 7119","category":"MEDICUBE","code":"7119","price":61000,"image":"../../assets/products/125.jpeg"},{"id":"rouge-126","name":"MEDICUBE RED CLEAR CICA BODY M 200M 3936","category":"MEDICUBE","code":"3936","price":60000,"image":"../../assets/products/126.jpeg"},{"id":"rouge-127","name":"MEDICUBE RED ERASING CREAM 100ML 9109","category":"MEDICUBE","code":"9109","price":63000,"image":"../../assets/products/127.jpeg"},{"id":"rouge-128","name":"MEDICUBE ROSEMARY PDRN HAIR/SCALP C.1989","category":"MEDICUBE","code":"857840","price":58000,"image":"../../assets/products/128.jpeg"},{"id":"rouge-129","name":"MEDICUBE ROSEMARY PDRN SCAL SERUM 1972","category":"MEDICUBE","code":"1972","price":58000,"image":"../../assets/products/129.jpeg"},{"id":"rouge-130","name":"MEDICUBE ROSEMARY PDRN SH 400M1965/7448","category":"MEDICUBE","code":"857864","price":61000,"image":"../../assets/products/130.jpeg"},{"id":"rouge-131","name":"MEDICUBE TXA+NIACINAM CREAM 55GR 9660","category":"MEDICUBE","code":"846318","price":61000,"image":"../../assets/products/131.jpeg"},{"id":"rouge-132","name":"MEDICUBE ZERO P. TONER 250 ML 5167","category":"MEDICUBE","code":"806305","price":65000,"image":"../../assets/products/132.jpeg"},{"id":"rouge-133","name":"MEDICUBE ZERO P.CLEAR CAP CLEA FOAM 9226","category":"MEDICUBE","code":"843683","price":57000,"image":"../../assets/products/133.jpeg"},{"id":"rouge-134","name":"MEDICUBE ZERO P.ONE DA SERU 30M9828/7240","category":"MEDICUBE","code":"739085","price":63000,"image":"../../assets/products/134.jpeg"},{"id":"rouge-135","name":"MEDICUBE ZERO P.SERUM 37ML 4283","category":"MEDICUBE","code":"739092","price":55000,"image":"https://cdn.beautybooth.qa/uploads/all/cp8tZfuz9rtA6llX6jNbuNNPMYqBOjpYxbXlKUXr.jpg"},{"id":"rouge-136","name":"MEDICUBE ZERO PORE PAD 70PDS 8374-4665","category":"MEDICUBE","code":"848763","price":61000,"image":"../../assets/products/136.jpeg"},{"id":"rouge-137","name":"MEDICUBE ZERO PORE PAD MILD 70PDS 4315","category":"MEDICUBE","code":"857895","price":61000,"image":"https://cloudinary.images-iherb.com/image/upload/f_auto%2Cq_auto%3Aeco/images/mcb/mcb41431/l/25.jpg"},{"id":"rouge-138","name":"SKIN CELIMAX BARRIER WATER CREAM 40M8172","category":"CELIMAX","code":"868860","price":71000,"image":"../../assets/products/138.jpeg"},{"id":"rouge-139","name":"SKIN CELIMAX CICA SOOTHIN CREAM 50ML7861","category":"CELIMAX","code":"869157","price":71000,"image":"https://cdn.shopify.com/s/files/1/0533/3401/6154/files/8809782557861.jpg?v=1747567109"},{"id":"rouge-140","name":"SKIN CELIMAX CONTROL LIGHT SUNS 40M 9063","category":"CELIMAX","code":"856409","price":58000,"image":"https://media.meds.se/meds/images/image-png-2026-02-02-091201204/550/550/fill/c/8809782559063-1-1-png.png"},{"id":"rouge-141","name":"SKIN CELIMAX CONTROL MOIST CREAM 80 6880","category":"CELIMAX","code":"856140","price":61000,"image":"../../assets/products/141.jpeg"},{"id":"rouge-142","name":"SKIN CELIMAX DUAL BARRIER CREAM 50ML0505","category":"CELIMAX","code":"869171","price":71000,"image":"../../assets/products/142.jpeg"},{"id":"rouge-143","name":"SKIN CELIMAX DUAL BARRIER SERUM 30ML0482","category":"CELIMAX","code":"869249","price":71000,"image":"../../assets/products/143.jpeg"},{"id":"rouge-144","name":"SKIN CELIMAX DUAL BARRIER TRIAL KIT 2332","category":"CELIMAX","code":"869164","price":60000,"image":"https://yeppo.cl/cdn/shop/files/celimax-dual-barrier-trial-kit-2pcs_e9ba3b94-2e1f-41d2-849b-e0fe98ea0204_512x512.png?v=1779903736"},{"id":"rouge-145","name":"SKIN CELIMAX DUAL PURIFIN CLEAN 50M 2400","category":"CELIMAX","code":"856317","price":55000,"image":"../../assets/products/145.jpeg"},{"id":"rouge-146","name":"SKIN CELIMAX JIWOOGAE BODY BRIG 60P 2707","category":"CELIMAX","code":"856461","price":55000,"image":"https://cafe24img.poxo.com/jolsejolse/web/product/big/202206/815b9cfd4287d24d3818e86f4614337b.jpg"},{"id":"rouge-147","name":"SKIN CELIMAX JIWOOGAE CICA BHA 60P 1225","category":"CELIMAX","code":"856423","price":58000,"image":"https://static4.ezebra.pl/hpeciai/df8632dc7ad506351204edb4b63b378a/pol_pl_Celimax-Pore-Dark-Spot-Brightening-Pad-rozjasniajace-platki-do-twarzy-40-sztuk-188769_4.webp"},{"id":"rouge-148","name":"SKIN CELIMAX JIWOOGAE HEART BHA 60P 2615","category":"CELIMAX","code":"856447","price":55000,"image":"../../assets/products/148.jpeg"},{"id":"rouge-149","name":"SKIN CELIMAX JIWOOGAE MILD CLEA 60P 3889","category":"CELIMAX","code":"856454","price":57000,"image":"../../assets/products/149.jpeg"},{"id":"rouge-150","name":"SKIN CELIMAX JOJOBA CLEAN OIL 150ML 8525","category":"CELIMAX","code":"856294","price":57000,"image":"../../assets/products/150.jpeg"},{"id":"rouge-151","name":"SKIN CELIMAX MATT OIL CONTROL STICK 9911","category":"CELIMAX","code":"867269","price":58000,"image":"../../assets/products/151.jpeg"},{"id":"rouge-152","name":"SKIN CELIMAX NONI CALM+RADIAN 30M7795","category":"CELIMAX","code":"869188","price":66000,"image":"../../assets/products/152.jpeg"},{"id":"rouge-153","name":"SKIN CELIMAX NONI GLOW PAD COOL+HYD 5464","category":"CELIMAX","code":"867337","price":65000,"image":"../../assets/products/153.jpeg"},{"id":"rouge-154","name":"SKIN CELIMAX NONI THE REAL ACNE CLE 9468","category":"CELIMAX","code":"856249","price":60000,"image":"../../assets/products/154.jpeg"},{"id":"rouge-155","name":"SKIN CELIMAX NONI THE REAL EN A MIS 0477","category":"CELIMAX","code":"856072","price":56000,"image":"../../assets/products/155.jpeg"},{"id":"rouge-156","name":"SKIN CELIMAX NONI THE REAL ENE CREA 6185","category":"CELIMAX","code":"856065","price":61000,"image":"https://www.skinbae.in/cdn/shop/files/image8_bd4fc971-5040-4ea7-adc2-5ba55b088485.jpg?v=1757596189&width=1080"},{"id":"rouge-157","name":"SKIN CELIMAX NONI THE REAL HYDR LOT 0347","category":"CELIMAX","code":"856096","price":63000,"image":"../../assets/products/157.jpeg"},{"id":"rouge-158","name":"SKIN CELIMAX NONI THE REAL REF MASK 0354","category":"CELIMAX","code":"856119","price":51000,"image":"../../assets/products/158.jpeg"},{"id":"rouge-159","name":"SKIN CELIMAX NONI THE REAL S KIT 3P 2349","category":"CELIMAX","code":"856102","price":61000,"image":"../../assets/products/159.jpeg"},{"id":"rouge-160","name":"SKIN CELIMAX OIL CAPSULE ESSENC 30M9018","category":"CELIMAX","code":"869140","price":61000,"image":"../../assets/products/160.jpeg"},{"id":"rouge-161","name":"SKIN CELIMAX PORE+DARK BR CREAM 35M 4503","category":"CELIMAX","code":"856232","price":60000,"image":"../../assets/products/161.jpeg"},{"id":"rouge-162","name":"SKIN CELIMAX PORE+DARK BR SERUM 30M 7412","category":"CELIMAX","code":"856164","price":60000,"image":"https://i.ebayimg.com/images/g/qJoAAOSwnqtnu~6M/s-l1200.jpg"},{"id":"rouge-163","name":"SKIN CELIMAX PORE+DARK SPOT BRI 40P 6323","category":"CELIMAX","code":"856195","price":61000,"image":"../../assets/products/163.jpeg"},{"id":"rouge-164","name":"SKIN CELIMAX PORE+DARK SPOT BRI 50M 4510","category":"CELIMAX","code":"858922","price":65000,"image":"../../assets/products/164.jpeg"},{"id":"rouge-165","name":"SKIN CELIMAX PORE+DARK SPOT KIT 1789","category":"CELIMAX","code":"869195","price":65000,"image":"../../assets/products/165.jpeg"},{"id":"rouge-166","name":"SKIN CELIMAX RETINAL SHOT 0812 15ML","category":"CELIMAX","code":"846370","price":56000,"image":"../../assets/products/166.jpeg"},{"id":"rouge-167","name":"SKIN CELIMAX THE REAL BALAN TONER 0132","category":"CELIMAX","code":"869133","price":65000,"image":"../../assets/products/167.jpeg"},{"id":"rouge-168","name":"SKIN CELIMAX THE REAL C NI CALM 40M 4626","category":"CELIMAX","code":"856201","price":58000,"image":"../../assets/products/168.jpeg"},{"id":"rouge-169","name":"SKIN CELIMAX THE REAL N EYE CREA 20 0666","category":"CELIMAX","code":"867276","price":61000,"image":"../../assets/products/169.jpeg"},{"id":"rouge-170","name":"SKIN CELIMAX THE V RETINOL SERUM 30 0805","category":"CELIMAX","code":"856126","price":51000,"image":"../../assets/products/170.jpeg"},{"id":"rouge-171","name":"SKIN CELIMAX TONE UP SUN CREAM 40ML 6811","category":"CELIMAX","code":"856416","price":61000,"image":"../../assets/products/171.jpeg"},{"id":"rouge-172","name":"ROUND LAB 1025 DOKDO 70PADS 9247","category":"ROUND LAB","code":"856010","price":59000,"image":"../../assets/products/172.jpeg"},{"id":"rouge-173","name":"ROUND LAB 1025 DOKDO AMPOULE 45G 5479","category":"ROUND LAB","code":"855877","price":58000,"image":"../../assets/products/173.jpeg"},{"id":"rouge-174","name":"ROUND LAB 1025 DOKDO BUBLE FOAM 150M9044","category":"ROUND LAB","code":"855860","price":56000,"image":"../../assets/products/174.jpeg"},{"id":"rouge-175","name":"ROUND LAB 1025 DOKDO CLEA WATER 400M7343","category":"ROUND LAB","code":"855914","price":55000,"image":"../../assets/products/175.jpeg"},{"id":"rouge-176","name":"ROUND LAB 1025 DOKDO CLEANS GEL 150M1120","category":"ROUND LAB","code":"855907","price":56000,"image":"../../assets/products/176.jpeg"},{"id":"rouge-177","name":"ROUND LAB 1025 DOKDO CLEANS MIL 200M2684","category":"ROUND LAB","code":"855891","price":61000,"image":"https://u.makeup.com.ua/f/fv/fv43rzt5moym.jpg"},{"id":"rouge-178","name":"ROUND LAB 1025 DOKDO CLEANS OIL 200M5677","category":"ROUND LAB","code":"855921","price":61000,"image":"https://v2cdn.boutiqaat.com/media/catalog/product/S/C/SC-00005637-3.jpg"},{"id":"rouge-179","name":"ROUND LAB 1025 DOKDO CLEANSER 150ML 8364","category":"ROUND LAB","code":"855884","price":55000,"image":"../../assets/products/179.jpeg"},{"id":"rouge-180","name":"ROUND LAB 1025 DOKDO CREAM 80ML 0245","category":"ROUND LAB","code":"855983","price":61000,"image":"../../assets/products/180.jpeg"},{"id":"rouge-181","name":"ROUND LAB 1025 DOKDO EYE CREAM 30ML 4632","category":"ROUND LAB","code":"855976","price":58000,"image":"https://www.onesplus.ca/cdn/shop/files/RoundLab1025DokdoEyeCream.jpg?v=1724344232"},{"id":"rouge-182","name":"ROUND LAB 1025 DOKDO GEL MASK 1PCS 1489","category":"ROUND LAB","code":"856003","price":34000,"image":"https://down-ph.img.susercontent.com/file/sg-11134207-7rbk6-lmh7d1eh9vopc5"},{"id":"rouge-183","name":"ROUND LAB 1025 DOKDO LIGHT CREAM 80M1154","category":"ROUND LAB","code":"855990","price":63000,"image":"../../assets/products/183.jpeg"},{"id":"rouge-184","name":"ROUND LAB SOYBEAN SERUM 50ML 3240","category":"ROUND LAB","code":"856188","price":63000,"image":"../../assets/products/184.jpeg"},{"id":"rouge-185","name":"ROUND LAB VITA DARK SPOT SERUM 30ML0652","category":"ROUND LAB","code":"856225","price":60000,"image":"../../assets/products/185.jpeg"},{"id":"rouge-186","name":"ROUND LAB VITA NIACIN CREAM 50ML 2946","category":"ROUND LAB","code":"856218","price":61000,"image":"https://i.ebayimg.com/images/g/ne0AAOSwsVJmO2V~/s-l1200.jpg"},{"id":"rouge-187","name":"ROUND LAB VITA NIACIN SPOT CREAM 50M0690","category":"ROUND LAB","code":"856171","price":61000,"image":"../../assets/products/187.jpeg"},{"id":"rouge-188","name":"KSECRET COLLAGEN BOOSTI LOTION 60ML 0461","category":"SEOUL 1988","code":"855785","price":58000,"image":"../../assets/products/188.jpeg"},{"id":"rouge-189","name":"KSECRET SEOUL 1988 CICA+PROBIOT 150M0553","category":"SEOUL 1988","code":"855808","price":53000,"image":"../../assets/products/189.jpeg"},{"id":"rouge-190","name":"KSECRET SEOUL 1988 CICA+PROBIOT 200M0560","category":"SEOUL 1988","code":"855716","price":58000,"image":"../../assets/products/190.jpeg"},{"id":"rouge-191","name":"KSECRET SEOUL 1988 MUCI93%+RICE 100M0591","category":"SEOUL 1988","code":"855730","price":60000,"image":"../../assets/products/191.jpeg"},{"id":"rouge-192","name":"KSECRET SEOUL 1988 MUCI97%+RICE 100M0515","category":"SEOUL 1988","code":"855723","price":60000,"image":"../../assets/products/192.jpeg"},{"id":"rouge-193","name":"KSECRET SEOUL 1988 NIACIN15%+YUJ 30M0621","category":"SEOUL 1988","code":"855747","price":60000,"image":"../../assets/products/193.jpeg"},{"id":"rouge-194","name":"KSECRET SEOUL 1988 NIACIN5%+YUJA 50M0614","category":"SEOUL 1988","code":"855815","price":60000,"image":"../../assets/products/194.jpeg"},{"id":"rouge-195","name":"KSECRET SEOUL 1988 RETIN+FERMEN 50ML0584","category":"SEOUL 1988","code":"855709","price":61000,"image":"../../assets/products/195.jpeg"},{"id":"rouge-196","name":"KSECRET SEOUL 1988 RETIN12%+BLAC 15M0676","category":"SEOUL 1988","code":"855792","price":58000,"image":"../../assets/products/196.jpeg"},{"id":"rouge-197","name":"KSECRET SEOUL 1988 RETIN2%+BLACK 30M0508","category":"SEOUL 1988","code":"855778","price":60000,"image":"../../assets/products/197.jpeg"},{"id":"rouge-198","name":"KSECRET SEOUL 1988 RETINA4%+FERM 30M0577","category":"SEOUL 1988","code":"855754","price":74000,"image":"../../assets/products/198.jpeg"},{"id":"rouge-199","name":"KSECRET SEOUL 1988 TREE+CERMID 50ML0492","category":"SEOUL 1988","code":"855761","price":56000,"image":"../../assets/products/199.jpeg"},{"id":"rouge-200","name":"SKIN MIXSOON BIFIDA FE ESSENCE 30ML 3969","category":"MIXSOON","code":"856430","price":61000,"image":"https://funkyfishec.vtexassets.com/arquivos/ids/175418/8809732913969.jpg?v=638912138076770000"},{"id":"rouge-201","name":"SKIN MIXSOON CICA HYA SUN STICK 15G 3617","category":"MIXSOON","code":"856386","price":61000,"image":"../../assets/products/201.jpeg"},{"id":"rouge-202","name":"SKIN NUMBUZIN NO.5 GLUTA TXA AMPOUL 2008","category":"NUMBUZIN","code":"867238","price":68000,"image":"../../assets/products/202.jpeg"},{"id":"rouge-203","name":"SKIN NUMBUZIN NO.9 NAD DEWY SUN 50ML5429","category":"NUMBUZIN","code":"869270","price":65000,"image":"../../assets/products/203.jpeg"},{"id":"rouge-204","name":"SKIN NUMBUZIN NO.9 NAD+RETI CREA 20M5351","category":"NUMBUZIN","code":"869287","price":68000,"image":"../../assets/products/204.jpeg"},{"id":"rouge-205","name":"SKIN NUMBUZIN NO.9NAD BIO LIFT ESSE 7639","category":"NUMBUZIN","code":"867184","price":71000,"image":"../../assets/products/205.jpeg"},{"id":"rouge-206","name":"SKIN NUMBUZIN NO.9NAD+COLL EYE PATC 9619","category":"NUMBUZIN","code":"865944","price":56000,"image":"../../assets/products/206.jpeg"},{"id":"rouge-207","name":"SKIN NUMBUZIN NO.9NAD+RETINOL VOLUM 9800","category":"NUMBUZIN","code":"858915","price":58000,"image":"../../assets/products/207.jpeg"},{"id":"rouge-208","name":"SOME BY MI 30 DAYS SPOT PACH 0015","category":"SOME BY MI","code":"862455","price":38000,"image":"../../assets/products/208.jpeg"},{"id":"rouge-209","name":"TIRTIR CERAMIC CREAM 100ML 0725","category":"TIRTIR","code":"862554","price":92000,"image":"../../assets/products/209.jpeg"},{"id":"rouge-210","name":"TIRTIR COLLAGEN EYE CREAM 15ML 2514","category":"TIRTIR","code":"862547","price":86000,"image":"../../assets/products/210.jpeg"},{"id":"rouge-211","name":"TIRTIR FIT AURA CUSHION 24W SOFT BE 6608","category":"TIRTIR","code":"863285","price":68000,"image":"../../assets/products/211.jpeg"},{"id":"rouge-212","name":"TIRTIR FIT CRYSTAL CUSHION 23N SAND 2433","category":"TIRTIR","code":"862486","price":68000,"image":"../../assets/products/212.jpeg"},{"id":"rouge-213","name":"TIRTIR FIT MAKE UP COOL FIXER 80ML 2198","category":"TIRTIR","code":"862790","price":56000,"image":"../../assets/products/213.jpeg"},{"id":"rouge-214","name":"TIRTIR FIT MAKE UP FIXER 80ML 9612","category":"TIRTIR","code":"862783","price":60000,"image":"../../assets/products/214.jpeg"},{"id":"rouge-215","name":"TIRTIR GLIDE & HIDE CONCEALER 0.5N 1269","category":"TIRTIR","code":"862578","price":58000,"image":"../../assets/products/215.jpeg"},{"id":"rouge-216","name":"TIRTIR GLIDE & HIDE CONCEALER 1N 1276","category":"TIRTIR","code":"863308","price":58000,"image":"../../assets/products/216.jpeg"},{"id":"rouge-217","name":"TIRTIR GLIDE & HIDE CONCEALER 3W 1313","category":"TIRTIR","code":"1313","price":58000,"image":"../../assets/products/217.jpeg"},{"id":"rouge-218","name":"TIRTIR GLIDE & HIDE CONCEALER 4.5N 1344","category":"TIRTIR","code":"862561","price":58000,"image":"../../assets/products/218.jpeg"},{"id":"rouge-219","name":"TIRTIR MASK FIT ALL COVER 21C IVORY 6462","category":"TIRTIR","code":"6462","price":69000,"image":"../../assets/products/219.jpeg"},{"id":"rouge-220","name":"TIRTIR MASK FIT AURA CUSHION 17C 6851","category":"TIRTIR","code":"6851","price":69000,"image":"../../assets/products/220.jpeg"},{"id":"rouge-221","name":"TIRTIR MASK RED CUSHION 18G 15C 4857","category":"TIRTIR","code":"862776","price":69000,"image":"../../assets/products/221.jpeg"},{"id":"rouge-222","name":"TIRTIR MASK RED CUSHION 18G 24W 3874","category":"TIRTIR","code":"3874","price":69000,"image":"../../assets/products/222.jpeg"},{"id":"rouge-223","name":"TIRTIR MILK SKIN TONER 50ML 2488","category":"TIRTIR","code":"2488","price":53000,"image":"../../assets/products/223.jpeg"},{"id":"rouge-224","name":"DR.MELAXIN EXFOLIANT WHITE AMPOULE 2366","category":"DR.MELAXIN","code":"862530","price":66000,"image":"../../assets/products/224.jpeg"},{"id":"rouge-225","name":"DR.MELAXIN EYEBAG CREAM 10ML 1932","category":"DR.MELAXIN","code":"862509","price":69000,"image":"../../assets/products/225.jpeg"},{"id":"rouge-226","name":"DR.MELAXIN KOJIC EXFOL SPRAY 200M2809","category":"DR.MELAXIN","code":"869300","price":69000,"image":"../../assets/products/226.jpeg"},{"id":"rouge-227","name":"DR.MELAXIN PEEL SHOT TONER 200ML 2465","category":"DR.MELAXIN","code":"862523","price":69000,"image":"../../assets/products/227.jpeg"},{"id":"rouge-228","name":"DR.MELAXIN TX CREAM 50ML 1413","category":"DR.MELAXIN","code":"869317","price":74000,"image":"../../assets/products/228.jpeg"},{"id":"rouge-229","name":"THE ORDINARY AHA30% +BHA 2% PEEL 30M3619","category":"THE ORDINARY","code":"863353","price":74000,"image":"../../assets/products/229.jpeg"},{"id":"rouge-230","name":"THE ORDINARY KIT DE 3PCS 3332","category":"THE ORDINARY","code":"863360","price":125000,"image":"../../assets/products/230.jpeg"},{"id":"rouge-231","name":"THE ORDINARY NIACINA +ZINC 1% 9031","category":"THE ORDINARY","code":"863346","price":65000,"image":"../../assets/products/231.jpeg"}];;

const PRODUCT_FALLBACKS = new Map(PRODUCTS.map((product, index) => [
  product.id, `../../assets/products/${String(index + 1).padStart(3, "0")}.jpeg`
]));
const PRODUCT_PLACEHOLDER = "../../assets/placeholder-product.svg";

function showLocalFirst(img, localPath, primaryUrl) {
  img.dataset.localPath = localPath;
  img.dataset.primaryUrl = primaryUrl || "";
  img.src = localPath;
  img.onerror = () => {
    if (img.dataset.placeholderFallback !== "1") {
      img.dataset.placeholderFallback = "1";
      img.src = PRODUCT_PLACEHOLDER;
    }
  };
  if (primaryUrl && !primaryUrl.startsWith("../../assets/")) {
    const probe = new Image();
    probe.decoding = "async";
    probe.referrerPolicy = "no-referrer";
    probe.onload = () => {
      if ((probe.naturalWidth || 0) >= 320 && (probe.naturalHeight || 0) >= 320) {
        img.src = primaryUrl;
        img.dataset.primaryLoaded = "1";
      }
    };
    probe.onerror = () => {};
    probe.src = primaryUrl;
  }
}



const state = {
  products: PRODUCTS,
  category: "TODOS",
  search: "",
  sort: "featured",
  cart: JSON.parse(localStorage.getItem("rougeCart") || "{}")
};

const grid = document.getElementById("product-grid");
const resultsCount = document.getElementById("results-count");
const categoryList = document.getElementById("category-list");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const emptyState = document.getElementById("empty-state");
const clearSearch = document.getElementById("clear-search");
const cartDrawer = document.getElementById("cart-drawer");
const cartItems = document.getElementById("cart-items");
const cartEmpty = document.getElementById("cart-empty");
const cartSummary = document.getElementById("cart-summary");
const cartTotal = document.getElementById("cart-total");
const floatingCart = document.getElementById("floating-cart");
const floatingCartCount = document.getElementById("floating-cart-count");
const checkoutOpen = document.getElementById("checkout-open");
const cartContinue = document.getElementById("cart-continue");

function money(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(value);
}

function normalize(text) {
  return text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

function saveCart() {
  localStorage.setItem("rougeCart", JSON.stringify(state.cart));
}

function cartQuantity() {
  return Object.values(state.cart).reduce((sum, item) => sum + item.quantity, 0);
}

function cartLines() {
  return Object.values(state.cart);
}

function cartAmount() {
  return cartLines().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function addToCart(product, quantity = 1) {
  const existing = state.cart[product.id];
  if (existing) existing.quantity += quantity;
  else {
    state.cart[product.id] = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      fallbackImage: PRODUCT_FALLBACKS.get(product.id),
      quantity
    };
  }
  saveCart();
  renderCart();
  showToast(`${product.name} agregado a tu pedido.`);
}

function changeQuantity(id, delta) {
  const item = state.cart[id];
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) delete state.cart[id];
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  delete state.cart[id];
  saveCart();
  renderCart();
}

function showToast(message) {
  let toast = document.getElementById("rouge-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "rouge-toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("visible"), 2200);
}

function filteredProducts() {
  let list = [...state.products];
  if (state.category !== "TODOS") list = list.filter(p => p.category === state.category);
  const q = normalize(state.search.trim());
  if (q) {
    list = list.filter(p => normalize(`${p.name} ${p.category} ${p.code || ""}`).includes(q));
  }
  switch (state.sort) {
    case "name-asc": list.sort((a, b) => a.name.localeCompare(b.name, "es")); break;
    case "name-desc": list.sort((a, b) => b.name.localeCompare(a.name, "es")); break;
    case "price-asc": list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
  }
  return list;
}

function productCard(product) {
  const article = document.createElement("article");
  article.className = "product-card";

  const imageWrap = document.createElement("div");
  imageWrap.className = "product-image-wrap";
  const img = document.createElement("img");
  img.alt = product.name;
  img.loading = "lazy";
  img.decoding = "async";
  img.referrerPolicy = "no-referrer";
  showLocalFirst(img, PRODUCT_FALLBACKS.get(product.id) || PRODUCT_PLACEHOLDER, product.image);
  const tag = document.createElement("span");
  tag.className = "product-category";
  tag.textContent = product.category;
  imageWrap.append(img, tag);

  const body = document.createElement("div");
  body.className = "product-body";
  const name = document.createElement("h3");
  name.className = "product-name";
  name.textContent = product.name;
  const meta = document.createElement("div");
  meta.className = "product-meta";
  meta.textContent = product.code ? `Código ${product.code}` : "Disponible en ROUGE";

  const bottom = document.createElement("div");
  bottom.className = "product-bottom";
  const price = document.createElement("div");
  price.className = "product-price";
  price.textContent = money(product.price);

  const actions = document.createElement("div");
  actions.className = "product-actions";
  const add = document.createElement("button");
  add.className = "product-add";
  add.type = "button";
  add.textContent = "Agregar";
  add.addEventListener("click", () => addToCart(product));
  actions.append(add);

  bottom.append(price, actions);
  body.append(name, meta, bottom);
  article.append(imageWrap, body);
  return article;
}

function renderCategories() {
  const categories = [...new Set(state.products.map(p => p.category))].sort((a, b) => a.localeCompare(b, "es"));
  categoryList.innerHTML = "";
  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = "category-chip";
    button.textContent = category;
    button.dataset.category = category;
    button.addEventListener("click", () => {
      state.category = category;
      document.querySelectorAll(".category-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.category === state.category));
      render();
      window.scrollTo({ top: document.querySelector(".summary-row").offsetTop - 18, behavior: "smooth" });
    });
    categoryList.appendChild(button);
  });
}

function render() {
  const list = filteredProducts();
  grid.innerHTML = "";
  if (!list.length) {
    grid.classList.add("hidden");
    emptyState.classList.remove("hidden");
  } else {
    grid.classList.remove("hidden");
    emptyState.classList.add("hidden");
    const fragment = document.createDocumentFragment();
    list.forEach(product => fragment.appendChild(productCard(product)));
    grid.appendChild(fragment);
  }
  resultsCount.textContent = `${list.length} producto${list.length === 1 ? "" : "s"} encontrado${list.length === 1 ? "" : "s"}`;
}

function openCart() {
  renderCart();
  cartDrawer.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartDrawer.classList.add("hidden");
  document.body.style.overflow = "";
}

function renderCart() {
  const items = cartLines();
  const count = cartQuantity();
  floatingCartCount.textContent = count;
  cartItems.innerHTML = "";

  const hasItems = items.length > 0;
  cartEmpty.classList.toggle("hidden", hasItems);
  cartSummary.classList.toggle("hidden", !hasItems);
  if (!hasItems) return;

  items.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-item";

    const image = document.createElement("img");
    image.alt = item.name;
    image.decoding = "async";
    image.referrerPolicy = "no-referrer";
    showLocalFirst(image, item.fallbackImage || PRODUCT_PLACEHOLDER, item.image);

    const info = document.createElement("div");
    info.className = "cart-item-info";
    const title = document.createElement("h3");
    title.textContent = item.name;
    const unit = document.createElement("p");
    unit.textContent = money(item.price);

    const controls = document.createElement("div");
    controls.className = "cart-controls";
    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "−";
    minus.addEventListener("click", () => changeQuantity(item.id, -1));
    const qty = document.createElement("span");
    qty.textContent = item.quantity;
    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.addEventListener("click", () => changeQuantity(item.id, 1));
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "cart-remove";
    remove.textContent = "Eliminar";
    remove.addEventListener("click", () => removeFromCart(item.id));
    controls.append(minus, qty, plus, remove);

    info.append(title, unit, controls);
    row.append(image, info);
    cartItems.appendChild(row);
  });

  cartTotal.textContent = money(cartAmount());
}

function buildWhatsAppMessage() {
  const lines = cartLines().map((item, index) => `${index + 1}. ${item.name} × ${item.quantity} — ${money(item.price * item.quantity)}`);
  return [
    "Hola ROUGE, quiero realizar el siguiente pedido:",
    "",
    ...lines,
    "",
    `Total: ${money(cartAmount())}`,
    "",
    "Entiendo que los productos son importados y se gestionan por encargo, con un plazo de entrega de hasta 14 días."
  ].join("\n");
}


document.querySelector(".category-chip[data-category='TODOS']").addEventListener("click", () => {
  state.category = "TODOS";
  document.querySelectorAll(".category-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.category === "TODOS"));
  render();
});

searchInput.addEventListener("input", event => { state.search = event.target.value; render(); });
sortSelect.addEventListener("change", event => { state.sort = event.target.value; render(); });
clearSearch.addEventListener("click", () => {
  state.search = "";
  searchInput.value = "";
  state.category = "TODOS";
  document.querySelectorAll(".category-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.category === "TODOS"));
  render();
});

document.querySelectorAll("[data-close-cart='true']").forEach(el => el.addEventListener("click", closeCart));
floatingCart.addEventListener("click", openCart);
cartContinue.addEventListener("click", closeCart);
checkoutOpen.addEventListener("click", () => {
  if (!cartQuantity()) {
    showToast("Agregá al menos un producto a tu pedido.");
    return;
  }
  const message = buildWhatsAppMessage();
  const url = `https://wa.me/5491130049720?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !cartDrawer.classList.contains("hidden")) closeCart();
});

renderCategories();
render();
renderCart();
