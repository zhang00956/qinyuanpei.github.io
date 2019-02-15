/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","6eb86ef941eb970f2cdf8a557dd927e0"],["about/index.html","8b498ce446d2028fd01e7757e4de5358"],["archives/2014/12/index.html","2d6393df443a514fe286d6cc3194f27e"],["archives/2014/index.html","2dd2d33b46d02914e34e37e727178788"],["archives/2015/01/index.html","40f697d330eeed2777fc469ee939dd46"],["archives/2015/02/index.html","716d9f0c48f8398775ce01ab191c5095"],["archives/2015/03/index.html","1662b869527933fbe152488c6ba1f068"],["archives/2015/04/index.html","12e60c5d0741a7895853a7e15b278616"],["archives/2015/05/index.html","696eda9808d0715ae63c67e14204f979"],["archives/2015/06/index.html","d8458c0235f150443e2cb7388b9e69be"],["archives/2015/07/index.html","49677359664bb4868b9ad153bec76fd2"],["archives/2015/08/index.html","80a5d156cebde8299f478cbeaf8cdf3a"],["archives/2015/09/index.html","fc1797a6d49c64300e86a8afb37f8422"],["archives/2015/10/index.html","2063d8030a5a0d41bd6da0cc3cabaefc"],["archives/2015/11/index.html","f5d9327c1965716c376a193724f3ef21"],["archives/2015/12/index.html","e7ebac0d165763f915d6d84ea04c69b3"],["archives/2015/index.html","615d6bca1742df558571820f579c7e8c"],["archives/2015/pages/2/index.html","22384740ae421369015998ce26a24136"],["archives/2015/pages/3/index.html","52ed74a2eac139311328fcfe37d502c9"],["archives/2015/pages/4/index.html","513912b42f04bcb5c61e8e8c8fdfff76"],["archives/2015/pages/5/index.html","016a0323bbad3ff0962c7b27aaa2fdad"],["archives/2015/pages/6/index.html","cf44abc919c903b383fc0d39666fac54"],["archives/2016/01/index.html","75894b98c5b377dc57b9f6d5aaa24e77"],["archives/2016/03/index.html","aa4693d9e1cb2ac46f992f72e355f461"],["archives/2016/05/index.html","a72bfb98d4ae8558890655db97d1ce9d"],["archives/2016/06/index.html","19a4c42674b14865d95f778dc8ab0a5f"],["archives/2016/07/index.html","87ec2a7d4adb731cf6a756ec440f990c"],["archives/2016/09/index.html","ce1a73edb15443f64c241fca8511ed66"],["archives/2016/10/index.html","4f2318ce2656537bc44a157323656a0e"],["archives/2016/11/index.html","b805b4a4859b277d692cedddfcdf690e"],["archives/2016/index.html","0096506db7af51df1120b9c41558a301"],["archives/2016/pages/2/index.html","464f9f88d3f25f54a82dec7a35366cdd"],["archives/2016/pages/3/index.html","e845a90329a2e7386931459ee1452835"],["archives/2017/02/index.html","03cbff7bdf92a6a50515af27936a3ad2"],["archives/2017/03/index.html","c7e6933e400dc56e2437e7934791950e"],["archives/2017/04/index.html","6ecf84e32b15b9bac091634bc0dac3e1"],["archives/2017/05/index.html","faabfa560a101764d79724b935a8a42e"],["archives/2017/07/index.html","ee3b929f9a582689321b9c4be071ddb8"],["archives/2017/08/index.html","a384cd62aa0674b9e687ba4ab77a5e8d"],["archives/2017/09/index.html","3ed3cb21b20f14b97bbd2ec311c7c0f4"],["archives/2017/10/index.html","6b9c7b0ed928d786f9c57239bb1225b8"],["archives/2017/11/index.html","400fa7284a1d97496b57ddf14e9f40ba"],["archives/2017/12/index.html","a6c84e636dad7297f6841e4b4d94ec64"],["archives/2017/index.html","fd5d9582cd6f8f89f0a1ca20746fe577"],["archives/2017/pages/2/index.html","4f84e4617ed01bf71be846ac3f0a43d3"],["archives/2018/01/index.html","db05421294457857b48c692baf6587fe"],["archives/2018/02/index.html","0f87344c5701cc59ccde87b4a85bd413"],["archives/2018/03/index.html","1c399291be9b890cea3c200b595c5214"],["archives/2018/04/index.html","7c066fadbe71f7c051735fd47b3099f3"],["archives/2018/05/index.html","2484bc56cbf41ca49aef858692799e46"],["archives/2018/06/index.html","28db3a6ca3c0eb734a04d731214f6d3a"],["archives/2018/07/index.html","ab784c3dd3ec69e128d36869dddef9b6"],["archives/2018/08/index.html","06bbfe394d16eeea11273bca0d09d5a0"],["archives/2018/09/index.html","c565592e963d938d403bd939defe344d"],["archives/2018/10/index.html","adab9ceaa7a749374bd7dd453491dcc1"],["archives/2018/index.html","c985b10a7788c8b3c3afbd55368413fb"],["archives/2018/pages/2/index.html","236b81aaf994b12afe9fae2c2759c92c"],["archives/2018/pages/3/index.html","0efbaebd271f0ba5fedff92ba2f44d7c"],["archives/2018/pages/4/index.html","54bf1464d0b8b42dc7f54b717ea0f2ef"],["archives/2019/01/index.html","cea24a6b1ed37d05b2d6f379fc146456"],["archives/2019/index.html","6f9d825fd3ef3c96946b413ecfec69c7"],["archives/index.html","6cf55037624c8e85b3e9f833f40fda9c"],["archives/pages/10/index.html","2e22fdfd7f7877d24017794074400b74"],["archives/pages/11/index.html","6862241cf7d266f6e8e74fca43455c06"],["archives/pages/12/index.html","fb0c9af51be5fcfe5fe9b8875715aeb7"],["archives/pages/13/index.html","4c7e2bf4fef45fa932a83001ca96d780"],["archives/pages/14/index.html","86481618038391edde002f4de376ac7a"],["archives/pages/2/index.html","bfaf6ba58d6116b7d7a615064375b3db"],["archives/pages/3/index.html","9879c5468bbbafbe8559c122b186f852"],["archives/pages/4/index.html","9b7f7b5d921207412dc7bab5c96e44dd"],["archives/pages/5/index.html","2d8143bcf47d363d25973978df275aac"],["archives/pages/6/index.html","301ae8f82a1eb53da447a6e6a3cc415b"],["archives/pages/7/index.html","aa39150d7bea6361599ab62f56fa1b70"],["archives/pages/8/index.html","375fae349343e8be93236baa1f1a572a"],["archives/pages/9/index.html","74679d54c1fc1d16244d85ca21505cc1"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/bixin.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/bixin.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/main.js","6841c187e1a5e4acc28336897fc08f9b"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","657d260380f7135d36dab3a0cba1664f"],["books/index.html","82ffe2a528215a68539666c740c80878"],["categories/Unity3D/index.html","b1a7436af35b8efed6312ea09ccee0e9"],["categories/Unity3D/pages/2/index.html","5565e00297c404d92d9b63b3d2652aec"],["categories/index.html","549fecd856531255a127b092e7acc474"],["categories/人工智能/index.html","0056f9e3ecdb555d3bb0e2de693f3d6e"],["categories/单机游戏/index.html","d40fcb4173a23525fb64b589e3ee6ce2"],["categories/开发工具/index.html","cee5d703cffed52bbd2167c3799a4dcf"],["categories/数据分析/index.html","48cce42c68737587124cb8df9d50873c"],["categories/数据存储/index.html","9ec8a8dd60e331477d3e75fe33ce39da"],["categories/游戏开发/index.html","4f93d5aaf13c7335bf9b3d7aadbb0255"],["categories/游戏开发/pages/2/index.html","14ab20aed40040ab335d823cb5cdc981"],["categories/游戏引擎/index.html","9c1158a37309041173481e6cf877c576"],["categories/独立博客/index.html","80b5e6222c813625476f1b064e7ca434"],["categories/生活感悟/index.html","c1742eebe75d2b21c1b980c7a7df39d6"],["categories/生活感悟/pages/2/index.html","3b752f6cf8220153369921500c1faf0a"],["categories/生活感悟/pages/3/index.html","28e20c52b851e49529f09db23186fe4c"],["categories/编程语言/index.html","3c62f16eaf664954f4c2b9ed859785de"],["categories/编程语言/pages/2/index.html","afe79c156f445591e96e6952264892bf"],["categories/编程语言/pages/3/index.html","79dafb9878bdd54205dae52446bbf570"],["categories/编程语言/pages/4/index.html","42a5924dbe0998d5fdc41eaea7b030d9"],["categories/读书笔记/index.html","fba936359b45440bb714518383d576a7"],["categories/读书笔记/pages/2/index.html","d8bed50549a9e7fce8c9fc97398cb81d"],["index.html","babe5224bd4fd687eefd191f4124e04b"],["movies/index.html","886b87da42f740bddf04188ba3116388"],["musics/index.html","77fa88934b208ae9b15ff64c29bc0bde"],["pages/10/index.html","40fc5dcf064d86e55bf60ae906ff8849"],["pages/11/index.html","37681c5b35c2451b608e858bbb2f5bfb"],["pages/12/index.html","7a796ac9b584a61f79340edf9b4de823"],["pages/13/index.html","1f5f863e81d0f1755ab3abc3bff9bfa8"],["pages/14/index.html","19b70a5caaf8310f0e60263581170e8d"],["pages/2/index.html","2ef53e1ad3ce7359c8793f9ad7d9a657"],["pages/3/index.html","5a2ee7c1af86f6f26f7652e24e829c11"],["pages/4/index.html","e41e696b8245b7be7fe33d7702927481"],["pages/5/index.html","05252b893b82c9313cc5f9988a11f72c"],["pages/6/index.html","a70ebc834267ac1dd92d5cd6c0ffc401"],["pages/7/index.html","9c7ed82688d0166f76fc5bce10143309"],["pages/8/index.html","841e40f842a3cc0db2fbce449ee19ea7"],["pages/9/index.html","71b6103a4d3e0d3f75447f14ffff7bdd"],["posts/1059499448/index.html","5260c3abc1cb91174a23d4e42ba45be0"],["posts/1082185388/index.html","90f2a7b2fde01676c7d509534f7b0199"],["posts/1099762326/index.html","39934810ca3a732550708bf9eb137a34"],["posts/1113828794/index.html","5cc62a7a786e78f8312b85668ee1f163"],["posts/1118169753/index.html","d59d15ad34e228778abcb97c9ebeb916"],["posts/1124152964/index.html","de61fdf8bfa67ec40fe6339f4ead896f"],["posts/1127467740/index.html","0260b02dada62971fc39145b59b938c6"],["posts/1150071886/index.html","92d8e440901163a487143847cdd37dda"],["posts/1150143610/index.html","18725af99b5e8b2c8e793becf20682a6"],["posts/1152813120/index.html","fd2aee751793204ea797c7539220762b"],["posts/115524443/index.html","32e5b9b42b01ca103611875810af4a44"],["posts/1156673678/index.html","cadf738db016c35ebbfd33bfac99368f"],["posts/1166840790/index.html","4b62bfd3c1ae83059c2f52308de4c998"],["posts/1176959868/index.html","853981f6ffaff3d33a42a2e83dd3a6c8"],["posts/1190622881/index.html","719984e38d85bbffa98ffdd1ad9bbefb"],["posts/123663202/index.html","311239f2b38d2106a51a6e85551ec8de"],["posts/124807650/index.html","84e02e96cc56816dcee45e6bfd4f181a"],["posts/1254783039/index.html","98623cc4be9b628cd6a7cdf69a236cf4"],["posts/1320325685/index.html","bf2d1f4b2e25987ac7b67130260ae818"],["posts/1329254441/index.html","cfc57e473bb7eb6309c47c2982230dd2"],["posts/1357715684/index.html","8b9a1b11cf0d5405be47b67a325e94c0"],["posts/1358971951/index.html","cda3083c114e2951e4fb56d131c7628c"],["posts/1386017461/index.html","8653a807a3be7804f2d149d7a55631e4"],["posts/1394521917/index.html","e5275d5a1c68e5d22fa75a267c9aae96"],["posts/1424645834/index.html","74935cd4353905d06f0a32d1d2f1599f"],["posts/1444577573/index.html","18184622764b899b15c63c0aad9da218"],["posts/1467630055/index.html","9753090efcadd04bde8f14e425616ed0"],["posts/1478979553/index.html","94d08d6185ebbc888c9d6111a61dbbab"],["posts/166983157/index.html","3296118cf2a88aad3b0112dbecc5e501"],["posts/1670305415/index.html","fe7abbeba2d0fa0dc52a39b0034eece6"],["posts/1684318907/index.html","31c1b6a45b3f3375ad7c4dd3a7371f44"],["posts/1700650235/index.html","1887ad4b4ef29162b5659ba525890f87"],["posts/172426938/index.html","a8c247a15aae0d38445dff32e381a3f0"],["posts/1836680899/index.html","a446e5f4410a1b7dbd24cf1e03481ee5"],["posts/183718218/index.html","d2ff5134ba8e3678182bf096e7a9aab9"],["posts/187480982/index.html","757860aee7cfb922b2fe49a5cfca89af"],["posts/1930050594/index.html","449abd7b6bdb56d583a51de176149465"],["posts/1933583281/index.html","56eb1062f8fb8585223f77a2a050522a"],["posts/1940333895/index.html","d4faffec0e5c3e69ac5886020b7f74e9"],["posts/1983298072/index.html","c051cf7a5db753a9ee67ba7e824317e6"],["posts/1989654282/index.html","9ad74f23aed5c4f84c83f068493b3fa8"],["posts/2038378679/index.html","b95e3ba12469ab0aab70c29e6d4ef7e9"],["posts/2041685704/index.html","8200d9aa212ee0be0907f8ab667a7133"],["posts/21112647/index.html","0e524dd0f32b700608eeed174a741cc4"],["posts/2158696176/index.html","e68409c816f136bc2af551b8796446fa"],["posts/2171683728/index.html","67f49a8e11e9daa398a96d518bc83278"],["posts/2186770732/index.html","44ad193cb9192250755a0327af79be35"],["posts/2275646954/index.html","6e7b9c3a04088b8a6df3f8cb698dc895"],["posts/2314414875/index.html","6c9f38936d0ba310dc67af10edf36a17"],["posts/2418566449/index.html","1d3549bfcf0a1b81f5860bb01a479b1a"],["posts/2462008667/index.html","75912daa92c793c8f79b487ab8ba588e"],["posts/2463121881/index.html","6d61427c668233a89a4e3181e5088064"],["posts/2527231326/index.html","f39086405a7cfd0b2a6f658e40ad9035"],["posts/2583252123/index.html","de611ff30294d7671af2c00d5abaf333"],["posts/2613006280/index.html","de4eb9bf36d1ee4fdefcad83d3c51172"],["posts/2617501472/index.html","b82689833eedf8b79ece79036546343e"],["posts/2676125676/index.html","d8a9348bc59b7a86b4dbddd0afcfadb0"],["posts/2734896333/index.html","a140f2d98b04684a576e3b1d02d26094"],["posts/2752169106/index.html","51f4c7e1fefac6a7364b57c6bade0556"],["posts/2799263488/index.html","aa9e4d637705bc17670bd1c06e7f042a"],["posts/2805694118/index.html","a87a8c9d9bae3bb0a7599e88e436431e"],["posts/2809571715/index.html","9061e24c8d8660a0e924b56876d5f3e3"],["posts/2822230423/index.html","bd69a0072c157c390ae1c4fced6c20d0"],["posts/2829333122/index.html","e0418967582c96e8f066219f753ed5ad"],["posts/2911923212/index.html","eb80c987a7f6ffdb40c924ed3a14558a"],["posts/2941880815/index.html","01a6cdd29569641f8bfbe57b3ded2ca3"],["posts/2950334112/index.html","b5e24503ebb1904235ea16907f426be4"],["posts/3019914405/index.html","d5b342b9d50ce21f7ffdd8f9c12811de"],["posts/3032366281/index.html","1472d108fe91d5aef6bfb7d9e898038b"],["posts/3040357134/index.html","4933222ec7c753408bdf99e7cbc35cd6"],["posts/305484621/index.html","7b3c9e787c49c9abdacd746fd56c8a25"],["posts/3083474169/index.html","1e3344cac1978c17011a38d159cd844a"],["posts/3111375079/index.html","9886e4c1878b829a9a1c60dd12f5348d"],["posts/3120185261/index.html","b5e3afa74f1744acc4699af0e9dcf33f"],["posts/316230277/index.html","47d9acf09a0ceab4c1f840907fc13ca1"],["posts/3175881014/index.html","55704368c85dfb788c0fd7304d0ac726"],["posts/3222622531/index.html","70f747819a642cabe54fa92177436660"],["posts/3247186509/index.html","1afc7c87e4a71badaaab17dc8f5fd0b0"],["posts/3269605707/index.html","9765c05e2d8e51085e4914e988aa48c8"],["posts/3291578070/index.html","2425940bc8b25e93abd673bbcd0b8770"],["posts/331752533/index.html","2adb185638d093479acc0736a903b6d2"],["posts/3321992673/index.html","57e83c2adb58f7e208f377df155c7c69"],["posts/335366821/index.html","4913207eae86b031f67c12cb8d27e335"],["posts/3356910090/index.html","36ff35b1487f81a2a35ac587b3b3f11b"],["posts/3417652955/index.html","87e9badfcf2c8010464cbb68c67fb476"],["posts/3444626340/index.html","c8a14eb13a0beab5cfb7318ebf0aae75"],["posts/3449402269/index.html","9ce524c26c2e15a81a7af03aad2d00fd"],["posts/345410188/index.html","78d48aa45e6f663ce3317b8d07c3acc1"],["posts/3461518355/index.html","0d4a845ee412c17bc24ea9ec22aa34ba"],["posts/352037321/index.html","68985b0a94fa0a5956e5ac3d9cbc9d0c"],["posts/3521618732/index.html","4d4ab4f88807a3bd906a31cfbe96963a"],["posts/3568552646/index.html","471ca6a8986a1bcda899fdef2763e6b0"],["posts/3603924376/index.html","7db6383d13c515c8ef78bdd80a559260"],["posts/3637847962/index.html","38d2c9ad75d0f86588b89fd9ce857872"],["posts/3642630198/index.html","2520ba20024fac0a74ef06804ed64cc4"],["posts/3653662258/index.html","cd1a4064473db511424f4d1b0b8d7fad"],["posts/3653716295/index.html","7243d47d03a41a56ba65816858d16e6b"],["posts/3657008967/index.html","cadde7c0ca0b72ec845fac5d8aa52ca2"],["posts/3668933172/index.html","f23847a46b3d4d27f4878a809233725b"],["posts/3695777215/index.html","2a14be87b3121c0d550077d56fcd830b"],["posts/3736599391/index.html","a4835eafc7aee0cae7e59f04ebad9f05"],["posts/3782208845/index.html","80238be98970baad6043011e9b19b30a"],["posts/3789971938/index.html","e757edf7d51289c549a4d9884366494c"],["posts/380519286/index.html","97d3fcc480383cff56e45db84c827811"],["posts/3873710624/index.html","4cd3dd0f6bd7888190bc16111d54868e"],["posts/3959327595/index.html","c871c127b4dd55f437e6fce842b0a55b"],["posts/3995512051/index.html","d2c9ab0cfabbfd67c155b6d4851772f6"],["posts/4088452183/index.html","0e7b884d41762372ded225914f9c0fc9"],["posts/4158690468/index.html","c50d5b3fe397b5759497872a4dd584ec"],["posts/4197961431/index.html","e3808f7b5651c8b7146afd033f07bf8c"],["posts/4205536912/index.html","810ff1aca0ecb43ac01129400bb6641b"],["posts/426338252/index.html","bb6a7e1fa41180fa908ed026a34b002f"],["posts/450254281/index.html","4bf285e4a8d1f2dfcc9f659b9d8e963d"],["posts/4891372/index.html","3f4fb9f77e4b7e2c55b8e7bca7eb45ac"],["posts/569337285/index.html","f155ea4694fb5cee37b06fb3aa8b079b"],["posts/570137885/index.html","2de49cf8131b263733af91ec0b64b529"],["posts/570888918/index.html","c5c158fd75e3510dd989df5ec4f68258"],["posts/582264328/index.html","c4584f6fe40dcd61ba8a23772ce99f0f"],["posts/632291273/index.html","c32fa13a0dea264cc9d1eff0b0d63773"],["posts/70687890/index.html","e25cdde3e6d86e243050828d058a54ca"],["posts/719322223/index.html","ec12df8d9fd5787aaa9fe81e71932185"],["posts/720539850/index.html","77b99ae1278d2fcb882d5f9bb8141d04"],["posts/786195243/index.html","0c9e73636c8b24b48266a6c662f67c91"],["posts/795474045/index.html","b439a3e3aee0371064ed1900dbdbbce7"],["posts/815861661/index.html","27ac30b929406ea302c749634662ef4c"],["posts/821259985/index.html","7a3901e8598c4ea7099ff36cf9eb58ca"],["posts/828223375/index.html","f108362b268a1c0a6b2c6c35854d7831"],["posts/887585917/index.html","81317281f074c38c77b41e67d9123809"],["posts/906436376/index.html","7d541b6e31b7cac97427581fe6ba63ab"],["posts/907824546/index.html","05d98abee2ea6d762568d262c716c55f"],["posts/927393529/index.html","1d7b4eee3fb47a59b23817ef372c96e7"],["posts/94443781/index.html","5d5ab5a70e63b57848f64c7d12a50dbb"],["tags/2014/index.html","efcefe645a23242d571d7a07b61de0a5"],["tags/AI/index.html","c51b8277666e637c2a6a234e62a18c79"],["tags/AOP/index.html","a02a47c1c031d93c73d95c7fd5760a6e"],["tags/AR/index.html","1c70a20937835468f680ee89f5927c07"],["tags/AssetBundle/index.html","c94baafebef9950e8e53c4e4e55c7601"],["tags/C/index.html","1d31c232b3b8d1af5a29ea66b98b7806"],["tags/CG/index.html","6ec95261a93e137270ab2f4bb373c25e"],["tags/CI/index.html","1f86816686d9228f230550ba96246e30"],["tags/CSharp/index.html","4d9ae2da0cf89b5ca10c3b28b653770b"],["tags/Docker/index.html","0cbc7b2c65b2761ea079959ebac73b60"],["tags/EF/index.html","6ec1c0ad50ee02828725bfd630d34e37"],["tags/ES6/index.html","29c49c2cf3e0f8991d28b28a5ea4cad9"],["tags/EasyAR/index.html","8d8de397a27ec15d5791f62c32767375"],["tags/Excel/index.html","9bcd19b6c77860e24fb3ffb5c745dedc"],["tags/FP/index.html","9b8146fda4c5c0bb821f490e1f0505b7"],["tags/Form/index.html","1a2228199f35e58fbf1f19a84726e2e4"],["tags/Git/index.html","2f4b0891ec42dbf4f95407fba08a48ce"],["tags/Github/index.html","06ffecbabefbefe71fd59b61284e6453"],["tags/HTML5/index.html","1e90a7ad18a4d7042bbe0e797cf73499"],["tags/HTTP/index.html","b0e3fbea64671d127e2b5ebb0a503616"],["tags/Hexo/index.html","79f36ee1214e0e9da93a2b2e5246867a"],["tags/HttpClient/index.html","422b7b1b4b0b52cf7e0fc3cabc5e57bf"],["tags/IDE/index.html","82c296ac46a4100e3252f9a0021f09fa"],["tags/JS/index.html","4155c43bd2a90cd8f7f453cb9fa5c010"],["tags/JSON/index.html","08159ef03e82fec02cc9f3a2ee8bfe75"],["tags/Jexus/index.html","cfd2744dedaac9d956064cd13710352b"],["tags/Kindle/index.html","fcfe121e3a8f65bc6ea1d976eec82ec1"],["tags/Lambda/index.html","a89e3dff5270611a9105639384dc72fa"],["tags/Linux/index.html","0128610ad49fe9f00ebf1fbf12a41453"],["tags/Logger/index.html","93a89848c91c6dcf51af29cb2f59a8a9"],["tags/Love2D/index.html","edfa0e544e0b3baaa2a5a586782213c6"],["tags/Lua/index.html","3cbed0ae489c6138b0bce452b87e99b4"],["tags/MMD/index.html","0fb188cf93faff4f47f350be9d325365"],["tags/MSBuild/index.html","1c0eaa1ad4ed14662015738989fc0194"],["tags/MVVM/index.html","2881ba633a7ae303f8e27e75df0ee89d"],["tags/MapReduce/index.html","61647afedf87a6b1ff8ea6d58af734f8"],["tags/Markdown/index.html","93d120439e086488c2cce3ab2ef157a2"],["tags/Mecanim/index.html","3e8112a8ca5f78a554207e3295a6e840"],["tags/Mono/index.html","bf40b64690b7848af37a0d931507e114"],["tags/NET-Core/index.html","da2af96e7b4d07773da5586d44d4554c"],["tags/NET/index.html","6da00bdf89b65b00ffbf3cb70e42ba3b"],["tags/OBJ/index.html","9f55d12717641ac50f5f6880a7cae9d3"],["tags/PWA/index.html","01ecdc331aa4729048e7d8abace851e0"],["tags/Python/index.html","6680d1c3264e1451eda3ce8f47e81b51"],["tags/RESTful/index.html","9b507fb6b8b076f24d0eaaf058fce04f"],["tags/RFC/index.html","23fdc880e322bf2aa00209e4dee37c1a"],["tags/RPG/index.html","de61a2786c10d24b6d590a55b430b1a5"],["tags/React/index.html","18c7d85b14c4e3c7a386ff17e1489348"],["tags/Redis/index.html","42567673f03ffad0c97b5191b1c32c8e"],["tags/SDL/index.html","a3000f56a3537da6ce4a1a38b2546885"],["tags/SQLite/index.html","782ef860417f68d9f21f89eefb695900"],["tags/SSE/index.html","1b6bae4cefaa3aa631941b0c0aea8183"],["tags/SVN/index.html","4b528bab9fc9fea751577dc5e5506c8d"],["tags/Script/index.html","746c59ecf628a9c9cfe4a5125c10a49a"],["tags/Shader/index.html","bc6b2dcd18fd8dc34516096bea06f28c"],["tags/Socket/index.html","4a4ebd26acfd7e263ad8485f97d51983"],["tags/Sonar/index.html","a90a07a768fa06a5ff867270386ef7e1"],["tags/SourceTree/index.html","42f6306c19275e5f919b89ca811d122c"],["tags/Sublime/index.html","d5ec79232c3dd51ff6863bde3b4e3588"],["tags/Trace/index.html","da739a6a2a1258458a2052811a22c98f"],["tags/Travis/index.html","a25165ea87cf8106bb5a7ace5c385c00"],["tags/Unity/index.html","d86ba7aba26b16c8b8c05cef8a472068"],["tags/Unity3D/index.html","5ebd8c19003024e18d2cf1dbc5b12096"],["tags/Unity3D/pages/2/index.html","0a35fa0c59cfcde816fd5a3dc41e52cc"],["tags/Unity3D/pages/3/index.html","dfbd6f175b33afe251b675af384173ab"],["tags/VSCode/index.html","04c2754528633133af2e4cc16412b0f7"],["tags/Visual-Studio/index.html","421356d66809d5ca28334c3833aa35bc"],["tags/Vue/index.html","5b1cc9a811f8635f85b095cc8bfc03c7"],["tags/Web/index.html","51c6acad6fff5175003a5d8023267b39"],["tags/WebApi/index.html","5dc7e02d16130248c2937dd3513ae664"],["tags/WebSocket/index.html","27cadc1ec2d1b15fd56a13278ed698b4"],["tags/Wechat/index.html","433eafaba70b3d42e2ef6d308ce76ea6"],["tags/Windows/index.html","3d7f5340611e344e98dca09570100d1b"],["tags/disunity/index.html","e103888ed37434dd7e6202328d95ee0a"],["tags/index.html","b46f4fec8d9ff666b45c2e6c08530375"],["tags/matplotlib/index.html","5591e7c4a075884cd08e027bdade4a9c"],["tags/uGUI/index.html","ebad986b445f4db3a556b2147294d29f"],["tags/一出好戏/index.html","45c4e9227715cbf68ff19f667fc72877"],["tags/七牛/index.html","519d144b61c3ae4bca02bef10a298296"],["tags/主从复制/index.html","5b7ebdce9bc41cfae20ac035e036f893"],["tags/事件/index.html","3a1e592f2c36682fa3fb667406fab0cc"],["tags/二维码/index.html","544bba31c5f85e5425df74715237cff3"],["tags/云音乐/index.html","55a3996d21942903c010f56f49acf2f0"],["tags/互联网/index.html","f76af8c9c95220c8990a832e45d062b2"],["tags/亲情/index.html","dce48b2e76ee705fe304f3ad6701dc56"],["tags/人文/index.html","53d0f0592594e789cd0176b978e47a68"],["tags/人生/index.html","5ea9a7020023d41427cb35302d002c7e"],["tags/仙剑奇侠传/index.html","4fcc1b2985751c8b2f1c9426f983f1da"],["tags/价值/index.html","0bd7f03f56574be31d5c44cbc88cddce"],["tags/优化/index.html","9f5c07ef8afb63ee1d017fb537e9e35d"],["tags/全智贤/index.html","16ca64da4800324cff9ea6d83e7832b0"],["tags/公众号/index.html","8a37f9b87dedd463c31750a916ce7553"],["tags/关卡系统/index.html","ddfd3f6a02573b9ce0d38b4333007335"],["tags/函数式编程/index.html","03b83340cbc25e1bdac5f7cfa28d9a60"],["tags/别离/index.html","22d14936036d9766c11856bc923238b1"],["tags/前任/index.html","00ee59a57c944c01287495436c6279a0"],["tags/前端/index.html","45e6d4bfcf5ef10a7b21733b771e9781"],["tags/剑指Offer/index.html","3dbb77b329f8d7af90401a8d1fde7fea"],["tags/加密/index.html","72ff817eaede6de995e55e5bd1ab4905"],["tags/动态加载/index.html","8e6845ab110b0b9623f37b3aaebac723"],["tags/动画/index.html","ba3edccb4a8798344d56c54bae95bfd5"],["tags/单机游戏/index.html","ca038fe687c1cbfb6fd06b6ad0d1b30b"],["tags/印度/index.html","cf91c78bf8dcee1bccc088f43c2e049a"],["tags/反编译/index.html","8c88aceeb4fcc739d1548bba22afa415"],["tags/同步/index.html","3d0537a72f27a1df69a62a1da68db714"],["tags/后端/index.html","977a261e8a15607b96578db0ec3d5dc9"],["tags/命令/index.html","ac7ff815ed0b88add5c396a58285ec61"],["tags/和平/index.html","fc3aa3b2d9290711ecc7ff36ed3fb82f"],["tags/响应式/index.html","adb1eda3bf364770d946c48cd74d97dc"],["tags/哲学/index.html","d19af5977ad30b27a20bbe2c924287b2"],["tags/回家/index.html","a6abd19be4f7a00eaf82a0902dd3a0fd"],["tags/回忆/index.html","49c9af12e3d50ef76ff18833e75cb9fc"],["tags/回首/index.html","483a53298e467ca3f08284a16e0bc2ef"],["tags/图床/index.html","e438b81e805faa96517bfb95728670c2"],["tags/图形/index.html","c2ff350f0030e1785bc6db1b3fe4ff45"],["tags/塔防/index.html","beefbc45fb1dbba1710e6785f5c9ebf6"],["tags/增强现实/index.html","2185026bd1c50b8836145881d136e611"],["tags/夏目漱石/index.html","5365405acae8492870428477f4c3eec2"],["tags/多线程/index.html","c56f44e11d5acffde043bb66dbf8e69b"],["tags/大护法/index.html","0e1f2bb4ddc83da742f3f07dcaa565f7"],["tags/委托/index.html","0ef120ad5e7fb359f0b09160fc4ea043"],["tags/孤独/index.html","78812650403a3988c30d68453b8067b6"],["tags/展望/index.html","0f7d7637de2bc664e35febcd024e29b4"],["tags/工作/index.html","856fb287270a4d616ecac474256966a8"],["tags/平凡/index.html","ba0d9589b5a18b0ead600337dea60778"],["tags/年华/index.html","cc1b4dfcfacc6021b7bcc8db447f37d5"],["tags/开源/index.html","55fdbba7294cd5e2b8050ea0518fbb1d"],["tags/异常/index.html","c868f1d1397c1fe1d52c4a0f624476a0"],["tags/异步/index.html","212e54645589bd75a6adb68249457b8b"],["tags/引擎/index.html","e589fa8ec612d7faca1c26188dc73380"],["tags/影评/index.html","b65929e2559446fd6824a2eea47240d5"],["tags/微信/index.html","cf5186628f69399758acfab9cea8fc0e"],["tags/微博/index.html","89b75230b1c2b07167c1771f44f20a9b"],["tags/心情/index.html","80b2a035f904772ec819bd437e08e369"],["tags/思维/index.html","a785f5289f3efbbca5d75ca37e64b071"],["tags/总结/index.html","bcdc427a2b2ce41aeaec99ac19e34eb8"],["tags/想法/index.html","40f4428e41330dd592378938d14bd01d"],["tags/感悟/index.html","22d00dd6a6567331642b77b46c4823f4"],["tags/成长/index.html","d96e51415b6a7e744d4cf1ec766a1f80"],["tags/我是猫/index.html","873077bbdaca95cc72b747ab360fa7c5"],["tags/扩展/index.html","629bb7cd45c7e6cee974c6aa908f703b"],["tags/扩展方法/index.html","b5edf3409054bc3ede735b1f642ab0cf"],["tags/技术/index.html","bf18aa829df34eb3f729081ed0e96399"],["tags/插件/index.html","3369e4dc40d278a6e5a54a1a514be702"],["tags/数字/index.html","16c31758fbf03bdf3006a8bc6796dd08"],["tags/数学/index.html","176f31332c30dbb8f3caed3e287f43df"],["tags/数据/index.html","d0e752bd08535f762604c0d68ede7415"],["tags/数据库/index.html","f6fc8f8bf584dca51975495d02901327"],["tags/文本分类/index.html","2bae78c9cf7fca29c5c6cdd61e2c1794"],["tags/无问西东/index.html","77ea81bd5f90aed7a23b59f7ecbd82ab"],["tags/日剧/index.html","243302794930031ba76a44a5f2e6551a"],["tags/日志/index.html","da7ae1f7ea11b25d24902e4f14b2e8d1"],["tags/日本文学/index.html","e8e4cbeff375e964893a9cfec7c73f3d"],["tags/时区/index.html","0b719da59977efe238b58fe749f99dfa"],["tags/时间/index.html","77e16a1ddc78df6062ab0920f5fbcb10"],["tags/服务器/index.html","5b890eecdec83a832b38b893d7de92f4"],["tags/朝圣/index.html","8f9ecc1e55c98185533c8906c030484d"],["tags/朴素贝叶斯/index.html","7400aa04afa4aad3ae703dd47d4d03ff"],["tags/架构/index.html","ea2c45c931bab2e895cbeaaee710b1e7"],["tags/校验/index.html","c7fd22e86d2b810afe0df32c8ab1d605"],["tags/格式/index.html","badf84d3af8a91522b6db395663660a8"],["tags/格式化/index.html","ad6981c84b3703ad8cf27c3d3de09f96"],["tags/梦想/index.html","315dccdac4d99a3b59111aab46b4cd90"],["tags/概率/index.html","a7984d7577ea8a0bf90563c4b56c1a84"],["tags/模板/index.html","b37f7a07fcafe9805b9e45b224c843cd"],["tags/毕业/index.html","433f70fab4d23d29643113b8b9ee3b30"],["tags/毕业季/index.html","e491124420ce8a8590c5ed69d8adc0c8"],["tags/消息/index.html","9683c30c5b25ac44f00794deca427642"],["tags/游戏/index.html","7580e038f2f8cd651f85f25ff8f0315a"],["tags/游戏/pages/2/index.html","07f5c791dd36c2453a657bf437f0622d"],["tags/游戏开发/index.html","be230b260c5f6ab7d1fa7a436d27d275"],["tags/游戏引擎/index.html","f2250cc55abed800fd31c77d8d4d44b7"],["tags/爱情/index.html","6a073b9e925ea24bb787f3ff27c03d06"],["tags/版本控制/index.html","2b6a6a3cd6da8d1ee563a740bc5140a9"],["tags/版权/index.html","eaaf9244d2da0806c18a8cd3b8dd76c0"],["tags/特性/index.html","1b20543a8a947260efbd0b845c1646c5"],["tags/状态/index.html","4eebd9d39b35cac76c580ef0212ffb66"],["tags/现实/index.html","61589f5afbe1b2a05c1620647c149da2"],["tags/生活/index.html","76f14109a85bc858d90919c2e34e3373"],["tags/电影/index.html","e80662cc2037846949bfda583eeb83b5"],["tags/画家/index.html","6b92e649786d5f186d82772e12f3e5d7"],["tags/知识共享/index.html","706d76d3db89a64b0e83fc205a0a5b48"],["tags/矫情/index.html","2cc434678812937d6e5bfcd10f8a1e00"],["tags/程序员/index.html","38e75c96f98cd925e9f2954123779eaa"],["tags/穹之扉/index.html","9e94af39a7e55bf5b2dd37559f614b57"],["tags/穿搭/index.html","84b707cc23fbd99489e9cd7bbc4fbed5"],["tags/童话/index.html","2c675e2f08a405544aa0668b765b5bb4"],["tags/笔记/index.html","33272ab2dc3acf81db8c8784cb8d8e57"],["tags/算法/index.html","bdeeb2d80bc1d42d91d17192facf70b1"],["tags/米花之味/index.html","b99da7d21b6b4bb05336486fc56e32de"],["tags/缓存/index.html","d20ee1b7de9453d3fb8c27f6b627ac33"],["tags/编程/index.html","3a4810359b350f9dd2783d1dee82cac4"],["tags/编译/index.html","0c7a68c5f214dcfbc4b8e9194bc28abd"],["tags/编辑器/index.html","177203d906372daa826e43071298c14f"],["tags/网易/index.html","2097e1d02c795e916f360cbfdc7b7f6f"],["tags/脚本/index.html","f2f41f19485fd058fd008afaa17df078"],["tags/脚本语言/index.html","eb978b1239a8f3b77d4759fed352d8f2"],["tags/虚拟摇杆/index.html","216902f38f9a9d44c734f95c76f52115"],["tags/蛋炒饭/index.html","76b21c8cd24ad8566c2383ba62b887de"],["tags/装饰器/index.html","6f1e4272b7f50678fd0ea0c678a5bf87"],["tags/西安/index.html","f871888304d28cf2eeb36dd7479c3880"],["tags/计算机图形/index.html","b0b3667e84bcb208d3225bd71c459f40"],["tags/设计/index.html","80c83288e6a2383f429ffc2a983321ef"],["tags/设计模式/index.html","9f9e573f15d0acdbce4db45ca481b81e"],["tags/词云/index.html","274d649295ca2cd7a9bb56750e434e0e"],["tags/诗人/index.html","282bdf89de3af3eb6058d4e8cd718b8b"],["tags/语法/index.html","c0a3c004c5329f5cb25853f7bb9198fc"],["tags/请记住我/index.html","e55e35baed41ea9e8118dd40719f09a3"],["tags/读书/index.html","a4ee1e5a43c1f1a700230471eaddd917"],["tags/读写分离/index.html","4a6bbdff4500e7a19d80f215e77b7603"],["tags/调试/index.html","79b79420b2b78b079d681fa881da9ddd"],["tags/贝塞尔曲线/index.html","59255f9d8ca2d9b2920e43c09042d817"],["tags/贪吃蛇/index.html","2abd0a99f3b26bf1853c9d05b0a7852a"],["tags/资源提取/index.html","2da3741305d47d49d41d83da44d5beb4"],["tags/跨平台/index.html","4430a1d978af8dada00c58b1916f61e8"],["tags/转盘/index.html","6710e5801009da54f4f76fb2e89574b0"],["tags/通信/index.html","8bf230ca79bb7c674e0cc52b952cb1ce"],["tags/邪不压正/index.html","1ed23818a7fb777ab9808e02fa26c096"],["tags/部署/index.html","8017f39565f5e7f58e008456410199dd"],["tags/重试/index.html","87b006e618f68284d72610bb98de2dff"],["tags/阅读/index.html","1026bc26763c576e330137f6bf6b27a1"],["tags/霍金/index.html","a8a5def5710393fa1db2d061a3583caf"],["tags/青春/index.html","611fcb6224c10d097c4fa7811c6e6b0c"],["tags/面试/index.html","6039cec5e8a05fecf03f7bd6cb47e1bf"],["tags/韩寒/index.html","0d5da0fbace8c658fefe20a6ce4fe594"],["tags/马尔克斯/index.html","2c4005e49d885ad353733fc1c5306c45"],["tags/黑客/index.html","f42e7d0a97b7c1c059098e4974953f73"],["wiki/index.html","243c75975c19bc077e4b9d899234b60c"],["works/index.html","0ef905db09c6639d47e8822c47f0054e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







