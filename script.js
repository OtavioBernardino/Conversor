function calcular() {
    var medida = parseFloat(document.getElementById("regua").value);
    
    var valor = (medida*26.57);

    var resultado = document.getElementById("result");
    resultado.textContent = valor.toFixed(0)+" Litros";
    if (valor>21000){
        alert("Valor muito alto!");
    }
    else if (valor==0){
        alert("Valor inválido!");
    }


}

function calcular20() {

    let medidatanque = {46:210,47:214,48:219,49:224,50:229,51:233,52:238,53:243,54:248,55:252,56:257,57:262,58:267,59:271,60:276,61:281,62:286,63:290,64:295,65:300,66:305,67:311,68:316,69:321,70:326,71:332,72:337,73:342,74:347,75:353,76:358,77:363,78:368,79:374,80:379,81:384,82:389,83:395,84:400,85:405,86:410,87:415,88:420,89:425,90:430,91:435,92:440,93:445,94:450,95:455,96:460,97:465,98:470,99:475,100:480,101:485,102:490,103:495,104:500,105:507,106:513,107:520,108:527,109:533,110:540,111:547,112:553,113:560,114:567,115:573,116:580,117:587,118:593,119:600,120:607,121:613,122:620,123:627,124:633,125:640,126:647,127:653,128:660,129:667,130:673,131:680,132:687,133:693,134:700,135:706,136:712,137:719,138:725,139:731,140:737,141:744,142:750,143:756,144:762,145:769,146:775,147:781,148:787,149:794,150:800,151:807,152:813,153:820,154:827,155:833,156:840,157:847,158:853,159:860,160:867,161:873,162:880,163:887,164:893,165:900,166:907,167:914,168:921,169:929,170:936,171:943,172:950,173:957,174:964,175:971,176:979,177:986,178:993,179:1000,180:1008,181:1015,182:1023,183:1031,184:1038,185:1046,186:1054,187:1062,188:1069,189:1077,190:1085,191:1092,192:1100,193:1108,194:1115,195:1123,196:1131,197:1138,198:1146,199:1154,200:1162,201:1169,202:1177,203:1185,204:1192,205:1200,206:1208,207:1215,208:1223,209:1231,210:1238,211:1246,212:1254,213:1262,214:1269,215:1277,216:1285,217:1292,218:1300,219:1308,220:1315,221:1323,222:1331,223:1338,224:1346,225:1354,226:1362,227:1369,228:1377,229:1385,230:1392,231:1400,232:1408,233:1417,234:1425,235:1433,236:1442,237:1450,238:1458,239:1467,240:1475,241:1483,242:1492,243:1500,244:1508,245:1517,246:1525,247:1533,248:1542,249:1550,250:1558,251:1567,252:1575,253:1583,254:1592,255:1600,256:1609,257:1617,258:1626,259:1635,260:1643,261:1652,262:1661,263:1670,264:1678,265:1687,266:1696,267:1704,268:1713,269:1722,270:1730,271:1739,272:1748,273:1757,274:1765,275:1774,276:1783,277:1791,278:1800,279:1808,280:1817,281:1825,282:1833,283:1842,284:1850,285:1858,286:1867,287:1875,288:1883,289:1892,290:1900,291:1908,292:1917,293:1925,294:1933,295:1942,296:1950,297:1958,298:1967,299:1975,300:1983,301:1992,302:2000,303:2009,304:2018,305:2027,306:2036,307:2045,308:2055,309:2064,310:2073,311:2082,312:2091,313:2100,314:2109,315:2118,316:2127,317:2136,318:2145,319:2155,320:2164,321:2173,322:2182,323:2191,324:2200,325:2209,326:2218,327:2227,328:2236,329:2245,330:2255,331:2264,332:2273,333:2282,334:2291,335:2300,336:2309,337:2318,338:2327,339:2336,340:2345,341:2355,342:2364,343:2373,344:2382,345:2391,346:2400,347:2410,348:2419,349:2429,350:2438,351:2448,352:2457,353:2467,354:2476,355:2486,356:2495,357:2505,358:2514,359:2524,360:2533,361:2543,362:2552,363:2562,364:2571,365:2581,366:2590,367:2600,368:2610,369:2619,370:2629,371:2638,372:2648,373:2657,374:2667,375:2676,376:2686,377:2695,378:2705,379:2714,380:2724,381:2733,382:2743,383:2752,384:2762,385:2771,386:2781,387:2790,388:2800,389:2810,390:2820,391:2830,392:2840,393:2850,394:2860,395:2870,396:2880,397:2890,398:2900,399:2910,400:2920,401:2930,402:2940,403:2950,404:2960,405:2970,406:2980,407:2990,408:3000,409:3010,410:3020,411:3030,412:3040,413:3050,414:3060,415:3070,416:3080,417:3090,418:3100,419:3110,420:3120,421:3130,422:3140,423:3150,424:3160,425:3170,426:3180,427:3190,428:3200,429:3211,430:3221,431:3232,432:3242,433:3253,434:3263,435:3274,436:3284,437:3295,438:3305,439:3316,440:3326,441:3337,442:3347,443:3358,444:3368,445:3379,446:3389,447:3400,448:3411,449:3421,450:3432,451:3442,452:3453,453:3463,454:3474,455:3464,456:3495,457:3105,458:3116,459:3121,460:3537,461:3547,462:3558,463:3568,464:3579,465:3589,466:3600,467:3610,468:3620,469:3630,470:3640,471:3650,472:3660,473:3670,474:3680,475:3690,476:3700,477:3710,478:3720,479:3730,480:3740,481:3750,482:3760,483:3770,484:3780,485:3790,486:3800,487:3811,488:3821,489:3832,490:3842,491:3853,492:3863,493:3874,494:3884,495:3895,496:3905,497:3916,498:3926,499:3937,500:3947,501:3958,502:3968,503:3979,504:3989,505:4000,506:4011,507:4021,508:4032,509:4042,510:4053,511:4063,512:4074,513:4084,514:4095,515:4105,516:4116,517:4126,518:4137,519:4147,520:4158,521:4168,522:4179,523:4189,524:4200,525:4210,526:4220,527:4230,528:4240,529:4250,530:4260,531:4270,532:4280,533:4290,534:4300,535:4310,536:4320,537:4330,538:4340,539:4350,540:4360,541:4370,542:4380,543:4390,544:4400,545:4411,546:4422,547:4433,548:4444,549:4456,550:4467,551:4478,552:4489,553:4500,554:4511,555:4522,556:4533,557:4544,558:4556,559:4567,560:4578,561:4589,562:4600,563:4611,564:4622,565:4633,566:4644,567:4656,568:4667,569:4678,570:4689,571:4700,572:4711,573:4722,574:4733,575:4744,576:4756,577:4767,578:4778,579:4789,580:4800,581:4812,582:4824,583:4835,584:4847,585:4859,586:4871,587:4882,588:4894,589:4906,590:4918,591:4929,592:4941,593:4953,594:4965,595:4976,596:4988,597:5000,598:5011,599:5022,600:5033,601:5044,602:5056,603:5067,604:5078,605:5089,606:5100,607:5111,608:5122,609:5133,610:5144,611:5156,612:5167,613:5178,614:5189,615:5200,616:5211,617:5222,618:5233,619:5244,620:5256,621:5267,622:5278,623:5289,624:5300,625:5311,626:5322,627:5333,628:5344,629:5356,630:5367,631:5378,632:5389,633:5400,634:5411,635:5421,636:5432,637:5442,638:5453,639:5463,640:5474,641:5484,642:5495,643:5505,644:5516,645:5526,646:5537,647:5547,648:5558,649:5568,650:5579,651:5589,652:5600,653:5611,654:5622,655:5633,656:5644,657:5656,658:5667,659:5678,660:5689,661:5700,662:5711,663:5722,664:5733,665:5744,666:5756,667:5767,668:5778,669:5789,670:5800,671:5812,672:5824,673:5835,674:5847,675:5859,676:5871,677:5882,678:5894,679:5906,680:5918,681:5929,682:5941,683:5953,684:5965,685:5976,686:5988,687:6000,688:6012,689:6024,690:6035,691:6047,692:6059,693:6071,694:6082,695:6094,696:6106,697:6118,698:6129,699:6141,700:6153,701:6165,702:6176,703:6188,704:6200,705:6212,706:6225,707:6237,708:6250,709:6262,710:6275,711:6287,712:6300,713:6312,714:6325,715:6337,716:6350,717:6362,718:6375,719:6387,720:6400,721:6412,722:6424,723:6435,724:6447,725:6459,726:6471,727:6482,728:6494,729:6506,730:6518,731:6529,732:6541,733:6553,734:6565,735:6576,736:6588,737:6600,738:6612,739:6624,740:6635,741:6647,742:6659,743:6671,744:6682,745:6694,746:6706,747:6718,748:6729,749:6741,750:6753,751:6765,752:6776,753:6788,754:6800,755:6812,756:6824,757:6835,758:6847,759:6859,760:6871,761:6882,762:6894,763:6906,764:6918,765:6929,766:6941,767:6953,768:6965,769:6976,770:6988,771:7000,772:7012,773:7024,774:7035,775:7047,776:7059,777:7071,778:7082,779:7094,780:7108,781:7111,782:7129,783:7141,784:7153,785:7165,786:7176,787:7188,788:7200,789:7217,791:7233,791:7250,792:7267,793:7283,794:7300,795:7317,796:7333,797:7350,798:7367,799:7383,800:7400,801:7410,802:7419,803:7429,804:7438,805:7448,806:7457,807:7467,808:7476,809:7486,810:7495,811:7505,812:7514,813:7524,814:7533,815:7543,816:7552,817:7562,818:7571,819:7581,820:7590,821:7600,822:7612,823:7625,824:7637,825:7650,826:7662,827:7675,828:7687,829:7700,830:7712,831:7725,832:7737,833:7750,834:7762,835:7775,836:7787,837:7800,838:7812,839:7825,840:7837,841:7850,842:7862,843:7875,844:7887,845:7900,846:7912,847:7925,848:7937,849:7950,850:7962,851:7975,852:7987,853:8000,854:8012,855:8024,856:8035,857:8047,858:8059,859:8071,860:8082,861:8094,862:8106,863:8118,864:8129,865:8141,866:8153,867:8165,868:8176,869:8188,870:8200,871:8212,872:8225,873:8237,874:8250,875:8262,876:8275,877:8287,878:8300,879:8312,880:8335,881:8337,882:8350,883:8362,884:8375,885:8387,886:8400,887:8412,888:8425,889:8437,890:8450,891:8462,892:8475,893:8487,894:8500,895:8512,896:8525,897:8537,898:8550,899:8562,900:8575,901:8587,902:8600,903:8613,904:8627,905:8640,906:8653,907:8667,908:8680,909:8693,910:8707,911:8720,912:8733,913:8747,914:8760,915:8773,916:8787,917:8800,918:8812,919:8825,920:8837,921:8850,922:8862,923:8875,924:8887,925:8900,926:8912,927:8925,928:8937,929:8950,930:8962,931:8975,932:8987,933:9000,934:9013,935:9027,936:9040,937:9053,938:9067,939:9080,940:9093,941:9107,942:9120,943:9133,944:9147,945:9160,946:9173,947:9187,948:9200,949:9213,950:9227,951:9240,952:9253,953:9267,954:9280,955:9293,956:9307,957:9320,958:9333,959:9347,960:9360,961:9373,962:9387,963:9400,964:9412,965:9424,966:9435,967:9447,968:9459,969:9471,970:9482,971:9494,972:9506,973:9518,974:9529,975:9541,976:9553,977:9565,978:9576,979:9588,980:9600,981:9613,982:9627,983:9640,984:9653,985:9667,986:9680,987:9693,988:9707,989:9720,990:9733,991:9747,992:9760,993:9773,994:9787,995:9800,996:9813,997:9827,998:9840,999:9853,1000:9867,1001:9880,1002:9893,1003:9907,1004:9920,1005:9933,1006:9947,1007:9960,1008:9973,1009:9987,1010:10000,1011:10013,1012:10027,1013:10040,1014:10053,1015:10067,1016:10080,1017:10093,1018:10107,1019:10120,1020:10133,1021:10147,1022:10160,1023:10173,1024:10187,1025:10200,1026:10212,1027:10224,1028:10235,1029:10247,1030:10259,1031:10271,1032:10282,1033:10294,1034:10306,1035:10318,1036:10329,1037:10341,1038:10353,1039:10365,1040:10376,1041:10388,1042:10400,1043:10412,1044:10425,1045:10437,1046:10450,1047:10462,1048:10475,1049:10487,1050:10500,1051:10512,1052:10525,1053:10537,1054:10550,1055:10562,1056:10575,1057:10587,1058:10600,1059:10612,1060:10625,1061:10637,1062:10650,1063:10662,1064:10675,1065:10687,1066:10700,1067:10712,1068:10725,1069:10737,1070:10750,1071:10762,1072:10775,1073:10787,1074:10800,1075:10812,1076:10825,1077:10837,1078:10850,1079:10862,1080:10875,1081:10887,1082:10900,1083:10912,1084:10925,1085:10937,1086:10950,1087:10962,1088:10975,1089:10987,1090:11000,1091:11013,1092:11027,1093:11040,1094:11053,1095:11067,1096:11080,1097:11093,1098:11107,1099:11120,1100:11133,1101:11147,1102:11160,1103:11173,1104:11187,1105:11200,1106:11211,1107:11222,1108:11233,1109:11244,1110:11256,1111:11267,1112:11278,1113:11289,1114:11300,1115:11311,1116:11322,1117:11333,1118:11344,1119:11356,1120:11367,1121:11378,1122:11389,1123:11400,1124:11412,1125:11425,1126:11437,1127:11450,1128:11462,1129:11475,1130:11487,1131:11500,1132:11512,1133:11525,1134:11537,1135:11550,1136:11562,1137:11575,1138:11587,1139:11600,1140:11613,1141:11627,1142:11640,1143:11653,1144:11667,1145:11680,1146:11693,1147:11707,1148:11720,1149:11733,1150:11747,1151:11760,1152:11773,1153:11787,1154:11800,1155:11812,1156:11825,1157:11837,1158:11850,1159:11862,1160:11875,1161:11887,1162:11900,1163:11912,1164:11925,1165:11937,1166:11950,1167:11962,1168:11975,1169:11987,1170:12000,1171:12012,1172:12025,1173:12037,1174:12050,1175:12062,1176:12075,1177:12087,1178:12100,1179:12112,1180:12125,1181:12137,1182:12150,1183:12162,1184:12175,1185:12187,1186:12200,1187:12212,1188:12225,1189:12237,1190:12250,1191:12262,1192:12275,1193:12287,1194:12300,1195:12312,1196:12325,1197:12337,1198:12350,1199:12362,1200:12375,1201:12387,1202:12400,1203:12412,1204:12425,1205:12437,1206:12450,1207:12462,1208:12475,1209:12487,1210:12500,1211:12512,1212:12525,1213:12537,1214:12550,1215:12562,1216:12575,1217:12587,1218:12600,1219:12612,1220:12624,1221:12635,1222:12647,1223:12659,1224:12671,1225:12682,1226:12694,1227:12706,1228:12718,1229:12729,1230:12741,1231:12753,1232:12765,1233:12776,1234:12788,1235:12800,1236:12813,1237:12827,1238:12840,1239:12853,1240:12867,1241:12880,1288:13471,1289:13482,1290:13494,1291:13506,1292:13518,1293:13529,1294:13541,1295:13553,1296:13565,1297:13576,1298:13588,1299:13600,1300:13612,1301:13625,1302:13637,1303:13650,1304:13662,1305:13675,1306:13687,1307:13700,1308:13712,1309:13725,1310:13737,1311:13750,1312:13762,1313:13775,1314:13787,1315:13800,1316:13812,1317:13825,1318:13837,1319:13850,1320:13862,1321:13875,1322:13887,1323:13900,1324:13912,1325:13925,1326:13937,1327:13950,1328:13962,1329:13975,1330:13987,1331:14000,1332:14012,1333:14024,1334:14035,1335:14047,1336:14059,1337:14071,1338:14082,1339:14094,1340:14106,1341:14118,1342:14129,1343:14141,1344:14153,1345:14165,1346:14176,1347:14188,1348:14200,1349:14212,1350:14225,1351:14237,1352:14250,1353:14262,1354:14275,1355:14287,1356:14300,1357:14312,1358:14325,1359:14337,1360:14350,1361:14362,1362:14375,1363:14387,1364:14400,1365:14412,1366:14424,1367:14435,1368:14447,1369:14459,1370:14471,1371:14482,1372:14494,1373:14506,1374:14518,1375:14529,1376:14541,1377:14553,1378:14565,1379:14576,1380:14588,1381:14600,1382:14612,1383:14625,1384:14637,1385:14650,1386:14662,1387:14675,1388:14687,1389:14700,1390:14712,1391:14725,1392:14737,1393:14750,1394:14762,1395:14775,1396:14787,1397:14800,1398:14812,1399:14824,1400:14835,1401:14847,1402:14859,1403:14871,1404:14882,1405:14894,1406:14906,1407:14918,1408:14929,1409:14941,1410:14953,1411:14965,1412:14976,1413:14988,1414:15000,1415:15012,1416:15025,1417:15037,1418:15050,1419:15062,1420:15075,1421:15087,1422:15100,1423:15112,1424:15125,1425:15137,1426:15150,1427:15162,1428:15175,1429:15187,1430:1500,1431:15211,1432:15222,1433:15233,1434:15244,1435:15256,1436:15267,1437:15278,1438:15289,1439:15300,1440:15311,1441:15322,1442:15333,1443:15344,1444:15356,1445:15367,1446:15378,1447:15389,1448:15400,1449:15412,1450:15424,1451:15435,1452:15447,1453:15459,1454:15471,1455:15482,1456:15494,1457:15506,1458:15518,1459:15529,1460:15541,1461:15553,1462:15565,1463:15576,1464:15588,1465:15600,1466:15612,1467:15625,1468:15637,1469:15650,1470:15662,1471:15675,1472:15687,1473:15700,1474:15712,1475:15725,1476:15737,1477:15750,1478:15762,1479:15775,1480:15787,1481:15800,1482:15811,1483:15822,1484:15833,1485:15844,1486:15856,1487:15867,1488:15878,1489:15889,1490:15900,1491:15911,1492:15922,1493:15933,1494:15944,1495:15956,1496:15967,1497:15978,1498:15989,1499:16000,1500:16012,1501:16024,1502:16035,1503:16047,1504:16059,1505:16071,1506:16082,1507:16094,1508:16106,1509:16118,1510:16129,1511:16141,1512:16153,1513:16165,1514:16176,1515:16188,1516:16200,1517:16211,1518:16222,1519:16233,1520:16244,1521:16256,1522:16267,1523:16278,1524:16289,1525:16300,1526:16311,1527:16322,1528:16333,1529:16344,1530:16356,1531:16367,1532:16378,1533:16389,1534:16400,1535:16412,1536:16425,1537:16437,1538:16450,1539:16462,1540:16475,1541:16487,1542:16500,1543:16512,1544:16525,1545:16537,1546:16550,1547:16562,1548:16575,1549:16587,1550:16600,1551:16611,1552:16622,1553:16633,1554:16644,1555:16656,1556:16667,1557:16678,1558:16689,1559:16700,1560:16711,1561:16722,1562:16733,1563:16744,1564:16756,1565:16767,1566:16778,1567:16789,1568:16800,1569:16811,1570:16822,1571:16833,1572:16844,1573:16856,1574:16867,1575:16878,1576:16889,1577:16900,1578:16911,1579:16922,1580:16933,1581:16944,1582:16956,1583:16967,1584:16978,1585:16989,1586:17000,1587:17011,1588:17022,1589:17033,1590:17044,1591:17056,1592:17067,1593:17078,1594:17089,1595:17100,1596:17111,1597:17122,1598:17133,1599:17144,1600:17156,1601:17167,1602:17178,1603:17189,1604:17200,1605:17211,1606:17222,1607:17233,1608:17244,1609:17256,1610:17267,1611:17278,1612:17289,1613:17300,1614:17311,1615:17322,1616:17333,1617:17344,1618:17356,1619:17367,1620:17378,1621:17389,1622:17400,1623:17411,1624:17422,1625:17433,1626:17444,1627:17456,1628:17467,1629:17478,1630:17489,1631:17500,1632:17511,1633:17522,1634:17533,1635:17544,1636:17556,1637:17567,1638:17578,1639:17589,1640:17600,1641:17611,1642:17621,1643:17632,1644:17642,1645:17653,1646:17663,1647:17674,1648:17684,1649:17695,1650:17705,1651:17716,1652:17726,1653:17737,1654:17747,1655:17758,1656:17768,1657:1779,1658:17789,1659:17800,1660:17811,1661:17822,1662:17833,1663:17844,1664:17856,1665:17867,1666:17878,1667:17889,1668:17900,1669:17911,1670:17922,1671:17933,1672:17944,1673:17956,1674:17967,1675:17978,1676:17989,1677:18000,1678:18011,1679:18021,1680:18032,1681:18042,1682:18053,1683:18063,1684:18074,1685:18084,1686:18095,1687:18105,1688:18116,1689:18126,1690:18137,1691:18147,1692:18158,1693:18168,1694:18179,1695:18189,1696:18200,1697:18211,1698:18221,1699:18232,1700:18242,1701:18253,1702:18263,1703:18274,1704:18284,1705:18295,1706:18305,1707:18316,1708:18326,1709:18337,1710:18347,1711:18358,1712:18368,1713:18379,1714:18389,1715:18400,1716:18410,1717:18420,1718:18430,1719:18440,1720:18450,1721:18460,1722:18470,1723:18480,1724:18490,1725:18500,1726:18510,1727:18520,1728:18530,1729:18540,1730:18550,1731:18560,1732:18570,1733:18580,1734:15890,1735:15600,1736:18611,1737:18621,1738:18632,1739:18642,1740:18653,1741:18663,1742:18674,1743:18684,1744:18695,1745:18705,1746:18716,1747:18726,1748:18737,1749:18747,1750:18758,1751:18768,1752:18779,1753:18789,1754:18800,1755:18810,1756:18820,1757:18830,1758:18840,1759:18850,1760:18860,1761:18870,1762:18880,1763:18890,1764:18900,1765:18910,1766:18920,1767:18930,1768:18940,1769:18950,1770:18960,1771:18970,1772:18980,1773:18990,1774:19000,1775:19010,1776:19019,1777:19029,1778:19038,1779:19048,1780:19057,1781:19067,1782:19076,1783:19086,1784:19095,1785:19105,1786:19114,1787:19124,1788:19133,1789:19143,1790:19152,1791:19162,1792:19171,1793:19181,1794:19190,1795:19200,1796:19210,1797:19220,1798:19230,1799:19240,1800:19250,1801:19260,1802:19270,1803:19280,1804:19290,1805:19300,1806:19310,1807:19320,1808:19330,1809:19340,1810:19350,1811:19360,1812:19370,1813:19380,1814:19390,1815:19400,1816:19410,1817:19419,1818:19429,1819:19438,1820:19448,1821:19457,1822:19467,1823:19476,1824:19486,1825:19495,1826:19505,1827:19514,1828:19524,1829:19533,1830:19543,1831:19552,1832:19562,1833:19571,1834:19581,1835:19590,1836:19600,1837:19610,1838:19620,1839:19630,1840:19640,1841:19650,1842:19660,1843:19670,1844:19680,1845:19690,1846:19700,1847:19710,1848:19720,1849:19730,1850:19740,1851:19750,1852:19760,1853:19770,1854:19780,1855:19790,1856:19800,1857:19810,1858:19820,1859:19830,1860:19840,1861:19850,1862:19860,1863:19870,1864:19880,1865:19890,1866:19900,1867:19910,1868:19920,1869:19930,1870:19940,1871:19950,1872:19960,1873:19970,1874:19980,1875:19990,1876:20000,1877:20008,1878:20017,1879:20025,1880:20033,1881:20042,1882:20050,1883:20058,1884:20067,1885:20075,1886:20083,1887:20092,1888:20100,1889:20108,1890:20117,1891:20125,1892:20133,1893:20142,1894:20150,1895:20158,1896:20167,1897:20175,1898:20183,1899:20192,1900:20200,1901:20209,1902:20218,1903:20227,1904:20236,1905:20245,1906:20255,1907:20264,1908:20273,1909:20282,1910:20291,1911:20300,1912:20309,1913:20318,1914:20327,1915:20336,1916:20345,1917:20355,1918:20364,1919:20373,1920:20382,1921:20391,1922:20400,1923:20409,1924:20417,1925:20426,1926:20435,1927:20443,1928:20452,1929:20461,1930:20470,1931:20478,1932:20487,1933:20496,1934:20504,1935:20513,1936:20522,1937:20530,1938:20539,1939:20548,1940:20557,1941:20565,1942:20574,1943:20583,1944:20591,1945:20600,1946:20608,1947:20616,1948:20624,1949:20632,1950:20640,1951:20648,1952:20656,1953:20664,1954:20672,1955:20680,1956:20688,1957:20696,1958:20704,1959:20712,1960:20720,1961:20728,1962:20736,1963:20744,1964:20752,1965:20760,1966:20768,1967:20776,1968:20784,1969:20792,1970:20800,1971:20810,1972:20820,1973:20830,1974:20840,1975:20850,1976:20860,1977:200870,1978:200880,1979:20890,1980:20900,1981:20910,1982:20920,1983:20930,1984:20940,1985:20950,1986:20960,1987:20970,1988:20980,1989:20990,1990:21000,1991:21007,1992:21013,1993:21020,1994:21027,1995:21033,1996:21040,1997:21047,1998:21053,1999:21060,2000:21067,2001:21073,2002:21080,2003:21087,2004:21093,2005:21100,2006:21107,2007:21113,2008:21120,2009:21127,2010:21133,2011:21140,2012:21147,2013:21153,2014:21160,2015:21167,2016:21173,2017:21180,2018:21187,2019:21193,2020:21200,2021:21207,2022:21213,2023:21220,2024:21227,2025:21233,2026:21240,2027:21247,2028:21253,2029:21260,2030:21267,2031:21273,2032:21280,2033:21287,2034:21293,2035:21300,2036:21307,2037:21313,2038:21320,2039:21327,2040:21333,2041:21340,2042:21347,2043:21353,2044:21360,2045:21367,2046:21373,2047:21380,2048:21387,2049:21393,2050:21400,2051:21407,2052:21413,2053:21420,2054:21427,2055:21433,2056:21440,2057:21447,2058:21453,2059:21460,2060:21467,2061:21473,2062:21480,2063:21487,2064:21493,2065:21500,2066:21507,2067:21513,2068:21520,2069:21527,2070:21533,2071:21540,2072:21547,2073:21553,2074:21560,2075:21567,2076:21573,2077:21580,2078:21587,2079:21593,2080:21600,2081:21607,2082:21613,2083:21620,2084:21627,2085:21633,2086:21640,2087:21647,2088:21653,2089:21660,2090:21667,2091:21673,2092:21680,2093:21687,2094:21693,2095:21700,2096:21705,2097:21710,2098:21715,2099:21720,2100:21725,2101:21730,2102:21735,2103:21740,2104:21745,2105:21750,2106:21755,2107:21760,2108:21765,2109:21770,2110:21775,2111:21780,2112:21785,2113:21790,2114:21795,2115:21800,2116:21805,2117:21811,2118:21816,2119:21821,2120:21826,2121:21832,2122:21837,2123:21842,2124:21847,2125:21853,2126:21858,2127:21863,2128:21868,2129:21874,2130:21879,2131:21884,2132:21889,2133:21895,2134:21900,2135:21905,2136:21910,2137:21914,2138:21919,2139:21924,2140:21929,2141:21933,2142:21938,2143:21943,2144:21948,2145:21952,2146:21957,2147:21962,2148:21967,2149:21971,2150:21976,2151:21981,2152:21986,2153:21990,2154:21995,2155:22000,2156:22005,2157:22010,2158:22014,2159:22019}
    var medida = document.getElementById("regua").value;
    valor = medidatanque[medida];
    var resultado = document.getElementById("result");
    resultado.textContent = valor.toFixed(0)+" Litros";
}

function calcular6() {

    let medidatanque = {20.0:374,20.1:377,20.2:380,20.3:383,20.4:386,20.5:389,20.6:393,20.7:396,20.8:399,20.9:403,21.0:406,21.1:409,21.2:413,21.3:416,21.4:419,21.5:422,21.6:426,21.7:430,21.8:433,21.9:437,22.0:441,22.1:444,22.2:448,22.3:452,22.4:455,22.5:459,22.6:462,22.7:466,22.8:469,22.9:472,23.0:476,23.1:479,23.2:483,23.3:486,23.4:489,23.5:493,23.6:496,23.7:500,23.8:504,23.9:507,24.0:511,24.1:514,24.2:518,24.3:521,24.4:525,24.5:529,24.6:532,24.7:536,24.8:539,24.9:543,25.0:547,25.1:551,25.2:554,25.3:558,25.4:561,25.5:565,25.6:569,25.7:573,25.8:577,25.9:581,26.0:584,26.1:588,26.2:592,26.3:596,26.4:600,26.5:603,26.6:607,26.7:611,26.8:615,26.9:619,27.0:623,27.1:637,27.2:630,27.3:634,27.4:638,27.5:642,27.6:646,27.7:650,27.8:653,27.9:657,28.0:660,28.1:664,28.2:668,28.3:672,28.4:676,28.5:680,28.6:684,28.7:688,28.8:692,28.9:696,29.0:700,29.1:704,29.2:708,29.3:712,29.4:716,29.5:720,29.6:724,29.7:728,29.8:732,29.9:736,30.0:740,30.1:744,30.2:748,30.3:752,30.4:756,30.5:760,30.6:764,30.7:767,30.8:771,30.9:775,31.0:779,31.1:783,31.2:788,31.3:792,31.4:796,31.5:800,31.6:804,31.7:808,31.8:812,31.9:816,32.0:820,32.1:824,32.2:828,32.3:832,32.4:837,32.5:841,32.6:845,32.7:849,32.8:853,32.9:857,33.0:862,33.1:865,33.2:869,33.3:873,33.4:877,33.5:882,33.6:886,33.7:890,33.8:894,33.9:898,34.0:903,34.1:907,34.2:911,34.3:915,34.4:919,34.5:924,34.6:928,34.7:932,34.8:936,34.9:941,35.0:945,35.1:949,35.2:954,35.3:958,35.4:962,35.5:967,35.6:971,35.7:976,35.8:980,35.9:984,36.0:988,36.1:992,36.2:997,36.3:1001,36.4:1005,36.5:1010,36.6:1014,36.7:1018,36.8:1023,36.9:1028,37.0:1033,37.1:1037,37.2:1042,37.3:1046,37.4:1051,37.5:1056,37.6:1060,37.7:1064,37.8:1068,37.9:1073,38.0:1077,38.1:1082,38.2:1086,38.3:1090,38.4:1095,38.5:1099,38.6:1104,38.7:1108,38.8:1113,38.9:1117,39.0:1122,39.1:1126,39.2:1131,39.3:1136,39.4:1140,39.5:1145,39.6:1149,39.7:1153,39.8:1158,39.9:1162,40.0:1166,40.1:1171,40.2:1176,40.3:1180,40.4:1185,40.5:1190,40.6:1194,40.7:1199,40.8:1203,40.9:1208,41.0:1212,41.1:1216,41.2:1220,41.3:1225,41.4:1229,41.5:1233,41.6:1238,41.7:1243,41.8:1247,41.9:1252,42.0:1257,42.1:1261,42.2:1266,42.3:1271,42.4:1275,42.5:1280,42.6:1284,42.7:1289,42.8:1293,42.9:1298,43.0:1303,43.1:1308,43.2:1313,43.3:1318,43.4:1323,43.5:1328,43.6:1333,43.7:1337,43.8:1342,43.9:1346,44.0:1351,44.1:1355,44.2:1359,44.3:1364,44.4:1369,44.5:1373,44.6:1379,44.7:1383,44.8:1388,44.9:1393,45.0:1398,45.1:1402,45.2:1407,45.3:1411,45.4:1415,45.5:1420,45.6:1424,45.7:1429,45.8:1434,45.9:1439,46.0:1444,46.1:1449,46.2:1454,46.3:1459,46.4:1464,46.5:1469,46.6:1474,46.7:1478,46.8:1483,46.9:1488,47.0:1492,47.1:1497,47.2:1502,47.3:1506,47.4:1511,47.5:1515,47.6:1520,47.7:1525,47.8:1530,47.9:1535,48.0:1539,48.1:1544,48.2:1549,48.3:1554,48.4:1559,48.5:1564,48.6:1569,48.7:1574,48.8:1579,48.9:1584,49.0:1588,49.1:1593,49.2:1597,49.3:1602,49.4:1606,49.5:1611,49.6:1615,49.7:1620,49.8:1625,49.9:1630,50.0:1635,50.1:1640,50.2:1645,50.3:1650,50.4:1655,50.5:1660,50.6:1665,50.7:1670,50.8:1674,50.9:1679,51.0:1684,51.1:1688,51.2:1693,51.3:1698,51.4:1702,51.5:1707,51.6:1712,51.7:1717,51.8:1722,51.9:1727,52.0:1732,52.1:1737,52.2:1742,52.3:1747,52.4:1752,52.5:1756,52.6:1761,52.7:1766,52.8:1771,52.9:1776,53.0:1781,53.1:1786,53.2:1791,53.3:1796,53.4:1801,53.5:1806,53.6:1811,53.7:1816,53.8:1821,53.9:1825,54.0:1830,54.1:1835,54.2:1839,54.3:1844,54.4:1849,54.5:1854,54.6:1858,54.7:1864,54.8:1869,54.9:1874,55.0:1880,55.1:1885,55.2:1890,55.3:1895,55.4:1900,55.5:1906,55.6:1910,55.7:1915,55.8:1920,55.9:1925,56.0:1930,56.1:1935,56.2:1940,56.3:1945,56.4:1950,56.5:1955,56.6:1960,56.7:1965,56.8:1970,56.9:1975,57.0:1980,57.1:1985,57.2:1990,57.3:1995,57.4:2000,57.5:2005,57.6:2010,57.7:2015,57.8:2020,57.9:2025,58.0:2030,58.1:2036,58.2:2040,58.3:2045,58.4:2050,58.5:2055,58.6:2060,58.7:2065,58.8:2071,58.9:2076,59.0:2080,59.1:2086,59.2:2091,59.3:2096,59.4:2101,59.5:2106,59.6:2111,59.7:2117,59.8:2122,59.9:2127,63.0:2282,63.1:2287,63.2:2292,63.3:2297,63.4:2302,63.5:2307,63.6:22313,63.7:2318,63.8:2322,63.9:2327,64.0:2332,64.1:2337,64.2:2342,64.3:2347,64.4:2353,64.5:2358,64.6:2363,64.7:2368,64.8:2374,64.9:2379,65.0:2384,65.1:2389,65.2:2394,65.3:2399,65.4:2404,65.5:2409,65.6:2414,65.7:2419,65.8:2424,65.9:2429,66.0:2434,66.1:2439,66.2:2444,66.3:2450,66.4:2455,66.5:2460,66.6:2466,66.7:2471,66.8:2476,66.9:2481,67.0:2486,67.1:2492,67.2:2497,67.3:2502,67.4:2507,67.5:2513,67.6:2518,67.7:2523,67.8:2528,67.9:2533,68.0:2538,68.1:2543,68.2:2548,68.3:2553,68.4:2558,68.5:2563,68.6:2568,68.7:2573,68.8:2578,68.9:2583,69.0:2588,69.1:2593,69.2:2598,69.3:2603,69.4:2608,69.5:2613,69.6:2618,69.7:2623,69.8:2629,69.9:2634,70.0:2639,70.1:2645,70.2:2650,70.3:2655,70.4:2660,70.5:2666,70.6:2671,70.7:2676,70.8:2681,70.9:2687,71.0:2692,71.1:2697,71.2:2702,71.3:2707,71.4:2712,71.5:2717,71.6:2722,71.7:2728,71.8:2733,71.9:2738,72.0:2744,72.1:2749,72.2:2754,72.3:2760,72.4:2765,72.5:2770,72.6:2776,72.7:2781,72.8:2786,72.9:2791,73.0:2796,73.1:2801,73.2:2806,73.3:2811,73.4:2816,73.5:2821,73.6:2826,73.7:2831,73.8:2837,73.9:2842,74.0:2847,74.1:2852,74.2:2857,74.3:2862,74.4:2867,74.5:2873,74.6:2878,74.7:2883,74.8:2889,74.9:2895,75.0:2900,75.1:2905,75.2:2910,75.3:2916,75.4:2921,75.5:2927,75.6:2932,75.7:22937,75.8:2942,75.9:2948,76.0:2953,76.1:2958,76.2:2963,76.3:2968,76.4:2974,76.5:2979,76.6:2984,76.7:2989,76.8:2995,76.9:3000,77.0:3006,77.1:3011,77.2:3016,77.3:3021,77.4:3026,77.5:3031,77.6:3036,77.7:3042,77.8:3047,77.9:3052,78.0:3057,78.1:3062,78.2:3067,78.3:3072,78.4:3077,78.5:3082,78.6:3087,78.7:3092,78.8:3097,78.9:3102,79.0:3108,79.1:3114,79.2:3119,79.3:3125,79.4:3130,79.5:3136,79.6:3141,79.7:3146,79.8:3152,79.9:3157,80.0:3162,80.1:3167,80.2:3173,80.3:3178,80.4:3183,80.5:3188,80.6:3193,80.7:3198,80.8:3203,80.9:3208,81.0:3213,81.1:3218,81.2:3224,81.3:3229,81.4:3234,81.5:3239,81.6:3244,81.7:3249,81.8:3254,81.9:3259,82.0:3264,82.1:3270,82.2:3275,82.3:3280,82.4:3285,82.5:3290,82.6:3296,82.7:3301,82.8:3307,82.9:3312,83.0:3317,83.1:3323,83.2:3328,83.3:3334,83.4:3339,83.5:3344,83.6:3349,83.7:3355,83.8:3360,83.9:3366,84.0:3371,84.1:3376,84.2:3381,84.3:3387,84.4:3392,84.5:3398,84.6:3403,84.7:3408,84.8:3413,84.9:3419,85.0:3424,85.1:3429,85.2:3434,85.3:3439,85.4:3444,85.5:3450,85.6:3455,85.7:3460,85.8:3465,85.9:3471,86.0:3476,86.1:3482,86.2:3488,86.3:3493,86.4:3498,86.5:3503,86.6:3509,86.7:3514,86.8:3519,86.9:3524,87.0:3529,87.1:3535,87.2:3540,87.3:3544,87.4:3550,87.5:3555,87.6:3560,87.7:3565,87.8:3571,87.9:3576,88.0:3581,88.1:3587,88.2:3592,88.3:3597,88.4:3602,88.5:3607,88.6:3612,88.7:3617,88.8:3623,88.9:3628,89.0:3632,89.1:3638,89.2:3643,89.3:3649,89.4:3654,89.5:3660,89.6:3665,89.7:3670,89.8:3675,89.9:3680,90.0:3686,90.1:3691,90.2:3696,90.3:3701,90.4:3707,90.5:3712,90.6:3718,90.7:3723,90.8:3728,90.9:3733,91.0:3738,91.1:3744,91.2:3748,91.3:3753,91.4:3758,91.5:3763,91.6:37698,91.7:3774,91.8:3779,91.9:3785,92.0:3790,92.1:3796,92.2:3801,92.3:3806,92.4:3811,92.5:3816,92.6:3821,92.7:3826,92.8:3831,92.9:3836,93.0:3841,93.1:3846,93.2:3852,93.3:3857,93.4:3862,93.5:3867,93.6:3872,93.7:3877,93.8:3882,93.9:3887,94.0:3893,94.1:3898,94.2:3904,94.3:3909,94.4:3915,94.5:3920,94.6:3925,94.7:3930,94.8:3936,94.9:3941,95.0:3946,95.1:3951,95.2:3956,95.3:3961,95.4:3966,95.5:3971,95.6:3976,95.7:3981,95.8:3986,95.9:3991,96.0:3996,96.1:4001,96.2:4006,96.3:4011,96.4:4017,96.5:4022,96.6:4027,96.7:4032,96.8:4038,96.9:4043,97.0:4048,97.1:4053,97.2:4057,97.3:4063,97.4:4068,97.5:4072,97.6:4077,97.7:4082,97.8:4087,97.9:4092,98.0:4098,98.1:4103,98.2:4108,98.3:4113,98.4:4118,98.5:4124,98.6:4129,98.7:4133,98.8:4139,98.9:4144,99.0:4159,99.1:4155,99.2:4159,99.3:4164,99.4:4169,99.5:4174,99.6:4179,99.7:4184,99.8:4189,99.9:4194,100.0:4200,100.1:4205,100.2:4211,100.3:4216,100.4:4220,100.5:4225,100.6:4230,100.7:4235,100.8:4240,100.9:4245,101.0:4250,101.1:4254,101.2:4259,101.3:4264,101.4:4270,101.5:4275,101.6:4280,101.7:4285,101.8:4290,101.9:4296,102.0:4301,102.1:4306,102.2:4312,102.3:4317,102.4:4322,102.5:4328,102.6:4333,102.7:4338,102.8:4343,102.9:4348,103.0:4353,103.1:4358,103.2:4363,103.3:4368,103.4:4372,103.5:4377,103.6:4382,103.7:4387,103.8:4391,103.9:4396,104.0:4401,104.1:4406,104.2:4412,104.3:4417,104.4:4422,104.5:4426,104.6:4431,104.7:4436,104.8:4442,104.9:4447,108.0:4599,108.1:4604,108.2:4609,108.3:4614,108.4:4620,108.5:4625,108.6:4630,108.7:4635,108.8:4640,108.9:4646,109.0:4650,109.1:4655,109.2:4660,109.3:4665,109.4:4669,109.5:4674,109.6:4679,109.7:4684,109.8:4689,109.9:4694,110.0:4699,110.1:4704,110.2:4709,110.3:4714,110.4:4719,110.5:4724,110.6:4728,110.7:4732,110.8:4737,110.9:4741,111.0:4746,111.1:4750,111.2:4755,111.3:4760,111.4:4765,111.5:4769,111.6:4775,111.7:4780,111.8:4785,111.9:4790,112.0:4795,112.1:4800,112.2:4805,112.3:4809,112.4:4815,112.5:4819,112.6:4824,112.7:4829,112.8:4833,112.9:4838,113.0:4843,113.1:4847,113.2:4852,113.3:4856,113.4:4861,113.5:4866,113.6:4871,113.7:4876,113.8:4881,113.9:4886,114.0:4890,114.1:4895,114.2:4900,114.3:4905,114.4:4910,114.5:4914,114.6:4919,114.7:4923,114.8:4928,114.9:4933,115.0:4938,115.1:4942,115.2:4947,115.3:4952,115.4:4958,115.5:4962,115.6:4967,115.7:4972,115.8:4977,115.9:4981,116.0:4986,116.1:4990,116.2:4995,116.3:4999,116.4:5004,116.5:5008,116.6:5013,116.7:5017,116.8:5022,116.9:5027,117.0:5032,117.1:5037,117.2:5042,117.3:5047,117.4:5051,117.5:5056,117.6:5061,117.7:5066,117.8:5070,117.9:5075,118.0:5079,118.1:5083,118.2:5088,118.3:5092,118.4:5097,118.5:5102,118.6:5106,118.7:5111,118.8:5115,118.9:5120,119.0:5125,119.1:5129,119.2:5134,119.3:5138,119.4:5143,119.5:5147,119.6:5152,119.7:5156,119.8:5161,119.9:5165,120.0:5169,120.1:5174,120.2:5178,120.3:5183,120.4:5187,120.5:5192,120.6:5196,120.7:5201,120.8:5205,120.9:5210,121.0:5214,121.1:5219,121.2:5224,121.3:5228,121.4:5233,121.5:5238,121.6:5242,121.7:5246,121.8:5251,121.9:5255,122.0:5260,122.1:5264,122.2:5268,122.3:5272,122.4:5276,122.5:5281,122.6:5285,122.7:5290,122.8:5295,122.9:5299,123.0:5304,123.1:5308,123.2:5313,123.3:5318,123.4:5322,123.5:5327,123.6:5331,123.7:5336,123.8:5340,123.9:5344,124.0:5349,124.1:5353,124.2:5357,124.3:5361,124.4:5366,124.5:5370,124.6:5374,124.7:5379,124.8:5383,124.9:5387,125.0:5392,125.1:5396,125.2:5400,125.3:5404,125.4:5408,125.5:5413,125.6:5417,125.7:5421,125.8:5425,125.9:5430,126.0:5434,126.1:5438,126.2:5443,126.3:5447,126.4:5451,126.5:5456,126.6:5460,126.7:5464,126.8:5468,126.9:5472,127.0:5477,127.1:5481,127.2:5485,127.3:5490,127.4:5494,127.5:5499,127.6:5503,127.7:5507,127.8:5511,127.9:5515,128.0:5519,128.1:5524,128.2:5528,128.3:5532,128.4:5536,128.5:5540,128.6:5544,128.7:5548,128.8:5552,128.9:5557,129.0:5560,129.1:5564,129.2:5568,129.3:5572,129.4:5576,129.5:5580,129.6:5584,129.7:5588,129.8:5592,129.9:5596,130.0:5600,130.1:5604,130.2:5608,130.3:5612,130.4:5616,130.5:5620,130.6:5624,130.7:56528,130.8:5632,130.9:5636,131.0:5640,131.1:5644,131.2:5648,131.3:5652,131.4:5656,131.5:5660,131.6:5664,131.7:5668,131.8:5672,131.9:5676,132.0:5680,132.1:5684,132.2:5688,132.3:5692,132.4:5696,132.5:5700,132.6:5704,132.7:5707,132.8:5711,132.9:5715,133.0:5719,133.1:5723,133.2:5726,133.3:5730,133.4:5734,133.5:5738,133.6:5742,133.7:5745,133.8:5749,133.9:5753,134.0:5757,134.1:5761,134.2:5764,134.3:5768,134.4:5772,134.5:5775,134.6:5779,134.7:5783,134.8:5786,134.9:5790,135.0:5794,135.1:5797,135.2:5801,135.3:5805,135.4:5809,135.5:5813,135.6:5817,135.7:5820,135.8:5824,135.9:5828,136.0:5831,136.1:5835,136.2:5838,136.3:5842,136.4:5845,136.5:5849,136.6:5852,136.7:5856,136.8:5860,136.9:5863,137.0:5867,137.1:5870,137.2:5874,137.3:5877,137.4:5880,137.5:5884,137.6:5888,137.7:5891,137.8:5895,137.9:5898,138.0:5902,138.1:5905,138.2:5908,138.3:5912,138.4:5915,138.5:5919,138.6:5922,138.7:5926,138.8:5929,138.9:5933,139.0:5936,139.1:5940,139.2:5943,139.3:5947,139.4:5950,139.5:5953,139.6:5956,139.7:5959,139.8:5963,139.9:5966,140.0:5970,140.1:5973,140.2:5976,140.3:5979,140.4:5983,140.5:5986,140.6:5989,140.7:5992,140.8:5995,140.9:5998,141.0:6002,141.1:6005,141.2:6008,141.3:6011,141.4:6014,141.5:6017,141.6:6020,141.7:6023,141.8:6027,141.9:6030,142.0:6033,142.1:6036,142.2:6040,142.3:6043,142.4:6046,142.5:6049,142.6:6053,142.7:6056,142.8:6059,142.9:6062,143.0:6065,143.1:6068,143.2:6071,143.3:6074,143.4:6077,143.5:6080,143.6:6082,143.7:6085,143.8:6088,143.9:6091,144.0:6094,144.1:6098,144.2:6100,144.3:6103,144.4:6106,144.5:6109,144.6:6112,144.7:6115,144.8:6118,144.9:6121,145.0:6124,145.1:6127,145.2:6130,145.3:6132,145.4:6135,145.5:6138,145.6:6141,145.7:6144,145.8:6147,145.9:6149,146.0:6152,146.1:6155,146.2:6158,146.3:6165,146.4:6167,146.5:6169,146.6:6171,146.7:6173,146.8:6175,146.9:6178,147.0:6181,147.1:6184,147.2:6187,147.3:6190,147.4:6193,147.5:6196,147.6:6199,147.7:6202,147.8:6205,147.9:6208,148.0:6211,148.1:6214,148.2:6217,148.3:6220,148.4:6223,148.5:6226,148.6:6229,148.7:6232,148.8:6235,148.9:6238,149.0:6241,149.1:6244,149.2:6247,149.3:6250,149.4:6253,149.5:6256,149.6:6259,149.7:6262,149.8:6265,149.9:6268,150.0:6271,150.1:6274,150.2:6277,150.3:6280,150.4:6283,150.5:6286,150.6:6289,150.7:6292,150.8:6295,150.9:6298,151.0:6301,151.1:6304,151.2:6307,151.3:6310,151.4:6313,151.5:6316,151.6:6319,151.7:6322,151.8:6325,151.9:6328,152.0:6331,152.1:6334,152.2:6337,152.3:6340,152.4:6343,152.5:6346,152.6:6349,152.7:6352,152.8:6355,152.9:6358}
    var medida = document.getElementById("regua").value;
    valor = medidatanque[medida];
    var resultado = document.getElementById("result");
    resultado.textContent = valor.toFixed(0)+" Litros";
}