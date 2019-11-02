// var run_script = function(token){   
const jsdom = require("jsdom")
const { JSDOM } = jsdom;
const dom = new JSDOM();
window = dom.window;
document = window.document;
window.decodeURIComponent = decodeURIComponent;
// var token = "24d811778b514aebbca63180b195d1f4"
var R = [120, 85, -95, -84, 122, 38, -16, -53, -11, 16, 55, 3, 125, -29, 32, -128, -94, 77, 15, 106, -88, -100, -34, 88, 78, 105, -104, -90, -70, 90, -119, -28, -19, -47, -111, 117, -105, -62, -35, 2, -14, -32, 114, 23, -21, 25, -7, -92, 96, -103, 126, 112, -113, -65, -109, -44, 47, 48, 86, 75, 62, -26, 72, -56, -27, 66, -42, 63, 14, 92, 59, -101, 19, -33, 12, -18, -126, -50, -67, 42, 7, -60, -81, -93, -86, 40, -69, -37, 98, -63, -59, 108, 46, -45, 93, 102, 65, -79, 73, -23, -46, 37, -114, -15, 44, -54, 99, -10, 60, -96, 76, 26, 61, -107, 18, -116, -55, -40, 57, -76, -82, 45, 0, -112, -77, 29, 43, -30, 109, -91, -83, 107, 101, 81, -52, -71, 84, 36, -41, 68, 39, -75, -122, -6, 11, -80, -17, -74, -73, 35, 49, -49, -127, 80, 103, 79, -25, 52, -43, 56, 41, -61, -24, 17, -118, 115, -38, 8, -78, 33, -85, -106, 58, -98, -108, 94, 116, -125, -51, -9, 71, 82, 87, -115, 9, 69, -123, 123, -117, 113, -22, -124, -87, 64, 13, 21, -89, -2, -99, -97, 1, -4, 34, 20, 83, 119, 30, -12, -110, -66, 118, -48, 6, -36, 104, -58, -102, 97, 5, -20, 31, -72, 70, -39, 67, -68, -57, 110, 89, 51, 10, -120, 28, 111, 127, 22, -3, 54, 53, -1, 100, 74, 50, 91, 27, -31, -5, -64, 124, -121, 24, -13, 95, 121, -8, 4]
, C = 4
, X = 4
, O = 4
{
    // var e = [a("u3jyjjjXlujlfvfu"), i("f1jRjXjefv1yl1jljij4lbj4jif3jlf11bufe11buejXjyfuf1jXj4"), i("j3uRjlfejv1bfbj4fljfj3jy"), t("l1jljij4uujXffjyj4jXjijujlf11blbj4fljfj3jy"), o("lef3jRjijyfujlje1blbugu31buej4j3jljyfu"), a("lXfbjvjijyfujXjR"), o("ufuuu41buXj1jYjljefu1blfjlj11blbj4fljf1Rj3jy1beiej1yebeb"), o("ffjlj1jfj4"), t("ylvRvyyj3jvfylYyvgyugR3e"), i("fejef1jljljy"), o("j1jXjuf3"), a("lul1u3uiuyufu4ullXlelul1u3lb"), o("jyeR"), t("luj4ffjfuRjXjyjX"), t("1feY1f"), o("u4jXjfuRjlu3jy1blbj4fljfj3jy1bei1yeb1yeb1ye3eeel"), r("jjfljyjefuj3jXjy"), t("jejXjyfujlfvfu1yjvjifejvuejXjujl"), t("uif1jejvj3ueuiuu"), o("ljull1luullvlXleuvuiuuull1"), t("llj1fljyfufl"), i("ujjijejlj1jXjXjg1blbj4fljfj3jy"), a("uijefuj3fjjluejifbfuj3jXjy"), t("yfggvjyj3vvyyugR3e"), t("uRjij4jffljy1bufjXfujvj3je"), i("uyjlfffe1bufjXfujvj3je1buRlu"), i("uejifbfuj3jXjylujlfvfu"), t("jilYj1l3ebjelvjulfeijlljjje1lljfeelujveulej3l1eljYlijgejlbj4uXefjRuyjyevuRjXu4e3fbugfiuYf1u3feuvfuufflujfjulffuufvuef3u1fYui"), i("uujljYjiljfl1bu4ufue1blejijyfe1buRjXjyjX"), r("uejXfbfbjlf1fbj4jifujl1bufjXfujvj3je1bu4j3jfjvfu"), a("lejljfjXjl1blbf1j3jyfu"), t("lejiffjifejujljl"), a("u1jifljvjiflfe1be3ee"), r("uejvjij4jgjuflfefujlf1"), i("uij1jijuj31buRlu1buejXjyjujljyfejlju1bu4j3jfjvfu"), t("u4fljej3juji1bu1f1j3jfjvfu"), o("lfj3jujl1bu4jifuj3jy"), o("jjjXjyfu1bjujlfujljefu1bjlf1f1jXf1"), o("ugjXfYfljgji1bufjXfujvj3je1blbf1ejuy"), o("uvfujRj4el1bj4jXjejifuj3jXjy1bfbf1jXfjj3jujlf1"), r("uuj3fjlv1blbj4flfe1blfjlj11blbj4jif3jlf1"), r("ljj4jijuj3jRj3f11blejef1j3fbfu"), a("ujj3j4jl1buujXffjyj4jXjijujlf11blbj4fljf1Rj3jy"), r("jXj1"), o("uijujXjuj11ylefuf1jljijR"), i("uRjljyj4jX"), r("jejij4j4lbjvjijyfujXjR"), t("lfjXj4jjf1jijR1buRjifujvjljRjifuj3jeji"), t("uejifujij4j3jyjiuff1jXflfb1bllfbjujifujl"), t("ulf1jife1bu1jXj4ju1bu3luue"), r("uujlfjjij4ljl1lvuefuf1j41yuujlfjjij4ljl1lvuefuf1j41yei"), t("ylvRvyyj3jvfyfggvjy3gg3i"), t("jijujuu1jljvjifjj3jXf1"), i("fbji"), t("u1j3fufefuf1jljijR1bljjlf1ji1blejlf1j3jj"), a("1vjjfljyjefuj3jXjy1v13fgf1jlfuflf1jy1beie1eeegfR131v13eg"), o("fbj3"), t("lujljyjejljyfu1bujluuy1bfbj4fljf1Rj3jy"), t("f1jljRjXfjjluejvj3j4ju"), o("ujjXj4fv1bee1bu1f1jXfffejlf11blbj4fljfj3jy"), i("flfejllbf1jXjff1jijR"), a("jvjXfefujyjijRjl"), t("fbjvjijyfujXjR1yj3jyjYjljefuuYfe"), o("lejvjXjejgffjifjjlujj4jifejv1ylejvjXjejgffjifjjlujj4jifejv"), i("f1jfj1ji1veiebe1141be1ebeu141beb141beb1yef13"), t("uijuj1j4jXjejglbj4fljfj3jy"), i("u1jijejgjff1jXfljyju"), r("uijfuejXjyfuf1jXj41yuijfuejXjyfuf1jXj4"), a("lbjvjXfujXuejljyfujlf1lbj4fljfj3jyei1yei1ye11ye1"), o("uffljyjflejljX"), o("feeR"), a("jujljejXjujllll1u3"), a("yj3jg3yjYRYeyvvv31yugR3e"), t("ylvRvyyj3jvfyj3jgby3YRvX"), a("eie1ee"), r("ffjlj1jfj41bjlfvjejlfbfuj3jXjy"), a("f1jl"), r("lfuRlbj4jif3jlf11yuXuelv"), t("efe1fbfv"), i("uifbfblfjXf1jgfefbjijejl"), t("uvj3jfjvj4j3jfjvfu"), t("jujXjefljRjljyfu"), r("l3jijyjujlfv1buRjljuj3ji1blbj4fljfj3jy"), r("ulleuy1bu4jifljyjejv1buRjXfYj3j4j4ji1blbj4fljfj3jy"), r("efebfbfv1b1fuif1j3jij41f"), r("j3jyjYjljefuuYfe"), r("u4jXjRji"), r("u1j3fuuejXjRjlfuuijfjljyfu"), t("uejij4j3j1f1j3"), a("u1jXjXjgjRjijy1buXj4ju1blefuf3j4jl"), i("fejlfefej3jXjylefujXf1jijfjl"), i("llfujXfbj3ji"), r("jejXjRfbj3j4jllejvjijujlf1"), r("jlfejejifbjl"), t("lejef1jXj4j4j1jif1"), a("lfj3jyjujXff"), o("y33Ygjyug3Yj"), i("ugjifefbjlf1fejgf31blbjifefeffjXf1ju1buRjijyjijfjlf1"), a("uRj3jyjfu4j3ll1Rulfvfuu1"), o("jfjlfu1bfef3fefujljR1bjejXj4jXf1fe1bjlfvjejlfbfuj3jXjy"), a("lejgf3fbjl1yuujlfujljefuj3jXjy"), a("ujj3j4jlu4jij11bfbj4fljfj3jy"), o("jyfbuilbu31blbj4fljfj3jy"), r("jyjXfulXjlfvj3fefulXjvjXfefu"), t("e1ju"), r("uijefuj3fjjllvuXj1jYjljefu"), o("uujXfufljR"), t("lbuuuj1Rlvuejvjijyjfjl1bljj3jlffjlf1"), r("lbuRj3jyjfu4j3ll"), i("jejXj4jXf1uujlfbfujv"), i("uyjXjgj3ji1bleflj3fujl1buljyjij1j4jlf11blbj4fljfj3jy"), t("l1jljij4ljj3jujljX1yl1jljij4ljj3jujljX1vfujR131buijefuj3fjjllv1buejXjyfuf1jXj41b1veee11Rj1j3fu13"), t("uRjijfjyjlfujX"), a("uijujXj1jlulfvuRjijyueueuujlfujljefu"), o("lXe3efelelfvjYjujlfefvfvjulX"), o("ufjij1f1j3jXj4ji"), a("lbj4jif3j1j3j4j4"), o("jyjifjj3jfjifujXf1"), i("l1jijejvjijyji"), r("luff1buejljy1buRlu1buejXjyjujljyfejlju1bulfvfuf1ji1bu1jXj4ju"), a("liliuRj3jyj3uuu41blbj4fljfj3jy"), a("1ejjejeb"), a("jjj3j4j4l1jljefu")]
    //           , l = [o("eRjyflj4j4eg1bfbjifujveR1Xeg1bjujXjRjij3jyeR"), o("uujljjjiflj4fu1bu1f1jXfffejlf11buvjlj4fbjlf1"), o("ujf1jljyjejv1blejef1j3fbfu1buRlu"), i("yjYbvfyjYlgfyugR3e"), a("jljyjejXjujllll1u3"), t("lljRfbflfejv"), i("j3jefb"), r("ylvRvyyj3jvfyf3bYlyfvXvb"), o("jef1jljifujllbf1jXjff1jijR"), i("jRjXjyjXfefbjijejl"), r("u1flfufujXjylejvjijujXff"), i("u1jXjujXjyj31buRlu"), a("leluuiluu3uelXuul1uilf"), t("y3gg3iyugR3e"), r("jujXffjyj4jXjijullfbjujifujlf1"), a("uij4j3jljuj3fu1blbj4fljf1Ru3jy"), t("lbuuuj1bj3jyfujljff1jijujX1bjujX1blfjlj1ugj3fu"), o("fljyj3jjjXf1jRuXjjjjfejlfu"), o("jljyjejXjujllll1u3uejXjRfbjXjyjljyfu"), r("lbj3jejifeji"), t("uijujXj1jl1bujjijyjffejXjyjf1blefuju"), a("j1j3jyjuu1fljjjjjlf1"), r("uiljuf1blej3fujllejijjjlfuf31bfbj4fljfj3jy"), r("uXf1j1j3fu1buujXffjyj4jXjijujlf1"), t("jejXj4jXf1"), r("jvj3jujujljy"), r("j4jXjejij4lefujXf1jijfjl"), i("ufjXjXjfj4jl1blujij4jg1buljjjjjljefufe1blbj4fljfj3jy"), a("j3jyjujlfvjljuuuu1"), a("u4fljej3juji1bujjifv"), r("uijRjifYjXjyuRlbeeuujXffjyj4jXjijujlf1lbj4fljfj3jy"), i("jef1jljifujlu1fljjjjjlf1"), o("uejifefujlj4j4jif1"), t("j4j3jyjglbf1jXjff1jijR"), o("uejij4j3jjjXf1jyj3jijy1buju1"), i("lujvf1jljluuuvj3jfjvj4j3jfjvfu"), o("jef1jljifujllejvjijujlf1"), t("ufflj4j3jR"), a("uyf3fvu4jifljyjejvjlf1"), r("l3jXflluflj1jl1blbj4fljf1Rj3jy"), a("yjYlgfyugR3elXufu1e1eeeie1"), o("lelfuefuj41ylelfuefuj4"), a("ufjXjXjfj4jl1buljif1fujv1blbj4fljf1Rj3jy"), t("liliuujXffjyj4jXjiju1blbj4fljfj3jy"), r("uyjXf1fujXjy1bu3jujljyfuj3fuf31blejijjjl"), o("fbjif1fejlu3jyfu"), i("lej3jRfbj4jl1blbjifefe"), i("uejXj4jXjyjyji1buRlu"), r("fYjijgjX"), a("jfjlfulljyj3jjjXf1jRu4jXjejifuj3jXjy"), r("fejvjijujlf1lejXflf1jejl"), o("uujXffjyj4jXjijujlf1fe1bfbj4fljfj3jy"), i("j4jXjejifuj3jXjy"), i("uvjlf1jXjlfe1b1j1bufjljyjlf1jij4fe1bj4j3fjjl"), i("ffj3jyjujXff"), i("lejvjXffjejif1ju1bufjXfujvj3je"), r("ylgyYyyvgRYXyjYRYey3gg3iyugR3e"), o("ylvRvyyj3jvfyvYiv4yjYlgf"), o("ufj3jyjfjlf1"), a("l1jXjejguRjlj4fu1bllfbjujifujl"), t("lfj3jyjujXffujf1jijRjl"), t("jljyjij1j4jlljjlf1fujlfvuifufuf1j3j1uif1f1jif3"), t("ugjijefefuuXjyjl"), t("jifufuf1j3j1flfujl1bfjjljee11bjifufuf1ljjlf1fujlfveg1bfjjif1f3j3jyjf1bfjjljee11bfjjif1f3j3jylujlfvuejXjXf1juj3jyjifujleg1bfljyj3jjjXf1jR1bfjjljee11bfljyj3jjjXf1jRuXjjjjfejlfueg1bfjjXj3ju1bjRjij3jy1v131bfg1b1b1bfjjif1f3j3jylujlfvuejXjXf1juj3jyjifujl1beR1bjifufuf1ljjlf1fujlfv1b1g1bfljyj3jjjXf1jRuXjjjjfejlfueg1b1b1bjfj4lXlbjXfej3fuj3jXjy1beR1bfjjljeeu1vjifufuf1ljjlf1fujlfv141beb141bei13eg1bfR"), a("lbjlf1fbjlfuflji"), i("jXfbjljyuujifujij1jifejl"), a("jejijyfjjife"), i("j3ufjlfufujlf1lejef1j3fbfujij1j4jllbj4fljfj3jy"), r("u3jyjjjXf1jRjij41bl1jXjRjijy"), a("uyj3fuf1jX1blbuuuj1blbj4fljf1Ru3jy"), r("uRfefvjRj4e11ylvuRu4uvlululb"), t("ylvRvyyj3jvfy3gg3iyugR3e"), o("uylbu4jifefulbjifefe"), i("lujvf1jljluuujjijejl"), o("u4jifefulbjifefe"), t("eYeY"), o("fbjif1fejlujj4jXjifu"), i("ylvRvyyj3jvfy33Ygjyug3Yj"), i("eg1b"), i("jfjlfuuifufuf1j3j1u4jXjejifuj3jXjy"), a("fg1fjyjijRjl1feY"), a("uyf3jij4ji"), i("jyjXfulXjlfvj3fefulXjvjXfefujyjijRjl"), i("l41f"), o("ufujuiueul1blbj4fljfj3jy"), r("fljyjujljjj3jyjlju"), a("yj3jgbylYyvgyugR3e"), a("l41y"), a("uRjifuflf1ji1buRlu1blejef1j3fbfu1buejifbj3fujij4fe"), i("uif1j3jij41bu1j4jijejg"), i("ujjijyjflejXjyjf"), a("jRffue1bjyjgj1jijjjYjXf1ju1bfbjvfejfj4f31bjlfvfjfu1bfYfij3fl141byigRYb1bfufbjvfefu1XeY1Xfljvj1jffuj3je1yjRjX1Xj4jlfjfjji"), r("u1f1jijfjfjijujXjej3jX"), i("uvjif1jRjXjyf31bujj3f1jljjjXfv1blbj4fljfj3jy"), t("lbjij4jijejl1blejef1j3fbfu1buRlu"), o("uyjifuj3fjjl1buej4j3jljyfu"), r("flfejlf1uijfjljyfu"), a("liflj3jejgluj3jRjl1yliflj3jejgluj3jRjl"), i("jlfvfbjlf1j3jRjljyfujij41Rffjlj1jfj4"), t("uil1l1uil3lXu1llujujull1"), a("yvvgg3yj3y34yugvgRyugvYRy3gg3i"), t("uij4j3fbjif31blejljeflf1j3fuf31buejXjyfuf1jXj41bee"), a("lejef1j3fbfu1buRlu1bu1jXj4ju"), a("141b1fj1f1jXfffejlf1lbf1jXfb1feY"), i("luuuueuefuj41yluuuueuefuj4"), a("fejlj4jj"), i("u3jyjjjXu1jijejgjff1jXfljyju"), o("lbjijyjujX1blfjlj11blbj4fljfj3jy"), a("uvjijlfufujljyfejejvffjlj3j4jlf1"), i("fefbjijy"), i("uijefuj3fjjlu1jXf1jujlf1"), r("lujvf1jljluuu4j3jfjvfulejvjijujXff"), o("ebe1ebe1"), a("ebe1ebee"), a("ebe1ebeb"), r("ebe1ebei"), i("lflbu31buujlfujljefujXf11bei1yeu"), o("eg1bjlfvfbj3f1jlfeeR"), i("lujvf1jljluuuujif1jglejvjijujXff"), t("ulfvj3jj1bulfjjlf1f3ffjvjlf1jl"), o("u1jifufuj4jlj4jXjf1bufjijRjl1bu4jifljyjejvjlf1"), o("u3jRfbjijefu"), a("lju4ue1buRflj4fuj3jRjljuj3ji1blbj4fljfj3jy"), t("uijujXj1jl1buvjlj1f1jlff"), a("u1j4fljllefujijejgfe1bu3jyfefujij4j41buujlfujljefujXf1"), i("ffffffjRjRjRjRjRjRjRjRjRjRj4j4j3"), a("jvj3fefujXf1f3"), a("fejijyfe1Rfejlf1j3jj"), o("eieuefeeeie1elele1eeeujueueieujeuje3eieeelejjuejeveuuleuulevujelujelejjeevjjeij1je"), a("lbjifbf3f1flfe"), o("u1flfufujXjylujlfvfu"), a("ebe1eiei"), o("uifbfbllfb"), o("lbjif1jXjR1ylulj1bfbj4jif3jlf11bfbj4fljfj3jy"), a("uujljij4lbj4f3u4j3fjjl1bllfbjujifujl"), i("u4jXjvj3fu1buffljYjif1jifuj3"), i("ujl1uiufuRuluylulXleuvuiuuull1"), o("uijfjljyjef31buju1"), o("uRjijef1jXjRjljuj3jiujj4jifejvlbjifbjlf11yuRjijef1jXjRjljuj3jiujj4jifejvlbjifbjlf1"), a("1e1e1e"), t("lfjXf1juuejifbfuflf1jllv"), a("jfjlfuuejXjRfbflfujljulefuf3j4jl"), r("fbj4jifujjjXf1jR"), a("ebeiebel"), t("uif1jij1j3je1bluf3fbjlfejlfufuj3jyjf"), r("ebeiebej"), a("ebeiebee"), t("ylvRvyyj3jvfyugvYRylYyvg"), i("ebeiebeu"), r("ebeiebei"), r("ebeiebe1"), o("ebeiebeb"), r("ebeiebef"), r("u1flfufujXjyuvj3jfjvj4j3jfjvfu"), i("fjjlf1fujlfvuifufuf1j3j1lbjXj3jyfujlf1"), i("ebeiebev"), r("fujlfvfuu1jifejlj4j3jyjl"), t("1eebeje3"), t("jujXflj1j4jlluffj3fefu1blfjlj11blbj4fljfj3jy"), i("fljyjlfejejifbjl"), t("lujvfljyjujlf11buujifbuefuf1j41buylbuilbu31blbj4fljfj3jy"), a("u1jifujijyjf"), i("uuujugjij31Rleu1"), i("lejyjifb1bu3luue"), t("uujifujl"), i("uRj3jyj3j1jif1lbj4fljfj3jy"), o("jujljejXjujllll1u3uejXjRfbjXjyjljyfu"), o("uylblbj4jif3jlf1lejvjlj4j4"), o("uRle1bl1jljjjlf1jljyjejl1blejijyfe1blejlf1j3jj"), a("uvj3f1jijfj3jyjX1blejijyfe1bufu1"), o("fejlf1j3jj"), r("jfjlfuuejXjyfujlfvfu"), i("fljyj3jjjXf1jRe1jj"), i("uRjXjXj4u1jXf1jijy")]
    //           , u = [a(""), r("uff1jif3lujlfvfu"), a("fbjif1jljyfu"), o("ylg3g4yl34vj"), t("fbj4fljfj3jyfe"), t("uijujXj1jlulfvuRjijyuujlfujljefu"), a("ebebeieb"), a("ufjXjXjfj4jl1buljif1fujv1blbj4fljfj3jy"), o("ljjljlfuj4jl1blulj1buejXf1jl"), t("ebebebef"), t("ebebebeu"), o("ebebebe1"), o("ebebebee"), a("ebebebeb"), i("ebebebei"), r("lljyj3fuf31blbj4jif3jlf1"), a("lejgf3fbjl1blfjlj11blbj4fljfj3jy"), r("lfjlj1ugj3fu1Rj3jyfujljff1j3jlf1fujl1blbuuuj"), i("jfjufvj3jufbf3jvfvjuul"), i("u1jlj4j41buRlu"), a("ebebebev"), o("jfjlfuleflfbfbjXf1fujljuulfvfujljyfej3jXjyfe"), i("fejlfuluj3jRjl"), a("ebebebe3"), a("lejijjjllejljif1jejv"), a("11"), t("1u"), i("lljyj3fjjlf1fe"), o("1l"), a("1j"), i("1f"), i("eieieieb"), a("jfjlfu1bfbj4fljfj3jy1bfefuf1j3jyjf1bjlfvjejlfbfuj3jXjy"), o("lujvf1jljluulejvjijujXff"), o("1g"), o("14"), r("1R"), t("uif1jij1"), o("yvvgg3yj3y34yugvgRyfggvjylYyvg"), i("1y"), r("ujlllYullejvjif1jl"), a("1X"), t("eb"), r("ei"), o("e1"), i("ee"), o("eu"), a("yugggXylYyvglXufu1e1eeeie1")]
    //           , s = [o("el"), i("ej"), r("u3jyjijefuj3fjjluejifbfuj3jXjylujlfvfu"), t("ef"), r("lfulu1lYuluy1bu1f1jXfffejlf11bulfvfujljyfej3jXjy"), o("ev"), a("e3"), r("eY"), i("uuj3fjlv1bu1f1jXfffejlf11blbj4fljf1Ru3jy"), r("eg"), t("eR"), t("llfbj4jif31blbue"), t("jejijyfjjife1bjlfvjejlfbfuj3jXjy"), o("ui"), a("u1"), a("ue"), r("uu"), o("ul"), r("ylgyYyyvgRYXy33gvly3gg3i"), i("uj"), i("uvjif1f1j3jyjffujXjy"), t("uf"), i("uv"), a("u3"), a("uY"), o("ufjyjXjRjl1blejvjlj4j41bu3jyfujljff1jifuj3jXjy"), o("ug"), r("u4"), r("uR"), a("uy"), a("uX"), t("lb"), r("li"), a("l1"), r("le"), t("uyj3jijfjif1ji1blejXj4j3ju"), t("lu"), i("lejljjuej4j3jljyfu1blbj4fljfj3jy"), r("ll"), r("lj"), a("eieieiei"), i("lf"), o("lv"), o("l3"), r("lY"), i("ufjXfljuf31buXj4ju1blefuf3j4jl"), a("l4"), r("l1jXj1j4jXfv1bu4jifljyjejvjlf11blbj4fljfj3jy"), r("uRj3jef1jXfejXjjfu1buXjjjjj3jejl1be1ebeiee"), i("liliuRflfej3je"), t("ji"), t("ulflf1jXfefuj3j4jl"), o("j1"), t("f1jRjXjefv1yl1jljij4lbj4jif3jlf11bufe11buejXjyfuf1jXj41yei"), r("je"), t("lejef1j3fbfuj3jyjf1yuuj3jefuj3jXjyjif1f3"), r("ju"), o("yugggXylYyvg"), a("jl"), r("jj"), o("jf"), t("jv"), t("uRji1RuejXjyjjj3jf1yjejXjR1bfbj4fljfj3jy"), i("j3"), i("eiebeieb"), i("uejifefljij4"), t("jY"), i("jg"), o("j4"), o("jR"), a("jy"), o("jX"), r("fb"), a("eiebebev"), i("jefu"), t("jujXuyjXfuluf1jijejg"), r("fi"), o("fejlfuluj3jRjljXflfu"), a("yugvgRylYyvg1blbf1jX"), t("f1"), i("ufj3fejvji"), o("jfjlfuluj3jRjlfYjXjyjluXjjjjfejlfu"), a("fe"), r("eiebebel"), i("eiebebeu"), t("fu"), i("fl"), t("eiebebee"), t("fj"), o("eiebebei"), t("ff"), r("fv"), t("juf1jiffuif1f1jif3fe"), a("f3"), a("fY"), o("fg"), t("fR"), a("fy"), r("jjjXjyfu"), t("eiebebe3"), o("eRjyflj4j4eg1bfbjifujveR1Xeg1bjlfvfbj3f1jlfeeR"), t("lejvjlj4j41yllu3uvjlj4fbjlf1"), i("fujXuujifujilll1u4"), o("lfj3jyjujXfflujlfvfu"), i("j4jijyjffljijfjl"), a("jujX"), r("yugvgRy3gg3i1blbf1jX"), o("uvj3jfjvj4j3jfjvfulujlfvfu"), i("juj3fj"), t("uRjljyfllujlfvfu"), a("uiuXu41buRjljuj3ji1blbj4jif3j1jijejg1blbj4fljfj3jy"), i("uej3fuf1j3fv1bjXjyj4j3jyjl1bfbj4fljf1Rj3jy"), o("jlje"), t("uujlfejujljRjXjyji"), t("u3jyjijefuj3fjjlu1jXf1jujlf1"), t("l1jljij4lbj4jif3jlf1"), r("uvulu4u4uX"), o("141b1fjejXjujl1feY"), o("jljR"), r("jyfblujXjyjfj1fluijujuj3jy"), i("jef1jljifujlulj4jljRjljyfu"), r("fbjvjijyfujXjR"), a("uRle1blbuRj3jyjejvjX"), t("yjYlgfyugR3e"), r("jlfjjij4"), i("jlfv"), i("uuj3fjlv1bljuXuu1buvjlj4fbjlf11blbj4fljf1Rj3jy"), a("yj3jgbyfggvjyj3vvyyugR3e"), o("liflj3jejgluj3jRjluejvjljejguXj1jYjljefu1yliflj3jejgluj3jRjluejvjljejg1yei"), r("ujj4f3uXf1uuj3jl1bufjijRjlfe1blbj4fljfj3jy"), r("jifufujijejvlejvjijujlf1"), i("lbj4jif3uXjy1blbj4fljf1Rj3jy"), r("jfjlfuluj3jRjl"), i("ei1yebei"), r("u1f1jXjijuffjif3"), r("jjfb"), o("uij4jiffjif11buylbuilbu31bflfuj3j4fe"), t("ujjXf1fujl"), a("jvjifejvuejXjujl"), t("yj3jg3yjYRYeylYf3YyugR3e"), o("ulleuy1blejXjyjif11builbu3"), i("uvlbuujlfujljefu"), r("u1j3fujujljjjljyjujlf11bliflj3jejglejejijy"), t("u3ul1blujij11bfbj4fljfj3jy"), o("1f14"), t("u1flfufujXjyujjijejl"), t("jefbfluej4jifefe"), i("uejljyfuflf1f31bufjXfujvj3je"), t("uXjyj4j3jyjl1blefujXf1jijfjl1bfbj4fljf1Rj3jy"), i("lejijjjlf11bllfbjujifujl"), a("uRfefvjRj4e11yuuuXuRuujXjefljRjljyfu"), o("uljyjff1jifjjlf1fe1buRlu"), i("lej3j4fjjlf1j4j3jfjvfu1blbj4fljf1Ru3jy"), o("ufjXjXjfj4jl1bufjljif1fe1beb1yel1yeeee1yeb"), o("uej3fuf1j3fv1bu3ueui1buej4j3jljyfu"), t("jij4fbjvjij1jlfuj3je"), t("ljuujXffjyj4jXjijujlf1"), a("ylvRvyyj3jvfyjYlgfyugR3e"), o("jifufuf1ljjlf1fujlfv"), o("ylYyvgyugR3e"), t("jejXjXjgj3jl"), o("1le1e1"), i("1le1ej"), o("uejljyfujiflf1"), t("eujfjijRjl"), a("l1jXjejgffjlj4j4"), o("u4jXjfuRjlu3jy1blbj4fljfj3jy1bei1yeb1yeb1ye3ejei"), t("uXjefujXfejvjifbjl1blefuf1jljijRj3jyjf1blejlf1fjj3jejlfe"), r("fujXufuRlulefuf1j3jyjf"), o("fujveR1X"), a("lefljRjifuf1jilbuuuj1bu1f1jXfffejlf11blbj4fljfj3jy"), a("lbuuuj1ylbjujjuefuf1j4"), r("jjj3j4j4lefuf3j4jl"), o("jYjl"), a("uijujXj1jl1buRj3jyjf1blefuju"), o("lujXf1jejvuvjlj4fbjlf1"), a("ujf1jijyjgj4j3jy1bufjXfujvj3je1buvjljifjf3"), o("ylvRvyyj3jvfyugggXylYyvg"), o("uvjif1jRjXjyf31blbj4fljf1Ru3jy"), o("ufj3jfj3"), i("fjei1yei"), i("ugj3jyjX1buRlu"), o("lej3jRuvjlj3"), t("uij4j3leleuXu4jXjfj3jy1bfbj4fljfj3jy"), r("l1jljij4lbj4jif3jlf11yl1jljij4lbj4jif3jlf11vfujR131buijefuj3fjjllv1buejXjyfuf1jXj41b1veee11Rj1j3fu13"), a("l3jijyjujlfv1blbuuuj1bljj3jlffjlf1"), r("uej3fuf1j3fv1bl1jljejlj3fjjlf11blbj4fljf1Rj3jy"), o("jRjij3"), o("fujXfb"), o("uijef1jXlbuuuj1ylbuuuj"), r("jejijyfjjife1bjifbj31bjlfvjejlfbfuj3jXjy"), o("u3jyjijefuj3fjjluejifbfuj3jXjy"), r("uRjljyfl"), r("fbf1jljej3fej3jXjy1bjRjljuj3fljRfb1bjjj4jXjifueg1bfjjif1f3j3jyjf1bfjjljee11bfjjif1f3j3jylujlfvuejXjXf1juj3jyjifujleg1bfjjXj3ju1bjRjij3jy1v131bfg1b1b1bjfj4lXujf1jijfuejXj4jXf11beR1bfjjljeeu1vfjjif1f3j3jylujlfvuejXjXf1juj3jyjifujl141beb141bei13eg1bfR"), r("lilie1ebeiee1bujj3f1jljjjXfv1blbj4fljfj3jy"), t("ufjXjXjfj4jl1bllfbjujifujl"), i("ylvRvyyj3jvfylgRY3yugY3i"), i("jluRflfej3jelbj4fljfj3jy1buuu4uRej"), r("lfjlj11buejXjRfbjXjyjljyfufe"), o("u1jij1f3j4jXjy1blujXjXj4u1jif1"), o("uejXjXffjXjy1bllfbjujifujl")];
    // 验证码轨迹加密方法，需要鼠标滑动轨迹
        var initData = function() {
            this.pointsStack = [],
            this.MAX_POINTS = 3,
            this.traceData = [],
            this.beginTime = new Date().getTime(),
            this.clickCounts = 0
        },
        reset = function() {
            var e = this.$store.state.countsOfVerifyError > h;
            e || (this.cleanPoints(),
            this.initData())
        },
        floatStatusChange = function() {
            var e = this.$store.state.countsOfVerifyError > h;
            if (!e) {
                var t = this.loadInfo;
                if (!(t && "done" !== t.status || this.$store.state.verifyStatus)) {
                    var n = t.data.front || "";
                    this.changeTipElText({
                        message: n
                    })
                }
            }
        },
        changeTipElText = function(e) {
            var t = e.message
            , n = void 0 === t ? "" : t
            , i = this.$store.state.config
            , r = this.langPkg
            , o = this.$parent.panelVisible
            , u = "float" === (this.mode || i.mode)
            , s = a.find(".yidun_tips__text", this.$el)
            , f = a.find(".yidun_tips__answer", this.$el)
            , j = a.find(".yidun_tips__point", this.$el);
            if (u && !o)
                a.text(s, r.clickButton),
                a.addClass(this.$el, "yidun--button"),
                a.addClass(f, "hide");
            else {
                var d = y.indexOf(i.lang) > -1;
                this.type === c.ICON_POINT ? d && a.addClass(f, "yidun_answer--r2l") : (d && (n = l.reverse(n)),
                a.text(j, n.replace(/./g, ' "$&"'))),
                a.text(s, r.clickInTurn),
                a.delClass(f, "hide"),
                a.delClass(this.$el, "yidun--button")
            }
        },
        changeLoadStatus = function(e) {
            var t = this
            , n = e.status
            , i = e.data;
            switch (n) {
            case "loading":
                if (i) {
                    var r = a.find(".yidun_bg-img", this.$el)
                    , o = a.find(".yidun_tips__img", this.$el)
                    , l = this.$store
                    , u = l.commit
                    , s = l.state
                    , f = S.image({
                        url: i.bg,
                        timeout: s.config.timeout,
                        onTryError: T(s.config, {
                            token: i.token
                        })
                    });
                    f.then(function(e) {
                        t._isMounted && (r.src = e.src,
                        t.type === c.ICON_POINT && (o.src = e.src),
                        u(b, {
                            status: "done",
                            data: i
                        }))
                    })["catch"](function(e) {
                        if (t._isMounted) {
                            var n = Object.assign({}, e.data, {
                                token: i.token
                            });
                            u(b, {
                                status: "fail"
                            }),
                            u(g, {
                                name: "onError",
                                args: [new m(_,e.message,n)]
                            })
                        }
                    })
                }
                break;
            case "done":
                var j = i.front || "";
                this.MAX_POINTS = this.type === c.ICON_POINT ? 3 : j.length,
                this.changeTipElText({
                    message: j
                })
            }
        },
        onMouseUp = function(e) {
            var t = this.drag;
            if ("dragend" === t.status)
                return void Object.assign(t, {
                    beginTime: 0
                });
            Object.assign(t, S);
            var n = a.sample(this.traceData, s)
              , i = this.$store.state.token
              , r = h(y(i, parseInt(this.$jigsaw.style.left, 10) / this.width * 100 + ""));
            this.onVerifyCaptcha({
                data: JSON.stringify({
                    d: h(n.join(":")),
                    m: "",
                    p: r,
                    ext: h(y(i, this.mouseDownCounts + "," + this.traceData.length))
                })
            })
        },
        onClick = function(e, token) {
            var t = this
            , n = 0 > 5;
            if (!n) {
                this.clickCounts++;
                // var i = this.$bgImg.getBoundingClientRect()
                var r = 939
                , o = 122;
                this.pointsStack.length || (this.beginTime = (new Date()).getTime());
                var a = this.pointsStack.slice(-1)[0];
                // return a && e.target === a.el && !this.$store.state.verifyStatus ? void l.raf(function() {
                    return void addPoint({
                        left: e.clientX,
                        top: e.clientY
                    }, token)

            }
        },
        trackMoving = function(e, token) {
            if (this.beginTime) {
            // if (true) {
                // var t = this.$bgImg.getBoundingClientRect()
                var n = 939
                , i = 122
                , r = f_(token, [Math.round(e.clientX), Math.round(e.clientY), (new Date()).getTime() - this.beginTime] + "");
                this.traceData.push(r)
            }
        },
        addPoint = function(e, token) {
            var t = e.left
            , n = e.top;
            this.pointsStack.length || token;
            var i = this.pointsStack.length + 1;
            if (!(i > this.MAX_POINTS)) {
                // var r = document.createElement("div");
                // r.className = "yidun_icon-point yidun_point-" + i,
                // a.css(r, "left: " + (t - 10) + "px; top: " + (n - 25) + "px;"),
                // this.$bgImg.appendChild(r),
                this.pointsStack.push({
                    // el: r,
                    coord: f_(token, [Math.round(t), Math.round(n), (new Date()).getTime() - this.beginTime] + "")
                })
                // shouldVerifyCaptcha()
                // console.log(this.pointsStack)
            }
        },
        shouldVerifyCaptcha = function(token) {
            var e = this.pointsStack;
            if (e.length === this.MAX_POINTS) {
                var t = e.map(function(e) {
                    return e.coord
                })
                , n = this.traceData;
                return {
                    data: {
                        d: "",
                        m: B(sample(n, 50).join(":")),
                        p: B(t.join(":")),
                        ext: B(n_(token, this.clickCounts + "," + n.length))
                    }
                }
            }
        },
        n_ = function(e, t) {
            function n(e, t) {
                return e.charCodeAt(Math.floor(t % e.length))
            }
            function i(e, t) {
                return t.split("").map(function(t, i) {
                    return t.charCodeAt(0) ^ n(e, i)
                })
            }
            return t = i(e, t),
            _(t)
        },
        cleanPoints = function() {
            for (var e; e = this.pointsStack.pop(); )
                this.$bgImg.removeChild(e.el)
        },
        sample = function(e, t) {
            var n = e.length;
            if (n <= t)
                return e;
            for (var i = [], r = 0, o = 0; o < n; o++)
                o >= r * (n - 1) / (t - 1) && (i.push(e[o]),
                r += 1);
            return i
        },
        __toByte = function(e) {
            function t(t) {
                return e.apply(this, arguments)
            }
            return t.toString = function() {
                return e.toString()
            }
            ,
            t
        }(function(e) {
            if (e < -128)
                return __toByte(128 - (-128 - e));
            if (e >= -128 && e <= 127)
                return e;
            if (e > 127)
                return __toByte(-129 + e - 127);
            throw new Error("1001")
        });
        function f_(e, t) {
            function n(e, t) {
                return e.charCodeAt(Math.floor(t % e.length))
            }
            function i(e, t) {
                return t.split("").map(function(t, i) {
                    return t.charCodeAt(0) ^ n(e, i)
                })
            }
            return t = i(e, t),
            _(t)
        }
        var i = function(e, t) {
            return __toByte(e + t)
        }
          , r = function(e, t) {
            if (null == e)
                return null;
            if (null == t)
                return e;
            for (var n = [], r = t.length, o = 0, a = e.length; o < a; o++)
                n[o] = i(e[o], t[o % r]);
            return n
        }
          , o = function(e, t) {
            return e = __toByte(e),
            t = __toByte(t),
            __toByte(e ^ t)
        }
          , a = function(e, t) {
            if (null == e || null == t || e.length != t.length)
                return e;
            for (var n = [], i = e.length, r = 0, a = i; r < a; r++)
                n[r] = o(e[r], t[r]);
            return n
        }
          , l = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
          , u = function(e) {
            var t = [];
            return t.push(l[e >>> 4 & 15]),
            t.push(l[15 & e]),
            t.join("")
        }
          , s = function(e) {
            var t = e.length;
            if (null == e || t < 0)
                return new String("");
            for (var n = [], i = 0; i < t; i++)
                n.push(u(e[i]));
            return n.join("")
        }
        f = function(e) {
            if (null == e || 0 == e.length)
                return [];
            for (var t = new String(e), n = [], i = t.length / 2, r = 0, o = 0; o < i; o++) {
                var a = parseInt(t.charAt(r++), 16) << 4
                  , l = parseInt(t.charAt(r++), 16);
                n[o] = __toByte(a + l)
            }
            return n
        }
        j = function(e) {
            if (null == e || void 0 == e)
                return e;
            for (var t = encodeURIComponent(e), n = [], i = t.length, r = 0; r < i; r++)
                if ("%" == t.charAt(r)) {
                    if (!(r + 2 < i))
                        throw new Error("1009");
                    n.push(f(t.charAt(++r) + "" + t.charAt(++r))[0])
                } else
                    n.push(t.charCodeAt(r));
            return n
        }
        c = function(e) {
            var t = [];
            return t[0] = e >>> 24 & 255,
            t[1] = e >>> 16 & 255,
            t[2] = e >>> 8 & 255,
            t[3] = 255 & e,
            t
        }
        d = function(e) {
            var t = c(e);
            return s(t)
        }
        p = function(e, t, n) {
            var i = [];
            if (null == e || 0 == e.length)
                return i;
            if (e.length < n)
                throw new Error("1003");
            for (var r = 0; r < n; r++)
                i[r] = e[t + r];
            return i
        }
        h = function(e, t, n, i, r) {
            // if (typeof(e) === "string")
            //     e = e.split(",");
            if (null == e || 0 == e.length)
                return n;
            if (null == n)
                throw new Error("1004");
            if (e.length < r)
                throw new Error("1003");
            for (var o = 0; o < r; o++)
                n[i + o] = e[t + o];
            return n
        }
        y = function(e) {
            for (var t = [], n = 0; n < e; n++)
                t[n] = 0;
            return t
        }
        v = function(e) {
            return null == e || void 0 == e || "" == e
        }
        b = function() {
            return ["i", "/", "x", "1", "X", "g", "U", "0", "z", "7", "k", "8", "N", "+", "l", "C", "p", "O", "n", "P", "r", "v", "6", "\\", "q", "u", "2", "G", "j", "9", "H", "R", "c", "w", "T", "Y", "Z", "4", "b", "f", "S", "J", "B", "h", "a", "W", "s", "t", "A", "e", "o", "M", "I", "E", "Q", "5", "m", "D", "d", "V", "F", "L", "K", "y"]
        }
        g = function() {
            return "3"
        }
        m = function(e, t, n) {
            var i, r, o, a = b(), l = g(), u = [];
            for (let ___index = 0; ___index < e.length; ___index++) {
                const element = e[___index];
                if (element === ","){
                    e.splice(___index, 1)
                }
                else if (element === "-"){
                    e.splice(___index, 1)
                }
            }
            if (1 == n)
                i = parseInt(e[t]),
                r = 0,
                o = 0,
                u.push(a[i >>> 2 & 63]),
                u.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
                u.push(l),
                u.push(l);
            else if (2 == n)
                i = parseInt(e[t]),
                r = parseInt(e[t + 1]),
                o = 0,
                u.push(a[i >>> 2 & 63]),
                u.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
                u.push(a[(r << 2 & 60) + (o >>> 6 & 3)]),
                u.push(l);
            else {
                if (3 != n)
                    throw new Error("1010");
                i = parseInt(e[t]),
                r = parseInt(e[t + 1]),
                o = parseInt(e[t + 2]),
                u.push(a[i >>> 2 & 63]),
                u.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
                u.push(a[(r << 2 & 60) + (o >>> 6 & 3)]),
                u.push(a[63 & o])
            }
            // console.log(u)
            return u.join("")
        }
        _ = function(e) {
            if (null == e || void 0 == e)
                return null;
            if (0 == e.length)
                return "";
            var t = 3;
            try {
                for (var n = [], i = 0; i < e.length; ) {
                    if (!(i + t <= e.length)) {
                        n.push(m(e, i, e.length - i));
                        break
                    }
                    n.push(m(e, i, t)),
                    i += t
                }
                return n.join("")
            } catch (r) {
                throw new Error("1010")
            }
        }
        onVerify = function(t, n) {
            if (t) {
                var i = t.data;
                if (i && i.counts > R) {
                    var r = new m(_,"verify failed more then " + R + " times--" + t.message,Object.assign({
                        token: i.token
                    }, t.data));
                    return void S(r, e)
                }
                return void (t.code !== _ && S(t, e))
            }
            var o = n.validate;
            X(e.element, o)
        }


// 二次加密方法
        // $方法中s的值为get_id请求的fp值
{
    R = [120, 85, -95, -84, 122, 38, -16, -53, -11, 16, 55, 3, 125, -29, 32, -128, -94, 77, 15, 106, -88, -100, -34, 88, 78, 105, -104, -90, -70, 90, -119, -28, -19, -47, -111, 117, -105, -62, -35, 2, -14, -32, 114, 23, -21, 25, -7, -92, 96, -103, 126, 112, -113, -65, -109, -44, 47, 48, 86, 75, 62, -26, 72, -56, -27, 66, -42, 63, 14, 92, 59, -101, 19, -33, 12, -18, -126, -50, -67, 42, 7, -60, -81, -93, -86, 40, -69, -37, 98, -63, -59, 108, 46, -45, 93, 102, 65, -79, 73, -23, -46, 37, -114, -15, 44, -54, 99, -10, 60, -96, 76, 26, 61, -107, 18, -116, -55, -40, 57, -76, -82, 45, 0, -112, -77, 29, 43, -30, 109, -91, -83, 107, 101, 81, -52, -71, 84, 36, -41, 68, 39, -75, -122, -6, 11, -80, -17, -74, -73, 35, 49, -49, -127, 80, 103, 79, -25, 52, -43, 56, 41, -61, -24, 17, -118, 115, -38, 8, -78, 33, -85, -106, 58, -98, -108, 94, 116, -125, -51, -9, 71, 82, 87, -115, 9, 69, -123, 123, -117, 113, -22, -124, -87, 64, 13, 21, -89, -2, -99, -97, 1, -4, 34, 20, 83, 119, 30, -12, -110, -66, 118, -48, 6, -36, 104, -58, -102, 97, 5, -20, 31, -72, 70, -39, 67, -68, -57, 110, 89, 51, 10, -120, 28, 111, 127, 22, -3, 54, 53, -1, 100, 74, 50, 91, 27, -31, -5, -64, 124, -121, 24, -13, 95, 121, -8, 4]
    , k = 4

    function o_(e, t, n) {
        return e || !t && new Error('Server error, "res" is not right.(' + n + ")") || t.error && new Error(t.error + ": " + t.msg + ".(" + n + ")") || null
    }
        var $ = function(e, t, s) {
            var i = t && t.data;
            if (e = o_(e, t, O),
            !(["success", "error"].indexOf(d) > -1)) {
                if (e || !i.result && f !== C.SMS) {
                    var r = e ? e.message : "Failed to verify captcha."
                      , a = e ? D : L;
                    return e = new M(a,r,{
                        url: O,
                        token: E,
                        type: v,
                        counts: p + 1
                    }),
                    n(y, {
                        verifyStatus: "error",
                        error: e
                    }),
                    n(b, {
                        counts: p + 1
                    }),
                    n(j, {
                        name: "onVerify",
                        args: [e]
                    }),
                    void u(e)
                }
                if (i.result) {
                    var l = N(B(i.validate + "::" + s));
                    // console.log(l)
                    u(null, t)
                    return l
                      // 二次加密方法调用
                    // n(y, {
                    //     verifyStatus: "success",
                    //     validate: i.validate
                    // }),
                    // console.log(l)
                    // n(j, {
                    //     name: "onVerify",
                    //     args: [null, {
                    //         validate: l
                    //     }]
                    // }),

                }
            }
        }

        N = function(e, t) {
            // e.exports = function(e) {
                var t = {
                    "\\": "-",
                    "/": "_",
                    "+": "."
                };
                return (e + "").replace(/[\\\/+]/g, function(e) {
                    return t[e]
                })
            // }
        }
        N_ = function(e) {
            if (null == e)
                return null;
            for (var t = [], n = 0, i = e.length; n < i; n++)
                t[n] = A(e[n]);
            return t
        }
        A = function(e) {
            var t = e >>> 4 & 15
              , n = 15 & e
              , i = 16 * t + n;
            return R[i]
        }
        var B = function(e) {
            var t = "14731382d816714fC59E47De5dA0C871D3F";
            if (null == t || void 0 == t)
                throw new Error("1008");
            null != e && void 0 != e || (e = "");
            var n = e + E(e)
            , i = j(n)
            , r = j(t)
            , o = Y(i, r);
            return _(o)
        }
        I = function(e) {
            var k = 4;
            if (null == e || void 0 == e || 0 == e.length)
                return y(k);
            var t = e.length
              , n = 0;
            n = t % k <= k - X ? k - t % k - X : 2 * k - t % k - X;
            var i = [];
            h(e, 0, i, 0, t);
            for (var r = 0; r < n; r++)
                i[t + r] = 0;
            var o = c(t);
            return h(o, 0, i, t + n, X),
            i
        }
        L = function(e, t) {
            if (null == e)
                return null;
            for (var n = __toByte(t), r = [], o = e.length, a = 0; a < o; a++)
                r.push(i(e[a], n));
            return r
        }
        M = function(e, t) {
            if (null == e)
                return null;
            for (var n = __toByte(t), i = [], r = e.length, a = 0; a < r; a++)
                i.push(o(e[a], n));
            return i
        }
        D = function(e) {
            var t = M(e, 56)
              , n = L(t, -40)
              , i = M(n, 103);
            return i
        }
        Y = function(e, t) {
            null == e && (e = []);
            var n = P();
            t = $_(t),
            t = a(t, $_(n)),
            t = $_(t);
            var i = t
              , o = I(e)
              , l = x(o)
              , u = [];
            h(n, 0, u, 0, O);
            for (var s = l.length, f = 0; f < s; f++) {
                var j = D(l[f])
                  , c = a(j, t)
                  , d = r(c, i);
                c = a(d, i);
                var p = N_(c);
                p = N_(p),
                h(p, 0, u, f * k + O, k),
                i = p
            }
            return u
        }
        x = function(e) {
            var k = 4;
            if (null == e || e.length % k != 0)
                throw new Error("1005");
            for (var t = [], n = 0, i = e.length / k, r = 0; r < i; r++) {
                t[r] = [];
                for (var o = 0; o < k; o++)
                    t[r][o] = e[n++]
            }
            return t
        }
        $_ = function(e) {
            var t = [];
            if (null == e || void 0 == e || 0 == e.length)
                return y(C);
            if (e.length >= C)
                return p(e, 0, C);
            for (var n = 0; n < C; n++)
                t[n] = e[n % e.length];
            return t
        }
        P = function() {
            for (var e = [], t = 0; t < O; t++) {
                var n = 256 * Math.random();
                n = Math.floor(n),
                e[t] = __toByte(n)
            }
            return e
        }
        T = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]

        w = function(e) {
            var t = 4294967295;
            if (null != e)
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    t = t >>> 8 ^ T[255 & (t ^ i)]
                }
            return d(4294967295 ^ t, 8)
        }
          , E = function(e) {
            return w(null == e ? [] : j(e))
        }
    }
    }
initData()
var data = {
    "data":{"result":true,
    "token":"e17deab0cb6f4aa586b9ff1c17217caa",
    "validate":"8gxMgwjCs36ABQyKiWXApPYj4qmeePZtNacdk+33/pWyyVk9xmp6Fe6etQ75HC/G/p4SqUksSPlt8+SstaDC3Eve43eTujSRtRjRkjwxQHocZk9m0U2rI1b7JHNp3GqdaQcE5WSD7He3uDInuGjxdnzlPbMVzAyfHd1SdP4JefI="},
    "error":0,
    "msg":"ok"
}
// var token = data["data"]["token"];
var fp = "cCIuQw1QkthDtbwcRJxZfYa5PiVtNXZEP0LDwwDKGEYS7nh9gCumjquKBTwg8K\KcY\EGPu35jryw2mYIAW8JDbD3RGucwwW+Vqp9OMijdYOxzmGToy78diq4PAOvzhWhI30UQEz7e7eMZ1U1BwUiAZ5aC5ersDSp7GwDfR/y7RP0cJ9:1568776519738"
mouse_event_move_1 = [{'clientX': 48, 'clientY': 3}, {'clientX': 58, 'clientY': 7}, {'clientX': 59, 'clientY': 7}, {'clientX': 67, 'clientY': 10}, {'clientX': 73, 'clientY': 13}, {'clientX': 76, 'clientY': 14}, {'clientX': 76, 'clientY': 14}, {'clientX': 85, 'clientY': 17}, {'clientX': 95, 'clientY': 21}, {'clientX': 96, 'clientY': 22}, {'clientX': 98, 'clientY': 23}, {'clientX': 101, 'clientY': 24}, {'clientX': 109, 'clientY': 27}, {'clientX': 119, 'clientY': 31}, {'clientX': 121, 'clientY': 32}, {'clientX': 126, 'clientY': 34}, {'clientX': 126, 'clientY': 34}, {'clientX': 133, 'clientY': 37}, {'clientX': 140, 'clientY': 40}, {'clientX': 144, 'clientY': 41}, {'clientX': 145, 'clientY': 42}, {'clientX': 155, 'clientY': 46}, {'clientX': 156, 'clientY': 46}, {'clientX': 163, 'clientY': 49}, {'clientX': 173, 'clientY': 53}, {'clientX': 173, 'clientY': 53}, {'clientX': 174, 'clientY': 53}, {'clientX': 180, 'clientY': 56}, {'clientX': 190, 'clientY': 60}, {'clientX': 197, 'clientY': 63}, {'clientX': 207, 'clientY': 67}, {'clientX': 208, 'clientY': 67}, {'clientX': 215, 'clientY': 70}, {'clientX': 224, 'clientY': 74}, {'clientX': 219, 'clientY': 71}, {'clientX': 211, 'clientY': 72}, {'clientX': 204, 'clientY': 72}, {'clientX': 197, 'clientY': 73}, {'clientX': 196, 'clientY': 73}, {'clientX': 186, 'clientY': 74}, {'clientX': 183, 'clientY': 74}, {'clientX': 181, 'clientY': 74}, {'clientX': 181, 'clientY': 74}, {'clientX': 171, 'clientY': 74}, {'clientX': 162, 'clientY': 75}, {'clientX': 162, 'clientY': 75}, {'clientX': 154, 'clientY': 75}, {'clientX': 148, 'clientY': 76}, {'clientX': 146, 'clientY': 76}, {'clientX': 145, 'clientY': 76}, {'clientX': 138, 'clientY': 76}, {'clientX': 137, 'clientY': 77}, {'clientX': 128, 'clientY': 77}, {'clientX': 120, 'clientY': 78}, {'clientX': 119, 'clientY': 78}, {'clientX': 114, 'clientY': 78}, {'clientX': 113, 'clientY': 78}, {'clientX': 111, 'clientY': 78}, {'clientX': 109, 'clientY': 78}, {'clientX': 106, 'clientY': 78}, {'clientX': 100, 'clientY': 79}, {'clientX': 97, 'clientY': 79}, {'clientX': 94, 'clientY': 79}, {'clientX': 84, 'clientY': 80}, {'clientX': 78, 'clientY': 80}, {'clientX': 77, 'clientY': 80}, {'clientX': 67, 'clientY': 81}, {'clientX': 58, 'clientY': 81}, {'clientX': 57, 'clientY': 81}, {'clientX': 50, 'clientY': 82}, {'clientX': 56, 'clientY': 81}, {'clientX': 64, 'clientY': 83}, {'clientX': 72, 'clientY': 84}, {'clientX': 78, 'clientY': 85}, {'clientX': 80, 'clientY': 85}, {'clientX': 86, 'clientY': 86}, {'clientX': 93, 'clientY': 87}, {'clientX': 101, 'clientY': 88}, {'clientX': 108, 'clientY': 89}, {'clientX': 114, 'clientY': 90}, {'clientX': 124, 'clientY': 91}, {'clientX': 128, 'clientY': 92}, {'clientX': 135, 'clientY': 93}, {'clientX': 143, 'clientY': 94}, {'clientX': 147, 'clientY': 95}, {'clientX': 154, 'clientY': 96}, {'clientX': 158, 'clientY': 96}, {'clientX': 158, 'clientY': 96}, {'clientX': 167, 'clientY': 97}, {'clientX': 167, 'clientY': 97}]

const click_list = [{
    'clientX': 992,
    'clientY': 219,
},
{
    'clientX': 1020,
    'clientY': 240,
},
{
    'clientX': 992,
    'clientY': 219,
},]
var run_track = function (track_move, click_track, token){
    for (let index = 0; index < track_move.length; index++) {
        trackMoving(track_move[index], token)
    }
    for (let click_num = 0; click_num < click_track.length; click_num++){
        const element = click_track[click_num];
        console.log(onClick(element, token))
    }
    return shouldVerifyCaptcha(token);
}
var token = data['data']['token']
console.log(token)
console.log(run_track(mouse_event_move_1, click_list, token));

// console.log($(null, data, fp))     // 验证通过后，与fp参数进行二次加密，方法调用！